import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import '../styles/aside.css'

const Aside = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Programacion 3</h3>
          <h4>
          Los lenguajes de programación son herramientas que permiten a los desarrolladores escribir
          instrucciones que una computadora puede entender y ejecutar. Estos lenguahes están diseñados
          para crear programas de software que pueden realizar una amplia variedad de tareas, desde
          cálculos simples hasta operaciones complejas y manejo de datos.
          </h4>
          <br />
          <p>
          1. Lenguaje de bajo nivel: Están mas cerca del lenguaje máquina y permiten un control más directo sobre el hardware. Ejemplos incluyen el ensamblador y el lenguaje de máquina. Estos lenguajes son muy eficientes, pero también más difíciles de aprender y usar.
          </p>
          <p>2. Lenguaje de alto nivel: Estos lenguajes están diseñados para ser más fáciles de ller y escribir para los humanos, utilizando una sintaxis más cercana al lenguahe natural. Ejemplos incluyen Python, Java y C#. Son más abstractos que los lenguajes de bajo nivel, lo que facilita la programación, pero a veces pueden ser menos eficientes en términos de rendimiento.</p>
          <p>3. Lenguajes compilados: Estos lenguajes requieren un proceso de compilación, donde el código fuente se traduce a un lenguaje de máquina antes de ejecutarse. Ejemplos incluyen C y C++. La compilación puede mejorar el rendimiento, pero introduce un paso adicional en el desarrollo.</p>
          <p>4.Lenguajes Interpretados: Estos lenguajes son ejecutados directamente por un intérprete, sin necesidad de compilación previa. Ejemplos incluyen Python y JavaScript. La interpretación puede hacer que el desarrollo sea más ágil, aunque a menudo puede ser menos eficiente en términos de velocidad de ejecución.</p>

          
        </Col>
      </Row>
    </Container>
  )
}

export default Aside