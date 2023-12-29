import { GlobalStyle } from './styles/GlobalStyle/globlal'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'

// HOOKS

import { useState,useEffect } from 'react'
import { useAuthentication } from './hooks/useAuthentication'

// COMPONENTS

import NavBar from './components/NavBar'
import Footer from './components/footer'

// PAGES

import Home from './pages/Home/home'
import About from './pages/about/about.jsx'
import { ContainerMain } from './styles/ConatinerMain/ContainerMain'
import Register from './pages/register/Register'
import Login from './pages/login/login'
import CreatePost from './pages/createPost/createPost'
import Dashboard from './pages/dashboard/dashboard'

// CONTEXT

import { AuthProvider } from './context/AuthContext'




function App() {
  
  const [user,setUser] =useState(undefined)
  const {auth} = useAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth,(user) => {
      setUser(user)
    })

  },[auth])

  if(loadingUser) {
    return <p>Carregando...</p>
  }


  return (
   <div>
     <AuthProvider value={user}>
      <GlobalStyle />
        <BrowserRouter>
        <NavBar/>
        <ContainerMain>
          <Routes>
            <Route path='/home' element={<Home/> }></Route>
            <Route path='/about' element={ <About/> }></Route>
            <Route path='/register' element={ <Register/> }></Route>
            <Route path='/login' element={ <Login/> }></Route>
            <Route path='/posts/create' element={ <CreatePost/> }></Route>
            <Route path='/dashboard' element={ <Dashboard/> }></Route>
          </Routes>
        </ContainerMain>
        <Footer/>
        </BrowserRouter>
     </AuthProvider>
   </div>
  )
}

export default App
