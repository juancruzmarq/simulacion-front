import { Container, Box, Typography, TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import useUser from "../hooks/useUser";
import { GET_CLIENTES } from "../services/api";
import { useQuery } from "@apollo/client";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submited, setSubmited] = useState(false);
  // const [, navigate] = useLocation();
  const { login, isLogged } = useUser();
  const { data, error, loading } = useQuery(LOGIN);

  useEffect(() => {
    if (isLogged) navigate("/home");
  }, [isLogged]);

  const handleSubmit = (e) => {
    console.log(data);
    e.preventDefault();
    login(email, password);
    setSubmited(true);
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "primary.main",
        padding: "2rem",
        borderRadius: "1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        ></Box>
        <Typography sx={{ color: "secondary.main", py: 4 }}>
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
              color="primary"
              margin="normal"
              variant="outlined"
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
              color="primary"
              margin="normal"
              variant="outlined"
              label="Password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
                setSubmited(false);
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
            sx={{
              color: "secondary.main",
              backgroundColor: "primary.main",
            }}
          >
            Ingresar
          </Button>
        </form>
      </Box>
    </Container>
  );
};
