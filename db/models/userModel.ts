import { assert } from "@std/assert";
import { encodeBase64 } from "jsr:@std/encoding@^0.221.0/base64";
import { keys, kv } from "@/db/kv.ts";
import { z } from "zod";

export const userSchema = z.object({
    id: z.string(),
    sessionId: z.string(),
    name: z.string(),
    picture: z.string(),
    email: z.string().email(),
    createdAt: z.date(),
    lastLogin: z.date().optional(),
    notes: z.string().array().optional(),
});

export type User = z.infer<typeof userSchema>;

export interface GoogleCredentials {
    id: string;
    name: string;
    picture: string;
    email: string;
}

async function saveNewUser(
    user: GoogleCredentials,
    sessionId: string,
) {
    // Fetch the user's picture from Google and encode it as base64.
    const base64Picture = encodeBase64(
        new Uint8Array(
            await (await fetch(user.picture)).arrayBuffer(),
        ),
    );

    // Create a new user object with the base64 picture and the sessionId.
    const newUser = {
        ...user,
        sessionId,
        picture: base64Picture,
        createdAt: new Date(),
        updatedAt: new Date(),
        notes: [""],
    };

    const createdUser = await createUser(newUser, sessionId);

    if (createdUser.ok) {
        return newUser;
    }
    return null;
}

export async function getUserByEmail(email: string) {
    const resp = await kv.get<User>([keys.usersByEmailKey, email]);
    return resp.value;
}

export async function getUserBySessionId(
    sessionId: string,
): Promise<User> {
    const resp = await kv.get<User>([keys.userBySessionIdKey, sessionId]);
    assert(resp.value, `No user found for sessionId: ${sessionId}`);
    return resp.value;
}

const createUser = async (newUser: User, sessionId: string) =>
    await kv.atomic()
        .check({
            key: [keys.usersByEmailKey, newUser.email],
            versionstamp: null,
        })
        .check({
            key: [keys.userBySessionIdKey, sessionId],
            versionstamp: null,
        })
        .set([keys.usersByEmailKey, newUser.email], newUser)
        .set([keys.userBySessionIdKey, sessionId], newUser)
        .commit();

const updateUser = async (user: User) =>
    await kv.atomic()
        .set([keys.usersByEmailKey, user.email], user)
        .set([keys.userBySessionIdKey, user.sessionId], user)
        .commit();

const deleteUser = async (email: string, sessionId: string) =>
    await kv.atomic()
        .delete([keys.usersByEmailKey, email])
        .delete([keys.userBySessionIdKey, sessionId])
        .commit();

export const createOrUpdateUser = async (
    accessToken: string,
    sessionId: string,
): Promise<User | null> => {
    const userInfo = await (await fetch(
        "https://www.googleapis.com/oauth2/v2/userinfo",
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        },
    )).json() as GoogleCredentials;
    console.log("userInfo", userInfo);

    const existingUser = await getUserByEmail(userInfo.email);

    if (existingUser) {
        const updatedUser: User = {
            ...existingUser,
            sessionId,
            lastLogin: new Date(),
        };

        await deleteUser(existingUser.email, existingUser.sessionId);
        await updateUser(updatedUser);

        return updatedUser;
    }

    return await saveNewUser(userInfo, sessionId);
};
