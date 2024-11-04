import type { Plugin } from "$fresh/server.ts";
import { handleCallback, signIn, signOut } from "@/utils/kvOauthHelpers.ts";

import { createOrUpdateUser } from "@/db/models/userModel.ts";

export default {
    name: "kv-oauth",
    routes: [
        {
            path: "/auth/signin",
            async handler(req) {
                return await signIn(req);
            },
        },
        {
            path: "/auth/callback",
            async handler(req) {
                // Return object also includes `accessToken` and `sessionId` properties.
                const { response, tokens, sessionId } = await handleCallback(
                    req,
                );

                await createOrUpdateUser(tokens.accessToken, sessionId);

                return response;
            },
        },
        {
            path: "/auth/signout",
            async handler(req) {
                return await signOut(req);
            },
        },
    ],
} as Plugin;
