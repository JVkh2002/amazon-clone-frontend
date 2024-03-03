import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Background, LoginContainer, ErrorLoginContainer } from "./styles"
import amazon_logo from "../../assets/amazon-logo-white.svg"


const Login = () => {

    const [emailCadastrado, setEmailCadastrado] = useState(null);
    const navigate = useNavigate();

    const handleClickRegister = () => {
        navigate('/register')
    }

    useEffect(() => {
        fetch("http://localhost:8080/verificarEmailGet")
          .then((response) => response.json())
          .then((data) => {
            setEmailCadastrado(data.emailCadastrado);
          })
          .catch((error) => {
            console.error("Erro ao obter o booleano:", error);
          });
      }, []);

    return (
        
        <Background>
            <img src={amazon_logo} alt="Amazon logo"/>

            {emailCadastrado === false ? (
                <ErrorLoginContainer>

                    <h3>Houve um problema</h3>
                    <br></br>
                    <p>Não encontramos uma conta associada a este endereço de e-mail</p>
                    
                    
                </ErrorLoginContainer>
                
            )  : null}


            <LoginContainer>
                <p id="fazer_login">Fazer login</p>
                <form action="http://localhost:8080/verificarEmail" method="POST">
                    <label for="email">E-mail ou número de telefone celular</label>
                    <input type="text" name="email" required/>
                    <button  type="submit" value="Enviar">Continuar</button>
                </form>
                <p id="termos">Ao continuar, você concorda com as Condições de Uso da Amazon. 
                    Por favor verifique a Notificação de Privacidade, Notificação de Cookies 
                    e a Notificação de Anúncios Baseados em Interesse.</p>
            </LoginContainer>

            <button onClick={handleClickRegister}> Criar uma nova conta</button>
        </Background>

    )
}

export { Login }