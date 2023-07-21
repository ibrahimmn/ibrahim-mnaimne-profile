import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


const Aboutme = () => (
    <>
    <Container fluid>
        <Row style={{height:"400px"}} className=' padding0'>
            <Col md={12} style={{width:"100%",height:"400px",color:"white"}} className='d-flex flex-column justify-content-center align-items-center text-center   bg-black' >
                <div>
                <h1><strong>About Ibrahim Mnaimne</strong></h1>
                </div>
                <div className="scroll-down"></div>
            </Col>
        </Row>
        
    </Container>
    <Container className='d-flex justify-content-center align-items-center flex-column' fluid><br></br>
        <Row style={{width:"75%",height:"400px"}} className='d-flex flex-column text-start' >
            <Col md={6}>
                <h1><strong>Summary</strong></h1><br></br>
            </Col>
            <Col md={6}>
                <h3>I am a lebanese new </h3>
            </Col>
        </Row>
    </Container>
    
    </>
);

export default Aboutme;