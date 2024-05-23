import React, { useEffect, useState } from 'react';
import { Paper } from '@mui/material';
import { iniEndereco } from '../../../inicialization/initial';
import { TFDefault } from '../../../components/inputs/textField';
import { BtnCancelar, BtnSalvar } from '../../../components/inputs/button';
import { StackJustify, StackRight } from '../../../components/layout/stack';
import SelectUF, { SelectMun } from '../../../components/inputs/select';
import { ContainerPages } from '../../../components/layout/container';
import ToolBarPages from '../../../components/surfaces/toolBar';
import { useParams } from 'react-router-dom';
import useEnderecos from '../../../hooks/useEnderecos';

export default function CadEndereco() {
  const { postEndereco, getEndereco, putEndereco, endereco, isLoading } = useEnderecos();
  const [end, setEnd] = useState(iniEndereco);
  const { usuario, id } = useParams();

  useEffect(() => {
    if (id > 0) {
      getEndereco(id);
      setEnd(endereco);
    } else {
      setEnd(iniEndereco);
    }
  }, [isLoading])


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEnd({ ...end, [name]: value });
  };

  const handleSubmit = (e) => {
    if (id > 0) {
      putEndereco({
        ID: id,
        UsuarioID: parseInt(usuario),
        Rua: end.Rua,
        Numero: parseInt(end.Numero),
        CEP: end.CEP,
        Cidade: end.Cidade,
        Estado: end.Estado,
        Complemento: end.Complemento,
        Descricao: end.Descricao
      })
    } else {
      postEndereco({
        ID: id,
        UsuarioID: parseInt(usuario),
        Rua: end.Rua,
        Numero: parseInt(end.Numero),
        CEP: end.CEP,
        Cidade: end.Cidade,
        Estado: end.Estado,
        Complemento: end.Complemento,
        Descricao: end.Descricao
      });
    }
    e.preventDefault();
    // window.location.href = `/meuperfil/${idUser}`
  };

  return (
    <ContainerPages>
      <ToolBarPages title='Cadastro de Endereço' />
      <br />
      <form onSubmit={handleSubmit}>
        <Paper elevation={1} style={{ background: 'rgb(0,0,0,0)', padding: '5px' }}>
          <StackJustify>
            <TFDefault fullWidth={true} label="Descricao" name='Descricao' value={end.Descricao} onChange={handleInputChange} />
          </StackJustify>
          <br />
          <StackJustify>
            <SelectUF name='Estado' onChange={handleInputChange} value={end.Estado} />
            <SelectMun uf={end.Estado} name='Cidade' onChange={handleInputChange} value={end.Cidade} />
          </StackJustify>
          <br />
          <StackJustify>
            <TFDefault fullWidth={true} label="Número" name='Numero' value={end.Numero} onChange={handleInputChange} />
            <TFDefault fullWidth={true} label="Rua" name='Rua' value={end.Rua} onChange={handleInputChange} />
            <TFDefault fullWidth={true} label="CEP" name='CEP' value={end.CEP} onChange={handleInputChange} />
          </StackJustify>
          <br />
          <StackJustify>
            <TFDefault fullWidth={true} label="Complemento" multiline={true} rows={3} name='Complemento' value={end.Complemento} onChange={handleInputChange} />
          </StackJustify>
          <br />
          <StackRight>
            <BtnSalvar />
            <BtnCancelar onClick={() => window.location.href = `/meuperfil/${usuario}`} />
          </StackRight>
        </Paper>
      </form>
    </ContainerPages>
  );
};
