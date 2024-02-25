import styled from 'styled-components'

export const Container = styled.div`
    display: inline-block;
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 19rem;
    height: 25rem;
    position: relative;
    top: 13rem;


    padding-bottom: 1rem;
    margin-top: 1rem;
    margin-left: 1.7rem;

    h2 {
        margin: 1rem;
    }

    img {
        width: 17rem;
        height: 18rem;
        margin: auto;
    }

    a {
        margin-top: 1rem;
        margin-left: 1.5rem;
        text-decoration: none;     
    }
`