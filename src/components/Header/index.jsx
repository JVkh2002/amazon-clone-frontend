import React, {useState, useRef, useEffect} from "react"
import { useNavigate } from "react-router-dom";

import { Container, UnderContainer } from './styles';
import logo from '../../assets/logo-amazon.png'
import car from '../../assets/return-image.png'
import { GiHamburgerMenu} from 'react-icons/gi';
import { SlLocationPin } from "react-icons/sl";
import { BiSearch } from 'react-icons/bi'
import { RiArrowDownSFill } from 'react-icons/ri'

const Header = ({filtro}) => {

    const navigate = useNavigate();

    const handleClickYourAccount = () => {
        navigate('/yourAccount')
    }

    const handleClickHome = () => {
        navigate('/')
    }

    const handleClickLogin = () => {
        navigate("/login")
    }

    const [sectionMenu, setSectionMenu] = useState(false);


    const showSectionMenu = () => {

        setSectionMenu(!sectionMenu);
        console.log("sectionMenu: ", sectionMenu)
        
    };



    const [yourListMenu, setYourListMenu] = useState(false);

    const showYourListMenu = () => {
        console.log(yourListMenu)

        filtro(true)
        setYourListMenu(true);
    };

    const closeYourListMenu = () => {
        console.log(yourListMenu)

        filtro(false)
        setYourListMenu(false);
    };



    const [ChooseLocation, setChooseLocation] = useState(false);

    const showChooseLocation = () => {
        console.log(ChooseLocation)

        if (ChooseLocation !== true) {
            filtro(!ChooseLocation)
            document.body.style.overflow = 'hidden';
            setChooseLocation(!ChooseLocation)
        }
    };



    const elemento = useRef(null);


    // Função para fechar o elemento quando o usuário clicar fora dele
    const handleClickOutside = (event) => {
        if (elemento.current && !elemento.current.contains(event.target)) {
            filtro(false);
            document.body.style.overflow = 'auto';
            setChooseLocation(false);
        }

    };

    useEffect(() => {
        // Adiciona um ouvinte de clique no documento inteiro
        document.addEventListener("click", handleClickOutside);
        
        // Remove o ouvinte de clique quando o componente é desmontado
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, );



    return (
        <>
        <Container>
            <div className="image" onClick={handleClickHome}>
                <img src={logo} alt="Amazon logo"/>
            </div>
            
            <div class="pin"  onClick={showChooseLocation} ref={elemento}>
                <SlLocationPin color="white" size={18}/>
                <div id="address">
                    <p id="send">Enviar para João</p>
                    <p>São Paulo ... 00000000</p>
                </div>

                {ChooseLocation === true ? (
                    <div id="ChooseLocation">
                        <h4>Escolha sua localização</h4>
                        <p>As opções e velocidade de entrega podem variar de acordo com a região</p>

                        <div id="currentLocation">
                            <p><strong>João - São Paulo -</strong>00000000</p>
                            <p>Endereço padrão</p>
                        </div>

                        <a href="#image" >Gerencia agenda de endereços</a>

                        <p id="insira">ou insira um CEP do Brasil</p>
                        <hr></hr>

                        <form>
                            <input id="big"></input> - <input></input>
                            
                            <button>Confirmar</button>
                        </form>

                    </div>
                ) : null }

            
            </div>

            

            <div id="search">
                
                <button id="listButton" onClick={showSectionMenu}>Todos<RiArrowDownSFill/>
                    {sectionMenu === false ? null : (
                        <ul id="lista">
                            <li>Todos os departamentos</li>
                            <li>Alexa Skills</li>
                            <li>Alimentos e Bebidas</li>
                            <li>Amazon Quase Novo</li>
                            <li>Apps e Jogos</li>
                            <li>Automotivo</li>
                            <li>Bebês</li>
                            <li>Beleza</li>
                            <li>Belaza de luxo</li>
                            <li>Bolsas, Malas e Mochilas</li>
                            <li>Brinquedos e Jogos</li>
                            <li>Casa</li>
                            <li>CD e Vinil</li>
                            <li>Computadores e Informática</li>
                            <li>Cozinhas</li>
                            <li>Dispositivos Amazon</li>
                            <li>DVD e Blu-Ray</li>
                            <li>Eletrodomesticos</li>
                            <li>Eletrônicos</li>
                            <li>Esportes e Aventuras</li>
                            <li>Ferramentas e Construção</li>
                            <li>Games</li>
                            <li>Instrumentos musicais</li>
                            <li>Jardim e piscina</li>
                            <li>Livros</li>
                            <li>Lojas Kindle</li>
                            <li>Material para Escritório e Papelaria</li>
                            <li>Móveis e Decoração</li>
                            <li>Pet Shop</li>
                            <li>Prime Video</li>
                            <li>Produtos Industriais e Cientificos</li>
                            <li>Programe e Poupe</li>
                            <li>Roupas, Calçados e Joias</li>
                            <li>Saúde e Cuidados Pessoais</li>
                        </ul>)
                    }     
                </button>

                <input placeholder="Pesquisa Amazon.com.br"></input>
                <button id="search-button"><BiSearch size={25}/></button>
            </div>

            <div id="your-account" onMouseOver={showYourListMenu} onMouseOut={closeYourListMenu} onClick={handleClickYourAccount}>
                <p id="hello">Olá, joão</p>
                <p>Contas e Listas</p>
                
                {yourListMenu === true ? (
                    <div id="yourListMenu">

                        <ul>
                            <h3>Suas listas</h3>
                            <li>Lista de compras</li>
                            <li>Criar sua lista de compras</li>  
                        </ul> 

                        

                        <ul id="yourListMenu-right">
                            <h3>Sua conta</h3>
                            <li>Sua conta</li>
                            <li>Seus pedidos</li>  
                            <li>Sua Lista de Desejos</li>
                            <li>Continuar comprando</li>
                            <li>Recomendados para você</li>
                            <li>Programe e poupe</li>
                            <li>Sua assinatura Prime</li>
                            <li>Inscrições e assinaturas</li>
                            <li>Gerencie seu conteúdo e dispositivos</li>
                            <li>Seu Amazon Music</li>
                            <li>Seu Prime Video</li>
                            <li>Seu Kindle Unlimited</li>
                            <li>Seu Amazon Drive em Amazon.com</li>
                            <li>Seus aplicativos e dispositivos</li>

                            <li>Trocar de conta</li>
                            <li>Sair da conta</li>
                        </ul>  
                    </div> 
                ) : null }
            </div>

            <div id="return">
                <p id="hello">Devoluções</p>
                <p>e Pedidos</p>
            </div>

            <div className="image">
                <img src={car} alt="" onClick={handleClickLogin}/>
            </div>

        </Container>

        <UnderContainer>
            
            <div>
                <GiHamburgerMenu size={22} color="white"/>
                <p id="menu">Todos</p>
            </div>

            <p>Venda na Amazon</p>
            <p>Ofertas do Dia</p>
            <p>Livros</p>
            <p>Ideias de Presente</p>
            <p>Computadores</p>
            <p>eBooks</p>
            <p>Eletrônicos</p>

        </UnderContainer>
        
        
        </>    
    )

}

export { Header}
