import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';
import Navbar from '../navbar';
const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" />
        <title>Dicky's Homepage</title>
      </Head>

      <Navbar path={router.asPath}></Navbar>

      <Container maxW={'container.md'} pt={14}>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
