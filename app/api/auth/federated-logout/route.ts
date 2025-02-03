import jwt from "next-auth/jwt"
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
  ){
  try {
    const token = await jwt.getToken({req})
    if (!token) {
      console.log("No JWT token found when calling /federated-logout endpoint")
      return res.redirect("/")
    }
    if (!token.idToken)
     console.log("Without an id_token the user won't be redirected back from the IdP after logout.")

    console.log(token)
    // const endsessionURL = `https://${process.env.PROVIDER_DOMAIN}/connect/endsession`

    // const endsessionParams = new URLSearchParams({
    //   id_token_hint: token.idToken,
    //   post_logout_redirect_uri: process.env.NEXTAUTH_URL,
    // })
    // return res.redirect(`${endsessionURL}?${endsessionParams}`)

  } catch (error) {
    console.log(error)
    res.redirect("/")
  }
}

export { handler as GET, handler as POST}