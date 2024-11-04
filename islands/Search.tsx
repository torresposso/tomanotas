import { useState } from "preact/hooks";
import IconNotes from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/notes.tsx";
import IconFileSearch from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/file-search.tsx";
import { User } from "@/db/models/userModel.ts";

interface NavbarProps {
    user?: User;
}

export default function Search({ user }: NavbarProps) {
    const [isToggleOpen, setIsToggleOpen] = useState(false);

    return (
        <div class="">
            <a
                href="/"
                class="flex items-end"
            >
                <IconFileSearch class="w-6 h-6" />
                <div class="ml-2 text-sm">
                    Buscar nota
                </div>
            </a>
        </div>
    );
}
