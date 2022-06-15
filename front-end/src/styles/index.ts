import { createStyles } from "@mantine/core";

export const useFormStyles = createStyles((theme) => ({
  input: {
    backgroundColor: "var(--primary)",
    borderRadius: "10px",
    padding: "20px 10px",
    color: "white",
    "::placeholder": {
      color: "white",
    },
  },
  label: {
    color: "var(--primary)",
  },
  required: {
    color: "var(--primary)",
  },
}));

export const useButtonStyles = createStyles((theme) => ({
  root: {
    backgroundColor: "var(--primary)",
    padding: "0",
    width: "200px",
    color: "white",
  },
}));
