import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

import { BsLinkedin,BsGithub } from 'react-icons/bs';

const Footer=()=>{
    return(
        <>
            <Row style={{height:"400px",width:"100%"}} className='d-flex flex-column padding-0'>
                <Row style={{ width:"100%"}}  className='d-flex padding-0 '>
                    <Col md={4} style={{height:"200px"}} className='d-flex flex-column justify-content-center text-center '>
                        <h1>Ibrahim</h1>
                        <p style={{}}>I am an entry-level, computer engineer new graduate, experiences in fullstack development FE-heavy</p>
                    </Col>
                    <Col md={8} className='d-flex justify-content-center align-items-center'>
                        <Link to="/">Home</Link>
                        <Link to="/aboutibrahim">About me</Link>
                        <Link to="/contact">Contact</Link>
                    </Col>
                </Row>
                <Row>
                <BsLinkedin />
                <BsGithub />
                </Row>
                <Row className='text-center'>
                    <small>Website created by <Link to="https://www.linkedin.com/in/ibrahim-mnaimne-160ab4254/">Ibrahim Mnaimne</Link></small>
                </Row>
            </Row>
        </>
    );
};

export default Footer;