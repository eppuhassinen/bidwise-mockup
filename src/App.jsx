import {
  Routes, Route,
} from 'react-router-dom'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initializePortfolios } from './reducers/portfolioReducer'

import Menu from './components/Menu'
import Header from './components/Header'
import Footer from './components/Footer'

import './App.css'
import HomePage from './pages/HomePage'
import BuyPage from './pages/BuyPage'
import SellPage from './pages/SellPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PortfolioPage from './pages/PortfolioPage'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializePortfolios())
  }, [dispatch])


  return (
    <>
      <Header headerText={'BIDWISE, Faster, Simpler, Smarter NPL Trading.'} />
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />}> </Route>
        <Route path="/buy" element={<BuyPage />}> </Route>
        <Route path="/buy/:id" element={<PortfolioPage />}> </Route>
        <Route path="/sell" element={<SellPage />}> </Route>
        <Route path="/about" element={<AboutPage />}> </Route>
        <Route path="/contact" element={<ContactPage />}> </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
