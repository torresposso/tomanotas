export const kv = await Deno.openKv();

export const keys = {
    usersByEmailKey: "users_by_email",
    userBySessionIdKey: "users_by_session_id",
    notesByIdKey: "notes_by_id",
    notesByUserIdKey: "notes_by_user_id",
} as const;
