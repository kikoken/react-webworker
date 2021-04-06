import { useState } from 'react'
import { Button, Form, Row, Col} from 'react-bootstrap'

import { useFibonacci } from './hooks/useFibonacci'
import { getNthFobonacciNumber } from './helpers/fibonacci-number'

const WorkerClient = () => {
    const [value, setValue] = useState(5)
    const [value2, setValue2] = useState(0)
    const { result, error, run } = useFibonacci()

    const handlerNthFibonacciNumber = () => run(value)
    
    const getFibonacci = () => {
        setValue2(getNthFobonacciNumber(value))
    }

    return (
        <>
            <Row>
                <Col lg={5}>
                    <Form.Group>
                        <Form.Control size="lg" type="text" placeholder="Valor..." value={value} onChange={e => setValue(e.target.value)}/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col lg={6}>
                    <h2>With Webworker</h2>
                    <Button 
                        variant="primary" 
                        onClick={handlerNthFibonacciNumber}>
                            Ejecutar Fibonacci
                    </Button>
                    <h3>Resultado: {result}</h3>
                </Col>
                <Col lg={6}>
                    <h2>Not webworker</h2>
                    <Button 
                        variant="primary" 
                        onClick={getFibonacci}>
                            Ejecutar Fibonacci
                    </Button>
                    <h3>Resultado: {value2}</h3>
                    
                </Col>
            </Row>
        </>
    )
}

export default WorkerClient
