import { Note } from "@/db/models/noteModel.ts";

function NoteItem({ note }: { note: Note }) {
    return (
        <div class="p-4 border border-slate-400 hover:bg-slate-900/50">
            <div class="text-xl">{note.title}</div>
            <div class="text-gray-500">{note.content}</div>
        </div>
    );
}

export function NoteList({ notes }: { notes: Note[] }) {
    return (
        <div class="grid grid-cols-2 gap-5 p-5 h-full ">
            {notes.map((note) => <NoteItem note={note} />)}
        </div>
    );
}
