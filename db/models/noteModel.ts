import { ulid } from "@std/ulid/ulid";

import { keys, kv } from "@/db/kv.ts";
import { z } from "zod";

export const noteSchema = z.object({
    id: z.string(),
    title: z.string(),
    content: z.string(),
    authorId: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
});

export type Note = z.infer<typeof noteSchema>;

export async function createNote(
    note: Pick<Note, "title" | "content" | "authorId">,
) {
    const newNote: Note = {
        ...note,
        id: ulid(),
        updatedAt: new Date(),
        createdAt: new Date(),
    };

    const notesById = [keys.notesByIdKey, newNote.id];
    const notesByAuthor = [
        keys.notesByUserIdKey,
        newNote.authorId,
        newNote.id,
    ];

    const res = await kv.atomic()
        .check({ key: notesById, versionstamp: null })
        .check({ key: notesByAuthor, versionstamp: null })
        .set(notesById, newNote)
        .set(notesByAuthor, newNote)
        .commit();

    if (!res.ok) throw new Error(`Failed to create note: ${note.title}`);
    return newNote;
}

export async function updateNoteById(note: Note) {
    const notesById = [keys.notesByIdKey, note.id];
    const notesByAuthor = [
        keys.notesByUserIdKey,
        note.authorId,
        note.id,
    ];

    await kv.atomic()
        .set(notesById, note)
        .set(notesByAuthor, note)
        .commit();
}

export async function deleteNoteById(note: Note) {
    const notesById = [keys.notesByIdKey, note.id];
    const notesByAuthor = [
        keys.notesByUserIdKey,
        note.authorId,
        note.id,
    ];

    const res = await kv.atomic()
        .delete(notesById)
        .delete(notesByAuthor)
        .commit();

    if (!res.ok) throw new Error(`Failed to delete short: ${note.title}`);
}

export async function getNoteById(noteId: string) {
    const notesById = [keys.notesByIdKey, noteId];
    const resp = await kv.get<Note>(notesById);
    return resp.value;
}

export async function getNotesByAuthor(authorId: string) {
    const iter = kv.list<Note>({
        prefix: [keys.notesByUserIdKey, authorId],
    });

    const notes = [];
    for await (const res of iter) {
        notes.push(res.value as Note);
    }

    return notes;
}
