import { PageProps } from "$fresh/server.ts";

import { SignedInWithNote } from "@/routes/notes/[id]/_middleware.ts";

// deno-lint-ignore no-explicit-any
export default function Page(
    { state: { note } }: PageProps<any, SignedInWithNote>,
) {
    return (
        <main class="px-4 mx-auto max-w-screen-md">
            <h1 class="text-4xl font-bold">{note.title}</h1>
            <p class="mt-4">{note.content}</p>
        </main>
    );
}
