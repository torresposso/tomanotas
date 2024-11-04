import { FreshContext } from "$fresh/server.ts";

import redirect from "@/utils/redirect.ts";

import { getNoteById, Note } from "@/db/models/noteModel.ts";

import { SignedInState } from "@/routes/notes/_middleware.ts";

export interface SignedInWithNote extends SignedInState {
    note: Note;
}

export async function handler(
    _req: Request,
    ctx: FreshContext<SignedInWithNote>,
) {
    console.log("THIRD MIDDLEWARE /notes/:id");

    const note = await getNoteById(ctx.params.id);
    if (!note) return await ctx.renderNotFound();
    if (note.authorId !== ctx.state.user.id) return redirect("/nosepuede");

    ctx.state.note = note;

    return await ctx.next();
}
