import React from "react";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

// Mantine UI
import { Box } from "@mantine/core";

interface Props {
  //
}

const Home: React.FC<Props> = () => {
  const jwt = Cookies.get("jwt") || "";

  if (!jwt) {
    window.location.href = "/login";
  }

  const user = jwtDecode<User>(jwt);

  return <Box>Your email: {user.email}</Box>;
};

export default Home;
