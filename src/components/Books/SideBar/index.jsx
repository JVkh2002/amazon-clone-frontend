import React from "react"
import { Header } from '../../Header'
import { Footer } from '../../Footer'
import { Container } from './styles'
import { IoIosArrowBack } from 'react-icons/io';
import umaEstrela from '../../../assets/avaliação_1estrela.png'
import duasEstrelas from '../../../assets/avaliação_2estrelas.png'
import tresEstrelas from '../../../assets/avaliação_3estrelas.png'
import quatroEstrelas from '../../../assets/avaliação_4estrelas.png'

// https://www.amazon.com.br/s?k=livros&i=digital-text&__mk_pt_BR=ÅMÅŽÕÑ&crid=19JYTEB46HDQ&sprefix=livros%2Cdigital-text%2C248&ref=nb_sb_noss_1

const SideBar = () => {

    return (
        <>
        
        <Container>

            <div id="departamento">

                <h4>Departamento</h4>

                <ul>
                    <li><IoIosArrowBack  size={14} />Qualquer departamento</li>
                    <ul>
                        Loja kindle
                        <li>ebooks kindle</li>
                    </ul>

                </ul>

            </div>

            <div id="avaliacoes">

                <h4>Avaliações dos clientes</h4>

                <div>
                    <img src={umaEstrela} alt="avaliação uma estrela"/>
                    <label>e mais</label>
                </div>

                <div>
                    <img src={duasEstrelas} alt="avaliação duas estrelas" />
                    <label>e mais</label>
                </div>
                
                <div>
                    <img src={tresEstrelas} alt="avaliação três estrelas" />
                    <label>e mais</label>
                </div>
                
                <div>
                    <img src={quatroEstrelas} alt="avaliação quatro estrelas" />
                    <label>e mais</label>
                </div>
                    
            </div>

            <div id="preco">

                <h4>Preço</h4>

                <p>Grátis</p>
                <p>Para R$ 1</p>
                <p>R$ 1 - R$ 2</p>
                <p>R$ 2 - R$ 5</p>
                <p>R$ 5 - R$ 10</p>
                <p>R$ 10 - R$ 20</p>
                <p>Mais do que R$ 20</p>

                <input placeholder="R$Min."></input>
                <input placeholder="R$Máx."></input>
                <button>Ir</button>

                
            </div>

            <div id="ofertas">

                <h4>Ofertas e Descontos</h4>

                <p>Ofertas do Dia</p>
                <p>Todos os descontos</p>

            </div>


            <div id="idioma">

                <h4>Idioma</h4>

                <input type="checkbox" />
                <label>Português</label>

                <input type="checkbox" />
                <label>inglês</label>

                <input type="checkbox" />
                <label>Alemão</label>

                <input type="checkbox" />
                <label>Espanhol</label>

                <input type="checkbox" />
                <label>Francês</label>

                <input type="checkbox" />
                <label>Italiano</label>

                <input type="checkbox" />
                <label>Japonês</label>

                <input type="checkbox" />
                <label>Russo</label>

                <input type="checkbox" />
                <label>Outros idiomas</label>

            </div>


            <div id="novidades">

                <h4>Novidades</h4>

                <p>Últimos 30 dias</p>
                <p>Últimos 90 dias</p>
                <p>Pré-venda</p>

            </div>


            <div id="outras_opcoes">

                <h4>Kindle Unlimited</h4>

                <input type="checkbox" />
                <label>eBooks em Kindle Unlimited</label>

                <h4>Prime Reading</h4>
                
                <input type="checkbox" />
                <label>eBooks em Prime Reading</label>

                <h4>Dicas de vocabulário</h4>
                
                <input type="checkbox" />
                <label>Dicas de vocabulário ativado</label>

            </div>


            
        </Container>
        
        </>
    )

}

export { SideBar }