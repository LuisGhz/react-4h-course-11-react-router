import { Navbar, Nav } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';

const MainNavBar = props => {
  console.log(props);
  setTimeout(() => {
    props.history.push('/about');
  }, 2000);
  return (
    <div>
      <Navbar bg="dark" expand="md">
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default withRouter(MainNavBar);