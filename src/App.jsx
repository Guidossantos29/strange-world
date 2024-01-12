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

import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import { ContainerMain } from './styles/ConatinerMain/ContainerMain.js'
import Register from './pages/Register/Register.jsx'
import Login from './pages/Login/Login.jsx'
import CreatePost from './pages/CreatePost/CreatePost.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import Search from './pages/Search/Search.jsx'
import Post from './pages/Post/Post.jsx'
import EditPost from './pages/EditPost/EditPost.jsx'


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
