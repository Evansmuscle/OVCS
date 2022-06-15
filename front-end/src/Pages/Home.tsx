import React from "react";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

// Mantine UI
import { Box, Container, Image, Text } from "@mantine/core";
import Menu from "../Components/Menu";
import { Link } from "react-router-dom";

interface Props {
  //
}

const Home: React.FC<Props> = () => {
  const jwt = Cookies.get("jwt") || "";

  if (!jwt) {
    window.location.href = "/login";
  }

  const user = jwtDecode<User>(jwt);

  return (
    <Container
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "auto",
          marginTop: "5rem",
        }}
      >
        <Text
          style={{
            fontSize: "4rem",
            opacity: "0.25",
            color: "var(--primary)",
            fontWeight: "bold",
          }}
        >
          OVCF
        </Text>
        <Image
          src="./Book.png"
          width="200px"
          style={{ margin: "0 100px 0 100px" }}
        />
        <Text
          style={{
            fontSize: "4rem",
            opacity: "0.25",
            color: "var(--primary)",
            fontWeight: "bold",
          }}
        >
          KIDS
        </Text>
      </Box>
      <Menu />
      <Container
        style={{
          display: "flex",
          marginTop: "auto",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          marginBottom: "1rem",
        }}
      >
        <Link to={"/games"}>
          <Box
            style={{
              borderRadius: "15px",
              backgroundColor: "var(--primary)",
              padding: "15px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "150px",
              width: "150px",
              cursor: "pointer",
            }}
          >
            <Image src="./Console.svg" />
            <Text
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "var(--blue)",
              }}
            >
              Oyunlar
            </Text>
          </Box>
        </Link>
        <Link to={"/books"} style={{ marginLeft: "auto" }}>
          <Box
            style={{
              borderRadius: "15px",
              backgroundColor: "var(--primary)",
              padding: "15px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "150px",
              width: "150px",
              marginLeft: "auto",
              cursor: "pointer",
            }}
          >
            <Image src="./BookOpen.svg" />
            <Text
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "var(--blue)",
              }}
            >
              Kitaplar
            </Text>
          </Box>
        </Link>
      </Container>
    </Container>
  );
};

export default Home;
