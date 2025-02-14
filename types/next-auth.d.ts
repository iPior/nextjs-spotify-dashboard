import NextAuth from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      accessToken: string;
      refreshToken: string;
    } & DefaultSession["user"];
  }
  
}

declare module "next-auth/jwt" {
  interface jwt {
    accessToken?: string
    refreshToken?: string
    accessTokenExpires?: number
  }
}