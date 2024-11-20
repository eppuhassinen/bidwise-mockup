import { useMatch } from "react-router-dom"
import { useSelector } from 'react-redux'

import PortfolioDetails from "../components/PortfolioDetails"

const PortfolioPage = () => {
  const match = useMatch('buy/:id')
  const id = match ? Number(match.params.id) : null
  
  const portfolios = useSelector(({ portfolios }) => portfolios)
  const portfolio = portfolios.find(portfolio => portfolio.id === id)

  if (!portfolio) return <div>Portfolio not found with id: {match.params.id}</div>

  return (
    <div>
      <h1>Porfolio Details</h1>
      <PortfolioDetails portfolio={portfolio}/>
    </div>
  )
}

export default PortfolioPage;