import { useState } from "react";
import axios from "../services";
import api from "../services";
import { iniPedido } from "../inicialization/initial";

const usePedido = () => {
  const token = 'Bearer ' + sessionStorage.getItem('token_sac');
  const [isLoading, setIsLoading] = useState(false);
  const [pedido, setPedido] = useState(iniPedido);
  const [listPedidos, setListPedido] = useState([]);

  async function getPedido(id) {
    const response = await axios.get(`/pedido/${id}`);
    setPedido(response.data);
    console.log(response.data)
    setIsLoading(true)
  }

  async function getPedidos(id) {
    const response = await axios.get(`/meuspedidos/${id}`);
    setListPedido(response.data);
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


  return { listPedidos, pedido, postPedido, getPedido, getPedidos, isLoading };
}

export default usePedido;