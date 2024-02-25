import React from "react"
import {Voltar, BiggerContainer, Columns, DarkerContain} from './styles'
import logo from '../../assets/logo-amazon2.png'

const Footer = () => {

    return (
        <>
        <Voltar>Voltar ao início</Voltar>

        <BiggerContainer>
            <Columns>
                <div>
                    <h3>Conheça-nos</h3>

                    <ul>
                        <li>Sobre a Amazon</li>
                        <li>Informações corporativas</li>
                        <li>Carreiras</li>
                        <li>Comunicados à imprensa</li>
                        <li>Comunidade</li>
                        <li>Acessibilidade</li>
                        <li>Amazon Science</li>
                    </ul>
                    
                </div>

                <div>
                    <h3>Ganhe dinheiro conosco</h3>

                    <ul>
                        <li>Venda na Amazon</li>
                        <li>Proteja e construa a sua marca</li>
                        <li>Publique seus livros</li>
                        <li>Seja um associado</li>
                        <li>Anuncie seus produtos</li>
                    </ul>
                </div>

                <div>
                    <h3>Pagamento</h3>

                    <ul>
                        <li>Meios de Pagamento</li>
                        <li>Compre com Pontos</li>
                        <li>Cartão de Crédito</li>
                    </ul>
                </div>

                <div>
                    <h3>Deixe-nos ajudar você</h3>

                    <ul>
                        <li>Sua conta</li>
                        <li>Compre com Pontos</li>
                        <li>Frete e prazo de entrega</li>
                        <li>Devoluções e reembolsos</li>
                        <li>Gerencie seu conteúdo e dispositivos</li>
                        <li>Ajuda</li>
                    </ul>
                </div>

            
            </Columns>


            <img src={logo} alt="logo da amazon"/>

            <div class="paises">

                <span>Austrália</span>
                <span>Alemanha</span>
                <span>Canadá</span>
                <span>China</span>
                <span>Cingapura</span>
                <span>Espanha</span>
                <span>Estados Unidos</span>
                <span>França</span>
                <span>Holanda</span>
                <span>Índia</span>
                <span>Itália</span>
                <span>Japão</span>
                <span>México</span>
                <span>Polônia</span>
                <span>Emirados Árabes Unidos</span>
                
            </div>

            <div class="paises">
                <span>Reino Unido</span>
                <span>Turquia</span>
            </div>

            <div id="services">

            <span>E não se esqueça: </span>
            <a href="#">amazon web services</a>
            
            </div>

        </BiggerContainer>

        <DarkerContain>
            <div>
                <span id="start">Condições de Uso</span>
                <span>Notificação de Privacidade</span>
                <span>Cookies</span>
                <span>Anúncios Baseados em Interesses</span>
            </div>

            <p>© 2021-2023 Amazon.com, Inc. ou suas afiliadas</p>

            <span>Amazon Serviços de Varejo do Brasil Ltda. | CNPJ 15.436.940/0001-03</span>

            <span>Av. Juscelino Kubitschek, 2041, Torre E, 18° andar - São Paulo CEP: 04543-011| Fale conosco | ajuda-amazon@amazon.com.br</span>

            <span id="last">Formas de pagamento aceitas: cartões de crédito (Visa, MasterCard, Elo e American Express), cartões de débito (Visa e Elo), Boleto e Pix.</span>
        </DarkerContain>

        </>

    )
}



export { Footer }