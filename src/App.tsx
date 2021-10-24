import { SnackbarProvider } from "notistack";
import React from "react";
import Routes from "./components/Routes";
// import Theme from "./components/Theme";
// import { IoCProvider } from "./context/IoCContext/IoCContext";
// import { UserProvider } from "./context/UserContext";
import "./index.css";

const App: React.FC = () => {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
    >
       <Routes></Routes>;
    </SnackbarProvider>
  );
};
export default App;
