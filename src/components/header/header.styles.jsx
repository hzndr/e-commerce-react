import styled, {css} from 'styled-components'
import {Link} from 'react-router-dom'

const OptionContainerStyles = css`
    padding: 10px 15px;
    cursor: pointer;
    transition: all 0.5s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    &:hover{
        color: rgb(15, 175, 55);    
    }
`

export const HeaderContainer = styled.div`
    position:relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid lightgray;
    @media screen and (max-width: 800px){
        flex-direction: column;
        justify-content: center;
        
    }

`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 10px;
    @media screen and (max-width: 800px){
       height: 40px;
       width: 100%;
       margin-bottom: 30px;
       .logo{
           width: 100%;
           margin: 0 auto;
       }
    }


`

export const OptionLink = styled(Link)`
    ${OptionContainerStyles}
    
    `

export const OptionDiv = styled.div`
    ${OptionContainerStyles}
    `
    
    export const OptionsContainer = styled.div`
        width: 60%;
        height: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        flex-wrap:wrap;
        @media screen and (min-width:800px){
        ${OptionLink}:nth-child(3){
            border-right: 1px solid lightgray;
        }}
        @media screen and (max-width: 800px){
        justify-content: center;
        width:80%;  
    }

        
    `