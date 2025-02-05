"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/shadcn-ui/button"

export const SignInButton = () => {
  return (
	<Button 
		onClick={() => signIn('spotify', { callbackUrl: '/dashboard' })}
	>
		Log in!
	</Button>
	);
};