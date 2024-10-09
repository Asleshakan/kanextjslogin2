'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        {user ? (
          <div>
            <h2>Welcome, {user.name}!</h2>
            <img src={user.picture} alt={user.name} width={50} height={50} />
            <p>Email: {user.email}</p>
            <a href="/api/auth/logout" className={styles.primary}>
              Logout
            </a>
          </div>
        ) : (
          <div>
            <h2>Welcome to the Next.js App</h2>
            <p>You are not logged in.</p>
            <a href="/api/auth/login" className={styles.primary}>
              Login
            </a>
          </div>
        )}
      </main>
    </div>
  );
}
