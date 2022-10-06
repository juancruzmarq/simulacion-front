import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange, red } from "@mui/material/colors";
import { Login } from "./components/Login";
import { UserContext } from "./context/UserContext";
import { Home } from "./components/Home";

const theme = createTheme({
  status: {
    danger: orange[500],
  },
  palette: {
    primary: {
      main: "#001f3f",
    },
    secondary: {
      main: "#001f3f",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#001f3f",
    },
  },
});

function App() {
  return (
    <UserContext>
      <ThemeProvider theme={theme}>
        <Home />
        {/* <Login /> */}
      </ThemeProvider>
    </UserContext>
  );
}

export default App;
