import { FreshContext } from "$fresh/server.ts";

import { getSessionId } from "@/utils/kvOauthHelpers.ts";
import redirect from "@/utils/redirect.ts";
import { State } from "@/routes/_middleware.ts";
import { User } from "@/db/models/userModel.ts";

export interface SignedInState extends State {
    sessionId: string;
    user: User;
}

export async function handler(
    req: Request,
    ctx: FreshContext<SignedInState>,
) {
    console.log("SECOND MIDDLEWARE /notes");
    const sessionId = await getSessionId(req);
    if (!sessionId) {
        console.log("no sessionId in SECOND MIDDLEWARE /notes");
        return redirect("/");
    }

    return await ctx.next();
}
