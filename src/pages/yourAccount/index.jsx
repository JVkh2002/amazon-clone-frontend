import React, {useState, useRef, useEffect} from 'react';
import { Header } from '../../components/Header'
import { YourAccountBox } from '../../components/YourAccount/YourAccountBox'
import { Footer } from '../../components/Footer'
import { Container, Background } from './styles';
import { LinksBox } from '../../components/YourAccount/LinksBox'

const YourAccount = ({filtro}) => {
    
    const [filter, setFilter] = useState(false);

    const [ChooseLocation, setChooseLocation] = useState(false);



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

    const [resultadosBackend, setResultadosBackend] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/usuario/1')
            .then(response => response.json())
            .then(data => setResultadosBackend(data))
            .catch(error => console.error('Erro:', error));
    }, []);


    return (
        <>
        <Header filtro={setFilter}/>

        <Background filter={filter}>
            <h2>Sua conta</h2>

            <Container>
            
                
                <YourAccountBox/>
                <YourAccountBox/>
                <YourAccountBox/>
                <YourAccountBox/>
                <YourAccountBox/>
                <YourAccountBox/>
                <YourAccountBox/>
                <YourAccountBox/>
                <YourAccountBox/>
                <YourAccountBox/>
                <YourAccountBox/>
        
                
            </Container>

            <hr></hr>

            <Container>

                <LinksBox />
                <LinksBox />
                <LinksBox />
                <LinksBox />
                <LinksBox />
                <LinksBox />
                <LinksBox />
                
            </Container>            

        </Background>

        <Footer />

        <p>{JSON.stringify(resultadosBackend)}</p>

        </>
    )
}

export { YourAccount }