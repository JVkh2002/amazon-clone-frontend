import styled  from 'styled-components';
import banner from "../../assets/menu-banner.jpg";
import banner2 from "../../assets/menu-banner2.jpg";
import banner3 from "../../assets/menu-banner3.jpg";

export const Background = styled.div`

    width: 100%;
    height: 40vw;

    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(227, 230, 230, 0.8)), url(${props => {
        if (props.banner === 1) {
            return banner;
        }

        else if (props.banner === 2) {
            return banner2;
        }

        else if (props.banner === 3) {
            return banner3;
        }

    }});
    background-size: cover;


    display: flex;
    flex-direction: row;
    filter: ${props => (props.filter ?  "brightness(0.4)" : "brightness(1)")};

    #arrow::before {
        content: "<";
        display: inline-block;
        
        position: absolute;
        font-size: 4rem;
        color: white;
       
        padding: 4.6rem 1rem;
        
    }

    #arrow:hover::before {
        cursor: pointer;
        border: 1px solid #007185;
    }

    #arrow2::after {
        content: ">";
        display: flex;
        position: absolute;
        font-size: 4rem;
        color: white;

        left: 80rem;
        padding: 4.6rem 1rem;
    }

    #arrow2:hover::after {
        cursor: pointer;
        border: 1px solid #007185;
    }
    
  
`

export const Container = styled.div`

    top: 7rem;
    position: relative;
`


