import React from 'react'
import Aside from './Aside'
import Article from './Article'
import LangTable from './LangTable'
import { Container, Col, Row } from 'react-bootstrap'
import '../styles/main.css'

const MainHome = ({datos}) => {
  return (
    <Container className="mt-4 mr-0">
      <Row>
        <Col  xs={12} md={4} lg={3}>
          <Aside />
        </Col>
        <Col xs={12} md={8} lg={9} className="mt-4 m-0">
          <Article datos={datos}/>
        </Col>
      </Row>

      {/* Fila nueva con LangTable abajo de todo */}
      <Row>
        <Col>
          <LangTable />
        </Col>
      </Row>
    </Container>
  )
}

export default MainHome