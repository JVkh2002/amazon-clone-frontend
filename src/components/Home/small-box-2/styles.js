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
    top: 6rem;
    padding-bottom: 1rem;
    margin-top: 1rem;
    margin-left: 1.7rem;

    h2 {
        margin: 1rem;
    }


    a {
        margin-top: 1rem;
        margin-left: 1.5rem;
        text-decoration: none;     
    }

    .images {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr); 
        grid-gap: 0.85rem;
        grid-row-gap: 2rem;
        margin: auto;
        margin-top: 1rem;
    }

    .image > img {
        width: 8rem;
        height: 6rem;
    }

    .image > p {
        font-size: 12px;
    }

    img {
        
        width: 17rem;
        height: 18rem;
        margin: auto;
        
    }   
`