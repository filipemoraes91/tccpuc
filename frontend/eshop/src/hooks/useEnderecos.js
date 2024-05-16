import { useState } from 'react';
import api from '../services';

const useEnderecos = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [endereco, setEndereco] = useState({});
    const [listEnderecos, setListEnderecos] = useState([]);

    const postEndereco = async (endereco) => {
        try {
            setIsLoading(true);
            const response = await api.post(`/endereco`, endereco);
            alert(response.data.message);
        } catch (err) {
            alert(err.response.data.message);
        }
        setIsLoading(false);
    };

    const putEndereco = async (endereco) => {
        try {
            setIsLoading(true);
            const response = await api.put(`/endereco/${endereco.ID}/${endereco.UsuarioID}`, endereco);
            alert(response.data.message);
        } catch (err) {
            alert(err.response.data.message);
        }
        setIsLoading(false);
    };


    const getEnderecos = async (id) => {
        try {
            setIsLoading(true);
            const response = await api.get(`/enderecos/${id}`);
            setIsLoading(false);
            setListEnderecos(response.data);
        } catch (err) {
            alert(err.response.data.message);
        }
    };

    const getEndereco = async (id) => {
        try {
            setIsLoading(true);
            const response = await api.get(`/endereco/${id}`);
            setIsLoading(false);
            setEndereco(response.data[0]);
        } catch (err) {
            alert(err.response.data.message);
        }
    };

    return { postEndereco, putEndereco, getEnderecos, getEndereco, listEnderecos, endereco, isLoading };
};

export default useEnderecos;
