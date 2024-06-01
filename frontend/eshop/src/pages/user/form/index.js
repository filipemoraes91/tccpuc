import React, { useEffect, useState } from 'react';
import { Paper } from '@mui/material';
import { iniUser } from '../../../inicialization/initial';
import { TFDefault, TFPassword, TFPasswordConfirme } from '../../../components/inputs/textField';
import { BtnCancelar, BtnSalvar } from '../../../components/inputs/button';
import useUsuarios from '../../../hooks/useUsuarios';
import { getInfUser } from '../../../utils';
import { StackJustify, StackRight } from '../../../components/layout/stack';
import SelectUF, { SelectMun, SelectPerfil } from '../../../components/inputs/select';
import { ContainerPages } from '../../../components/layout/container';
import ToolBarPages from '../../../components/surfaces/toolBar';
import { useParams } from 'react-router-dom';

export default function CadUser() {
  const { postUsuario, getUsuario, putUsuario, usuario, isLoading } = useUsuarios();
  const [user, setUser] = useState(iniUser);
  const { id } = useParams();

  useEffect(() => {
    if (id > 0)
      getUsuario(id)
  }, [])


  useEffect(() => {
    if (usuario && !isLoading && window.location.pathname !== '/usuarios/novo')
      setUser(usuario);
  }, [isLoading])


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    if (id > 0) {
      putUsuario({
        ID: id,
        Nome: user.Nome,
        Email: user.Email,
        Senha: user.Senha,
        CPF: user.CPF,
      })
    } else {
      postUsuario({
        ID: id,
        Nome: user.Nome,
        Email: user.Email,
        Senha: user.Senha,
        PerfilID: user.PerfilID,
        CPF: user.CPF
      });
    }

    e.preventDefault();
    window.location.href = '/usuarios'
  };

  return (
    <ContainerPages>
      <ToolBarPages title='Cadastro de Usuario' />
      <br />
      <form onSubmit={handleSubmit}>
        <Paper elevation={1} style={{ background: 'rgb(0,0,0,0)', padding: '5px' }}>
          <StackJustify>
            <TFDefault fullWidth={true} name="Nome" label="Nome" value={user.Nome} onChange={handleInputChange} />
            <TFDefault fullWidth={true} name="Email" label="Email" value={user.Email} onChange={handleInputChange} />
          </StackJustify>
          <br />
          <StackJustify>
            <TFDefault fullWidth={true} name="CPF" label="CPF" value={user.CPF} onChange={handleInputChange} />
            <SelectPerfil name='PerfilID' value={user.PerfilID} />
          </StackJustify>
          <br />
          <StackJustify>
            <TFPassword value={user.Senha} onChange={handleInputChange} />
            <TFPasswordConfirme value={user.ConfirmarSenha} onChange={handleInputChange} />
          </StackJustify>
          <br />
          <StackRight>
            <BtnSalvar />
            <BtnCancelar onClick={() => window.location.href = '/usuarios'} />
          </StackRight>
        </Paper>
      </form>
    </ContainerPages>
  );
};
