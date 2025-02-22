// <define:__ROUTES__>
var define_ROUTES_default = { version: 1, description: "Built with @cloudflare/next-on-pages@1.13.8.", include: ["/*"], exclude: ["/_next/static/*"] };

// node_modules/wrangler/templates/pages-dev-pipeline.ts
import worker from "/Users/allyshipgloballtd/Documents/cursorfiles/AllyshipGlobalLtd-1/.wrangler/tmp/pages-3FJCs6/bundledWorker-0.8330414394578152.mjs";
import { isRoutingRuleMatch } from "/Users/allyshipgloballtd/Documents/cursorfiles/AllyshipGlobalLtd-1/node_modules/wrangler/templates/pages-dev-util.ts";
export * from "/Users/allyshipgloballtd/Documents/cursorfiles/AllyshipGlobalLtd-1/.wrangler/tmp/pages-3FJCs6/bundledWorker-0.8330414394578152.mjs";
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        if (worker.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return worker.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};
export {
  pages_dev_pipeline_default as default
};
//# sourceMappingURL=15auv335of.js.map
