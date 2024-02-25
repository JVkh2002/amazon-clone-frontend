import styled  from 'styled-components';

export const Container = styled.div`

    display: flex;
    width: 100%;
    height: 100%;

    margin-left: 1rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;

    background-color: white;

    border: 1px solid #F7F7F7;

    img {
        background-color: #F7F7F7;
        padding: 0 2.5rem;
    }

    #information {
        margin-left: 1rem;
        margin-top: 0.5rem;
    }

    #information > p {
        margin-top: 0.3rem;
    }

    #information > p > #avaliation {
        background-color: white;
        padding: 0;
        margin: 0 0.4rem;
        width: 1.7rem;
    }

    #information > p > a {
        color: #007185;
    }

    #information > a {
        margin-top: 0.4rem;
        color: #007185;
    }

    #information > #price {
        font-size: 32px;
        font-weight: normal;
    }

    #information > #price > sup {
        font-size: 14px;
    }

    #information > button {
        margin-top: 0.3rem;
        padding: 0.5rem;
        border: solid 1px #FF8F00;
        background-color: #FFA41C;
        border-radius: 16px;
    }

    #information > button:hover {
        cursor: pointer;
        filter: brightness(0.9);
    }

    

`