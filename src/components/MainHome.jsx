import React from 'react'
import Aside from './Aside'
import Article from './Article'
import LangTable from './LangTable'
import { Container, Col, Row } from 'react-bootstrap'
import '../styles/main.css'

const MainHome = ({datos}) => {
  return (
    <div className='homemain'>
    <h2 className="h2Titulo">Lenguajes de Programación</h2>
      <Container className="m-0">
      <Row>
        <Col  xs={12} md={4} lg={3}>
          <Aside />
        </Col>
        <Col xs={12} md={8} lg={9}>
          <Article datos={datos}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <LangTable />
        </Col>
      </Row>
    </Container>
    </div>

  )
}

export default MainHome