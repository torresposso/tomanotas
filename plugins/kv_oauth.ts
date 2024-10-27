import type { Plugin } from "$fresh/server.ts";
import { handleCallback, signIn, signOut } from "@/utils/kvOauthHelpers.ts";

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
                const { response } = await handleCallback(req);
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
