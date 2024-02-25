import React from 'react';
import kindle1 from '../../../assets/kindle1.jpg'
import kindle2 from '../../../assets/kindle2.jpg'
import kindle3 from '../../../assets/kindle3.jpg'
import { Box, Container } from './styles'
import card from '../../../assets/credit-card.jpg'

const SmallBox2 = ({type}) => {
    
    if (type === 2) {
        return (
            <Container>
                <Box>
                    <h2>Chegou o novo cartão Amazon seu anuidade</h2>
                        <div className='images'>
    
                            <div className='image'>
                                <img src={kindle1} alt='credit card'/>
                                <p>Kindle 11ª Geração</p>
                            </div>
    
                            <div className='image'>
                                <img src={kindle1} alt='credit card'/>
                                <p>Kindle Paperwhite</p>
                            </div>
    
                            <div className='image'>
                                <img src={kindle2} alt='credit card'/>
                                <p>Kindle Oasis</p>
                            </div>
    
                            <div className='image'>
                                <img src={kindle3} alt='credit card'/>
                                <p>Acessórios</p>
                            </div>
    
                        </div>
                    <a href='h2'>Peça já seu cartão</a>
                </Box>
            </Container>
         )
    }

    else {
        return (    
            <Container>
                <Box>
                    <h2>Chegou o novo cartão Amazon seu anuidade</h2>
                    <img src={card} alt='credit card'/>
                    <a href='h2'>Peça já seu cartão</a>
                </Box>
            </Container> 
        )
    }
    
}

export { SmallBox2 }