import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

import { initializePortfolios } from '../reducers/portfolioReducer'

const Portfolio = ({ portfolio }) => {
  const portfolioStyle = {
    border: '1px solid black',
    padding: '10px',
    margin: '10px'
  }

  return (
    <div style={portfolioStyle}>
      {portfolio.name}
    </div>
  )
}


const PortfolioList = () => {
  const dispatch = useDispatch()
  const portfolios = useSelector(({ portfolios }) => portfolios)

  useEffect(() => {
    dispatch(initializePortfolios())
  }, [])

  return (
    <div>
      {portfolios.map(portfolio =>
        <div key={portfolio.id}>
          <Portfolio portfolio={portfolio} />
        </div>
      )}
    </div>
  )
}

Portfolio.propTypes = {
  portfolio: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
}

export default PortfolioList