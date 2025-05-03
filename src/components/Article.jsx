import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

const Article = ({datos}) => {

  return (
      <Container style={{ width: '75%' }} className="my-4">
      <Row>
        {datos.map(dato => (
          <Col key={dato.id} xs={12} sm={6} md={4} className="mb-4">
            <div className="card h-100 text-center p-3 bg-warning">
              <img
                src={dato.imagen}
                alt={dato.nombre}
                className="card-img-top"
                style={{ height: '150px', objectFit: 'contain' }}
              />
              <div className="card-body">
                <h5 className="card-title">{dato.nombre}</h5>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Article