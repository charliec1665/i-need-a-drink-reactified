import React from 'react'
import NavBar from 'react-bootstrap/NavBar'
import logo from '../../assets/icons/icon5.png'

const Footer = () => {
  return (
    <>
        <footer>
            <NavBar id='footer' className='justify-between'>
                <a href='https://github.com/abilodeau21'>Andy</a>
                <a href='https://github.com/charliec1665'>Charlie</a>
                <img 
                    id='logo'
                    src={logo}
                    width={40}
                    height={40}
                    className='m-3'
                    alt='Wine love icon'
                />
                <a href='https://github.com/hnihT212'>Thinh</a>
                <a href='https://github.com/qclaytor30'>Quincy</a>
            </NavBar>
        </footer>
    </>
  )
}

export default Footer;