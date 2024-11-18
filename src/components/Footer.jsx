import logo from '../assets/logo.png'

const Footer = () => {
  const footerStyle = {
    display: 'flex',
    height: '70px',
    border: '1px solid black',
    borderRadius: '3px',
    alignItems: 'center',
  }

  const logoStyle = {
    height: '100%',
  }

  return (
    <div className='footer' style={footerStyle}>
      <img src={logo} alt="Logo" style={logoStyle} />
      {'Bidwise Oy, Address: Kotikatu 123, Phone: +358 1234567'}
    </div>
  )
}


export default Footer