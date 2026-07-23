import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#1976d2",
    },

    secondary: {
      main: "#00bcd4",
    },

    background: {
      default: "#0f172a",
      paper: "#1e293b",
    },
  },

  shape: {
    borderRadius: 12,
  },

  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export default theme;