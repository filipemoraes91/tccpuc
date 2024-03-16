import { useState } from "react";
import axios from "../services";
import api from "../services";

const usePerfil = () => {
  const token = 'Bearer ' + sessionStorage.getItem('token_sac');
  const [isLoading, setIsLoading] = useState(false);
  const [perfil, setPerfil] = useState();
  const [listPerfil, setListPerfil] = useState([]);



  async function getPerfil() {
    const response = await axios.get('/perfil');
    setListPerfil(response.data);
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

  const putPerfil = async (produto) => {
    console.log(produto)
    try {
      const response = await api.put(`/perfil/editar/${perfil.ID}`, perfil);
      alert(response.data.message);
    } catch (err) {
      alert(err.response.data.message);
    }
  };
  return { perfil, postPerfil, putPerfil, getPerfil, listPerfil };
}

export default usePerfil;