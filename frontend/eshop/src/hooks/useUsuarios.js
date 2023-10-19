import { useEffect, useState } from "react";
import axios from "../services/";
// import useToken from "./useToken";

const useUsuarios = () => {
  // const { renovaToken } = useToken();
  const token = 'Bearer ' + sessionStorage.getItem('token_sac');
  const [usuarios, setUsuarios] = useState([]);


  let config = {
    headers: {
      'Access-Control-Allow-Origin': '*'  
    }
  };
  async function getUsuarios() {
    const response = await axios.get('/usuarios', config);
    setUsuarios(response.data);
  }

  async function postUsuarios(usuario) {
    console.log(usuario);
    const response = await axios({
      method: 'post',
      url: '/usuarios',
      headers: {
        config
      },
      data: usuario,
    });
    console.log(response.data);
  }

  useEffect(() => {
    // getUsuarios();
    // postUsuarios();
    console.log(usuarios)
  }, [])




  return { postUsuarios, usuarios };
}

export default useUsuarios;