import { Handlers, PageProps } from "$fresh/server.ts";
import redirect from "@/utils/redirect.ts";
import { createNote, getNotesByAuthor, Note } from "@/db/models/noteModel.ts";

import { SignedInState } from "@/routes/notes/_middleware.ts";
import { NoteList } from "@/components/NoteList.tsx";

interface Data {
    notes: Note[] | null;
}
export const handler: Handlers<Data, SignedInState> = {
    async GET(_req, ctx) {
        const { user } = ctx.state;

        const notes = await getNotesByAuthor(user.id);

        return await ctx.render({ notes });
    },
    async POST(req, ctx) {
        const { user } = ctx.state;

        // Get the form data from the request
        const form = await req.formData();
        const title = form.get("title") as string;
        const content = form.get("content") as string;
        // Create a new note in the database

        await createNote({ title, content, authorId: user.id });

        return redirect("/notes", 301);
    },
};

export default function MyPage(
    { data: { notes }, state: { user } }: PageProps<Data, SignedInState>,
) {
    return (
        <section class="">
            {notes ? <NoteList notes={notes} /> : <p>Aun no tienes notas</p>}
        </section>
    );
}
