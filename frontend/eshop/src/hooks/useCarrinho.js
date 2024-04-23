import { useState } from 'react';
import api from '../services';
import { getInfUser } from '../utils';

const useCarrinho = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [itens, setItens] = useState([]);
  const [qtdeItens, setQtdeItens] = useState(0);

  const postItemCarrinho = async (item) => {
    try {
      setIsLoading(true);
      if (getInfUser() !== null) {
        let data = { UsuarioID: getInfUser().ID, ProdutoID: item.ID, Quantidade: 1 }
        const response = await api.post('/carrinho', data);
        setIsLoading(false);
        alert(response.data.message);
      } else {
        alert('Para adicionar itens no carrinho é necessário fazer login.');
      }
      window.location.href = '/home'
    } catch (err) {
      alert(err);
    }
  };

  const getItens = async () => {
    try {
      setIsLoading(true);
      const response = await api.get('/carrinho');
      setIsLoading(false);
      setItens(response.data);
    } catch (err) {
      alert(err.response.data.message);
    }
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

  const deleteItens = async (ID) => {
    try {
      setIsLoading(true);
      const response = await api.delete(`/carrinho/${ID}`);
      setIsLoading(false);
      alert(response.data.message)
      window.location.href = '/carrinho'
    } catch (err) {
      alert(err);
    }
  };


  return { postItemCarrinho, getQtdeItens, deleteItens, getItens, qtdeItens, itens, isLoading };
};

export default useCarrinho;
