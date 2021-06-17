import { useEffect } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import auth from 'auth/Auth';

const MainNavBar = props => {
  // console.log(props);
  // useEffect(() => {
  //   setTimeout(() => {
  //     props.history.push('/about');
  //   }, 2000);
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const authHandler = () => {
    if (auth.isAuthenticated()) {
      auth.logout(() => {
        props.history.push('/');
      });
    }
    if (!auth.isAuthenticated()) {
      auth.login(() => {
        props.history.push('/about');
      });
    }
  }

  const authText = auth.isAuthenticated() ? 'Logout' : 'Login';

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
            <Nav><Button variant="primary" onClick={ authHandler } >{ authText }</Button></Nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default withRouter(MainNavBar);