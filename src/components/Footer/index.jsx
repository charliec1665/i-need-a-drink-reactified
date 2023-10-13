import React from 'react'
import NavBar from 'react-bootstrap/NavBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from '../../assets/icons/icon5.png'

const Footer = () => {
  return (
    <>
        <footer>
            <NavBar id='footer' class='justify-around'>
                    {/* <Row className=''> */}
                        <Col className=''>
                            <img 
                                src={logo}
                                width={40}
                                height={40}
                                className='m-3'
                                alt='Wine love icon'
                            />
                        </Col>
                        <Col class=''>
                            <p class=''>Andy Charlie Thinh Quincy</p>
                        </Col>
                    {/* </Row> */}
            </NavBar>
        </footer>
    </>
  )
}

export default Footer;