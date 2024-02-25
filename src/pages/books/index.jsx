import React from "react"
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { IoIosArrowBack } from 'react-icons/io';
import umaEstrela from '../../assets/avaliação_1estrela.png'
import duasEstrelas from '../../assets/avaliação_2estrelas.png'
import tresEstrelas from '../../assets/avaliação_3estrelas.png'
import quatroEstrelas from '../../assets/avaliação_4estrelas.png'
import { SideBar } from '../../components/Books/SideBar'
import { ItemContainer } from '../../components/Books/ItemContainer'
import { Container } from './styles'
import { Items } from './styles'

// https://www.amazon.com.br/s?k=livros&i=digital-text&__mk_pt_BR=ÅMÅŽÕÑ&crid=19JYTEB46HDQ&sprefix=livros%2Cdigital-text%2C248&ref=nb_sb_noss_1

const Books = () => {

    return (
        <>
        <Container>
        
            <SideBar />

            <Items>
                <h2 id="result">Resultados</h2>

                <ItemContainer />
                <ItemContainer />
                <ItemContainer />
                <ItemContainer />
                <ItemContainer />
                <ItemContainer />
                <ItemContainer />
                <ItemContainer />
                <ItemContainer />
                <ItemContainer />
                <ItemContainer />
                <ItemContainer />
                <ItemContainer />
                <ItemContainer />
                <ItemContainer />
            </Items>
            

        
        </Container>

        <Footer />
        </>
    )

}

export { Books }