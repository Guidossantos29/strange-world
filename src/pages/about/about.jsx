import React from 'react'
import { AboutContainer, CreateBtn } from './styles'




const About = () => {
  return (
    <AboutContainer>
      <h2>
        Sobre o Mini <span>Blog</span>
      </h2>
      <p>
        Este projeto consiste em um blog feito com React no front-end e Firebase
        no back-end.
      </p>
      <CreateBtn to="/posts/create">
        Criar post
      </CreateBtn>
    </AboutContainer>
  )
}

export default About
