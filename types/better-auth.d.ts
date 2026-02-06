import "better-auth";

declare module "better-auth" {
  interface User {
    role?: "CUSTOMER" | "SELLER" | "ADMIN";
  }

  interface EmailSignUpOptions {
    role?: "CUSTOMER" | "SELLER";
  }
}
