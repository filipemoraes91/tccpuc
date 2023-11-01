import { useEffect, useState } from 'react';
import api from '../services';

const useProdutos = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [produtos, setProdutos] = useState([]);

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

  const getProdutos = async () => {
    // try {
    //   setIsLoading(true);
      const response = await api.get('/produtos');
      // setIsLoading(false);
      setProdutos(response.data);
    // } catch (err) {
      // alert(err.response.data.message);
    // }
  };

  useEffect(() => {
    getProdutos();
  }, [])

  return { postProduto, produtos, isLoading, error };
};

export default useProdutos;
