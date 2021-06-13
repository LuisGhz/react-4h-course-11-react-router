import { useEffect } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';

const MainNavBar = props => {
  console.log(props);
  useEffect(() => {
    setTimeout(() => {
      props.history.push('/about');
    }, 2000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav><Button variant="primary" >Login</Button></Nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default withRouter(MainNavBar);