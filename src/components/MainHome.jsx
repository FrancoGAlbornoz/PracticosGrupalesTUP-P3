import React from 'react'
import Aside from './Aside'
import Article from './Article'
import LangTable from './LangTable'
import { Container, Col, Row } from 'react-bootstrap'
import '../styles/mainHome.css'

const MainHome = ({ datos }) => {
  return (
    <div className="homemain">
      <h2 className="h2Titulo">Lenguajes de Programación</h2>
      <Container fluid>
        <Row className="main-row">
          <Col xs={12} md={3} className="aside">
            <Aside />
          </Col>
          <Col xs={12} md={9} className="main-content">
            <Article datos={datos} />
            <LangTable datos={datos} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MainHome
