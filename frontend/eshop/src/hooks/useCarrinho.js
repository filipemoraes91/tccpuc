import { useEffect, useState } from 'react';
import api from '../services';
import { getInfUser } from '../utils';

const useCarrinho = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [itens, setItens] = useState([]);
  const [qtdeItens, setQtdeItens] = useState(0);

  const postItemCarrinho = async (item) => {
    try {
      setIsLoading(true);
      let data = { usuarioID: getInfUser().id, produtoID: item.ID, Quantidade: 1 }
      const response = await api.post('/carrinho', data);
      setIsLoading(false);
      alert(response.data.message);
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  const getItens = async () => {
    // try {
    //   setIsLoading(true);
    const response = await api.get('/carrinho');
    // setIsLoading(false);
    setItens(response.data);
    // } catch (err) {
    // alert(err.response.data.message);
    // }
  };

  const getQtdeItens = async () => {
    // try {
    //   setIsLoading(true);
    const response = await api.get('/carrinhoqtde');
    // setIsLoading(false);
    setQtdeItens(response.data.itens);
    // } catch (err) {
    // alert(err.response.data.message);
    // }
  };


  return { postItemCarrinho, getQtdeItens, getItens, qtdeItens, itens, isLoading, error };
};

export default useCarrinho;
