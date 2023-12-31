import { db } from "../firebase/config";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
  } from "firebase/auth";

  import { useState,useEffect } from "react";

export const useAuthentication = () => {
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(null)


    const [cancelled,setCancelled] = useState(false)

    const auth = getAuth()

    function checkIfIsCancelled(){
        if(cancelled){
            return
        }
    }

    const createUser = async(data) => {
        checkIfIsCancelled()

        setLoading(true)
        

        try{
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile(user,{
                displayName: data.displayName
            })

            return user;

        } catch(error){

            console.log(error.menssage);
            console.log(typeof error.mensage);

            let systemErrorMessage;

            if (error.message.includes('Password')) {
                systemErrorMessage = 'A SENHA PRECISA TER PELO MENOS 6 CARACTERES'
            } else if (error.message.includes('email-already')) {
                systemErrorMessage = 'Email já cadastrado.'
            } else {
                systemErrorMessage = 'ocorreu um erro inesperado,por favor tente mais tarde'
            }

            setError(systemErrorMessage)
                
            
            
            

        }
    }

    const logout = () => {
        checkIfIsCancelled()

        signOut(auth)


    }

    const login = async(data) => {
        checkIfIsCancelled()
    
        setLoading(true)
        setError(false)

        try{
            await signInWithEmailAndPassword(auth, data.email, data.password)
            setLoading(false)



        } catch (error){
            console.log(error.message);
            console.log(typeof error.message);
            console.log(error.message.includes("user-not"));
      
            let systemErrorMessage;
      
            if (error.message.includes("user-not-found")) {
              systemErrorMessage = "Usuário não encontrado.";
            } else if (error.message.includes("wrong-password")) {
              systemErrorMessage = "Senha incorreta.";
            } else {
              systemErrorMessage = "Ocorreu um erro, por favor tenta mais tarde.";
            }
      
            console.log(systemErrorMessage);
      
            setError(systemErrorMessage);
            setLoading(false);
          }
    
          
    }

    useEffect(() => {
        return () => setCancelled(true)
    },[])

    return {
        auth,
        createUser,
        error,
        logout,
        login,
        loading,
      };
}   


