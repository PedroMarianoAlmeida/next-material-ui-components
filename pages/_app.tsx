import type { AppProps } from 'next/app';

import CssBaseline from '@material-ui/core/CssBaseline';
import PermanentDrawerLeft from '../src/components/specific/PermanentDrawerLeft';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <PermanentDrawerLeft>
        <Component {...pageProps} />
      </PermanentDrawerLeft>
    </>
  );
}

export default MyApp;
