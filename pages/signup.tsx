import React from 'react';
import { NextPage, NextPageContext } from 'next';
import cookies from 'next-cookies';
import Router from 'next/router';
import { Alert, Button, Panel, Form, FormGroup, ControlLabel, FormControl, Grid, Row, Col } from 'rsuite';
import SignupContainer from '../stores/signup';

const SignupPage:NextPage<{}> = () => {
  const Signup = SignupContainer.useContainer()
  if (Signup.success && Signup.success !== '' && !Signup.loading) {
    Router.push('/onboarding')
    Alert.success(Signup.success, 3000)
  }

  if (Signup.error && !Signup.loading) {
    Alert.error(Signup.error, 3000)
  }
  return (
    <Grid>
      <Row>
        <Col md={6}></Col>
        <Col md={12}>
          <Panel header={<h3>Create an Account</h3>}>
            <Form fluid>
              <FormGroup>
                <ControlLabel>Name</ControlLabel>
                <FormControl onChange={(value) => Signup.handleChange('name', value)} name="name" />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Email</ControlLabel>
                <FormControl onChange={(value) => Signup.handleChange('email', value)} name="email" type="email" />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Password</ControlLabel>
                <FormControl onChange={(value) => Signup.handleChange('password', value)} name="password" type="password" />
              </FormGroup>
              <FormGroup>
                <Button loading={Signup.loading} onClick={Signup.submit} appearance="primary">Submit</Button>
              </FormGroup>
            </Form>
          </Panel>
        </Col>
      </Row>
    </Grid>
  )
}

SignupPage.getInitialProps = async (ctx:NextPageContext) => {
  const { res } = ctx
  const { token, name, project } = cookies(ctx)
  if (token && name && res) {
    if (project) {
      res.writeHead(302, {
        Location: '/'
      })
    } else {
      res.writeHead(302, {
        Location: '/onboarding'
      })
    }
    res.end()
  }
  return { }
}

export default SignupPage