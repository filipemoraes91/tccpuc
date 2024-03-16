import React, { useEffect } from "react";
import ToolBarPages from "../../../components/surfaces/toolBar";
import { Box, Paper } from "@mui/material";
import { ContainerPages } from "../../../components/layout/container";
import useUsuarios from "../../../hooks/useUsuarios";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { StackJustify } from "../../../components/layout/stack";
import { BtnDelete, BtnEditar } from "../../../components/inputs/button";
import { TGMedio } from "../../../components/dataDisplay/typography";

export default function ListUser() {
  const { getUsuarios, listUsuarios } = useUsuarios();

  useEffect(() => {
    getUsuarios();
  }, [])

  function ListUsuarios(usuario, u) {
    return <ListItem key={`item-${usuario.ID}-${u}`}>
      <ListItemText>
        <StackJustify>
          <Box>
            <TGMedio text={usuario.ID + ' - ' + usuario.Nome} />
          </Box>
          <Box>
            <BtnEditar onClick={() => window.location.href = `/usuarios/editar/${usuario.ID}`} />
            <span style={{ padding: '5px' }} />
            <BtnDelete onClick={() => console.log('excluido')} />
          </Box>
        </StackJustify>
      </ListItemText>
    </ListItem>
  }

  return (
    <ContainerPages >
      <ToolBarPages title='Cadastro de Usuários' btnVisible onClickNovo={() => window.location.href = '/usuarios/novo'} />
      <br />
      <Paper elevation={1} style={{ background: 'rgb(0,0,0,0)', padding: '5px' }}>
        <Box p={1}>
          <List>
            {listUsuarios ? listUsuarios.map(ListUsuarios) : <h1>Aguarde...</h1>}
          </List>
        </Box>
      </Paper>
    </ContainerPages >
  )
}