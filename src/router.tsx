import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// import.meta.env.BASE_URL is set by Vite from `base` in vite.config.ts.
// Strip trailing slash so router basepath matches its expected shape ("" or "/sub").
const rawBase = import.meta.env.BASE_URL ?? "/";
const basepath = rawBase.replace(/\/$/, "") || "/";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    basepath,
  });

  return router;
};
