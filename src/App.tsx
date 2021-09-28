import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Fire from "./fire.svg";
import { Button } from "@mui/material";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import DateRangePicker, { DateRange } from "@mui/lab/DateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import TagFacesIcon from "@mui/icons-material/TagFaces";
import Chip from "@mui/material/Chip";

const drawerWidth = 240;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F6F8FB",
    color: "#223354",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

function createData(
  nome: string,
  custos: number,
  interacoes: number,
  pontuacao: number,
  ordem: number,
  categorias: string,
  acoes: boolean
) {
  return { nome, custos, interacoes, pontuacao, ordem, categorias, acoes };
}

const rows = [
  createData("Projeto de migração", 159, 21, 24, 1421, "Front-end", true),
  createData("App novo", 237, 34, 37, 7266, "DevOps", true),
  createData("Site novo", 262, 16.0, 51, 2412, "Back-end", true),
  createData("Planejamento anual", 305, 12, 67, 4212, "Back-end", true),
  createData("Extração de dados", 356, 65, 49, 7642, "Front-end", true),
];

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#FFFFFF",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

interface ChipData {
  key: number;
  label: string;
}

const ListItemChip = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [chipData, setChipData] = React.useState<readonly ChipData[]>([
    { key: 0, label: "Jorge" },
    { key: 1, label: "Dan" },
    { key: 2, label: "Alex" },
    { key: 3, label: "Hiago" },
    { key: 4, label: "Henrique" },
  ]);

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  const [value, setValue] = React.useState<DateRange<Date>>([null, null]);

  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const [openModal, setOpenModal] = React.useState(false);

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            SCIP
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            "Dashboard",
            "Projetos",
            "Lançamentos",
            "Usúarios",
            "Clientes",
            "Relatórios",
          ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["Configurações", "Sair"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingBottom: "1.6rem",
          }}
        >
          <Typography
            style={{ color: "black", fontSize: "2rem", fontWeight: 700 }}
          >
            Projetos
          </Typography>
          <Button
            onClick={handleClickOpen}
            style={{
              backgroundColor: "#0575E6",
              color: "white",
              padding: "0.8rem 1.6rem",
              fontWeight: 700,
            }}
          >
            + Add novo projeto
          </Button>
        </div>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Nome</StyledTableCell>
                <StyledTableCell align="right">Custo</StyledTableCell>
                <StyledTableCell align="right">Interações</StyledTableCell>
                <StyledTableCell align="right">Pontuação</StyledTableCell>
                <StyledTableCell align="right">Ordem</StyledTableCell>
                <StyledTableCell align="right">Categorias</StyledTableCell>
                <StyledTableCell align="right">Ações</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.nome}>
                  <StyledTableCell
                    component="th"
                    scope="row"
                    style={{ color: "#223354", fontWeight: 700 }}
                  >
                    {row.nome}
                  </StyledTableCell>
                  <StyledTableCell align="right" style={{ fontWeight: 700 }}>
                    {row.custos}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <mark
                      style={{
                        color: "#3BB900",
                        fontWeight: 700,
                        backgroundColor: "#ECFBE6",
                        padding: "0.8rem",
                      }}
                    >
                      {row.interacoes}
                    </mark>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <img src={Fire} /> {row.pontuacao}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.ordem}</StyledTableCell>
                  <StyledTableCell align="right" style={{ color: "#1A75FF" }}>
                    {row.categorias}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.acoes}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <div>
          <Dialog open={openModal} onClose={handleClose}>
            <DialogTitle>Adicionar novo projeto</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Preencha todos os campos com os dados do seu projeto
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Digite o nome do projeto"
                type="text"
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Digite a descrição do projeto"
                type="text"
                multiline
                rows={4}
                fullWidth
              />
              <Box sx={{ minWidth: 120 }} style={{ marginTop: "1.4rem" }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Cliente</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Cliente"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Roberto Silva</MenuItem>
                    <MenuItem value={20}>Silvio Machado</MenuItem>
                    <MenuItem value={30}>Carlos Augusto</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ minWidth: 120 }} style={{ marginTop: "1.4rem" }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Prioridade
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Prioridade"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>
                      <mark
                        style={{
                          backgroundColor: "#3BB900",
                          color: "#ECFBE6",
                          padding: "0.4rem 1.2rem",
                        }}
                      >
                        Baixa
                      </mark>
                    </MenuItem>
                    <MenuItem value={20}>
                      {" "}
                      <mark
                        style={{
                          backgroundColor: "#FFB946",
                          color: "#FFFFFF",
                          padding: "0.4rem 1.2rem",
                        }}
                      >
                        Média
                      </mark>
                    </MenuItem>
                    <MenuItem value={30}>
                      {" "}
                      <mark
                        style={{
                          backgroundColor: "#F7685B",
                          color: "#FFFFFF",
                          padding: "0.4rem 1.2rem",
                        }}
                      >
                        Alta
                      </mark>
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <div style={{ marginTop: "1.4rem" }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateRangePicker
                    startText="Data inicial"
                    endText="Data final"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(startProps, endProps) => (
                      <React.Fragment>
                        <TextField {...startProps} />
                        <Box sx={{ mx: 2 }}> até </Box>
                        <TextField {...endProps} />
                      </React.Fragment>
                    )}
                  />
                </LocalizationProvider>
              </div>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Valor"
                type="number"
                fullWidth
                variant="standard"
              />

              <Typography style={{paddingTop: "1.6rem", paddingBottom: "0.4rem"}}>
                Membros
              </Typography>
              <Paper
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  listStyle: "none",
                  p: 0.5,
                  m: 0,
                }}
                component="ul"
              >
                {chipData.map((data) => {
                  let icon;

                  if (data.label === "React") {
                    icon = <TagFacesIcon />;
                  }

                  return (
                    <ListItemChip key={data.key}>
                      <Chip
                        icon={icon}
                        label={data.label}
                        onDelete={
                          data.label === "React"
                            ? undefined
                            : handleDelete(data)
                        }
                      />
                    </ListItemChip>
                  );
                })}
              </Paper>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancelar</Button>
              <Button onClick={handleClose}>Enviar</Button>
            </DialogActions>
          </Dialog>
        </div>
      </Box>
    </Box>
  );
}
