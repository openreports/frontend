import React from 'react';
import { NextPage, NextPageContext } from 'next';
import cookies from 'next-cookies';
import Router from 'next/router';
import { Alert, Button, Panel, Form, FormGroup, ControlLabel, FormControl, Grid, Row, Col, SelectPicker, Toggle } from 'rsuite';

import OnboardingContainer from '../stores/onboarding';

const OnboardingPage:NextPage = () => {
  const Onboarding = OnboardingContainer.useContainer()
  if (Onboarding.success && Onboarding.success !== '' && !Onboarding.loading) {
    Router.push('/')
    Alert.success(Onboarding.success, 3000)
  }

  if (Onboarding.error && !Onboarding.loading) {
    Alert.error(Onboarding.error, 3000)
  }
  return (
    <Grid>
      <Row>
        <Col md={6}></Col>
        <Col md={12}>
          <Panel header={<h3>Create your app</h3>}>
            <Form fluid>
              <FormGroup>
                <ControlLabel>Name of you App/Website</ControlLabel>
                <FormControl onChange={(value) => Onboarding.handleChange('name', value)} name="name" type="text" />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Please enter the url of your website or for your app</ControlLabel>
                <FormControl onChange={(value) => Onboarding.handleChange('url', value)} name="url" type="url" />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Select the type of OpenReports App you want to create</ControlLabel>
                <SelectPicker
                  onChange={(value) => Onboarding.handleChange('type', value)}
                  data={[
                    { label: 'Issue Tracker', value: 'ISSUE' },
                    { label: 'API Logs', value: 'API' },
                    { label: 'Feedback System', value: 'FEEDBACK' },
                    { label: 'Feature Request', value: 'FEATURE' }
                  ]}
                  defaultValue="API"
                  disabledItemValues={['ISSUE', 'FEEDBACK', 'FEATURE' ]}
                  block
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Choose a Unique slug for your app</ControlLabel>
                <FormControl onChange={(value) => Onboarding.handleChange('slug', value)} name="slug" type="text" />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Do you want your reported issues to be public by default?</ControlLabel>
                <Toggle onChange={(value) => Onboarding.handleChange('isPublic', value)} checkedChildren="Yes" unCheckedChildren="No" defaultChecked />
              </FormGroup>
              <FormGroup>
                <Button loading={Onboarding.loading} onClick={Onboarding.submit} appearance="primary">Submit</Button>
              </FormGroup>
            </Form>
          </Panel>
        </Col>
      </Row>
    </Grid>
  )
}

OnboardingPage.getInitialProps = async (ctx:NextPageContext) => {
  const { res } = ctx
  const { token, name, project } = cookies(ctx)
  if (token && name && res) {
    if (project) {
      res.writeHead(302, {
        Location: '/'
      })
      res.end()
    }
  } else if ((!token || !name) && res) {
    res.writeHead(302, {
      Location: '/login'
    })
    res.end()
  }
  return { }
}

export default OnboardingPage