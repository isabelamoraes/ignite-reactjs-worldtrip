import { HStack } from "@chakra-ui/react";
import { Item } from "./Item";

export function Info() {
  return (
    <HStack spacing={"70px"}>
      <Item number={50} title="países" />
      <Item number={60} title="línguas" />
      <Item number={27} title="cidades" />
    </HStack>
  );
}
