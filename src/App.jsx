import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange, red } from "@mui/material/colors";
import { Login } from "./components/Login";
import { UserContext } from "./context/UserContext";

const theme = createTheme({
  status: {
    danger: orange[500],
  },
  palette: {
    primary: {
      main: "#dad7cd",
    },
    secondary: {
      main: "#0F1612",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
});

function App() {
  return (
    <UserContext>
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    </UserContext>
  );
}

export default App;
