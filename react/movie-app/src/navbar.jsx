import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="#home"><img src='data:image/png;base64,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'
            width={150} height={75}></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home" class>Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    Separated link
                </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default NavBar;