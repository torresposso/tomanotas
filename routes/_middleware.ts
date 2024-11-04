import { FreshContext } from "$fresh/server.ts";

import { getSessionId } from "@/utils/kvOauthHelpers.ts";
import { getUserBySessionId, User } from "@/db/models/userModel.ts";

export interface State {
    sessionId?: string;
    user?: User;
}

export async function handler(
    req: Request,
    ctx: FreshContext<State, any>,
) {
    if (ctx.destination !== "route") return ctx.next();
    const sessionId = await getSessionId(req);

    if (sessionId) {
        const user = await getUserBySessionId(sessionId);
        ctx.state.sessionId = sessionId;
        ctx.state.user = user;
    }

    return await ctx.next();
}
