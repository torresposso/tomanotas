import { useState } from "preact/hooks";
import IconNotes from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/notes.tsx";
import IconFileSearch from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/file-search.tsx";
import { User } from "@/db/models/userModel.ts";
import Search from "@/islands/Search.tsx";

interface NavbarProps {
    user?: User;
}

export default function Navbar({ user }: NavbarProps) {
    const [isToggleOpen, setIsToggleOpen] = useState(false);

    return (
        <header class="flex flex-col justify-between bg-slate-800">
            <div class="flex items-center p-4">
                <a
                    href="/"
                    class="flex items-center text-2xl"
                >
                    <div class="w-8">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 64 64"
                        >
                            <path
                                fill="#3e4347"
                                d="m41.2 3.4l-26.1 7.5l-4.1 1.2c-3 .9-3.2 2.6-2.4 5.6l11.3 41.1c.8 3 1.6 3.5 4.7 2.6l4.1-1.2l26.1-7.5c3-.9 4.8-4 4-7.1L48.2 7.4c-.8-3.1-4-4.8-7-4"
                            />
                            <path
                                fill="#d0d0d0"
                                d="m39 2.8l-25.8 8.5l-4.1 1.3c-3 1-3.1 2.7-2.2 5.7l13 40.6c1 3 1.8 3.4 4.8 2.4l4.1-1.3l25.8-8.5c3-1 4.7-4.2 3.7-7.2L46.2 6.5c-1-3-4.2-4.6-7.2-3.7"
                            />
                            <path
                                fill="#42ade2"
                                d="m37.1 2.4l-25.5 9.4L28.8 60l25.5-9.4c3-1.1 4.5-4.4 3.4-7.4L44.4 5.7c-1-2.9-4.3-4.4-7.3-3.3"
                            />
                            <path
                                fill="#3e4347"
                                d="M7.6 13.3c-3 1.1-3 2.8-2 5.8L20 59.2c1.1 3 1.9 3.4 4.9 2.3l4-1.5l-17.3-48.2z"
                            />
                            <path
                                fill="#fff"
                                d="m41.5 21.4l-15.8 5.9l-2.2-6.3l15.8-5.8z"
                            />
                        </svg>
                    </div>
                    <div class="ml-1">
                        <span class="text-slate-100">Toma</span>
                        <span class="font-bold text-yellow-500">
                            Notas
                        </span>
                    </div>
                </a>
            </div>
            <div class="flex items-end justify-between px-4 py-2">
                <Search />
                <div>
                    <img
                        src={`data:image/jpeg;base64,${user?.picture}`}
                        alt="user name"
                        title="user name"
                        width="40"
                        height="40"
                        className="max-w-full rounded-full border-2 border-yellow-500 shadow-sm"
                    />
                </div>
            </div>
        </header>
    );
}
