import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useApiIBGE from '../../../hooks/useApiIBGE';
import usePerfil from '../../../hooks/usePerfil';

export default function SelectUF(props) {
    const { getUFs, ufs } = useApiIBGE();

    React.useEffect(() => {
        getUFs();
    }, [])

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
                disabled={props.disabled}
            >
                {ufs.map(ListUfs)}
            </Select>
        </FormControl>
    );
}

export function SelectMun(props) {
    const { municipios, getMun } = useApiIBGE();

    React.useEffect(() => {
        if (props.uf) {
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
                disabled={props.disabled}
            >
                {municipios.map(ListMun)}
            </Select>
        </FormControl>
    );
}

export function SelectParc(props) {
    return (
        <FormControl fullWidth size='small'>
            <InputLabel id="Parcelamento">Parcelamento</InputLabel>
            <Select
                labelId="Parcelamento"
                id="Parcelamento"
                name={props.name}
                value={props.value}
                label="Parcelamento"
                onChange={props.onChange}
            >
                <MenuItem value={1}>1 vez</MenuItem>
                <MenuItem value={2}>2 vezes</MenuItem>
                <MenuItem value={3}>3 vezes</MenuItem>
                <MenuItem value={4}>4 vezes</MenuItem>
                <MenuItem value={5}>5 vezes</MenuItem>
                <MenuItem value={6}>6 vezes</MenuItem>
                <MenuItem value={7}>7 vezes</MenuItem>
                <MenuItem value={8}>8 vezes</MenuItem>
                <MenuItem value={9}>9 vezes</MenuItem>
                <MenuItem value={10}>10 vezes</MenuItem>
            </Select>
        </FormControl>
    );
}
export function SelectPerfil(props) {
    const { listPerfil, getPerfil } = usePerfil();

    React.useEffect(() => {
        getPerfil()
    }, [])

    function ListPerfil(perfil, p) {
        return <MenuItem key={p} value={perfil.ID}>{perfil.Nome}</MenuItem>
    }
    return (
        <FormControl fullWidth size='small'>
            <InputLabel id="Perfil">Perfil</InputLabel>
            <Select
                labelId="Perfil"
                id="Perfil"
                name={props.name}
                value={props.value}
                label="Perfil"
                onChange={props.onChange}
            >
                {listPerfil.map(ListPerfil)}
            </Select>
        </FormControl>
    );
}