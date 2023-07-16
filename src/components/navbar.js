import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navibar() {
  return (
    <>
      {/* <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Ibrahim</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link className="navlink" href="/">Home</Nav.Link>
            <Nav.Link className="navlink" href="#features">Features</Nav.Link>
            <Nav.Link className="navlink" href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      */}
      <Navbar collapseOnSelect expand="lg" className="bg-light.bg-gradient" >
      <Container fluid >
        <Navbar.Brand href="/">Ibrahim Mnaimne</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
        <Nav fill variant="underline" >
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/aboutibrahim">About me</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/contact" >Contact</Nav.Link>
      </Nav.Item>
    </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>



    </>
  );
}

export default Navibar;