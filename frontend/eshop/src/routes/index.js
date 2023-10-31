import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/home";
import Pessoas from "../pages/pessoas";
import CadUser from "../pages/user";
import Produtos from "../pages/produtos";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrar" element={<CadUser />} />
        <Route path="/home" element={<Home />} />
        <Route path="/clientes" element={<Pessoas />} />
        <Route path="/produtos" element={<Produtos />} />
      </Routes>
    </BrowserRouter>
  );
}