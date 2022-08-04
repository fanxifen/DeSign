import { Container, Divider, Link, Text } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <>
      <Divider w={"80%"} mx={"auto"} />
      <Container py={"2rem"}>
        <Text textAlign={"center"} fontSize={"1rem"}>
            Technical Support  💜 by{" "}
            <Link isExternal href="https://filecoin.io/">
            IPFS/Filecoin
          </Link>
        </Text>
      </Container>
    </>
  );
}

export default Footer;
