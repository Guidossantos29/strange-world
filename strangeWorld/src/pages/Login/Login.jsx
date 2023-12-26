import React from 'react'
import { FormContainer,TitleRegister } from '../register/styles'

const Login = () => {
  return (
    <FormContainer>
       <TitleRegister>Seja bem Vindo!</TitleRegister>
      <form>
        <label>
            <span>Nome:</span>
            <input 
            type="text"
            name='displayName'
            required
            placeholder='Escreva seu usuario ou email'

            />
            
            <span>Senha:</span>
            <input 
            type="password"
            name='password'
            required
            placeholder='Digite sua senha'

            />
            
        </label>
            <button>Cadastrar</button>
      </form>
      
    </FormContainer>
  )
}

export default Login
