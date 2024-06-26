import React, { useEffect } from "react";
import ToolBarPages from "../../../components/surfaces/toolBar";
import { Box, Paper } from "@mui/material";
import { ContainerPages } from "../../../components/layout/container";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { StackJustify } from "../../../components/layout/stack";
import { BtnDelete, BtnEditar } from "../../../components/inputs/button";
import { TGMedio } from "../../../components/dataDisplay/typography";
import useCategorias from "../../../hooks/useCategorias";

export default function ListCategoria() {
  const { getCategoria, listCategoria , deleteCategoria } = useCategorias();

  useEffect(() => {
    getCategoria();
    console.log(listCategoria);
  }, [])

  function ListarCategoria(categoria, c) {
    return <ListItem key={`item-${categoria.ID}-${c}`}>
      <ListItemText>
        <StackJustify>
          <Box>
            <TGMedio text={categoria.ID + ' - ' + categoria.Nome} />
          </Box>
          <Box>
            <BtnEditar onClick={() => window.location.href = `/categoria/editar/${categoria.ID}`} />
            <span style={{ padding: '5px' }} />
            <BtnDelete onClick={() => deleteCategoria(categoria.ID)} />
          </Box>
        </StackJustify>
      </ListItemText>
    </ListItem>
  }

  return (
    <ContainerPages >
      <ToolBarPages title='Cadastro de Categoria' btnVisible onClickNovo={() => window.location.href = '/categoria/novo'} />
      <br />
      <Paper elevation={1} style={{ background: 'rgb(0,0,0,0)', padding: '5px' }}>
        <Box p={1}>
          <List>
            {listCategoria ? listCategoria.map(ListarCategoria) : <h1>Aguarde...</h1>}
          </List>
        </Box>
      </Paper>
    </ContainerPages >
  )
}