// https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios

import axios from 'axios';
import { useEffect, useState } from 'react';

const useApiIBGE = () => {
    const [ufs, setUfs] = useState([]);
    const [municipios, setMunicipios] = useState([]);

    const getUFs = async () => {
        let lista = JSON.parse(sessionStorage.getItem('ufs'));
        if (lista) {
            setUfs(lista);
        } else {
            const response = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
            localStorage.setItem('ufs', JSON.stringify(response.data));
            setUfs(response.data);
        }
    }

    const getMun = async (uf) => {
        let lista = JSON.parse(sessionStorage.getItem('municipios'));
        if (lista) {
            setMunicipios(lista);
        } else {
            const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`);
            setMunicipios(response.data);
        }
    }

    return { ufs, getUFs, getMun, municipios };
};

export default useApiIBGE;
