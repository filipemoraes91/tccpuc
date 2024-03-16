import { useState } from 'react';
import api from '../services';

const useUsuarios = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [usuario, setUsuario] = useState({});

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


    return { postUsuario, usuario, isLoading, error };
};

export default useUsuarios;
