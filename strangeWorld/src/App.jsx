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

import Home from './pages/Home/home.jsx'
import About from './pages/about/about.jsx'
import { ContainerMain } from './styles/ConatinerMain/ContainerMain.js'
import Register from './pages/register/Register'
import Login from './pages/login/login'
import CreatePost from './pages/createPost/createPost'
import Dashboard from './pages/dashboard/dashboard'
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
            <Route path='/posts/create/:id' element={ user ? <CreatePost/> : <Navigate to='/login' /> }></Route>
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
