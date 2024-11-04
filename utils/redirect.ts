import { type RedirectStatus, STATUS_CODE } from "@std/http/status";

/**
 * This function is used rather than `Response.redirect()`.
 * `Response.redirect()` will throw if `Response.headers` is modified.
 * `Response.headers` is modified when setting session cookies for Supabase Auth.
 *
 * @param location A relative (to the request URL) or absolute URL.
 * @param status HTTP status
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Location}
 */
export default function redirect(
    location: string,
    status: typeof STATUS_CODE.Created | RedirectStatus = STATUS_CODE.SeeOther,
) {
    return new Response(null, {
        headers: {
            location,
        },
        status,
    });
}
