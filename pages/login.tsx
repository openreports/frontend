import React from 'react';
import { Alert, Button, Panel, Form, FormGroup, ControlLabel, FormControl, Grid, Row, Col } from 'rsuite';

import LoginContainer from '../stores/login';

const LoginPage:React.FC = () => {
  const Login = LoginContainer.useContainer()
  if (Login.success && Login.success !== '' && !Login.loading) {
    Alert.success(Login.success, 3000)
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

export default LoginPage