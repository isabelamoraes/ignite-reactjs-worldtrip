import { Grid, Stack } from "@chakra-ui/react";
import { Item } from "./Item";

export function Categories() {
  return (
    <Grid
      w="100%"
      maxW="1120px"
      direction={{ base: "column", lg: "row" }}
      p={["6", "8"]}
      rowGap="8"
      templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(5, 1fr)" }}
    >
      <Item title="vida noturna" image="/images/night_life.svg" />
      <Item title="praia" image="/images/beach.svg" />
      <Item title="moderno" image="/images/modern.svg" />
      <Item title="clássico" image="/images/classic.svg" />
      <Item title="e mais..." image="/images/more.svg" />
    </Grid>
  );
}
