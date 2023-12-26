import React, { useEffect, useState } from 'react'
import { FormContainer, TitleRegister } from './styles'
import { useAuthentication } from '../../hooks/useAuthentication';


const Register = () => {

    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const {createUser,error:authError,loading} = useAuthentication()

    const handlySubmit = async (e) => {
        e.preventDefault()

        const user = {
            displayName,
            email,
            password
        }

        if(password !== confirmPassword){
            setError('As senhas precisam ser iguais!')
            return
        }
        const res = await createUser(user)

        console.log(res);

        setError('')
    }

    useEffect(() => {
        if(authError) {
            setError(authError)
        }
    },[authError])

  return (
    
    <FormContainer>
        
      <TitleRegister>Cadastre-se para postar</TitleRegister>
      <form onSubmit={handlySubmit}>
        <label>
            <span>Nome:</span>
            <input 
            type="text"
            name='displayName'
            required
            placeholder='Nome de usuario'
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}

            />
            <span>Email:</span>
            <input 
            type="email"
            name='email'
            required
            placeholder='exemplo@gmail.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}

            />
            <span>Senha:</span>
            <input 
            type="password"
            name='password'
            required
            placeholder='Digite sua senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)}

            />
            <span>Confirme sua senha:</span>
            <input 
            type="password"
            name='confirmepassword'
            required
            placeholder='Confirme sua senha'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}

            />
        </label>  
        {!loading && <button>Cadastrar</button> }
        {loading &&  <button disabled >Carregando...</button>}
           {error && <p>{error}</p>} 
      </form>
    </FormContainer>
  )
}

export default Register
