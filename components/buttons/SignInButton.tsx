"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/shadcn-ui/button"

export const SignInButton = () => {
  return (
	<Button 
		onClick={() => signIn('spotify', { callbackUrl: '/dashboard' })}
    	className="w-2/3 lg:w-1/4 text-uppercase"
    	variant={"default"}
	>
		Log in!
	</Button>
	);
};