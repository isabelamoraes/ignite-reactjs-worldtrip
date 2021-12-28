import { Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";

interface Props {
  city: string;
  country: string;
  image: string;
  href: string;
}

export function City({ city, country, image, href }: Props) {
  return (
    <VStack
      w={{ base: "100%", lg: "250px" }}
      bg="gray.50"
      align="left"
      borderRadius="4px"
      mb="4"
      border="1px solid"
      borderColor="yellow.500"
    >
      <Flex
        w="100%"
        h="173px"
        bgImage={`url(${image})`}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        borderRadius="4px 4px 0 0"
      />
      <HStack p="6" spacing="auto">
        <VStack align="left">
          <Text fontWeight="600" fontSize={{ base: "md", lg: "lg" }} mb="-2">
            {city}
          </Text>
          <Text color="gray.500" fontSize={{ base: "sm", lg: "md" }}>
            {country}
          </Text>
        </VStack>
        <Image src={href} alt={country} />
      </HStack>
    </VStack>
  );
}
