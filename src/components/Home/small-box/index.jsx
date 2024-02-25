import React from 'react';
import card from '../../../assets/credit-card.jpg'
import { Box, Container } from './styles'

const SmallBox = () => {
 
    return (    
        <Container>
            <Box>
                <h2>Chegou o novo cartão Amazon seu anuidade</h2>
                <img src={card} alt='credit card'/>
                <a href="h2">Peça já seu cartão</a>
            </Box>
        </Container> 
    )
    
    
};

export { SmallBox }