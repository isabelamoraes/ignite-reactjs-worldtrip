import { Divider, Flex, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import Head from "next/head";
import { About } from "../../components/About";
import { Cities } from "../../components/Cities";
import { ContinentBanner } from "../../components/ContinentBanner";
import { Header } from "../../components/Header";
import { Info } from "../../components/Info";

export default function Continent() {
  return (
    <>
      <Head>
        <title>World Trip</title>
      </Head>

      <Flex w="100%" align="center" justify="center" flexDir="column">
        <Header />

        <Stack w="100%" align="center" spacing={["6", "8"]} pb="10">
          <ContinentBanner />

          <VStack
            w="100%"
            maxW="1120px"
            p={["6", "8"]}
            spacing={["6", "8"]}
            align="center"
          >
            <About />

            <Divider w="90px" bg="yellow.500" h="2px" />

            <Cities />
          </VStack>
        </Stack>
      </Flex>
    </>
  );
}
