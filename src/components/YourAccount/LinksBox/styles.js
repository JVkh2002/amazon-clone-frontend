import styled from 'styled-components'

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    border: 1px solid lightgray;
    border-radius: 8px;



    padding-bottom: 3rem;

    h3 {
        margin-top: 1rem;
        margin-bottom: 1rem;
        margin-left: 1rem;
    }

    a {
        margin-left: 1rem;
        margin-bottom: 0.4rem;

        color: #007185;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
        color: #C7511F;
    }
`