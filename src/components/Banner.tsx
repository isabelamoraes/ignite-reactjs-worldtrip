import {
  Flex,
  Image,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      w="100%"
      h={{ base: "163px", lg: "335px" }}
      bgImage="url('https://images.unsplash.com/photo-1528799372938-a8f8955fdf8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1203&q=80')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize={{ base: "100% cover", lg: "cover" }}
      align="center"
      justify="center"
      p={["6", "8"]}
    >
      <Flex maxW="1120px" justifyContent="space-between" align="center">
        <VStack
          maxW={{ base: "100%", lg: "50%" }}
          align="flex-start"
          spacing="4"
        >
          <Text
            color="gray.100"
            fontSize={{ base: "xl", lg: "3xl" }}
            fontWeight="500"
          >
            5 Continentes,
            <br /> infinitas possibilidades.
          </Text>

          <Text
            color="gray.200"
            fontSize={{ base: "sm", lg: "lg" }}
            fontWeight="400"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </VStack>

        {isWideVersion && (
          <Image
            src="/images/airplane.svg"
            alt="Airplane"
            alignContent="flex-end"
            mb="-100px"
          />
        )}
      </Flex>
    </Flex>
  );
}
