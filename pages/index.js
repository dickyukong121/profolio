import {
  Container,
  Box,
  VStack,
  Heading,
  useColorMode,
  Button
} from '@chakra-ui/react';

const Page = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mt = {6}mb={6} align="center">
        Hello, I am Dicky, a full stack developer.
      </Box>

      <VStack>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>

        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Dicky Kong
          </Heading>
          <p>Full Stack Developer</p>
        </Box>
      </VStack>
    </Container>
  );
};

export default Page;
