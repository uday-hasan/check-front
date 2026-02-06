import { inferAdditionalFields } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";
// export const authClient = createAuthClient({
//     baseURL: `${process.env.NEXT_PUBLIC_API_URL}`
// })

// export const authClient = createAuthClient({
//   baseURL: typeof window !== "undefined" ? window.location.origin : "",
//   fetchOptions: {
//     credentials: "include",
//   },
// });

// export const authClient = createAuthClient({
//   baseURL: process.env.NEXT_PUBLIC_AUTH_URL!,
//   fetchOptions: {
//     credentials: "include",
//   },
// });

export const authClient = createAuthClient({
  baseURL: "https://medi-store-server-tau.vercel.app",
  plugins: [
    inferAdditionalFields({
      user: { role: { type: "string" } },
    }),
  ],
});
