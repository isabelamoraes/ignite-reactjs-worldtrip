import { Stack, Text } from "@chakra-ui/react";
import { Info } from "./Info";

export function About() {
  return (
    <Stack
      direction={{ base: "column", lg: "row" }}
      spacing={{ base: "8", lg: "140px" }}
      justify="space-between"
      align="center"
    >
      <Text
        fontSize={{ base: "sm", lg: "lg" }}
        fontWeight="400"
        textAlign="justify"
      >
        A Europa é, por convenção, um dos seis continentes do mundo.
        Compreendendo a península ocidental da Eurásia, a Europa geralmente
        divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
        rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
      </Text>

      <Info />
    </Stack>
  );
}
