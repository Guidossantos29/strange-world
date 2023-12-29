import React from 'react'
import { FormContainer,TitleRegister } from '../register/styles'
import { useState,useEffect } from 'react';
import { useAuthentication
 } from '../../hooks/useAuthentication';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      email,
      password,
    };

    const res = await login(user);

    console.log(res);
  };

  useEffect(() => {
    console.log(authError);
    if (authError) {
      setError(authError);
    }
  }, [authError]);
  return (
    <FormContainer>
       <TitleRegister>Seja bem Vindo!</TitleRegister>
      <form onSubmit={handleSubmit}>
        <label>
            <span>Nome:</span>
            <input 
            type="text"
            name='displayName'
            required
            placeholder='Escreva seu usuario ou email'
            value={email}
            onChange={e => setEmail(e.target.value)}

            />
            
            <span>Senha:</span>
            <input 
            type="password"
            name='password'
            required
            placeholder='Digite sua senha'
            value={password}
            onChange={e => setPassword(e.target.value)}

            />
            
        </label>
            <button>Cadastrar</button>
            {error && <p>{error}</p>}
      </form>
      
      
    </FormContainer>
  )
}

export default Login
