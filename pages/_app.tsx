import React from 'react';
import App from 'next/app';
import { Container, Header, Content } from 'rsuite';
import NavBar from '../components/NavBar';
import '../styles/openreports.less';

import Providers from '../components/Providers'

class OpenReportsApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = (await Component.getInitialProps(ctx)) || {};
    }

    return { pageProps };
  }
  render () {
    const { Component, pageProps } = this.props
    return (
      <Providers>
        <Container>
          <Header>
            <NavBar />
          </Header>
          <Content>
            <Component {...pageProps} />
          </Content>
        </Container>
      </Providers>
    )
  }
}

export default OpenReportsApp;