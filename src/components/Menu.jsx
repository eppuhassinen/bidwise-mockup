
import PropTypes from 'prop-types';

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
  const menuStyle = {
    display: 'flex',
    flexDirection: 'row',
  }

  return (
    <div className='menu-block' style={menuStyle}>
      <MenuItem text={'HOME'}/>
      <MenuItem text={'BUY'}/>
      <MenuItem text={'SELL'}/>
      <MenuItem text={'ABOUT'}/>
      <MenuItem text={'CONTACT'}/>
    </div>
  )
}

MenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}


export default Menu;