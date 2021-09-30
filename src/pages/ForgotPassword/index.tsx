import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";

import { Formik } from "formik";
import * as yup from "yup";

const useStyles = makeStyles(
  ({ typography: { pxToRem, ...typography }, ...theme }) =>
    createStyles({
      login: { height: "100vh" },
      firstColumn: {
        backgroundColor: "#0575E6",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
      },
      secondColumn: {
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
      },
      title: {
        color: "white",
        fontSize: "4rem",
        fontWeight: "bolder",
        textAlign: "left",
      },
      subTitle: {
        color: "white",
        fontSize: "1.6rem",
        fontWeight: "normal",
        textAlign: "left",
      },
      linkPrimary: {
        textAlign: "center",
        color: "#0575E6",
        paddingTop: "1.6rem",
      },
      linkSecundary: {
        textAlign: "center",
        color: "#333333",
        opacity: "0.7",
        paddingTop: "0.8rem",
      },
      buttonPrimary: {
        backgroundColor: "#0575E6",
        color: "white",
        marginTop: "1.6rem",
        padding: "0.8rem 0",
      },
      buttonSecundary: {
        backgroundColor: "white",
        color: "#0575E6",
        marginTop: "1.6rem",
        padding: "0.8rem 2rem",
      },
      titleForm: {
        fontSize: "2.4rem",
        color: "#333333",
        fontWeight: "bolder",
        textAlign: "left",
      },
      subTitleForm: {
        fontSize: "1.6rem",
        color: "#333333",
        fontWeight: "normal",
        textAlign: "left",
      },
      forgotPassword: {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      },
    })
);

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.forgotPassword}>
      <Grid container style={{ width: "40rem", height: "12rem" }}>
        <Typography className={classes.titleForm}>Redefinir senha</Typography>
        <Typography className={classes.subTitleForm}>
          Digite seu email cadastrado para redefinir sua senha
        </Typography>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email cadastrado"
          type="email"
          placeholder="Digite seu email cadastrado"
          fullWidth
        />
      </Grid>
    </div>
  );
};

export default App;
