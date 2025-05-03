import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import '../styles/aside.css'

const Aside = () => {
  return (
    <Container>
      <Row className='row'>
        <Col className='col aside'>
        <div className='decoaside'>
          <aside>
            <h2 className='h2aside'>Programacion 3</h2>
            <p className='paside'>
              Los lenguajes de programación son herramientas que permiten a los desarrolladores escribir
              instrucciones que una computadora puede entender y ejecutar. Estos lenguahes están diseñados
              para crear programas de software que pueden realizar una amplia variedad de tareas, desde
              cálculos simples hasta operaciones complejas y manejo de datos.
            </p>
            <br />
            <p className='textoaside'>
              1. <span class="spanaside">Lenguaje de bajo nivel:</span> Están mas cerca del lenguaje máquina y permiten un control más directo sobre el hardware. Ejemplos incluyen el ensamblador y el lenguaje de máquina. Estos lenguajes son muy eficientes, pero también más difíciles de aprender y usar.
              2. <span class="spanaside">Lenguaje de alto nivel:</span> Estos lenguajes están diseñados para ser más fáciles de ller y escribir para los humanos, utilizando una sintaxis más cercana al lenguahe natural. Ejemplos incluyen Python, Java y C#. Son más abstractos que los lenguajes de bajo nivel, lo que facilita la programación, pero a veces pueden ser menos eficientes en términos de rendimiento.
              3. <span class="spanaside">Lenguajes compilados:</span> Estos lenguajes requieren un proceso de compilación, donde el código fuente se traduce a un lenguaje de máquina antes de ejecutarse. Ejemplos incluyen C y C++. La compilación puede mejorar el rendimiento, pero introduce un paso adicional en el desarrollo.
              4.<span class="spanaside">Lenguajes Interpretados:</span> Estos lenguajes son ejecutados directamente por un intérprete, sin necesidad de compilación previa. Ejemplos incluyen Python y JavaScript. La interpretación puede hacer que el desarrollo sea más ágil, aunque a menudo puede ser menos eficiente en términos de velocidad de ejecución.
            </p>
          </aside>
        </div>
          
        </Col>
      </Row>
    </Container>
  )
}

export default Aside