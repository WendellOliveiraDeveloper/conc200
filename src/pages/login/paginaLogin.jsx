import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./loginStyle.css";
import { Label } from "../../components";

const PaginaLogin = () => {
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    navigate("/inicio");
  }

  return (
    <div className="estiloPaginaPrincipal">
      <div className="formularioPrincipal">
        <div className="titulo">
          <p>Conc200 System</p>
        </div>
        <form onSubmit={handleLogin}>
          <div className="camposLogin">
            <Label tituloLabel={"Email"} nomeInput={"emailLogin"} required={true} />
            <input type="text" id="emailLogin"/>
          </div>
          <div className="camposLogin">
            <Label tituloLabel={"Senha"} nomeInput={"passwordLogin"} required={true} />
            <input type="password" id="passwordLogin"/>
          </div>
          <div className="botoesLogin">
            <button type="submit">Logar</button>
          </div>
          <div className="naoTerCadastro">
            <a
              onClick={() => {
                navigate("/Cadastro");
              }}
            >
              Não possuo Cadastro
            </a>
            <a
              onClick={() => {
                navigate("/");
              }}
            >
              Esqueci minha senha
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaginaLogin;
