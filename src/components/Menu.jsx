
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const MenuItem = ({ text, onClick }) => {
  const style = {
    //cursor: 'pointer',
    border: '1px solid black',
    borderRadius: '3px',
    padding: '10px',
    flex: 1,
  }
  
  return (
    <div className='menu-button' onClick={onClick} style={style}>
      {text}
    </div>
  )
}

const Menu = () => {
  const navigate = useNavigate()
  const menuStyle = {
    display: 'flex',
    flexDirection: 'row',
  }

  return (
    <div className='menu-block' style={menuStyle}>
      <MenuItem text={'HOME'} onClick={() => navigate('/')}/>
      <MenuItem text={'BUY'} onClick={() => navigate('/buy')}/>
      <MenuItem text={'SELL'} onClick={() => navigate('/sell')}/>
      <MenuItem text={'ABOUT' } onClick={() => navigate('/about')}/>
      <MenuItem text={'CONTACT'} onClick={() => navigate('/contact')}/>
    </div>
  )
}

MenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}


export default Menu;