import React from 'react';
import { Nav, Navbar, Dropdown } from 'rsuite';
import Link from 'next/link';
import AuthContainer from '../stores/auth'

function NavBar () {
  const Auth = AuthContainer.useContainer()
  return (
    <>
      <Navbar appearance="inverse">
        <Navbar.Header>
          <Nav>
            <Nav.Item>
              <Link href="/">
                <a>
                  OpenReports
                </a>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Header>
        <Navbar.Body>
          <Nav pullRight>
            {
              Auth.isAuthenticated ? (
                <Dropdown title={Auth.name}>
                  <Dropdown.Item onClick={Auth.logout}>Sign out</Dropdown.Item>
                </Dropdown>
              ) : (
                <>
                <Nav.Item>
                  <Link href="/signup">
                    <a>
                      Signup
                    </a>
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link href="/login">
                    <a>
                      Login
                    </a>
                  </Link>
                </Nav.Item>
                </>
              )
            }
          </Nav>
        </Navbar.Body>
      </Navbar>
    </>
  )
}

export default NavBar