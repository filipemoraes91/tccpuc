import { useState } from 'react';
import api from '../services';
import { iniUser } from '../inicialization/initial';

const useUsuarios = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [usuario, setUsuario] = useState(iniUser);
    const [listUsuarios, setListUsuarios] = useState([]);

    const postUsuario = async (usuario) => {
        try {
            setIsLoading(true);
            const response = await api.post('/usuario/novo', usuario);
            alert(response.data.message);
        } catch (err) {
            alert(err.response.data.message);
        }
        setIsLoading(false);
    };

    const putUsuario = async (usuario, tipo) => {
        try {
            if (tipo === 'usuarioDados') {
                setIsLoading(true);
                const response = await api.put(`/usuarioDados/${usuario.ID}`, usuario);
                alert(response.data.message);
            } else {
                setIsLoading(true);
                const response = await api.put(`/usuario/${usuario.ID}`, usuario);
                alert(response.data.message);
            }
        } catch (err) {
            alert(err.response.data.message);
        }
        setIsLoading(false);
    };


    const getUsuarios = async () => {
        try {
            setIsLoading(true);
            const response = await api.get('/usuarios');
            setIsLoading(false);
            setListUsuarios(response.data);
        } catch (err) {
            alert(err.response.data.message);
        }
    };

    const getUsuario = async (id) => {
        try {
            setIsLoading(true);
            const response = await api.get(`/usuarios/${id}`);
            setIsLoading(false);
            setUsuario(response.data[0]);
        } catch (err) {
            alert(err.response.data.message);
        }
    };

    return { postUsuario, putUsuario, getUsuarios, getUsuario, listUsuarios, usuario, isLoading };
};

export default useUsuarios;
