export const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "secondary.main",
  padding: "1rem",
  borderRadius: "1rem",
  borderRadius: "50px",
  backgroundColor: "#e0e0e0",
  boxShadow: "20px 20px 60px #bebebe, -20px -20px 60px #ffffff",
};

export const gridStyle = {
  borderRadius: "1rem",
  width: "100%",
  alignItems: "center",
  py: "1rem",
  justifyContent: "center",
  backgroundColor: "#e0e0e0",
  boxShadow: "20px 20px 60px #bebebe, -20px -20px 60px #ffffff",
  mb: 1,
};

export const gridItemStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  justifyContent: "center",
};

export const grid2ItemStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

export const buttonStyle = {
  alignItems: "center",
  justifyContent: "center",
};

export const circulo = {
  alignItems: "center",
  justifyContent: "center",
  color: "#f07167",
  //color: "#84a98c",
};

export const tiempo = {
  color: "primary.main",
  fontSize: "1rem",
  fontWeight: "bold",
};

export const selectStyle = {
  container: (provided) => ({
    ...provided,
    width: "200px",
    padding: "10px",
  }),
  control: (base) => ({
    ...base,
    color: "#001f3f",
    border: "1px solid #001f3f",
    "&:hover": {
      borderColor: "#001f3f",
    },
  }),
  option: (base) => ({
    ...base,
    color: "#001f3f",
  }),
};
