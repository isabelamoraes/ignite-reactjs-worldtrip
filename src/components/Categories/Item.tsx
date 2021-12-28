import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface Props {
  title: string;
  image: string;
}

export function Item({ title, image }: Props) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  if (isWideVersion) {
    return (
      <Flex align="center" direction="column">
        <Image src={image} alt={title} width="85px" />
        <Text fontWeight="600" fontSize="lg" mt="4">
          {title}
        </Text>
      </Flex>
    );
  }

  return (
    <Flex align="center" direction="row">
      <Image src={image} alt={title} width="25px" />
      <Text fontWeight="600" fontSize="sm" ml="4">
        {title}
      </Text>
    </Flex>
  );
}
