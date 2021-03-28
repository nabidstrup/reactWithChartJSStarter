import 'bootstrap/dist/css/bootstrap.css';
import { Container, Col, Row } from 'react-bootstrap'
import Header from './header'
import Dashboard from './dashboard'

function App() {

  return (
  <div className="App">
    <header className="App-header">

      <Container fluid className="min-vh-100 d-flex flex-column">
        <Row className="flex-grow-0 flex-shrink-1" style={{ backgroundColor: "#05A8A4" }}>
          <Col >
            <Header />
          </Col>
        </Row>

        <Row className="flex-grow-1" style={{ backgroundColor: "#34b1eb" }}>
          <Col md="12">

              
                <Dashboard />



          </Col>
        </Row>

      </Container>

    </header>
  </div>
  )

}

export default App;

