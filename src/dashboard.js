import {Container, Row, Col} from 'react-bootstrap'

export default function Dashbaord() {



        return (
            <>
    
            <Container>
                <Row>
                    <Col md='6' style={{backgroundColor: '#e0f5ff'}}>
                        Add line Chart Here
                    </Col>
                    <Col md='6' style={{backgroundColor: '#e0f5ff'}}>
                        Add pie chart example here
                    </Col>
                </Row>
                <Row>
                    <Col md='6' style={{backgroundColor: '#e0f5ff'}}>
                        Add temperature line chart here
                    </Col>
                    <Col md='6' style={{backgroundColor: '#e0f5ff' }}>
                        Add wind speed line chart here
                    </Col>
                </Row>
    
            </Container>
    
            
            </>
        )
    }
