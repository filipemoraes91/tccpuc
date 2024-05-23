import { useState } from "react";
import axios from "../services";
import api from "../services";
import { iniPedido } from "../inicialization/initial";

const usePerfil = () => {
  const token = 'Bearer ' + sessionStorage.getItem('token_sac');
  const [isLoading, setIsLoading] = useState(false);
  const [pedido, setPedido] = useState(iniPedido);
  const [listPedido, setListPedido] = useState([]);



  async function getPedido(id) {
    if (id > 0) {
      const response = await axios.get(`/pedido/${id}`);
      setPedido(response.data[0]);
    } else {
      const response = await axios.get('/pedido');
      setListPedido(response.data);
    }
    setIsLoading(true)
  }

  const postPedido = async (pedido) => {
    try {
      setIsLoading(true);
      const response = await api.post('/pedido/novo', pedido);
      alert(response.data.message);
      window.location.href = '/home'
    } catch (err) {
      alert(err.response.data.message);
    }
    setIsLoading(false);
  };


  return { listPedido, pedido, postPedido, getPedido, isLoading };
}

export default usePerfil;