import { useState } from 'react';
import api from '../services';
import { getInfUser } from '../utils';

const useFavoritos = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [favoritos, setFavoritos] = useState([]);

  const postFavoritos = async (item) => {
    console.log(item);
    try {
      setIsLoading(true);
      if (getInfUser() !== null) {
        let data = { usuarioID: parseInt(getInfUser().ID), produtoID: parseInt(item.ID) }
        const response = await api.post('/favoritos', data);
        setIsLoading(false);
        alert(response.data.message);
      } else {
        alert('Para adicionar itens aos favoritos é necessário fazer login.');
      }
      window.location.href = '/home'
    } catch (err) {
      alert(err);
    }
  };

  const getFavoritos = async (id) => {
    try {
      setIsLoading(true);
      const response = await api.get(`/favoritos/${id}`);
      setIsLoading(false);
      setFavoritos(response.data);
      console.log(response.data);
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  const deleteFavoritos = async (ID) => {
    try {
      setIsLoading(true);
      const response = await api.delete(`/favoritos/${ID}`);
      setIsLoading(false);
      alert(response.data.message)
      window.location.href = `/favoritos/${getInfUser().ID}`
    } catch (err) {
      alert(err);
    }
  };


  return { postFavoritos, deleteFavoritos, getFavoritos, favoritos, isLoading, error };
};

export default useFavoritos;
