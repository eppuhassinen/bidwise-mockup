import {
  Routes, Route, 
} from 'react-router-dom'

import Menu from './components/Menu'
import Header from './components/Header'
import Footer from './components/Footer'

import './App.css'
import HomePage from './pages/HomePage'
import BuyPage from './pages/BuyPage'
import SellPage from './pages/SellPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

function App() {

  return (
    <>
      <Menu/>
      <Header headerText={'BIDWISE'}/>
      <Routes>
        <Route path="/"         element={<HomePage/>    }> </Route>
        <Route path="/buy"      element={<BuyPage/>     }> </Route>
        <Route path="/sell"     element={<SellPage/>    }> </Route>
        <Route path="/about"    element={<AboutPage/>   }> </Route>
        <Route path="/contact"  element={<ContactPage/> }> </Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
