import { useState } from "preact/hooks";
import IconNotes from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/notes.tsx";
import IconFileSearch from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/file-search.tsx";
import { User } from "@/db/models/userModel.ts";

interface NavbarProps {
    user?: User;
}

export default function Navbar({ user }: NavbarProps) {
    const [isToggleOpen, setIsToggleOpen] = useState(false);

    return (
        <>
            <header className="relative z-20 w-full border-b shadow-lg  border-slate-600 bg-slate-700  shadow-slate-700/5 after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-slate-600 after:backdrop-blur-xl ">
                <div className="relative mx-auto max-w-full lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem] px-2">
                    <div class="flex items-center p-4">
                        <a
                            href="/"
                            class="flex items-center text-2xl"
                        >
                            <IconNotes class="text-slate-100" />
                            <div class="ml-1">
                                <span class="text-slate-100">Toma</span>
                                <span class="font-bold text-yellow-500">
                                    Notas
                                </span>
                            </div>
                        </a>
                    </div>
                    <nav
                        aria-label="main navigation"
                        className="flex items-stretch justify-between  text-slate-400 border rounded-t-lg border-b-0 border-slate-500 "
                        role="navigation"
                    >
                        <div class="flex items-center h-full">
                            <a
                                href="/"
                                class="flex items-center p-4"
                            >
                                <IconFileSearch class="w-6 h-6" />
                                <div class="ml-1 text-sm">
                                    Buscar
                                </div>
                            </a>
                        </div>
                        <div class="flex items-center px-2">
                            {user
                                ? (
                                    <>
                                        <button
                                            className={`relative order-10 block h-10 w-10 self-center ${
                                                isToggleOpen
                                                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0"
                                                    : ""
                                            }`}
                                            onClick={() =>
                                                setIsToggleOpen(!isToggleOpen)}
                                            aria-expanded={isToggleOpen
                                                ? "true"
                                                : "false"}
                                            aria-label="Toggle navigation"
                                        >
                                            <div className="flex items-center">
                                                <a
                                                    href="#"
                                                    className="relative inline-flex items-center justify-center w-10 h-10 text-white rounded-full"
                                                >
                                                    <img
                                                        src={`data:image/jpeg;base64,${user?.picture}`}
                                                        alt="user name"
                                                        title="user name"
                                                        width="40"
                                                        height="40"
                                                        className="max-w-full rounded-full border-2 border-yellow-500 shadow-sm"
                                                    />

                                                    {
                                                        /* <span className="absolute bottom-0 right-0 inline-flex items-center justify-center gap-1 p-1 text-sm text-white bg-pink-500 border-2 border-white rounded-full">
                                                        <span className="sr-only">
                                                            7 new emails
                                                        </span>
                                                    </span> */
                                                    }
                                                </a>
                                            </div>
                                        </button>

                                        {

                                                <div className="p-4 ">
                                                    <ul
                                                        role="menubar"
                                                        aria-label="Select page"
                                                        className={` border w-full h-screen   ${
                                                            isToggleOpen
                                                                ? "visible opacity-100 backdrop-blur-sm"
                                                                : "invisible opacity-0"
                                                        }`}
                                                    >
                                                        <div class="">
                                                            <li class="border-red-500 border">
                                                                Mis notas
                                                            </li>
                                                        </div>
                                                    </ul>
                                                </div>


                                            /* <ul
                                            role="menubar"
                                            aria-label="Select page"
                                            className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-slate-700 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 ${
                                                isToggleOpen
                                                    ? "visible opacity-100 backdrop-blur-sm"
                                                    : "invisible opacity-0"
                                            }`}
                                        >
                                            <li
                                                role="none"
                                                className="flex items-stretch"
                                            >
                                                <a
                                                    role="menuitem"
                                                    aria-haspopup="false"
                                                    className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                                                    href="/notes"
                                                >
                                                    <span>Mis Notas</span>
                                                </a>
                                            </li>
                                            <li
                                                role="none"
                                                className="flex items-stretch"
                                            >
                                                <a
                                                    role="menuitem"
                                                    aria-current="page"
                                                    aria-haspopup="false"
                                                    className="flex items-center gap-2 py-4 transition-colors duration-300 text-emerald-500 hover:text-emerald-600 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                                                    href="javascript:void(0)"
                                                >
                                                    <span>Planning</span>
                                                </a>
                                            </li>
                                            <li
                                                role="none"
                                                className="flex items-stretch"
                                            >
                                                <a
                                                    role="menuitem"
                                                    aria-haspopup="false"
                                                    className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                                                    href="/auth/signout"
                                                >
                                                    <span>Salir</span>
                                                </a>
                                            </li>
                                        </ul> */
                                        }
                                    </>
                                )
                                : (
                                    <div>
                                        <a href="/auth/signin">Inicia Sesión</a>
                                    </div>
                                )}
                        </div>
                    </nav>
                </div>
            </header>
            {/*<!-- End Navbar with Avatar--> */}
        </>
    );
}
