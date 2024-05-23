import { useState } from 'react';
import api from '../services';

const 
useEnderecos = () => {
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
            const response = await api.put(`/endereco/${endereco.UsuarioID}/${endereco.ID}`, endereco);
            alert(response.data.message);
            window.location.href = `/meuperfil/${endereco.UsuarioID}`;
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

    const getEndereco = async (id, idEnd) => {
        try {
            setIsLoading(true);
            const response = await api.get(`/endereco/${id}/${idEnd}`);
            setIsLoading(false);
            setEndereco(response.data[0]);
        } catch (err) {
            alert(err.response.data.message);
        }
    };

    
  const deleteEndereco = async (id) => {
    try {
      setIsLoading(true);
      const response = await api.delete(`/endereco/delete/${id}`);
      alert(response.data.message);
      window.location.reload();
    } catch (err) {
      alert(err.response.data.message);
    }
    setIsLoading(false);
  }

    return { postEndereco, putEndereco, getEnderecos, getEndereco, deleteEndereco, listEnderecos, endereco, isLoading };
};

export default useEnderecos;
