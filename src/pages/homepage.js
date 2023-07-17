import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'

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
        <Col md={12} className='cv d-flex flex-column justify-content-center align-items-center '>
            <div className='cv-title'>
                <h1>My CV:</h1>
            </div>
            <div>
                <button className="button-cv-pushable">
                <span className="button-cv-shadow"></span>
                <span className="button-cv-edge"></span>
                <span className="button-cv-front text">
                Download Ibrahim's CV
                <FontAwesomeIcon icon={faFile} style={{color: "#ffffff",paddingLeft:"15px"}} />
                </span>
                </button>
            </div>
        </Col>
      </Row>
    </Container>
    </>
);

export default HomePage;