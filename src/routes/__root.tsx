import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Link,
} from "@tanstack/react-router";

import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { SupportFab } from "@/components/site/SupportFab";

function NotFoundComponent() {
  return (
    <div className="min-h-screen grid place-items-center bg-hero px-4">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-gradient">404</h1>
        <p className="mt-4 text-muted-foreground">This stream went off the air.</p>
        <Link to="/" className="mt-8 inline-block bg-brand px-6 py-3 rounded-xl font-semibold">
          Back home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="min-h-screen grid place-items-center bg-hero px-4">
      <div className="text-center max-w-md">
        <h1 className="text-2xl font-bold">Something disconnected</h1>
        <p className="mt-2 text-muted-foreground">{error.message}</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 bg-brand px-6 py-3 rounded-xl font-semibold"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { title: "HeavenCast — Premium Streaming Devices & Smart Entertainment" },
      { name: "description", content: "Stream movies, live TV, sports and more on the smartest entertainment ecosystem built for modern homes." },
      { property: "og:title", content: "HeavenCast — Premium Streaming Devices" },
      { property: "og:description", content: "One powerful platform. Unlimited streaming." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <HeadContent />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-24">
          <Outlet />
        </main>
        <Footer />
        <SupportFab />
      </div>
    </QueryClientProvider>
  );
}
