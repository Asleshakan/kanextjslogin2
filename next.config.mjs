/** @type {import('next').NextConfig} */
const nextConfig = {
    publicRuntimeConfig: {
      auth0: {
        session: {
          cookie: {
            transient: true, // Ensures cookies are not persistent
            httpOnly: true,
            sameSite: 'Lax', // Ensures the cookie is not accessible in cross-site contexts
            secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
          },
        },
      },
    },
  };
  
  export default nextConfig;
  
