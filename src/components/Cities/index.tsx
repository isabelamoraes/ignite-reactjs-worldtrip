import { Grid } from "@chakra-ui/react";
import { City } from "./City";

export function Cities() {
  return (
    <Grid
      templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
      gap="4"
    >
      <City
        image="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        href="/images/countries/reino_unido.svg"
        city="Londres"
        country="Reino Unido"
      />

      <City
        image="https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
        href="/images/countries/franca.svg"
        city="Paris"
        country="França"
      />

      <City
        image="https://images.unsplash.com/photo-1529260830199-42c24126f198?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
        href="/images/countries/italia.svg"
        city="Roma"
        country="Itália"
      />

      <City
        image="https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        href="/images/countries/republica_tcheca.svg"
        city="Praga"
        country="República Tcheca"
      />

      <City
        image="https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        href="/images/countries/holanda.svg"
        city="Amsterdã"
        country="Holanda"
      />

      <City
        image="https://images.unsplash.com/photo-1543783207-ec64e4d95325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        href="/images/countries/espanha.svg"
        city="Madrid"
        country="Espanha"
      />

      <City
        image="https://images.unsplash.com/photo-1503492313441-f636a15b8a55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        href="/images/countries/grecia.svg"
        city="Creta"
        country="Grécia"
      />

      <City
        image="https://images.unsplash.com/photo-1554072675-66db59dba46f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
        href="/images/countries/alemanha.svg"
        city="Berlim"
        country="Alemanha"
      />
    </Grid>
  );
}
