import { Flex, Image, Link } from "@chakra-ui/react";

export function Header() {
  return (
    <Link href="/">
      <Flex as="a" w="100%" align="center" justify="center" my="8">
        <Image src="/images/logo.svg" alt="World Trip" />
      </Flex>
    </Link>
  );
}
