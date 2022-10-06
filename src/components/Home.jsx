import React from "react";
import { useEffect, useState } from "react";
import { Container, Typography, Button, Grid } from "@mui/material";
import { PersonAdd, Person2 } from "@mui/icons-material";
import {
  containerStyle,
  gridStyle,
  grid2ItemStyle,
  buttonStyle,
  selectStyle,
} from "../styles/styles";
import { useQuery, useMutation } from "@apollo/client";
import { CREATE_CLIENTE, GET_CLIENTES, UPDATE_CLIENTE } from "../services/api";
import Select from "react-select";
import { GridTiempo } from "./GridTiempo";
import { SideGrid } from "./SideGrid";

export const Home = () => {
  const [clientes, setClientes] = useState([]);
  const [cliente, setCliente] = useState({});
  const [tiempoLlegada, setTiempoLlegada] = useState("Tiempo");
  const [tiempoIngresaCola, setTiempoIngresaCola] = useState("Tiempo");
  const [tiempoSalida, setTiempoSalida] = useState("Tiempo");
  const [tiempoSalidaCola, setTiempoSalidaCola] = useState("Tiempo");
  const [tiempoInicioAtencion, setTiempoInicioAtencion] = useState("Tiempo");
  const [tiempoFinAtencion, setTiempoFinAtencion] = useState("Tiempo");

  const { loading, error, data, refetch } = useQuery(GET_CLIENTES, {
    onCompleted: (data) => {
      const newClientes = data.getClientes;
      setClientes(newClientes);
    },
  });

  const [createCliente, { dataCliente, loadingCliente, errorCliente }] =
    useMutation(CREATE_CLIENTE, {
      onCompleted: (data) => {
        const newCliente = data.createCliente;
        setClientes([...clientes, newCliente]);
        console.log(newCliente);
        setCliente(newCliente);
      },
    });

  const [
    updateCliente,
    { dataUpdateCliente, loadingUpdateCliente, errorUpdateCliente },
  ] = useMutation(UPDATE_CLIENTE);

  const clientesArray = clientes.map((cliente) => {
    return {
      value: cliente,
      label: cliente.id,
    };
  });

  clientesArray.sort((a, b) => {
    return a.label - b.label;
  });

  const handleUpdateCliente = (cliente, tipo) => {
    const tiempo = new Date().toLocaleTimeString();
    const clienteUpdated = {
      [tipo]: tiempo,
    };
    //console.log(clienteUpdated);
    updateCliente({
      variables: {
        cliente: clienteUpdated,
        updateClienteId: cliente.id,
      },
    });
    setCliente({
      ...cliente,
      [tipo]: tiempo,
    });
    console.log("updateCliente", cliente);
  };

  useEffect(() => {
    setTiempoSalida(cliente.salida);
    setTiempoFinAtencion(cliente.terminaAtencion);
    setTiempoSalidaCola(cliente.salidaCola);
    setTiempoInicioAtencion(cliente.comienzaAtencion);
    setTiempoIngresaCola(cliente.ingresaCola);
    setTiempoLlegada(cliente.llegada);
    console.log("clienteUseefect", cliente);
  }, [cliente]);

  const handleChange = (e) => {
    //console.log(e);
    setCliente(e.value);
    setTiempoSalida(e.value.salida);
    setTiempoFinAtencion(e.value.terminaAtencion);
    setTiempoSalidaCola(e.value.salidaCola);
    setTiempoInicioAtencion(e.value.comienzaAtencion);
    setTiempoIngresaCola(e.value.ingresaCola);
    setTiempoLlegada(e.value.llegada);
  };

  const handleClickNuevoCliente = () => {
    createCliente({
      variables: {
        tiempo: new Date().toLocaleTimeString(),
      },
    });
    //console.log(dataCliente);
  };

  const loadingCreate = () => {
    return <>Cargando cliente...</>;
  };

  return (
    <Container
      component="main"
      sx={{
        display: "flex",
      }}
    >
      <Container maxWidth="xs" sx={containerStyle}>
        <Typography sx={{ fontSize: "2rem", color: "#001f3f" }}>
          Carga de cliente
        </Typography>

        <Select
          options={clientesArray}
          onChange={(e) => handleChange(e)}
          menuPlacement="auto"
          menuPosition="fixed"
          placeholder="Clientes"
          value={cliente.id}
          styles={selectStyle}
        />

        <Grid container sx={gridStyle}>
          <Grid item xs={12} sm={12} md={12} sx={grid2ItemStyle}>
            <Button
              sx={buttonStyle}
              onClick={() => {
                handleClickNuevoCliente();
              }}
            >
              {loadingCliente ? loadingCreate() : "Iniciar nuevo cliente"}
              <PersonAdd sx={{ pl: 2 }}></PersonAdd>
            </Button>
          </Grid>
        </Grid>

        <GridTiempo
          tiempo={tiempoLlegada}
          handleUpdateCliente={handleUpdateCliente}
          cliente={cliente}
          textoUpdate="llegada"
          textoCarga="Cargar llegada"
          loadingUpdateCliente={loadingUpdateCliente}
        ></GridTiempo>

        <GridTiempo
          tiempo={tiempoIngresaCola}
          handleUpdateCliente={handleUpdateCliente}
          cliente={cliente}
          textoUpdate="ingresaCola"
          textoCarga="Cargar ingreso a cola"
          loadingUpdateCliente={loadingUpdateCliente}
        ></GridTiempo>

        <GridTiempo
          tiempo={tiempoInicioAtencion}
          handleUpdateCliente={handleUpdateCliente}
          cliente={cliente}
          textoUpdate="comienzaAtencion"
          textoCarga="Cargar inicio de atención"
          loadingUpdateCliente={loadingUpdateCliente}
        ></GridTiempo>

        <GridTiempo
          tiempo={tiempoFinAtencion}
          handleUpdateCliente={handleUpdateCliente}
          cliente={cliente}
          textoUpdate="terminaAtencion"
          textoCarga="Cargar fin de atención"
          loadingUpdateCliente={loadingUpdateCliente}
        ></GridTiempo>

        <GridTiempo
          tiempo={tiempoSalidaCola}
          handleUpdateCliente={handleUpdateCliente}
          cliente={cliente}
          textoUpdate="salidaCola"
          textoCarga="Cargar salida de cola"
          loadingUpdateCliente={loadingUpdateCliente}
        ></GridTiempo>

        <GridTiempo
          tiempo={tiempoSalida}
          handleUpdateCliente={handleUpdateCliente}
          cliente={cliente}
          textoUpdate="salida"
          textoCarga="Cargar salida"
          loadingUpdateCliente={loadingUpdateCliente}
        ></GridTiempo>
      </Container>

      <SideGrid cliente={cliente}></SideGrid>
    </Container>
  );
};
