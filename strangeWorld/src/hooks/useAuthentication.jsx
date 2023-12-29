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
        setError(null)

        try{
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile(user,{
                displayName: data.displayName
            })

            setLoading(false)

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
        setError(null)

        try{
            await signInWithEmailAndPassword(auth,data.email,data.password)
            setLoading(false)



        } catch (error){
            let systemErrorMessage;

            if (error.message.includes('user-not-found')) {
                systemErrorMessage = 'Usuario não encontrado'
            } else if(error.message.includes('wrong-password')){
                systemErrorMessage = 'senha incorreta'
            } else {
                systemErrorMessage = 'Ocorreu um erro,tente novamente mais tarde.'
            }

            
            setError(systemErrorMessage)
            setLoading(false)
        }
    
        // try{
        //     const {user} = await signInWithEmailAndPassword(
        //         auth,
        //         data.email,
        //         data.password
        //     )
    
        //     await updateProfile(user,{
        //         displayName: data.displayName
        //     })
    
        //     setLoading(false)
    
        // } catch (error) {
        //     console.log(error.message);
       
      
        //     let systemErrorMessage;
      
        //     if (error.message.includes("user-not-found")) {
        //       systemErrorMessage = "Usuário não encontrado.";
        //     } else if (error.message.includes("wrong-password")) {
        //       systemErrorMessage = "Senha incorreta.";
        //     } else {
        //       systemErrorMessage = "Ocorreu um erro, por favor tenta mais tarde.";
        //     }
      
        //     console.log(systemErrorMessage);
      
        //     setError(systemErrorMessage);
        //   }
    }

    useEffect(() => {
        return () => setCancelled(true)
    },[])

    return {
        auth,
        createUser,
        error,
        loading,
        logout,
        login
    }
}    


