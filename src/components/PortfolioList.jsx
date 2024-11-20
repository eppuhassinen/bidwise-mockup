import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

import './PortfolioList.css'

const renderStars = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<span className='star' key={i}>&#9733;</span>); // filled star
    } else {
      stars.push(<span key={i}>&#9734;</span>); // empty star
    }
  }
  return stars;
}

const Portfolio = ({ portfolio }) => {
  const navigate = useNavigate()

  const portfolioStyle = {
    border: '1px solid black',
    padding: '10px',
    margin: '10px'
  }
  
  
  const descriptionStyle = {
    border: '1px solid gray',
    padding: '5px',
    marginLeft: '10px',
    marginRight: '10px',
    marginBottom: '10px'
  }
  
  
  
  return (
    <div className='portfolio-item' style={portfolioStyle}>
      <div style={{ marginBottom: '5px' }}><b>{portfolio.name}</b></div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div>
          {portfolio.sellerName}
        </div>
        <div className='portfolio-description' style={descriptionStyle}>{portfolio.longDescription}</div>
        <div>
          <div>AI rating</div>
          {renderStars(portfolio.rating)}
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className='portfolio-ask-price' >{portfolio.askPrice} €</div>
        <div>
          <button className='portfolio-item-button' style={{ marginRight: '5px' }} onClick={() => navigate(`/buy/${portfolio.id}`)}>Show details</button>
          <button className='portfolio-item-button' >Make offer</button>
        </div>
      </div>
    </div>
  )
}


const PortfolioList = () => {

  const portfolios = useSelector(({ portfolios }) => portfolios)

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '70%' }}>
        {portfolios.map(portfolio =>
          <div key={portfolio.id}>
            <Portfolio portfolio={portfolio} />
          </div>
        )}
      </div>
    </div>
  )
}

Portfolio.propTypes = {
  portfolio: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sellerName: PropTypes.string.isRequired,
    longDescription: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    askPrice: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired
}

export default PortfolioList