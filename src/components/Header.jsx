import PropTypes from 'prop-types'
import logo from '../assets/logo.png'

const Header = ({ headerText }) => {
  const headerStyle = {
    display: 'flex',
    width: '100%',
    height: '70px',
    border: '1px solid black',
    borderRadius: '3px',
    alignItems: 'center',
  }

  const logoStyle = {
    height: '100%',
  }

  return (
    <div className='header' style={headerStyle}>
      <img src={logo} alt="Logo" style={logoStyle} />
      <div>{headerText}</div>
    </div>
  )
}
Header.propTypes = {
  headerText: PropTypes.string.isRequired,
};

export default Header