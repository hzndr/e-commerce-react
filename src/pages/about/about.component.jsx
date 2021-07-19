import React from 'react'
import {AboutPageContainer, ImageContainer, TextContainer} from './about.styles'

const AboutPage = () => {
    return (
        <AboutPageContainer>
        <ImageContainer className="image-cn">
        <img src="https://images.pexels.com/photos/3094208/pexels-photo-3094208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
        </ImageContainer>
            <TextContainer className="text-container">
            <h2>Plants are our <span>passion</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea inventore nesciunt hic, similique quam perferendis sit quo quas quisquam autem at ipsum odio accusantium fugiat rerum facilis? Laudantium incidunt deserunt, minus natus quaerat delectus qui dicta aliquid suscipit, fugit sint vero debitis illo itaque eaque adipisci ad impedit ipsa, odit eveniet expedita nobis a saepe! Id rerum dicta officiis ipsum voluptate doloremque magnam corporis provident quae totam, accusantium, incidunt magni quis eius expedita natus iste nisi nemo ad.?</p>
            </TextContainer>
        </AboutPageContainer>
    )
}

export default AboutPage
