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
            <NavItem>
              <NavLink href="#" >About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" >Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </NavBar>
    </div>
  )
}

export default MainNavBar;