// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $_middleware from "./routes/_middleware.ts";
import * as $index from "./routes/index.tsx";
import * as $notes_id_middleware from "./routes/notes/[id]/_middleware.ts";
import * as $notes_id_edit from "./routes/notes/[id]/edit.tsx";
import * as $notes_id_index from "./routes/notes/[id]/index.tsx";
import * as $notes_middleware from "./routes/notes/_middleware.ts";
import * as $notes_index from "./routes/notes/index.tsx";
import * as $Navbar from "./islands/Navbar.tsx";
import * as $Navbar2 from "./islands/Navbar2.tsx";
import * as $Search from "./islands/Search.tsx";
import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/_middleware.ts": $_middleware,
    "./routes/index.tsx": $index,
    "./routes/notes/[id]/_middleware.ts": $notes_id_middleware,
    "./routes/notes/[id]/edit.tsx": $notes_id_edit,
    "./routes/notes/[id]/index.tsx": $notes_id_index,
    "./routes/notes/_middleware.ts": $notes_middleware,
    "./routes/notes/index.tsx": $notes_index,
  },
  islands: {
    "./islands/Navbar.tsx": $Navbar,
    "./islands/Navbar2.tsx": $Navbar2,
    "./islands/Search.tsx": $Search,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
