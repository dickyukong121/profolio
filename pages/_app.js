import { ChakraProvider, ColorModeScript, cookieStorageManager, localStorageManager } from '@chakra-ui/react';
import Main from '../components/layouts/main';
import theme from '../libs/theme';

const App = ({ Component, pageProps, router }) => {
  const colorModeManager =
    typeof pageProps.cookies === 'string'
      ? cookieStorageManager(pageProps.cookies)
      : localStorageManager;

  return (
    <ChakraProvider colorModeManager={colorModeManager}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />

      <Main router={router}>
        <Component {...pageProps} key={router.route} />
      </Main>
    </ChakraProvider>
  );
};

export default App;

export function getServerSideProps({ req }) {
    return {
      props: {
        cookies: req.headers.cookie ?? '',
      },
    }
  }
  