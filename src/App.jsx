// Sistema de roteamento e navegação de páginas
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Importa páginas
import { LoginPage, HomePage, RegisterPage } from "./pages/index.js";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/inicio" element={<HomePage />} />
        <Route path="/Cadastro" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
