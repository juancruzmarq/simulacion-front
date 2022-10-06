import { Circle } from "@mui/icons-material";
import { Grid, Typography, Button } from "@mui/material";
import React from "react";
import {
  circulo,
  tiempo as tiempoStyle,
  grid2ItemStyle,
  gridStyle,
  gridItemStyle,
  buttonStyle,
} from "../styles/styles";

export const GridTiempo = ({
  tiempo,
  handleUpdateCliente,
  cliente,
  textoUpdate,
  textoCarga,
  loadingUpdateCliente,
}) => {
  const loadingUpdate = () => {
    return <>Cargando...</>;
  };
  return (
    <Grid container sx={gridStyle}>
      <Grid item xs={6} sm={6} sx={grid2ItemStyle}>
        <Circle sx={{ ...circulo, ...(tiempo && { color: "#a3b18a" }) }} />
      </Grid>
      <Grid item xs={6} sm={6} sx={gridItemStyle}>
        <Typography sx={tiempoStyle}>{tiempo}</Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={12} sx={grid2ItemStyle} pt={2}>
        <Button
          sx={buttonStyle}
          onClick={() => handleUpdateCliente(cliente, textoUpdate)}
        >
          {loadingUpdateCliente ? loadingUpdate() : textoCarga}
        </Button>
      </Grid>
    </Grid>
  );
};
