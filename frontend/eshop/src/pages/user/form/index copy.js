import React, { useEffect, useState } from 'react';
import { Paper } from '@mui/material';
import { iniUser } from '../../../inicialization/initial';
import { TFDefault } from '../../../components/inputs/textField';
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
    if (id > 0) {
      getUsuario(id);
      setUser(usuario);
    } else {
      setUser(iniUser);
    }
  }, [isLoading])


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    if (id > 0) {
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
    } else {
      postUsuario({
        ID: id,
        Nome: user.Nome,
        Email: user.Email,
        Senha: user.Senha,
        Rua: user.Rua,
        Numero: parseInt(user.Numero),
        CEP: user.CEP,
        Cidade: user.Cidade,
        Estado: user.Estado,
        PerfilID: user.PerfilID
      });
    }
    console.log({
      ID: id,
      Nome: user.Nome,
      Email: user.Email,
      Senha: user.Senha,
      Rua: user.Rua,
      Numero: user.Numero,
      CEP: user.CEP,
      Cidade: user.Cidade,
      Estado: user.Estado,
      PerfilID: user.PerfilID
    })
    e.preventDefault();
    // window.location.href = '/usuarios'
  };

  return (
    <ContainerPages>
      <ToolBarPages title='Cadastro de Usuario' />
      <br />
      <form onSubmit={handleSubmit}>
        <Paper elevation={1} style={{ background: 'rgb(0,0,0,0)', padding: '5px' }}>
          <StackJustify>
            <TFDefault fullWidth={true} name="Nome" label="Nome" value={user.Nome} onChange={handleInputChange} />
            <TFDefault fullWidth={true} name="Email" label="Email" value={user.Email} onChange={handleInputChange}/>
            <SelectPerfil name='PerfilID' value={user.PerfilID} onChange={handleInputChange} />
          </StackJustify>
          <br />
          <StackJustify>
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
            <BtnCancelar onClick={() => window.location.href = '/usuarios'}/>
          </StackRight>
        </Paper>
      </form>
    </ContainerPages>
  );
};
