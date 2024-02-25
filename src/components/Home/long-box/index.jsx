import React from 'react';
import { Container } from './styles'
import livro1 from '../../../assets/livro1.jpg'
import livro2 from '../../../assets/livro2.jpg'
import livro3 from '../../../assets/livro3.jpg'
import livro4 from '../../../assets/livro4.jpg'
import livro5 from '../../../assets/livro5.jpg'
import livro6 from '../../../assets/livro6.jpg'
import livro7 from '../../../assets/livro7.jpg'
import livro8 from '../../../assets/livro8.jpg'

const LongBox = () => {
    return (
        <Container>
            <h2>Livros que você pode gostar</h2>
            <img src={livro1} alt="livro" />
            <img src={livro2} alt="livro" />
            <img src={livro3} alt="livro" />
            <img src={livro4} alt="livro" />
            <img src={livro5} alt="livro" />
            <img src={livro6} alt="livro" />
            <img src={livro7} alt="livro" />
            <img src={livro8} alt="livro" />
        </Container>
    )
}

export { LongBox }
