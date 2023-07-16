import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


const HomePage = () => (
    <>
    <Container fluid >
      <Row >
        <Col md={4} className='padding-0'>
           <div class="hicontainer">
            <div class="hi">
                <h3>HI, I am</h3>
                <h1>Ibrahim Mnaimne</h1>
            </div>
            </div> 
        </Col>
        <Col md={8} className='padding-0'>
        <Image src="img/ibrahim.jpg"  fluid />
        
        </Col>
      </Row>
      <Row>
        <Col md={12} className='cv'>
            <div>
                <h1>My CV:</h1>
            </div>
        </Col>
      </Row>
    </Container>
    </>
);

export default HomePage;