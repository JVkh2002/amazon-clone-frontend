import styled from 'styled-components';

export const Container = styled.div`

    
    display: grid;
    margin-left: 12rem;
    margin-top: 2rem;
    margin-right: 12rem;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;



`

export const Background = styled.div`

    background-color: #FFFFFF;
    
    filter: ${props => (props.filter ?  "brightness(0.4)" : "brightness(1)")};

    h2 {
        font-weight: normal;
        margin-left: 12rem;
        position: relative;
        top: 1rem;
    }

    hr {
        margin-top: 2rem;
    }

`

