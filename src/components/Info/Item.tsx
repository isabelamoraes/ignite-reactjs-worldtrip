import { Text, VStack } from "@chakra-ui/react";

interface Props {
  number: number;
  title: string;
}

export function Item({ number, title }: Props) {
  return (
    <VStack>
      <Text
        color="yellow.500"
        fontWeight="600"
        fontSize={{ base: "3xl", lg: "6xl" }}
        mb="-4"
      >
        {number}
      </Text>
      <Text fontWeight="600" fontSize="lg">
        {title}
      </Text>
    </VStack>
  );
}
