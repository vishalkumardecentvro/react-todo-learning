
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color = 'green' text = 'Add' onClick = {onClick}/>
    </header>
  )
}

const onClick = () =>{
    console.log("clicked")
}

Header.propTypes = {  // prop types helps in defining the type of prop which we expect, it will render but produce a warning if other than defined type value is passed
    title :  PropTypes.string.isRequired,
}

const headerStyle = {
    color: 'red',
    backgroundColor : 'gold'
}

export default Header
