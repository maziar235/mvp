import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/router';
import '../src/app/globals.css';
import '../styles/main.css';
import '../styles/variables.css';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();

  // Don't show header on auth pages
  const noHeaderPages = ['/login', '/register', '/'];
  const showHeader = !noHeaderPages.includes(router.pathname);

  return (
    <SessionProvider session={session}>
      {/* You can conditionally render a Header component here if needed */}
      {showHeader && <header>Your Header Component</header>}
      <Component {...pageProps} />
    </SessionProvider>
  );
}
