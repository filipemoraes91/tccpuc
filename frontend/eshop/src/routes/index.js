import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/home";
import Pefil from "../pages/perfil/form";
import CadUser from "../pages/user/form";
import Carrinho from "../pages/carrinho";
import Produtos from "../pages/produtos/lista";
import CadProdutos from "../pages/produtos/form";
import Favoritos from "../pages/produtos/favoritos";
import ListUser from "../pages/user/lista";
import ListPerfil from "../pages/perfil/lista";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />

        <Route path="/usuarios" element={<ListUser />} />
        <Route path="/usuarios/novo" element={<CadUser />} />
        <Route path="/usuarios/editar/:id" element={<CadUser />} />

        <Route path="/perfil" element={<ListPerfil />} />
        <Route path="/perfil/novo" element={<Pefil />} />
        <Route path="/perfil/editar/:id" element={<Pefil />} />

        <Route path="/produtos" element={<Produtos />} />
        <Route path="/produtos/novo" element={<CadProdutos />} />
        <Route path="/produtos/editar/:id" element={<CadProdutos />} />

        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </BrowserRouter>
  );
}