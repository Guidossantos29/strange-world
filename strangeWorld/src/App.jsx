import { useState } from 'react'
import { GlobalStyle } from './styles/GlobalStyle/globlal'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'


// COMPONENTS

import NavBar from './components/NavBar'
import Footer from './components/footer'

// PAGES

import Home from './pages/Home/home'
import About from './pages/about/about'
import { ContainerMain } from './styles/ConatinerMain/ContainerMain'
import Register from './pages/register/Register'


function App() {
  const [count, setCount] = useState(0)
  
  return (
   <div>
      <GlobalStyle />
      <BrowserRouter>
      <NavBar/>
      <ContainerMain>
        <Routes>
          <Route path='/home' element={<Home/> }></Route>
          <Route path='/about' element={ <About/> }></Route>
          <Route path='/register' element={ <Register/> }></Route>
        </Routes>
      </ContainerMain>
      <Footer/>
      </BrowserRouter>
   </div>
  )
}

export default App
