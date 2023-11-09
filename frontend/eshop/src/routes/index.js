import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/home";
import Pefil from "../pages/perfil";
import CadUser from "../pages/user";
import Produtos from "../pages/produtos";
import Carrinho from "../pages/carrinho";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrar" element={<CadUser />} />
        <Route path="/home" element={<Home />} />
        <Route path="/perfil" element={<Pefil />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Routes>
    </BrowserRouter>
  );
}