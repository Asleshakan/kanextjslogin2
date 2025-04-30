//pages/api/logout-oidc.ts

import { getSession, handleLogout } from '@auth0/nextjs-auth0'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const session = await getSession(req, res)
    console.log({ session })

    const logoutUrl = `${process.env.AUTH0_ISSUER_BASE_URL}/oidc/logout?clientId=${process.env.AUTH0_CLIENT_ID}&logout_hint=${session?.user.sid}`

    await fetch(logoutUrl, {
      method: 'GET'
    })

    return res.status(200).json({ message: 'Logged out successfully' })
  }
}

export default handler
