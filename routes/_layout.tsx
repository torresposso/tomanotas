import { PageProps } from "$fresh/server.ts";
import Navbar from "@/islands/Navbar2.tsx";
import Footer from "@/components/Footer.tsx";
import { State } from "@/routes/_middleware.ts";

export default function Layout(
    { Component, state }: PageProps<any, State>,
) {
    return (
        <div class="mx-auto max-w-2xl flex flex-col h-screen border rounded-2xl z-100 overflow-hidden">
            <div class="flex-none">
                <Navbar user={state.user} />
            </div>
            <div class="flex-grow overflow-y-auto hide-scrollbar">
                <Component />
            </div>
            <div class="flex-none">
                <Footer />
            </div>
        </div>
    );
}
