import {
  Flex,
  Image,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";

export function ContinentBanner() {
  return (
    <Flex
      w="100%"
      h={{ base: "150px", lg: "500px" }}
      bgImage="url('https://images.unsplash.com/photo-1494707633652-f43986561810?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1800&q=80')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize={{ base: "100% cover", lg: "cover" }}
      align="center"
      justify="center"
    >
      <Flex
        maxW="1120px"
        w="100%"
        h="100%"
        justify={{ base: "center", lg: "left" }}
        align={{ base: "center", lg: "end" }}
        p={["6", "8"]}
      >
        <Text
          color="gray.100"
          fontSize={{ base: "xl", lg: "5xl" }}
          fontWeight="700"
        >
          Europa
        </Text>
      </Flex>
    </Flex>
  );
}
