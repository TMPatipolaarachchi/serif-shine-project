import { createStart, createMiddleware } from "@tanstack/react-start";

// Load local .env in development so server-side code (createServerFn handlers)
// can read secrets via process.env. We dynamically import to avoid bundling
// `dotenv` into client code.
if (process.env.NODE_ENV !== "production") {
  try {
    // Use a concatenated string to avoid Vite's static import analysis.
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    import("dot" + "env").then((d) => d.config()).catch(() => {});
  } catch (e) {
    // ignore
  }
}

import { renderErrorPage } from "./lib/error-page";

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

export const startInstance = createStart(() => ({
  requestMiddleware: [errorMiddleware],
}));
