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
    })
);

const LoginPage: React.FC = () => {
  const classes = useStyles();

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Você precisa digitar um email válido")
      .required("Este compo é obrigatório"),
    password: yup
      .string()
      .max(25, "Sua senha tem mais de 25 caracteres")
      .required("Este compo é obrigatório"),
  });

  return (
    <Grid container className={classes.login}>
      <Grid item xs={12} lg={7} className={classes.firstColumn}>
        <div>
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
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={async (values, actions) => {
            try {
              actions.resetForm();
            } catch (error) {
              return "";
            }
          }}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit} method="POST">
              <div style={{ width: "23rem" }}>
                <Typography className={classes.titleForm}>
                  Olá, de novo!
                </Typography>
                <Typography className={classes.subTitleForm}>
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
                    value={props.values.email}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    id="email"
                    name="email"
                    label="Email"
                    variant="outlined"
                    placeholder="Digite o seu email"
                    style={{ marginBottom: "0rem" }}
                    type="email"
                  />
                  {props.touched.email && props.errors.email && (
                    <div style={{ color: "red" }}>{props.errors.email}</div>
                  )}
                  <TextField
                    id="password"
                    name="password"
                    label="Senha"
                    value={props.values.password}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    variant="outlined"
                    placeholder="Digite a sua senha"
                    type="password"
                    style={{ marginTop: "1.6rem" }}
                  />
                  {props.touched.password && props.errors.password && (
                    <div style={{ color: "red" }}>{props.errors.password}</div>
                  )}
                  <Button
                    style={{
                      backgroundColor: "#0575E6",
                      color: "white",
                      marginTop: "1.6rem",
                      padding: "0.8rem 0",
                    }}
                    type="submit"
                  >
                    Entrar
                  </Button>
                  <Link href="#" className={classes.linkSecundary}>
                    Esqueceu a senha?
                  </Link>
                  <Link href="#" className={classes.linkPrimary}>
                    Ainda não tem cadastro?
                  </Link>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
