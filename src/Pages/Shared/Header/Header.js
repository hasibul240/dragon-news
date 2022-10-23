import React from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {

    const { user, log_out } = React.useContext(AuthContext);


    const handle_logout = () => {
        log_out()
            .then(() => {
                window.location.reload();
            })
            .catch(error => console.error(error));
    }

    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand><Link to='/'>Dragon News</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">All News</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
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
                    <Nav>
                        <Nav className='align-items-center' href="#deets">
                            {user?.uid ?
                                <>
                                    <span>{user?.displayName}</span>
                                    <Button onClick={handle_logout} className='ms-3' variant="outline-dark">LogOut</Button>
                                </> :
                                <>
                                    <Link to='/login'><Button className='me-2' variant="outline-dark">Login</Button></Link>
                                    <Link to='/resister'><Button variant="outline-dark">Resister</Button></Link>
                                </>
                            }
                        </Nav>
                        <Nav.Link eventKey={2} href="#memes">
                            {user?.photoURL ? <Image src={user.photoURL} roundedCircle width='30px' /> : <FaUserAlt />}
                        </Nav.Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideNav />
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;