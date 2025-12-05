import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { iconeCasa, iconeCadastro, iconeConfig } from "../assets";
import "./styles/navbarStyle.css";

const NavbarComponent = () => {
  const navigate = useNavigate();
  const nome = "Wendell Oliveira Teste";

  return (
    <div className="sidebar">
      <h2 className="logo">Bem vindo ao Conc200! {nome}</h2>

      <ul className="menu">
        <li>
          <a
            onClick={() => {
              navigate("/inicio");
            }}
            to="/inicio"
          >
            <img src={iconeCasa} alt="" /> Início
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              navigate("/cadastro");
            }}
            to="/cadastro"
          >
            <img src={iconeCadastro} alt="" /> Cadastro
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              navigate("/");
            }}
            to="/config"
          >
            <img src={iconeConfig} alt="" /> Configurações
          </a>
        </li>
      </ul>

      <button type="button" onClick={() => {navigate("/")}}>Sair do sistema</button>
    </div>
  );
};

export default NavbarComponent;
