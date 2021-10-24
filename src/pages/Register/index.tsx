import React, { useEffect, useState } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import { Formik } from "formik";
import * as yup from "yup";

import Link from "@material-ui/core/Link";
import axios from "axios";

import api from "../../services/api";

import { SnackbarProvider, useSnackbar } from "notistack";
import AppError from "../../utils/appError";
import UserList from "../../components/UserList";
import ROUTES from "../../config/routes";

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

// axios.get('https://scip-api.herokuapp.com/api/perfis')
//   .then((response) => {
//     console.log(response.data);
//     console.log(response.status);
//     console.log(response.statusText);
//     console.log(response.headers);
//     console.log(response.config);
//   });

export interface Projects {
  nome: string;
}

export interface User {
  id: number;
  nome: string;
}

export interface NewUser {
  nome: string;
}

const apiClient = axios.create({
  baseURL: "https://scip-api.herokuapp.com/api",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

// export type TUserList = User[];

const RegisterPage: React.FC = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const [users, setUserList] = useState<User[]>([]);

  const [projects, setProjectsList] = useState<Projects[]>([]);

  const url = "https://scip-api.herokuapp.com/api/perfis";

  const [post, setPost] = React.useState(null);

  axios
    .get<User[]>("https://scip-api.herokuapp.com/api/perfis")
    .then((response) => {
      console.log(response.data);
      setUserList(response.data);
    });

  axios
    .get<Projects[]>("https://scip-api.herokuapp.com/api/projetos")
    .then((response) => {
      console.log(response.data);
      setProjectsList(response.data);
    });

  // const [users, setUserList] = useState<TUserList>();

  // useEffect(() => {
  //   // Use [] as second argument in useEffect for not rendering each time
  //   axios
  //     .get<TUserList>("https://scip-api.herokuapp.com/api/perfis")
  //     .then((response) => {
  //       console.log(response.data);
  //       setUserList(response.data);
  //     });
  // }, []);

  const validationSchema = yup.object().shape({
    name: yup.string().required("Este campo é obrigatório"),
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
          initialValues={{ name: "" }}
          validationSchema={validationSchema}
          onSubmit={async (values, actions) => {
            try {
              actions.resetForm();
              enqueueSnackbar("Usuário criado com sucesso", {
                variant: "success",
              });
            } catch (error) {
              if (error instanceof AppError) {
                return enqueueSnackbar(error.message, {
                  variant: error.variant,
                });
              }
              return console.log(error);
            }
          }}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit} method="POST">
              <div style={{ width: "23rem" }}>
                <Link
                  href={ROUTES.USER_ROUTES.LOGIN}
                  className={classes.linkSecundary}
                >
                  Voltar
                </Link>
                <Typography className={classes.titleForm}>Olá!</Typography>
                <Typography className={classes.subTitleForm}>
                  Crie uma conta e inicie.
                </Typography>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    paddingTop: "2.4rem",
                  }}
                >
                  <TextField
                    value={props.values.name}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    id="name"
                    name="name"
                    label="Nome completo"
                    variant="outlined"
                    placeholder="Digite o seu nome completo"
                    style={{ marginBottom: "0rem" }}
                    type="text"
                  />
                  {props.touched.name && props.errors.name && (
                    <div style={{ color: "red" }}>{props.errors.name}</div>
                  )}
                  {/* <TextField
                    id="email"
                    name="email"
                    label="Email"
                    value={props.values.email}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    variant="outlined"
                    placeholder="Digite o seu email"
                    type="email"
                    style={{ marginTop: "1.6rem" }}
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
                    
                  )} */}
                  <UserList items={users} />
                  <Button
                    style={{
                      backgroundColor: "#0575E6",
                      color: "white",
                      marginTop: "1.6rem",
                      padding: "0.8rem 0",
                    }}
                    type="submit"
                  >
                    Criar conta
                  </Button>
                  <Link href="#" className={classes.linkSecundary}>
                    Esqueceu a senha?
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

export default RegisterPage;
