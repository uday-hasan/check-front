import { cookies, headers } from "next/headers";
import { toast } from "react-toastify";

export const userService = {
  //  If you are looking for admin's get all user logic it's not here, go to admin/@content/all-users/page.tsx
  getSession: async function () {
    try {
      // const cookieStore = await cookies();
      const reqHeaders = await headers();
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_AUTH_URL}/get-session`,
        {
          headers: reqHeaders,
          cache: "no-store",
        },
      );
      const session = await res.json();

    if (!session) {
      return {data: null, error: {message: "Session not found"}};
    }

    return {data: session, error: null};

    } catch (error) {
        console.log(error)
      return {data: null, error: error}
    }
  },

  logout: async function () {
    try {
      const cookieStore = await cookies();
      await fetch(`${process.env.NEXT_PUBLIC_AUTH_URL}/logout`, {
        method: "POST",
        headers: {
          cookie: cookieStore.toString(),
        },
        cache: "no-store",
        credentials: "include"
      });
    } catch (error) {
      console.log(error);
    }
  },
};
