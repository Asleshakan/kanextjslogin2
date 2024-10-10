

import { handleAuth, handleLogout } from '@auth0/nextjs-auth0'

export const GET = handleAuth({
  logout: handleLogout({ returnTo: 'https://calm-stone-0060af810.5.azurestaticapps.net/api/auth/login' }),
})
