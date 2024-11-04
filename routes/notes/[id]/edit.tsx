import { StateWithNote } from "./_middleware.ts";
import { Handlers, PageProps } from "$fresh/server.ts";

import redirect from "@/utils/redirect.ts";
import { updateNoteById } from "@/db/models/noteModel.ts";

// deno-lint-ignore no-explicit-any
export const handler: Handlers<any, StateWithNote> = {
    async POST(req, ctx) {
        const form = await req.formData();
        const title = form.get("title") as string;
        console.log("titulo editado", title);
        const content = form.get("content") as string;
        const updatedNote = {
            ...ctx.state.note,
            title,
            content,
        };

        await updateNoteById(updatedNote);
        return redirect(`/notes/${ctx.state.note.id}`);
    },
};

// deno-lint-ignore no-explicit-any
export default function Page({ state }: PageProps<any, StateWithNote>) {
    const { note } = state;
    return (
        <form method="POST" action={`/notes/${note.id}/edit`}>
            <div>
                <input
                    type="text"
                    name="title"
                    class="px-3 py-2 bg-white rounded border(yellow-500 2)"
                    value={note.title}
                />
                <input
                    type="text"
                    name="content"
                    class="px-3 py-2 bg-white rounded border(yellow-500 2)"
                    value={note.content}
                />
            </div>

            <button
                type="submit"
                class="mt-3 px-3 py-2 bg-yellow-200 text-yellow-800 rounded hover:bg-yellow-300 active:bg-yellow-400"
            >
                Short me
            </button>
        </form>
    );
}
