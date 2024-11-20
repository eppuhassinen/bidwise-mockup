import PropTypes from 'prop-types'

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

const GeneralInformation = ({ portfolio }) => {
  const portfolioStyle = {
    border: '1px solid black',
    padding: '10px',
    margin: '10px',
    marginBottom: '0px'
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
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className='portfolio-ask-price' >{portfolio.askPrice} €</div>
        <div>
          <button className='portfolio-item-button' >Make offer</button>
        </div>
      </div>
    </div>
  )
}


const LoanItem = ({ loan }) => (
  <div style={{ border: '1px solid gray' }}>
    <div>
      {loan.amount}
    </div>
    <div>
      {loan.description}
    </div>
  </div>
)


const PortfolioContentList = ({ loans }) => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <div style={{ width: '80%' }}>
      {loans.map(loan =>
        <div key={loan.loanId}>
          <LoanItem loan={loan} />
        </div>
      )}
    </div>
  </div>
)

const AiAnalysis = ({ portfolio }) => {
  const portfolioStyle = {
    border: '1px solid black',
    padding: '10px',
    margin: '10px',
    marginTop: '0px'
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
      <div style={{ marginBottom: '5px' }}><b>AI Analysis</b></div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div>
  
        </div>
        <div className='portfolio-description' style={descriptionStyle}>{portfolio.aiAnalysis}</div>
        <div>
          <div>AI rating</div>
          {renderStars(portfolio.rating)}
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      </div>
    </div>
  )
}



const PortfolioDetails = ({ portfolio }) => {

  return (
    <div>
      <GeneralInformation portfolio={portfolio} />
      <PortfolioContentList loans={portfolio.loans} />
      <AiAnalysis portfolio={portfolio}/>
    </div>
  )
}

PortfolioContentList.propTypes = {
  loans: PropTypes.arrayOf(
    PropTypes.shape({
      loanId: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ).isRequired,
}

GeneralInformation.propTypes = {
  portfolio: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sellerName: PropTypes.string.isRequired,
    longDescription: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    askPrice: PropTypes.number.isRequired,
    loans: PropTypes.array.isRequired
  }).isRequired
}

LoanItem.propTypes = {
  loan: PropTypes.shape({
    amount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired
  })
}

PortfolioDetails.propTypes = {
  portfolio: PropTypes.shape({
    loans: PropTypes.array.isRequired
  })
}

AiAnalysis.propTypes = {
  portfolio: PropTypes.shape({
    aiAnalysis: PropTypes.string,
    rating: PropTypes.number
  })
}

export default PortfolioDetails
