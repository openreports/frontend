import React from 'react';
import { Nav, Navbar } from 'rsuite';
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
                <Nav.Item>
                  <Link href="/signup">
                    <a>
                      Logout
                    </a>
                  </Link>
                </Nav.Item>
              ) : (
                <Nav.Item>
                  <Link href="/signup">
                    <a>
                      Signup
                    </a>
                  </Link>
                </Nav.Item>
              )
            }
          </Nav>
        </Navbar.Body>
      </Navbar>
    </>
  )
}

export default NavBar