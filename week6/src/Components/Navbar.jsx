import React, {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { routes } from '../utils/routes'

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <div className='navbar'>
        <div className='links'>
          <button onClick={() => navigate(-1)}>↩Back</button>
            <Link to={routes.home}><h4 className='link'>Home</h4></Link>
            <Link to={routes.contact}><h4 className='link'>Contact</h4></Link>
            <Link to={routes.about}><h4 className='link'>About</h4></Link>
            <Link to={routes.recipes}><h4 className='link'>Recetas</h4></Link>
        </div>
        <input className='search' type="text" />
    </div>
  )
}

export default Navbar