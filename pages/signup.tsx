import React from 'react';
import { Alert, Button, Panel, Form, FormGroup, ControlLabel, FormControl, Grid, Row, Col } from 'rsuite';
import SignupContainer from '../stores/signup';

function Signup() {
  const Signup = SignupContainer.useContainer()
  if (Signup.success && Signup.success !== '' && !Signup.loading) {
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

function SignupPage () {
  return (
    <SignupContainer.Provider>
      <Signup />
    </SignupContainer.Provider>
  )
}

export default SignupPage