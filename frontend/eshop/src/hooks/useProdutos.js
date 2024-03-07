import { useState } from 'react';
import api from '../services';

const useProdutos = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [produtos, setProdutos] = useState([]);
  const [produto, setProduto] = useState({});

  const postProduto = async (produto) => {
    try {
      setIsLoading(true);
      const response = await api.post('/produtos/novo', produto);
      alert(response.data.message);
    } catch (err) {
      alert(err.response.data.message);
    }
    setIsLoading(false);
  };

  const putProduto = async (produto) => {
    try {
      const response = await api.put(`/produtos/editar/${produto.ID}`, produto);
      alert(response.data.message);
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  const getProdutos = async () => {
    try {
      setIsLoading(true);
      const response = await api.get('/produtos');
      setIsLoading(false);
      setProdutos(response.data);
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  const getProduto = async (id) => {
    try {
      setIsLoading(true);
      const response = await api.get(`/produtos/${id}`);
      setIsLoading(false);
      setProduto(response.data[0]);
    } catch (err) {
      alert(err.response.data.message);
    }
  };


  const deleteProduto = async (id) => {
    try {
      setIsLoading(true);
      const response = await api.delete(`/produtos/delete/${id}`);
      alert(response.data.message);
    } catch (err) {
      alert(err.response.data.message);
    }
    setIsLoading(false);
  }

  return { postProduto, getProdutos, getProduto, putProduto, deleteProduto, produtos, produto, isLoading, error };
};

export default useProdutos;
