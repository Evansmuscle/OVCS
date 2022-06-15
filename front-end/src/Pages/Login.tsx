import React from "react";

// Schema Validation
import { z } from "zod";

// Mantine UI
import { Button, Container, Group, Image, TextInput } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useButtonStyles, useFormStyles } from "../styles";
import { Link } from "react-router-dom";
import useStore from "../store";
import Cookies from "js-cookie";

interface InitialValues {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const formStyles = useFormStyles();
  const buttonStyles = useButtonStyles();

  const login = useStore((state) => state.login);

  const initialValues: InitialValues = {
    email: "",
    password: "",
  };

  const schema = z.object({
    email: z.string().email({ message: "Invalid Email" }),
    password: z.string().min(4, { message: "Minimum password length is 4" }),
  });

  const form = useForm({
    schema: zodResolver(schema),
    initialValues,
  });

  const onSubmitHandler = async (
    values: InitialValues,
    event: React.FormEvent<Element>
  ) => {
    const response = await login(values);

    if ("message" in response) {
      form.setFieldError("password", response.message);
      return;
    }

    Cookies.set("jwt", response.access_token);
    window.location.href = "/";
  };

  return (
    <Container
      size="xs"
      px="xs"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
      }}
    >
      <Image
        src="./book.png"
        width="250px"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "25px",
        }}
      />
      <form onSubmit={form.onSubmit(onSubmitHandler)}>
        <TextInput
          classNames={{
            input: formStyles.classes.input,
            label: formStyles.classes.label,
            required: formStyles.classes.required,
          }}
          required
          label="Email"
          placeholder="example@mail.com"
          {...form.getInputProps("email")}
        />
        <TextInput
          classNames={{
            input: formStyles.classes.input,
            label: formStyles.classes.label,
            required: formStyles.classes.required,
          }}
          required
          label="Password"
          type="password"
          placeholder="*******"
          {...form.getInputProps("password")}
        />

        <Group
          position="center"
          mt="xl"
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "50px",
          }}
        >
          <Button
            type="submit"
            classNames={{
              root: buttonStyles.classes.root,
            }}
          >
            Login
          </Button>
          <Link to="/signup">
            <Button
              type="button"
              classNames={{
                root: buttonStyles.classes.root,
              }}
            >
              Signup
            </Button>
          </Link>
          <Link to="/forgotPassword">
            <Button
              type="button"
              classNames={{
                root: buttonStyles.classes.root,
              }}
            >
              Forgot Password
            </Button>
          </Link>
        </Group>
      </form>
    </Container>
  );
};

export default Login;
