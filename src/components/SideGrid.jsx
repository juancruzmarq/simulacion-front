import { Person2 } from "@mui/icons-material";
import { Container, Grid, Typography } from "@mui/material";
import React from "react";

export const SideGrid = ({ cliente }) => {
  return (
    <Container
      sx={{
        //borderStyle: "solid",
        width: "20%",
      }}
    >
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
          pt: 4,
          pl: 4,
          //borderStyle: "solid",
        }}
      >
        <Typography
          sx={{ fontSize: 20, fontWeight: "bold", color: "primary.main" }}
        >
          {cliente.id}
        </Typography>
        <Person2
          sx={{
            color: "primary.main",
          }}
        />
      </Grid>
    </Container>
  );
};
