import { FreshContext } from "$fresh/server.ts";
import { getUserBySession, UserEntity } from "@/utils/db.ts";
import { getSessionId } from "@/utils/kvOauthHelpers.ts";

export interface State {
    sessionId?: string;
    user?: UserEntity;
}

export async function handler(
    req: Request,
    ctx: FreshContext<State>,
) {
    const sessionId = await getSessionId(req);
    ctx.state.sessionId = sessionId;

    if (sessionId) {
        const user = await getUserBySession(sessionId);
        if (user) ctx.state.user = user;
    }
    return await ctx.next();
}
