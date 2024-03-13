import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/home";
import Pefil from "../pages/perfil";
import CadUser from "../pages/user";
import Carrinho from "../pages/carrinho";
import Produtos from "../pages/produtos/lista";
import CadProdutos from "../pages/produtos/form";
import Favoritos from "../pages/produtos/favoritos";

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
        <Route path="/produtos/editar/:id" element={<CadProdutos />} />
        <Route path="/produtos/novo" element={<CadProdutos />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </BrowserRouter>
  );
}