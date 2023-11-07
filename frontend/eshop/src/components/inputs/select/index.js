import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useApiIBGE from '../../../hooks/useApiIBGE';

export default function SelectUF(props) {
    const { ufs } = useApiIBGE();

    function ListUfs(uf, u) {
        return <MenuItem key={u} value={uf.sigla}>{uf.nome}</MenuItem>
    }
    return (
        <FormControl fullWidth size='small'>
            <InputLabel id="UF">UF</InputLabel>
            <Select
                labelId="uf"
                id="uf"
                name={props.name}
                value={props.value}
                label="UsF"
                onChange={props.onChange}
            >
                {ufs.map(ListUfs)}
            </Select>
        </FormControl>
    );
}

export function SelectMun(props) {
    const { municipios, getMun } = useApiIBGE();

    React.useEffect(() => {
      if(props.uf){
        getMun(props.uf)
      }
    }, [props.uf])

    function ListMun(mun, m) {
        return <MenuItem key={m} value={mun.nome}>{mun.nome}</MenuItem>
    }
    return (
        <FormControl fullWidth size='small'>
            <InputLabel id="Municipio">Município</InputLabel>
            <Select
                labelId="Municipio"
                id="Municipio"
                name={props.name}
                value={props.value}
                label="Municipio"
                onChange={props.onChange}
            >
                {municipios.map(ListMun)}
            </Select>
        </FormControl>
    );
}