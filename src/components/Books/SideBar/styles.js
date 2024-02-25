import styled  from 'styled-components';

export const Container = styled.div`

    display: inline-block;
    width: 20%;
    height: 100%;

    background-color: white;

    div {
        margin-top: 1rem;
    }

    #departamento > h4 {
        margin-left: 0.7rem;
    }

    #departamento > ul {
        margin-left: 0.5rem;
        margin-top: 0.5rem;
        list-style: none;
    }

    #departamento > ul:hover {
        cursor: pointer;
    }


    #departamento > ul > ul {
        margin-left: 1rem;
        font-weight: bold;
    }

    #departamento > ul > ul > li{
        margin-left: 1rem;
        list-style: none;
        font-weight: normal;
    }

    #avaliacoes > h4 {
        margin-left: 0.7rem;
    }

    #avaliacoes > div {
        display: flex;
        margin-left: 0.7rem;
        margin-top: 0.5rem;
        width: 100%;
    }

    #avaliacoes > div > label:hover {
        color: #C45500;
        cursor: pointer;
    }

    #preco {
        margin-left: 0.7rem;
    }

    #preco > p {
        margin-top: 0.5rem;
    }

    #preco > input {
        margin-top: 0.5rem;
        width: 3rem;
        margin-right: 0.2rem;
        border-radius: 3px;
        border: 1px solid #888C8C;
        padding: 0.2rem;
    }

    #preco > button {
        padding: 0.2rem 0.4rem;
        background-color: white;
        border: 1px solid #D5D9D9;
        border-radius: 6px;
    }

    #preco > button:hover {
        cursor: pointer;
    }

    #ofertas {
        margin-left: 0.7rem;
    }

    #ofertas > h4 {
        margin-bottom: 0.5rem;
    }

    #idioma {
        margin-left: 0.7rem;
    }

    #idioma > h4 {
        margin-bottom: 0.5rem;
    }

    #idioma > input {
        margin-right: 0.2rem;
        border: 1px solid #979A9A;
    }

    #idioma > label {
        width: 15rem;
        display: inline-block;
    }

    #novidades > h4 {
        margin-left: 0.7rem;
        margin-bottom: 0.5rem;
    }

    #novidades > p {
        margin-left: 0.7rem;
        margin-top: 0.3rem;
    }

    #outras_opcoes {
        margin-left: 0.7rem;
    }

    #outras_opcoes > input{
        margin-right: 0.2rem;
    }

    #outras_opcoes > h4 {
        margin-bottom: 0.5rem;
        margin-top: 1rem;
    }





`