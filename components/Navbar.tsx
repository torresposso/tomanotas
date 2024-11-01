import IconNotes from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/notes.tsx";

interface NavbarProps {
  sessionId?: string;
}

export function Navbar({ sessionId }: NavbarProps) {
  return (
    <header class="bg-white">
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center ">
          <div class="flex items-center flex-1">
            <a href="/" class="flex items-center">
              <IconNotes />
              <div class="ml-1">
                <span>Toma</span>
                <span class="font-bold text-yellow-500">Notas</span>
              </div>
            </a>
          </div>

          <div>
            <nav aria-label="Global">
              <ul class="flex items-center gap-6 text-sm">
                {sessionId
                  ? (
                    <>
                      <a
                        class="font-bold transition hover:text-yellow-500"
                        href="/notas"
                      >
                        Mis notas
                      </a>
                      <a
                        class="transition hover:text-yellow-500"
                        href="/auth/signout"
                      >
                        Cerrar Sesión
                      </a>
                    </>
                  )
                  : (
                    <a
                      class="transition hover:text-yellow-500"
                      href="/auth/signin"
                    >
                      Inicia Sesión
                    </a>
                  )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
