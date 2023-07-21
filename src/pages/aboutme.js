import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { ListGroup,ListGroupItem } from 'react-bootstrap';
import { Card,CardImg,CardGroup } from 'react-bootstrap';


const Aboutme = () => (
    <> 
    <Container fluid>
        <Row   className=' padding0'>
            <Col md={12} style={{width:"100%",height:"400px",color:"white"}} className='d-flex flex-column justify-content-center align-items-center text-center   bg-black' >
                <div>
                <h1><strong>About Ibrahim Mnaimne</strong></h1>
                </div>
                <div className="scroll-down"></div>
            </Col>
        </Row>
        
    </Container><br></br><br></br>
    <Container className='d-flex flex-column  ' fluid> 
        <Row  className='d-flex  flex-column  justify-content-center align-items-center' >
            <Col md={6}>
                <h1><strong>Summary</strong></h1><br></br>
            </Col>
            <Col className='text-center' md={6}>
                <h3 style={{ padding:"10px"}}   >An enthusiastic lebanese, computer engineer new graduate, with almost 1 year of work
                      experience, I specialize in front-end and back-end development. Ready to set sail.
                </h3>
            </Col>
        </Row>
    </Container><br></br><br></br>
    <Container className='d-flex flex-column  ' fluid><br></br>
        <Row   className='d-flex  flex-column  align-items-center' >
            <Col md={6}>
                <h1><strong>Education</strong></h1><br></br>
            </Col>
            <Col md={6}>
             <ListGroup  style={{ padding:"10px"}} variant='flush'>
                <ListGroupItem  ><h2>Istanbul aydin university</h2></ListGroupItem>
                <ListGroupItem><h4><em>Bachelor's degree, Computer Engineering </em></h4></ListGroupItem>
                <ListGroupItem><h4>Graduated in June 2023</h4></ListGroupItem>
                <ListGroupItem><h4>3.23/4 GPA</h4></ListGroupItem>   
             </ListGroup>
            </Col>
        </Row>
    </Container><br></br>
    <Container className='d-flex flex-column  ' fluid><br></br>
        <Row   className='d-flex  flex-column  align-items-center' >
            <Col md={6}>
                <h1><strong>Work experience</strong></h1><br></br>
            </Col>
            <Col md={6}>
            <Row xs={1} md={3} className="g-3">
         <Col>
          <Card>           
            <Card.Body>
              <Card.Title><b>Hubinit</b></Card.Title>
              <Card.Text>
              <em>UX/UI and Front end developer Intern</em>	
              </Card.Text>
              <Card.Text>
              Nov 2022- Feb 2023	
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card>           
            <Card.Body>
              <Card.Title><b>HediyeSepeti</b></Card.Title>
              <Card.Text>
              <em>HediyeSepeti</em>
              </Card.Text>
              <Card.Text>
              Dec 2020- Feb 2021	
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card>           
            <Card.Body>
              <Card.Title><b>Appen</b></Card.Title>
              <Card.Text>
              <em>Data collector</em>
              </Card.Text>
              <Card.Text>
              Apr 2023- Present	
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
        
    
         </Row>
            </Col>
        </Row>
    </Container><br></br>

     
    <Container className='d-flex flex-column  ' fluid><br></br>
        <Row   className='d-flex  flex-column  align-items-center' >
            <Col md={6}>
                <h1><strong>Work experience</strong></h1><br></br>
            </Col>
            <Col md={6}>
            <Row xs={1} md={3} className="g-3">
         <Col>
          <Card>           
            <Card.Body>
              <Card.Title><b>Hubinit</b></Card.Title>
              <Card.Text>
              <em>UX/UI and Front end developer Intern</em>	
              </Card.Text>
              <Card.Text>
              Nov 2022- Feb 2023	
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card>           
            <Card.Body>
              <Card.Title><b>HediyeSepeti</b></Card.Title>
              <Card.Text>
              <em>HediyeSepeti</em>
              </Card.Text>
              <Card.Text>
              Dec 2020- Feb 2021	
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card>           
            <Card.Body>
              <Card.Title><b>Appen</b></Card.Title>
              <Card.Text>
              <em>Data collector</em>
              </Card.Text>
              <Card.Text>
              Apr 2023- Present	
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
        
    
         </Row>
            </Col>
        </Row>
    </Container><br></br>
    </>
);

export default Aboutme;