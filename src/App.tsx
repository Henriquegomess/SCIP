import { CssBaseline, IconButton, ThemeProvider } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { ProviderContext, SnackbarProvider } from "notistack";
import React, { useRef } from "react";
import Routes from "./components/Routes";
// import Theme from "./components/Theme";
// import { IoCProvider } from "./context/IoCContext/IoCContext";
// import { UserProvider } from "./context/UserContext";
import "./index.css";

const App: React.FC = () => {

  return <Routes></Routes>;
};

export default App;
