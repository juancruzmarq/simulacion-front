import { Container, Box, Typography, TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import useUser from "../hooks/useUser";
import { useLazyQuery, useQuery } from "@apollo/client";
import { LOGIN } from "../services/api";
import {
  buttonStyle,
  containerStyle,
  gridItemStyle,
  gridStyle,
} from "../styles/styles";

export const Login = () => {
  const { login, isLogged } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submited, setSubmited] = useState(false);

  //const { data, loading, error } = useQuery(GET_CLIENTES);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    setSubmited(true);
    if (isLogged) {
      window.location.href = "/home";
    }
  };

  return (
    <Container component="main" maxWidth="xs" sx={containerStyle}>
      <Box sx={containerStyle}>
        <Box sx={gridItemStyle}></Box>
        <Typography sx={{ color: "primary.main", py: 4 }}>
          Iniciar sesión
        </Typography>
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
          <Box
            sx={{
              py: 4,
            }}
          >
            <TextField
              fullWidth
              label="Email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
                setSubmited(false);
              }}
              error={submited && email === ""}
              helperText={submited && email === "" ? "Campo requerido" : ""}
            ></TextField>
            <TextField
              fullWidth
              label="Password"
              margin="normal"
              name="password"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
                // setSubmited(false);
              }}
              error={submited && password === ""}
              helperText={
                submited && password === ""
                  ? "Contraseña requerida"
                  : "Ingrese su contraseña"
              }
            ></TextField>
          </Box>
          <Button
            type="submit"
            fullWidth
            color="primary"
            variant="contained"
            sx={buttonStyle}
            onClick={handleSubmit}
          >
            Ingresar
          </Button>
        </form>
      </Box>
    </Container>
  );
};
