import { GlobalStyle } from './styles/GlobalStyle/globlal'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'

// HOOKS

import { useState,useEffect } from 'react'
import { useAuthentication } from './hooks/useAuthentication'

// COMPONENTS

import NavBar from '../src/components/NavBar/Index.jsx'
import Footer from '../src/components/footer/Index.jsx'

// PAGES

import Home from '../src/pages/Home/Home.jsx'
import About from '../src/pages/About/About.jsx'
import { ContainerMain } from './styles/ConatinerMain/ContainerMain.js'
import Register from '../src/pages/Register/Register.jsx'
import Login from '../src/pages/Login/Login.jsx'
import CreatePost from '../src/pages/CreatePost/CreatePost.jsx'
import Dashboard from '../src/pages/Dashboard/Dashboard.jsx'
import Search from '../src/pages/Search/Search.jsx'
import Post from '../src/pages/Post/Post.jsx'
import EditPost from '../src/pages/EditPost/EditPost.jsx'


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
     <AuthProvider value={{user}}>
      <GlobalStyle />
        <BrowserRouter>
        <NavBar/>
        <ContainerMain>
          <Routes>
            <Route path='/' element={<Home/> }></Route>
            <Route path='/about' element={ <About/> }></Route>
            <Route path='/search' element={ <Search/> }></Route>
            <Route path='/posts/:id' element={ <Post/> }></Route>
            <Route path='/register' element={!user ? <Register /> : <Navigate to='/' />} />
            <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
            <Route path='/posts/create/' element={ user ? <CreatePost/> : <Navigate to='/login' /> }></Route>
            <Route path='/posts/edit/:id' element={ user ? <EditPost/> : <Navigate to='/login' /> }></Route>
            <Route path='/dashboard' element={ user ? <Dashboard/> : <Navigate to='/login' /> }></Route>

          </Routes>
        </ContainerMain>
        <Footer/>
        </BrowserRouter>
     </AuthProvider>
     
   </div>
  )
}

export default App
