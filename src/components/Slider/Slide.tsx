import { Flex, Link, Stack, Text } from "@chakra-ui/react";

interface Props {
  image: string;
  title: string;
  subtitle: string;
  href: string;
}

export function Slide({ image, title, subtitle, href }: Props) {
  return (
    <Link
      href={href}
      _hover={{
        textDecoration: "none",
      }}
    >
      <Flex
        as="a"
        bg={`url(${image})`}
        height={{ base: "250px", lg: "450px" }}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        align="center"
        justify="center"
      >
        <Stack zIndex="1" align="center">
          <Text
            color="gray.100"
            fontSize={{ base: "xl", lg: "3xl" }}
            fontWeight="700"
          >
            {title}
          </Text>
          <Text
            color="gray.200"
            fontSize={{ base: "sm", lg: "lg" }}
            fontWeight="700"
          >
            {subtitle}
          </Text>
        </Stack>
        <Flex w="100%" h="100%" bg="#00000080" position="absolute" />
      </Flex>
    </Link>
  );
}
