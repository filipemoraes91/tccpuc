import { useState } from 'react';
import axios from "../services/";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (user) => {
    try {
      const response = await axios.post('/login', user);
      setUser(response.data);
      sessionStorage.setItem('token', response.data.token);
      sessionStorage.setItem('usuario', JSON.stringify({ ID: response.data.usuario.ID, Nome: response.data.usuario.Nome }));
      window.location.href = '/home';
    } catch (error) {
      alert('Erro de autenticação:', error);
      return '/login';
    }
    setLoading(false);
  };

  const logout = () => {
    setUser(null);
    sessionStorage.clear();
    setLoading(false);
  };

  return { user, login, logout, loading };
};

export default useAuth;