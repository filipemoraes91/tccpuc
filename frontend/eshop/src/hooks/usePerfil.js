import { useState } from "react";
import axios from "../services";
import api from "../services";

const usePerfil = () => {
  const token = 'Bearer ' + sessionStorage.getItem('token_sac');
  const [isLoading, setIsLoading] = useState(false);
  const [perfil, setPerfil] = useState();
  const [listPerfil, setListPerfil] = useState([]);



  async function getPerfil(id) {
    if (id > 0) {
      const response = await axios.get(`/perfil/${id}`);
      setPerfil(response.data[0]);
    } else {
      const response = await axios.get('/perfil');
      setListPerfil(response.data);
    }
    setIsLoading(true)
  }

  const postPerfil = async (perfil) => {
    try {
      setIsLoading(true);
      const response = await api.post('/perfil/novo', perfil);
      alert(response.data.message);
      window.location.href = '/perfil'
    } catch (err) {
      alert(err.response.data.message);
    }
    setIsLoading(false);
  };

  const putPerfil = async (perfil) => {
    try {
      const response = await api.put(`/perfil/editar/${perfil.ID}`, perfil);
      alert(response.data.message);
    } catch (err) {
      alert(err.response.data.message);
    }
  };


  const deletePerfil = async (id) => {
    try {
      setIsLoading(true);
      const response = await api.delete(`/perfil/delete/${id}`);
      alert(response.data.message);
      window.location.reload();
    } catch (err) {
      alert(err.response.data.message);
    }
    setIsLoading(false);
  }


  return { perfil, postPerfil, putPerfil, getPerfil, deletePerfil, listPerfil, isLoading };
}

export default usePerfil;