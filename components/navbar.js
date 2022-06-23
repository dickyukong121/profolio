import NextLink from 'next/link';
import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  Stack,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';

const LinkItem = ({ href, path, children }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('black.200', 'white.200');
  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar = props => {
  const { path } = props;
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Heading as="h1" size="lg">
          <Link color={useColorModeValue('black.200', 'teal.500')} href="/">
            Dicky Kong
          </Link>
        </Heading>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          ml={10}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/music" path={path}>
            My favorite music
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
            <Button onClick={toggleColorMode}>
                {colorMode === 'light'? <MoonIcon/>:<SunIcon/>}
                </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
