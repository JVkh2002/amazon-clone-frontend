import styled from "styled-components";

export const Background = styled.div`
    display: flex;
    flex-direction: column;

    background-color: #FFFFFF;
    height: 100vh; /* Para ocupar toda a altura da tela, ajuste conforme necessário */
    
    img {
        width: 8rem;
        height: 8rem;

        margin-left: auto;
        margin-right: auto;

        position: relative;
        top: -2rem;
        
    }

    button {
        width: 22rem;
        height: 1.9rem;

        border: #A6A6A6 1px solid;
        border-radius: 9px;

        margin-top: 1rem;
        margin-left: auto;
        margin-right: auto;
        
        background: #FFFFFF;
    }

    button:hover {
        cursor: pointer;
    }
`

export const LoginContainer = styled.div`
    
    width: 22rem;
    height: 18rem;

    border: 1.5px #DDDDDD solid;
    border-radius: 9px;

    margin-left: auto;
    margin-right: auto;
    margin-top: -4rem;

    #fazer_login {
        font-size: 30px;
        margin-left: 2rem;
        margin-top: 1rem;
    }

    form {
        margin-left: 2rem;
        margin-top: 1rem;
    }

    form > label {
        font-weight: 600;
    }

    form > input{
        width: 18rem;
        height: 1.7rem;
        margin-top: 4px;
        border: 1px, #A6A6A6, solid;
    }

    form >  button {
        width: 18.4rem;
        height: 1.9rem;
        border-style: none;
        background-color: #FFD814;
        border-radius: 9px;
        margin-top: 1rem;
    }

    form > button:hover {
        cursor: pointer;
        filter: brightness(0.9);
    }

    #termos{
        width: 18rem;
        margin-left: 2rem;
        margin-top: 1rem;
        font-size: 13px;
    }

`

export const ErrorLoginContainer = styled.div`

    width: 22rem;
    height: 6rem;

    border: 1.5px red solid;
    border-radius: 9px;

    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;

    display: flex;
    flex-direction: column;
    position: relative;
    top: -4rem;

    h3 {
        margin-left: 2.5rem;
        margin-right: auto;
        color: red;
        margin-top: 1rem;
        margin-bottom: -0.5rem;
        font-weight: 500;
    }

    p {
        margin-left: auto;
        margin-right: auto;

        width: 17rem;
    }
    
`