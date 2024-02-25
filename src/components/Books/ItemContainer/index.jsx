import React from "react"
import { Container } from './styles'
import livro1 from '../../../assets/livro1.jpg'
import avaliacao from '../../../assets/avaliação_arrow.png'

const ItemContainer = () => {

    return (
        <>

        <Container>
            <img src={livro1} alt="foto de capa do livro O problema dos três corpos" />

            <div id="information">
                <h3>O problema dos três corpos</h3>
                <p>por Matt Haig | Vendido por: <a>Amazon Servicos de Varejo do Brasil Ltda</a>  | 20 set. 2021</p>
                <p>4,7<img id="avaliation" src={avaliacao} alt="estrela"/>({55})</p>
                <a>eBook Kindle</a>
                <p id='price'><sup>R$</sup>31<sup>90</sup></p>
                <p>Disponível instantaneamente</p>
                <button>Compre agora com 1-clique</button>
            </div>
    
        </Container>
        </>
    )
}

export { ItemContainer }