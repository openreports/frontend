import React from 'react';
import { Nav, Navbar } from 'rsuite';
import { Link } from '../server/pages';

function NavBar () {
  return (
    <>
      <Navbar appearance="inverse">
        <Navbar.Header>
          <Nav>
            <Nav.Item>
              <Link route="/">
                <a>
                  OpenReports
                </a>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Header>
        <Navbar.Body>
          <Nav pullRight>
            <Nav.Item>
              <Link route="/signup">
                <a>
                  Signup
                </a>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Body>
      </Navbar>
    </>
  )
}

export default NavBar