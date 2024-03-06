import { useEffect, useState } from 'react';
import api from '../services';

const useProdutos = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [produtos, setProdutos] = useState([]);
  const [produto, setProduto] = useState({});

  const postProduto = async (produto) => {
    try {
      setIsLoading(true);
      const response = await api.post('/produtos', produto);
      setIsLoading(false);
      alert(response.data.message);
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  const putProduto = async (produto) => {
    try {
      const response = await api.put('/produtos/editar/:id', produto);
      alert(response.data.message);
    } catch (err) {
      alert(err.response.data.message);
    }
    window.location.href = '/produtos'
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
      const response = await api.get(`/produtos/editar/${id}`);
      setIsLoading(false);
      setProduto(response.data[0]);
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  // useEffect(() => {
  //   getProdutos();
  // }, [])

  return { postProduto, getProdutos, getProduto, putProduto, produtos, produto, isLoading, error };
};

export default useProdutos;
