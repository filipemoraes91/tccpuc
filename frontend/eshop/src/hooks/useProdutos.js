import { useState } from 'react';
import api from '../services';


const useProdutos = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const postProduto = async (produto) => {
    try {
      setIsLoading(true);
      const response = await api.post('/produtos', produto); 
      setIsLoading(false);
      return response.data; // Se você quiser retornar alguma informação da resposta, ajuste isso conforme necessário.
    } catch (err) {
      setIsLoading(false);
      setError(err);
      throw err;
    }
  };

  return { postProduto, isLoading, error };
};

export default useProdutos;
