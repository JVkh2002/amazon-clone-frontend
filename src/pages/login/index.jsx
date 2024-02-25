import React from "react"
import { useNavigate } from "react-router-dom";

import { Background, LoginContainer } from "./styles"
import amazon_logo from "../../assets/amazon-logo-white.svg"


const Login = () => {

    const navigate = useNavigate();

    const handleClickRegister = () => {
        navigate('/register')
    }


    return (
        
        <Background>
            <img src={amazon_logo} />

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