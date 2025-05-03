import React from 'react'
import Aside from './Aside'
import Article from './Article'
import LangTable from './LangTable'
import { Container, Col, Row } from 'react-bootstrap'

const MainHome = ({datos}) => {
  return (
    <Container className="mt-4">
      <Row>
        <Col xs={12} md={4} lg={2}>
          <Aside />
        </Col>
        <Col xs={12} md={8} lg={10}>
          <Article datos={datos} />
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