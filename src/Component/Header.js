
import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation()
  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' &&   <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'close' : 'Add'} onClick={onAdd} />}
    </header>
  )
}

Header.propTypes = {  // prop types helps in defining the type of prop which we expect, it will render but produce a warning if other than defined type value is passed
  title: PropTypes.string.isRequired,
}

const headerStyle = {
  color: 'red',
  backgroundColor: 'gold'
}

export default Header
