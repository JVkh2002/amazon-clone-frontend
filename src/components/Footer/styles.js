import styled from 'styled-components';

export const Voltar = styled.button`

    background-color: #37475A;
    border-style: none;

    width: 100%;
    height: 2.5rem; 

    color: white;
    justify-content: center;
    cursor: pointer;


`

export const BiggerContainer = styled.div`

    width: 100%;
    background-color: #232F3E;



    img {
        display: flex;

        margin-left: auto;
        margin-right: auto;
        margin-bottom: 0.5rem;
        margin-top: 2rem;

    }

    .paises {
        margin-top: 0.5rem;
        justify-content: center;
        display: flex;
    }

    .paises > span {
        color: lightgray;
        border-left: 1px solid lightgray;
        padding: 0 0.6rem;
        font-size: 12px;
    }

    .paises > span:hover {
        text-decoration: underline;
        cursor: pointer;
    }

    .paises > span:first-child {
        border: none;
    }

    #services {
        display: flex;
        flex-direction: column;
        
        margin-right: 44%;
        margin-left: 45%;
        margin-top: 0.5rem;
    }

    #services > span {
        color: lightgray;
        font-size: 12px;
    }

    #services > a {
        color: lightgray;
        font-size: 12px;
        text-decoration: none;
    }

    #services > a:hover {
        text-decoration: underline;
        cursor: pointer;
    }


`

export const Columns = styled.div`

    display: flex;
    flex-direction: row;

    margin: 0px 8rem;

    border-bottom: 1px solid #3A4553;


    justify-content: space-around;

    padding: 0 0 3rem 0;


    div {
        margin-top: 3rem;
    }


    div > h3 {
        color: white;
    }

    div > ul > li {
        color: lightgray;
        list-style: none;
        margin-top: 0.8rem;
        width: 10rem;
    }

    div > ul > li:hover {
        text-decoration: underline;
        cursor: pointer;

    }

`

export const DarkerContain = styled.div`

    width: 100%;
    background-color: #131A22;
    display: flex;
    flex-direction: column;

    div {
        margin-top: -1rem;
        display: flex;
        justify-content: center;
    }

    div > span {
        color: white;
        font-size: 12px;

        padding: 0 0.6rem;
        border-left: 1px solid lightgray;
    }

    div > span:hover {
        text-decoration: underline;
        cursor: pointer;
    }

    #start {
        border: none;
    }

    p {
        color: white;
        justify-content: center;
        display: flex;
        font-size: 12px;
        margin-top: 0.5rem;
    }

    span {
        color: lightgray;
        font-size: 12px;
        margin-top: 3rem;
        display: flex;
        justify-content: center;
    }

    #last {
        margin-bottom: 2rem;
    }


`