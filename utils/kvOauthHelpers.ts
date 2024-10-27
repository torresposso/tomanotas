import { createGoogleOAuthConfig, createHelpers } from "@deno/kv-oauth";
import "$std/dotenv/load.ts";

// This checks if we are running on Deno Deploy (in production)
const isDenoDeploy = Deno.env.get("DENO_DEPLOYMENT_ID") !== undefined;

const { signIn, handleCallback, signOut, getSessionId } = createHelpers(
    createGoogleOAuthConfig({
        redirectUri: isDenoDeploy
            ? "https://tomanotas.deno.dev/auth/callback"
            : "http://localhost:8000/auth/callback",
        scope: [
            "https://www.googleapis.com/auth/userinfo.email",
            "https://www.googleapis.com/auth/userinfo.profile",
        ],
    }),
);

export { getSessionId, handleCallback, signIn, signOut };
