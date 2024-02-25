import React from 'react';
import { Container } from './styles'
import seusPedidos from '../../../assets/seus_pedidos.png'

const YourAccountBox = () => {

    return (
        <Container>
            <img src={seusPedidos} alt="seus pedidos"></img>
            
            <div>
                <h3>Seus Pedidos</h3>
                <p>Rastrear, devolver ou comprar produtos novamente</p>
            </div>
        </Container>
    )
} 

export { YourAccountBox }