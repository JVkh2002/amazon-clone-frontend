import styled from 'styled-components';

export const Container = styled.div`
    background-color: #131921;
    width: 100%;
    height: 3.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    align-items: center;

    .image {
        padding: 1.5px; 
        cursor: pointer;  
    }

    .pin {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0.48rem;
    }

    #address {
        cursor: pointer;
        margin-left: 0.3rem;
    }

    #ChooseLocation {
        width: 24rem;
        height: 19rem;
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 8rem;
        left: 31.5rem;
        z-index: 1;
        background-color: white;
        border-radius: 10px;      
    }

    #ChooseLocation > h4 {
        background-color: #F0F2F2;
        justify-content: start;
        align-items: center;
        display: flex;
        padding: 1rem;
        border-radius: 10px;
    }

    #ChooseLocation > p {
        color: gray;
        font-size: 14px;
        display: flex;
        margin-left: 1rem;
        margin-top: 1rem;
        border-radius: 10px 10px 0 0;
        width: 22rem;  
    }

    #ChooseLocation > hr {
        margin-top: 0.5rem
    }

    #ChooseLocation > #insira {
        width: 10rem;
        display: flex;
        position: relative;
        top: 1rem;
        z-index: 1;
        background-color: white;
        padding: 0 0.5rem;
        margin: 0 auto;
    }

    #ChooseLocation > a {
        color: #007185;
        margin-left: 1rem;
        margin-top: 1rem;
    }

    #ChooseLocation > form {
        margin: 1rem auto 0 auto;
    }

    #ChooseLocation > form > input {
        width: 4rem;
        display: inline-block;
        padding: 0.2rem;
    }

    #ChooseLocation > form > button {
        padding: 0.3rem 1rem 0.3rem 1rem;
        margin-left: 0.5rem;
        background-color: white;
        border: 1px solid gray;
        border-radius: 6px;
    }

    #currentLocation{
        margin-top: 0.7rem;
        margin-left: 1rem;
        background-color: #F7FAFA;
        border: solid 4px #007185;
        border-radius: 8px;
        width: 20.7rem;
        padding: 0.5rem;
        
    }

    #currentLocation > p {
        color: black;
    }

    #currentLocation > p {
        color: black;
        margin-top: 0.3rem;
    }


    p {
        color: white;
    }

    #send {
        color: gray;
        font-size: 12px;
    }


    #search > button {
        padding: 0.78rem 0.4rem;
        border-top-left-radius: 0.4rem;
        border-bottom-left-radius: 0.4rem;
        border-style: none;
        cursor: pointer;
        position: relative;
        top: 1px;
    }

    #search > #listButton:hover {
        background-color: #D4D4D4;
    }

    #lista {
        background-color: white;
        display: flex;
        flex-direction: column;
        border: 1px solid black;
        text-align: justify;

        position: absolute;
        top: 2.2rem;
        left: 0.2rem;
        width: 15rem;

        list-style: none;
        z-index: 1;

        overflow-y: auto;
        max-height: 365px;
    }

    #lista > li {
        padding: 0.1rem;
    }

    #lista > li:hover {
        background-color: #1E90FF;

    }

    #search > input {
        padding: 0.8rem;
        width: 31rem;
        border-style: none
    }

    #search > #search-button {
        background-color: #F3A847;
        padding: 0.41rem;
        width: 2.5rem;
        border-top-right-radius: 0.4rem;
        border-bottom-right-radius: 0.4rem;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0rem;
        border-style: none;
        cursor: pointer;

        position: relative;
        top: 7px;
    }

    #your-account{
        
        cursor: pointer;
        padding: 0.38rem;
    }

    #yourListMenu {
        background-color: white;
        display: flex;
        flex-direction: row;
        position: absolute;
        right: 5rem;
        top: 3.2rem;
        list-style: none;
        width: 30rem;
        z-index: 1;
        padding: 0.7rem;

    }

    #yourListMenu > ul > h3 {
        margin-left: 1.5rem;
        width: 11rem;
    }

    #yourListMenu > ul > li {
        margin: 0.5rem 0;
        margin-left: 1.5rem;
        list-style: none;
    }

    #yourListMenu > ul > li:hover {
        text-decoration: underline;
        color: #ECA25A;
    }
    


    #yourListMenu-right {
        border-left: 1px solid lightgray;
        margin-left: 1rem;
    }

    #your-account > #hello {
        font-size: 12px;
    }

    #return{
        
        cursor: pointer;
        padding: 0.4rem 0rem;
    }

    #return > #hello {
        font-size: 12px;
    }

    .image:hover , .pin:hover, search:hover, #your-account:hover, #return:hover {
        box-shadow: inset 0 0 0 1px white;
    }
    
`

export const UnderContainer = styled.div`
    background-color: #232F3E;
    width: 100%;
    height: 2.4rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    p {
        color: white;
        padding: 0.55rem;
    }

    p:hover, div:hover {
        box-shadow: inset 0 0 0 1px white;
        cursor: pointer;
    }

    #menu:hover {
        box-shadow: inset 0 0 0 1px transparent;
    }

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        padding: 0rem 0.35rem;
    }

    div > p {
        margin-left: 4px;
    }




`
