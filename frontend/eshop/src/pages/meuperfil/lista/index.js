import React, { useState, useEffect } from "react";
import ToolBarPages from "../../../components/surfaces/toolBar";
import { Box, Paper } from "@mui/material";
import { ContainerPages } from "../../../components/layout/container";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { StackJustify } from "../../../components/layout/stack";
import { BtnDelete, BtnEditar } from "../../../components/inputs/button";
import { TGMedio } from "../../../components/dataDisplay/typography";
import useUsuarios from "../../../hooks/useUsuarios";
import { iniUser } from "../../../inicialization/initial";
import { useParams } from "react-router-dom";
import { TFDefault } from "../../../components/inputs/textField";
import useEnderecos from "../../../hooks/useEnderecos";

export default function MeuPerfil() {
  const { getUsuario, putUsuario, usuario, isLoading } = useUsuarios();
  const { getEnderecos, listEnderecos } = useEnderecos();
  const [user, setUser] = useState(iniUser);
  const { id } = useParams();

  useEffect(() => {
    if (id > 0) {
      getUsuario(id);
      setUser(usuario);
    } else {
      setUser(iniUser);
    }
  }, [isLoading])

  useEffect(() => {
    if (id > 0) {
      getEnderecos(id);
    }
  }, [])




  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    putUsuario({
      ID: id,
      Nome: user.Nome,
      Email: user.Email,
      Senha: user.Senha,
      Rua: user.Rua,
      Numero: parseInt(user.Numero),
      CEP: user.CEP,
      Cidade: user.Cidade,
      Estado: user.Estado,
      Complemento: user.Complemento,
      PerfilID: user.PerfilID
    })
    e.preventDefault();
    window.location.href = `/meuperfil/${id}`
  };

  function ListarEnderecos(end, e) {
    return <ListItem key={`item-${end.ID}-${e}`}>
      <ListItemText>
        <StackJustify>
          <Box>
            <TGMedio text={end.ID + ' - ' + end.Descricao} />
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
      <ToolBarPages title='Meu Perfil' btnVisible={false} />
      <br />
      <Paper elevation={1} style={{ background: 'rgb(0,0,0,0)', padding: '5px' }}>
        <form onSubmit={handleSubmit}>
          <Paper elevation={1} style={{ background: 'rgb(0,0,0,0)', padding: '5px' }}>
            <StackJustify>
              <TFDefault fullWidth={true} label="Nome" value={user.Nome} disabled={true} />
              <TFDefault fullWidth={true} label="Email" value={user.Email} disabled={true} />
              <TFDefault fullWidth={true} label="Senha" value={user.Email} disabled={true} />
            </StackJustify>
          </Paper>
          <br />
          <ToolBarPages title='Listagem de endereços' btnVisible={true} onClickNovo={() => window.location.href = `${id}/endereco/novo`} />
          {listEnderecos ? listEnderecos.map(ListarEnderecos) : <TGMedio text='Nenhum endereço cadastrado.' />}
          {/* <StackJustify>
              <SelectUF name='Estado' onChange={handleInputChange} value={user.Estado} />
              <SelectMun uf={user.Estado} name='Cidade' onChange={handleInputChange} value={user.Cidade} />
            </StackJustify>
            <br />
            <StackJustify>
              <TFDefault fullWidth={true} label="Número" name='Numero' value={user.Numero} onChange={handleInputChange} />
              <TFDefault fullWidth={true} label="Rua" name='Rua' value={user.Rua} onChange={handleInputChange} />
              <TFDefault fullWidth={true} label="CEP" name='CEP' value={user.CEP} onChange={handleInputChange} />
            </StackJustify>
            <br />
            <StackJustify>
              <TFDefault fullWidth={true} label="Complemento" multiline={true} rows={3} name='Complemento' value={user.Complemento} onChange={handleInputChange} />
            </StackJustify>
            <br />
            <StackRight>
              <BtnSalvar />
              <BtnCancelar onClick={() => window.location.href = '/meuperfil'} />
            </StackRight> */}
        </form>
      </Paper>
    </ContainerPages >
  )
}