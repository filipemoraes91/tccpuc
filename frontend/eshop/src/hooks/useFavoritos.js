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
      let data = { usuarioID: parseInt(getInfUser().id), produtoID: parseInt(item.ID) }
      const response = await api.post('/favoritos', data);
      setIsLoading(false);
      console.log(response)
      alert(response.data.message);
      window.location.href = '/home'
    } catch (err) {
      alert(err);
    }
  };

  const getFavoritos = async () => {
    try {
      setIsLoading(true);
      const response = await api.get('/favoritos');
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
      window.location.href = '/favoritos'
    } catch (err) {
      alert(err);
    }
  };


  return { postFavoritos, deleteFavoritos, getFavoritos, favoritos, isLoading, error };
};

export default useFavoritos;
