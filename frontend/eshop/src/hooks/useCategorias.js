import { useState } from "react";
import axios from "../services";
import api from "../services";

const useCategoria = () => {
  const token = 'Bearer ' + sessionStorage.getItem('token_sac');
  const [isLoading, setIsLoading] = useState(false);
  const [categoria, setCategoria] = useState({});
  const [listCategoria, setListCategoria] = useState([]);

  async function getCategoria(id) {
    try {
      setIsLoading(true)
      if (id > 0) {
        const response = await api.get(`/categoria/${id}`);
        setCategoria(response.data[0]);
        setIsLoading(false);
      } else {
        const response = await api.get('/categoria');
        setListCategoria(response.data);
        setIsLoading(false);
      }
    } catch (err) {
      alert(err.response.data.message);
    }
  }

  const postCategoria = async (categoria) => {
    try {
      setIsLoading(true);
      const response = await api.post('/categoria/novo', categoria);
      alert(response.data.message);
      window.location.href = '/categoria'
    } catch (err) {
      alert(err.response.data.message);
    }
    setIsLoading(false);
  };

  const putCategoria = async (categoria) => {
    try {
      const response = await api.put(`/categoria/editar/${categoria.ID}`, categoria);
      alert(response.data.message);
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  const deleteCategoria = async (id) => {
    try {
      setIsLoading(true);
      const response = await api.delete(`/categoria/delete/${id}`);
      alert(response.data.message);
      window.location.reload();
    } catch (err) {
      alert(err.response.data.message);
    }
    setIsLoading(false);
  }

  return { categoria, postCategoria, putCategoria, getCategoria, deleteCategoria, listCategoria, isLoading };
}

export default useCategoria;