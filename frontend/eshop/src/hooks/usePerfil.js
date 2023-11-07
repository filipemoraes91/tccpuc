import { useEffect, useState } from "react";
import axios from "../services";
// import useToken from "./useToken";

const usePerfil = () => {
  // const { renovaToken } = useToken();
  const token = 'Bearer ' + sessionStorage.getItem('token_sac');
  const [perfil, setPerfil] = useState([]);


  let config = {
    headers: {
      'Access-Control-Allow-Origin': '*'  
    }
  };
  async function getPerfil() {
    const response = await axios.get('/perfil', config);
    setPerfil(response.data);
  }

  async function postPerfil(perfil) {
    console.log(perfil);
    const response = await axios({
      method: 'post',
      url: '/endereco',
      headers: {
        config
      },
      data: perfil,
    });
    alert(response.data);
  }

  // useEffect(() => {
  //   getPerfil();
  //   console.log(perfil)
  // }, [])




  return { perfil, postPerfil };
}

export default usePerfil;