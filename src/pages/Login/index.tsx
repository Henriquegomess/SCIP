import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";

import { createStyles, makeStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";

import Link from "@material-ui/core/Link";

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
        fontWeight: typography.fontWeightBold,
        textAlign: "left",
      },
      subTitle: {
        color: "white",
        fontSize: "1.6rem",
        fontWeight: typography.fontWeightBold,
        textAlign: "left",
      },
      box: {},
    })
);

const LoginPage: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.login}>
      <Grid item xs={12} lg={7} className={classes.firstColumn}>
        <div className={classes.box}>
          <Typography className={classes.title}>SCIP</Typography>
          <Typography className={classes.subTitle}>
            Uma plataforma para gerenciar seu projeto
          </Typography>
          <Button
            style={{
              backgroundColor: "white",
              color: "#0575E6",
              marginTop: "1.6rem",
              padding: "0.8rem 2rem",
            }}
          >
            Ler mais
          </Button>
        </div>
      </Grid>
      <Grid item xs lg={5} className={classes.secondColumn}>
        <div style={{ width: "23rem" }}>
          <Typography
            style={{
              fontSize: "2.4rem",
              color: "#333333",
              fontWeight: "bolder",
              textAlign: "left",
            }}
          >
            Olá, de novo!
          </Typography>
          <Typography
            style={{
              fontSize: "1.6rem",
              color: "#333333",
              fontWeight: "normal",
              textAlign: "left",
            }}
          >
            Bem-vindo de volta
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "2.4rem",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              placeholder="Digite o seu email"
              style={{ marginBottom: "1.6rem" }}
            />
            <TextField
              id="outlined-basic"
              label="Senha"
              variant="outlined"
              placeholder="Digite a sua senha"
            />
            <Button
              style={{
                backgroundColor: "#0575E6",
                color: "white",
                marginTop: "1.6rem",
                padding: "0.8rem 0",
              }}
            >
              Entrar
            </Button>
            <Link
              href="#"
              style={{
                textAlign: "center",
                color: "#333333",
                opacity: "0.7",
                paddingTop: "0.8rem",
              }}
            >
              Esqueceu a senha?
            </Link>
            <Link
              href="#"
              style={{
                textAlign: "center",
                color: "#0575E6",
                paddingTop: "1.6rem",
              }}
            >
              Ainda não tem cadastro?
            </Link>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
