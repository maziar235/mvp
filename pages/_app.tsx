import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import '../styles/main.css';
import '../styles/variables.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  // Don't show header on auth pages
  const noHeaderPages = ['/login', '/register', '/'];
  const showHeader = !noHeaderPages.includes(router.pathname);

  return <Component {...pageProps} />;
}

export default MyApp;
