import React, { useState, useEffect } from "react";
import ToolBarPages from "../../../components/surfaces/toolBar";
import { Box, Paper } from "@mui/material";
import { ContainerPages } from "../../../components/layout/container";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { StackJustify, StackRight } from "../../../components/layout/stack";
import { BtnDelete, BtnEditar, BtnSalvar } from "../../../components/inputs/button";
import { TGMedio } from "../../../components/dataDisplay/typography";
import useUsuarios from "../../../hooks/useUsuarios";
import { iniUser } from "../../../inicialization/initial";
import { useParams } from "react-router-dom";
import { TFDefault } from "../../../components/inputs/textField";
import useEnderecos from "../../../hooks/useEnderecos";

export default function MeuPerfil() {
  const { getUsuario, putUsuario, usuario, isLoading } = useUsuarios();
  const { getEnderecos, listEnderecos, deleteEndereco } = useEnderecos();
  const [user, setUser] = useState(iniUser);
  const { id } = useParams();

  useEffect(() => {
    if (id > 0) {
      getUsuario(id);
      getEnderecos(id);
    }
  }, [])

  useEffect(() => {
    setUser({ ...usuario, ConfirmarSenha: usuario.Senha });
  }, [isLoading])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    if (user.Senha !== user.ConfirmarSenha) {
      alert('As senhas não conferem!');
      return '';
    } else {
      putUsuario({
        ID: id,
        Nome: user.Nome,
        Email: user.Email,
        Senha: user.Senha,
        CPF: user.CPF,
        Telefone: user.Telefone,
        PerfilID: user.PerfilID
      }, 'usuarioDados')      
    }
    e.preventDefault();
  };

  function ListarEnderecos(end, e) {
    return <ListItem key={`item-${end.ID}-${e}`}>
      <ListItemText>
        <StackJustify>
          <Box>
            <TGMedio text={end.ID + ' - ' + end.Descricao} />
          </Box>
          <Box>
            <BtnEditar onClick={() => window.location.href = `/meuperfil/editar/${usuario.ID}/endereco/${end.ID}`} />
            <span style={{ padding: '5px' }} />
            <BtnDelete onClick={() => deleteEndereco(end.ID)} />
          </Box>
        </StackJustify>
      </ListItemText>
    </ListItem>
  }


  return (
    <ContainerPages >
      <ToolBarPages title='Meu Perfil' btnVisible={false} />
      <br />
      <Paper elevation={1} style={{ background: 'rgb(0,0,0,0)', padding: '5px' }}>
        <form onSubmit={handleSubmit}>
          <Paper elevation={1} style={{ padding: '15px' }}>
            <StackJustify>
              <TFDefault name="Nome" fullWidth={true} label="Nome" value={user.Nome} onChange={handleInputChange} />
              <TFDefault name="Email" fullWidth={true} label="Email" value={user.Email} onChange={handleInputChange} />
            </StackJustify>
            <br />
            <StackJustify>
              <TFDefault name="CPF" fullWidth={true} label="CPF" value={user.CPF} onChange={handleInputChange} />
              <TFDefault name="Telefone" fullWidth={true} label="Telefone" value={user.Telefone} onChange={handleInputChange} />
            </StackJustify>
            <br />
            <StackJustify>
              <TFDefault name="Senha" fullWidth={true} type='password' label="Senha" value={user.Senha} onChange={handleInputChange} />
              <TFDefault name="ConfirmarSenha" fullWidth={true} type='password' label="Confirmar Senha" value={user.ConfirmarSenha} onChange={handleInputChange} />
            </StackJustify>
            <br />
            <StackRight>
              <BtnSalvar />
            </StackRight>
          </Paper>
          <br />
          <ToolBarPages title='Listagem de endereços' btnVisible={true} onClickNovo={() => window.location.href = `${id}/endereco/novo`} />
          <List>
            {listEnderecos ? listEnderecos.map(ListarEnderecos) : <TGMedio text='Nenhum endereço cadastrado.' />}
          </List>
        </form>
      </Paper>
    </ContainerPages >
  )
}