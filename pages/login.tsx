import React from 'react';
import { NextPage, NextPageContext } from 'next';
import cookies from 'next-cookies';
import Router from 'next/router';
import { Alert, Button, Panel, Form, FormGroup, ControlLabel, FormControl, Grid, Row, Col } from 'rsuite';

import AuthContainer from '../stores/auth';
import LoginContainer from '../stores/login';

const LoginPage:NextPage<{}> = () => {
  const Login = LoginContainer.useContainer()
  const Auth = AuthContainer.useContainer()
  if (Login.success && Login.success !== '' && !Login.loading) {
    Alert.success(Login.success, 3000)
    Auth.project ? Router.push('/') : Router.push('/onboarding')
  }

  if (Login.error && !Login.loading) {
    Alert.error(Login.error, 3000)
  }
  return (
    <Grid>
      <Row>
        <Col md={6}></Col>
        <Col md={12}>
          <Panel header={<h3>Log in to your account</h3>}>
            <Form fluid>
              <FormGroup>
                <ControlLabel>Email</ControlLabel>
                <FormControl onChange={(value) => Login.handleChange('email', value)} name="email" type="email" />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Password</ControlLabel>
                <FormControl onChange={(value) => Login.handleChange('password', value)} name="password" type="password" />
              </FormGroup>
              <FormGroup>
                <Button loading={Login.loading} onClick={Login.submit} appearance="primary">Log in</Button>
              </FormGroup>
            </Form>
          </Panel>
        </Col>
      </Row>
    </Grid>
  )
}

LoginPage.getInitialProps = async (ctx:NextPageContext) => {
  const { res } = ctx
  const { token, name, project} = cookies(ctx)
  if (token && name && res) {
    if (project) {
      res.writeHead(302, {
        Location: '/'
      })
      res.end()
    } else {
      res.writeHead(302, {
        Location: '/onboarding'
      })
      res.end()
    }
  }
  return { }
}

export default LoginPage