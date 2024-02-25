import React from "react"
import { Background, LoginContainer } from "./styles"
import amazon_logo from "../../assets/amazon-logo-white.svg"

const Register = () => {

    return (
        
        
        <Background>
            <img src={amazon_logo} />

            <LoginContainer>
                <p id="fazer_login">Criar conta</p>

                <form action="http://localhost:8080/registrar" method="POST">

                    <label for="nome">Seu nome</label>
                    <input type="text" placeholder="Nome e Sobrenome" name="nome" required/>

                    <label for="emailOuCelular">Número de celular ou e-mail</label>
                    <input type="text" name="emailOuCelular" required/>

                    <label for="senha">Senha</label>
                    <input type="text" name="senha" required/>

                    <label for="confirmar_senha">Insira a senha nova mais uma vez</label>
                    <input type="text" name="confirmar_senha" required/>

                    <button type="submit" value="Enviar">Continuar</button>
                </form>

                <p id="termos">Ao criar uma conta, você concorda com as Condições de Uso da Amazon. 
                Por favor verifique a Notificação de Privacidade, Notificação de Cookies e a Notificação 
                de Anúncios Baseados em Interesse.</p>
            </LoginContainer>

        </Background>

    )
}

export { Register }