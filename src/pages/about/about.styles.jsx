import styled from 'styled-components'

export const AboutPageContainer = styled.div`
height: calc(100vh - 120px);
width: 100%;
padding: 2rem;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
flex-wrap: wrap;
`
export const ImageContainer = styled.div`
width: 300px;
height: auto;
margin: 1rem 3rem 1rem 1rem;
position: relative;

&:before{
    content: "";
    width: 100%;
    height: 100%;
    border: 5px solid #3d823d94;
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
}

img{
    width: 100%;
    height: 100%;
}
`

export const TextContainer = styled.div`
width: 500px;
text-align: justify;

h2{
    font-size: 48px;
    text-align: center;
    margin: 2rem 0;
    
    @media screen and (max-width: 1047px){
        margin: 3rem 0.5rem 2rem 0.5rem;
    }

    span{
        font-family: "Berkshire Swash";
        color: #3d823d;
    }
}
`