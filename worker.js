// Minimal Worker script that defers all requests to static assets.
// Required because the Cloudflare dashboard has an ASSETS binding configured,
// which is incompatible with an "assets-only" Worker (no main script).
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
