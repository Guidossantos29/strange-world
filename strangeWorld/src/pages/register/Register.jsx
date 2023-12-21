import React from 'react'
import { RegisterContainer } from './styles'
import { GlobalStyle } from '../../styles/GlobalStyle/globlal'

const Register = () => {
  return (
    
    <RegisterContainer>
        
      <h1>Cadastre-se para postar</h1>
      <form>
        <label>
            <span>Nome:</span>
            <input 
            type="text"
            name='displayName'
            required
            placeholder='Nome de usuario'

            />
            <span>Email:</span>
            <input 
            type="email"
            name='email'
            required
            placeholder='exemplo@gmail.com'

            />
            <span>Senha:</span>
            <input 
            type="password"
            name='password'
            required
            placeholder='Digite sua senha'

            />
            <span>Confirme sua senha:</span>
            <input 
            type="confirmepassword"
            name='confirmepassword'
            required
            placeholder='Digite sua senha'

            />
        </label>
            <button>Cadastrar</button>
      </form>
    </RegisterContainer>
  )
}

export default Register
