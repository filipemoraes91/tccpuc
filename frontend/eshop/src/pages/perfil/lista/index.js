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
import usePerfil from "../../../hooks/usePerfil";

export default function ListPerfil() {
  const { getPerfil, listPerfil } = usePerfil();

  useEffect(() => {
    getPerfil();
  }, [])

  function ListPerfil(perfil, p) {
    return <ListItem key={`item-${perfil.ID}-${p}`}>
      <ListItemText>
        <StackJustify>
          <Box>
            <TGMedio text={perfil.ID + ' - ' + perfil.Nome} />
          </Box>
          <Box>
            <BtnEditar onClick={() => window.location.href = `/perfil/editar/${perfil.ID}`} />
            <span style={{ padding: '5px' }} />
            <BtnDelete onClick={() => console.log('excluido')} />
          </Box>
        </StackJustify>
      </ListItemText>
    </ListItem>
  }

  return (
    <ContainerPages >
      <ToolBarPages title='Cadastro de Perfil' btnVisible onClickNovo={() => window.location.href = '/perfil/novo'} />
      <br />
      <Paper elevation={1} style={{ background: 'rgb(0,0,0,0)', padding: '5px' }}>
        <Box p={1}>
          <List>
            {listPerfil ? listPerfil.map(ListPerfil) : <h1>Aguarde...</h1>}
          </List>
        </Box>
      </Paper>
    </ContainerPages >
  )
}