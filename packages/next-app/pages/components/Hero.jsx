import { Heading, Container, Text, Flex, Link, Code } from "@chakra-ui/react";
import React from "react";
import { useConnect } from "wagmi";

function Hero() {
  const { isConnected } = useConnect();
  return (
    <>
      <Container maxW={"1100px"} h={isConnected ? "20vh" : "75vh"} px={"2rem"}>
        <Flex
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          h={"100%"}
          w={"100%"}
          py={"4rem"}
        >
          <Flex justifyContent={"center"} alignItems={"center"}>
            <Heading
              className={"h-shadow-black"}
              fontWeight={"700"}
              fontSize={["1.4rem", "1rem", "2.5rem", "3rem", "4rem"]}
            >
              Signing on&nbsp;
            </Heading>
            <Link
              className={"h-shadow-blue"}
              color={"#0070f3"}
              isExternal
            >
              <Heading
                fontWeight={"700"}
                fontSize={["1.4rem", "1rem", "2.5rem", "3rem", "4rem"]}
              >
                Web3 !
              </Heading>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </>
  );
}

export default Hero;
