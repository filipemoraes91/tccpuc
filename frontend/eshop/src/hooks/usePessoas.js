import { useEffect, useState } from "react";
import axios from "../services/";
// import useToken from "./useToken";

const usePessoas = () => {
  // const { renovaToken } = useToken();
  const token = 'Bearer ' + sessionStorage.getItem('token_sac');
  const [pessoas, setPessoas] = useState([]);


  let config = {
    headers: {
      'Access-Control-Allow-Origin': '*'  
    }
  };
  async function getPessoas() {
    const response = await axios.get('/pessoas', config);
    setPessoas(response.data);
  }

  async function postPessoas(pessoas) {
    console.log(pessoas);
    const response = await axios({
      method: 'post',
      url: '/pessoas',
      headers: {
        config
      },
      data: pessoas,
    });
    alert(response.data);
  }

  // useEffect(() => {
  //   getPessoas();
  //   console.log(pessoas)
  // }, [])




  return { pessoas, postPessoas };
}

export default usePessoas;