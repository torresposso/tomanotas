import IconNotes from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/notes.tsx";
import IconNotebook from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/notebook.tsx";

export default function Footer() {
    return (
        <footer class="flex items-center justify-around bg-slate-800 text-white pt-4 pb-8">
            <div class="flex  flex-col justify-center items-center  w-1/5 px-2 py-2">
                <button className="flex flex-col items-center justify-center gap-2 whitespace-nowrap rounded  px-6 text-sm font-medium tracking-wide text-slate-400 transition duration-300  hover:text-slate-600  focus:text-slate-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-300 disabled:text-slate-300 disabled:shadow-none">
                    <IconNotes class="w-6 h-6" />
                    <span>Note</span>
                </button>
            </div>

            <div class=" justify-center items-center  w-1/5 px-2 py-2">
                <button className="flex flex-col items-center justify-center gap-2 whitespace-nowrap rounded  px-6 text-sm font-medium tracking-wide text-slate-400 transition duration-300  hover:text-slate-600  focus:text-slate-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-300 disabled:text-slate-300 disabled:shadow-none">
                    <IconNotebook class="w-6 h-6" />
                    <span>Notebook</span>
                </button>
            </div>
        </footer>
    );
}
