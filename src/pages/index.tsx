import { Flex, Text, Divider, Stack, Image } from "@chakra-ui/react";
import Head from "next/head";

import { Banner } from "../components/Banner";
import { Categories } from "../components/Categories";
import { Header } from "../components/Header";
import { Slider } from "../components/Slider";

export default function Home() {
  return (
    <>
      <Head>
        <title>World Trip</title>
      </Head>

      <Flex w="100%" align="center" justify="center" flexDir="column">
        <Header />

        <Stack w="100%" align="center" spacing={["6", "8"]} pb="10">
          <Banner />

          <Categories />

          <Divider w="90px" bg="gray.700" h="2px" />

          <Text
            fontSize={{ base: "xl", lg: "3xl" }}
            fontWeight="500"
            align="center"
          >
            Vamos nessa?
            <br />
            Então escolha seu continente
          </Text>

          <Flex display="block" maxW="1120px" w="100%">
            <Slider />
          </Flex>
        </Stack>
      </Flex>
    </>
  );
}
