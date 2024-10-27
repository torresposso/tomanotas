import { Handlers, PageProps } from "$fresh/server.ts";

import IconBrandGoogleFilled from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/brand-google-filled.tsx";
import { State } from "./_middleware.ts";

// deno-lint-ignore no-explicit-any
export const handler: Handlers<any, State> = {
  GET(_req, ctx) {
    return ctx.render({ ...ctx.state });
  },
};

export default function Home(props: PageProps) {
  return (
    <div class="px-4 py-8 mx-auto">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center gap-2">
        <div class="w-40">
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
            <path fill="#fff" d="m41.5 21.4l-15.8 5.9l-2.2-6.3l15.8-5.8z" />
          </svg>
        </div>
        <h1 class="text-3xl font-bold mt-5">
          Toma<span class="text-yellow-500">Notas</span>
        </h1>
        <p class="my-5 text-xl">
          Piensa. Escribe. Logra
        </p>
        {props.data.sessionId
          ? (
            <>
              <form method="POST">
                <input
                  type="text"
                  name="original"
                  class="px-3 py-2 bg-white rounded border(yellow-500 2)"
                  placeholder="Come on..."
                />
                <button
                  type="submit"
                  class="mt-3 px-3 py-2 bg-yellow-200 text-yellow-800 rounded hover:bg-yellow-300 active:bg-yellow-400"
                >
                  Short me
                </button>
              </form>
            </>
          )
          : (
            <a
              href="/auth/signin"
              class="bg-[#42ADE2] hover:bg-gray-700 text-yellow-50 font-semibold py-2 px-4 rounded-md shadow-md flex items-center"
            >
              <IconBrandGoogleFilled class="w-6 h-6 inline-block mr-2" />
              Inicia Sesión con tu cuenta Google
            </a>
          )}
      </div>
    </div>
  );
}
