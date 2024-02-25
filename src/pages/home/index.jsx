import React, {useState} from "react"

import { Header } from "../../components/Header";
import { SmallBox } from "../../components/Home/small-box";
import { SmallBox2 } from "../../components/Home/small-box-2";
import { LongBox } from "../../components/Home/long-box";
import { Poster } from "../../components/Home/Poster";
import { Footer } from "../../components/Footer";
import { Background, Container} from "./styles"


const Home = () => {

    const [filter, setFilter] = useState(false);

    const [banner, setBanner] = useState(1);

    const nextBanner = () => {
        if (banner === 1) {
            setBanner(2)
        }

        else if (banner === 2) {
            setBanner(3)
        }

        else if (banner === 3) {
            setBanner(1)
        }

        console.log(banner)
    }

    const returnBanner = () => {
        if (banner === 1) {
            setBanner(3)
        }

        else if (banner === 2) {
            setBanner(1)
        }

        else if (banner === 3) {
            setBanner(2)
        }

        console.log(banner)
    }


    return (
        <>

            <Header filtro={setFilter}/>
            <Background filter={filter} banner={banner}>
                <div id="arrow" onClick={returnBanner} > </div>
                <div id="arrow2" onClick={nextBanner} > </div>
                <SmallBox />
                <SmallBox />
                <SmallBox />
                <SmallBox />
            </Background> 
    
            <Poster/>
            <SmallBox2/>
            <SmallBox2 type={2}/>
    
            <LongBox/>
    
            <SmallBox2 type={2}/>
            <SmallBox2/>
            <SmallBox2/>
            <SmallBox2/> 
    

        <Container>
            <Footer />
        </Container>
        </>
    )
}

export { Home }