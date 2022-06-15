import { Box, Container, Image, Text } from "@mantine/core";
import React from "react";

interface Props {
  //
}

const Menu: React.FC<Props> = () => {
  return (
    <Container
      style={{
        borderRadius: "15px",
        backgroundColor: "var(--primary)",
        padding: "10px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "10px 25px",
          cursor: "pointer",
        }}
      >
        <Image src="./ChatBubble.svg" />
        <Text style={{ fontSize: "2rem", color: "var(--red)" }}>SOHBET</Text>
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "10px 25px",
          cursor: "pointer",
        }}
      >
        <Image src="./People.svg" />
        <Text style={{ fontSize: "2rem", color: "var(--orange)" }}>
          EKİPLER
        </Text>
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "10px 25px",
          cursor: "pointer",
        }}
      >
        <Image src="./Document.svg" />
        <Text style={{ fontSize: "2rem", color: "var(--green)" }}>ÖDEVLER</Text>
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "10px 25px",
          cursor: "pointer",
        }}
      >
        <Image src="./Calendar.svg" />
        <Text style={{ fontSize: "2rem", color: "var(--blue)" }}>TAKVİM</Text>
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "10px 25px",
          cursor: "pointer",
        }}
      >
        <Image src="./Phone.svg" />
        <Text style={{ fontSize: "2rem", color: "var(--pink)" }}>ARAMALAR</Text>
      </Box>
    </Container>
  );
};

export default Menu;
