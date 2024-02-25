import styled from 'styled-components';
import poster from '../../../assets/Poster.jpeg'

export const Box = styled.div`
    display: inline-block;
    
`

export const Container = styled.div`
    width: 39.7rem;
    height: 26rem;
    background: url(${poster});
    box-shadow: inset 0 0 150px rgba(0, 0, 0, 1);
    background-size: cover;
    margin-top: 1rem;
    margin-left: 1.7rem;
    display: flex;
    flex-direction: column;
    position: relative;
    top: 6rem;
    

    h2 {
        color: white;
        margin-top: 1rem;
        margin-left: 1rem;
    }

    p {
        color: white;
        margin-top: 0.5rem;
        margin-left: 1rem;
    }

    a {
        color: white;
        margin-top: 0.5rem;
        margin-left: 1rem;
        text-decoration: none;
        
        position: absolute;
        bottom: 1rem; 
    }


`