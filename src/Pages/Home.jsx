import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <Container className='py-4'>
      <Row>
       <Col lg={4} xl={2}>
          <div className='card p-4'>
            <Link to='/'>Home</Link>
          </div>
        </Col>
        <Col lg={4} xl={2}>
          <div className='card p-4'>
            <Link to='/crypto/home'>Crypto</Link>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
