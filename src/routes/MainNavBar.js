import { NavBar, Collapse, Nav, NavItem, NavLink } from 'reactstrap';

const MainNavBar = () => {
  return (
    <div>
      <NavBar>
        <Collapse>
          <Nav>
            <NavItem>
              <NavLink href="#" >Home</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </NavBar>
    </div>
  )
}

export default MainNavBar;