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
import ListCategoria from "../pages/categorias/lista";
import Categoria from "../pages/categorias/form";
import Pedido from "../pages/pedido";
import MeuPerfil from "../pages/meuperfil/lista";
import CadEndereco from "../pages/endereco/form";
import MeusPedidos from "../pages/meuspedidos/list";
import DetailPedido from "../pages/meuspedidos/detail";

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

        <Route path="/meuperfil/:usuario/endereco/novo" element={<CadEndereco />} />
        <Route path="/meuperfil/editar/:usuario/endereco/:id" element={<CadEndereco />} />

        <Route path="/perfil" element={<ListPerfil />} />
        <Route path="/perfil/novo" element={<Pefil />} />
        <Route path="/perfil/editar/:id" element={<Pefil />} />

        <Route path="/meuperfil/:id" element={<MeuPerfil />} />
        <Route path="/meuspedidos/:id" element={<MeusPedidos />} />
        <Route path="/meuspedidos/:idUser/pedido/:id" element={<DetailPedido />} />

        <Route path="/categorias" element={<ListCategoria />} />
        <Route path="/categoria/novo" element={<Categoria />} />
        <Route path="/categoria/editar/:id" element={<Categoria />} />

        <Route path="/produtos" element={<Produtos />} />
        <Route path="/produtos/novo" element={<CadProdutos />} />
        <Route path="/produtos/editar/:id" element={<CadProdutos />} />

        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/pedido" element={<Pedido />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </BrowserRouter>
  );

}