import React from 'react'
import PropTypes from 'prop-types'
import { IndexLink, Link } from 'react-router'
import { browserHistory, Router } from 'react-router'



class Header extends React.Component {
  static propTypes = {
    routes: PropTypes.object.isRequired,
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
        <header className='container clearfix desktop-nav-wrap'>
            <div className='col lg-col-3 logowrap'>
                <h1><IndexLink to='/'>Fahmi Fachreza</IndexLink></h1>            
            </div>
            <nav className='col lg-col-8 desktop-nav'>
                <ul>
                    <li><Link to='/work' id='gowork'>Work</Link></li>
                    <li><Link to='/bio'>Bio</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
  }
}

export default Header
