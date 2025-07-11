import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { initialize, getConfig, subscribe, APP_READY } from '@edx/frontend-platform';
import { AppContext, AppProvider } from '@edx/frontend-platform/react';
import Header from '@edx/frontend-component-header';

import './index.scss';
import StudioHeader from '../src/studio-header/StudioHeader';
import {Alert, Button, Card, Col, Container, Icon, Navbar, Row} from "@openedx/paragon";
import {faCheckCircle, faWarning, faInfo, faStop} from "@fortawesome/free-solid-svg-icons";

const variants = ["primary", "secondary", "brand"];
const alertVariants = [
  {label: "success", icon: faCheckCircle},
  {label: "danger", icon: faStop},
  {label: "info", icon: faInfo},
  {label: "warning", icon: faWarning},
]

subscribe(APP_READY, () => {
  ReactDOM.render(
    <AppProvider>
      {/* We can fake out authentication by including another provider here with the data we want */}
      <AppContext.Provider value={{
        authenticatedUser: null,
        config: getConfig(),
      }}>
        <Container>
          <div className="my-2">
            {variants.map((variant) => <Button variant={variant} className="mx-2">{variant}</Button>)}
          </div>
          <div className="my-2">
            {alertVariants.map((variant) => (
              <Alert variant={variant.label} className="mx-2">
                <Alert.Heading>{variant.label}</Alert.Heading>
                <p>This is a {variant.label} message.</p>
              </Alert>
            ))}
          </div>
          <Row>
            <Col md={4} lg={3}>
              <Card>
                <Card.ImageCap
                  src="https://picsum.photos/360/200/"
                  srcAlt="Card image"
                />
                <Card.Header title="Card Title" />
                <Card.Section>
                  <p className="text-accent-a">Accent A text!</p>
                </Card.Section>
              </Card>
            </Col>
            <Col md={4} lg={3}>
              <Card>
                <Card.ImageCap
                  src="https://picsum.photos/360/200/"
                  srcAlt="Card image"
                />
                <Card.Header title="Card Title" />
                <Card.Section className="bg-accent-b">
                  <p>Accent B background.</p>
                </Card.Section>
              </Card>
            </Col>
          </Row>
          <Navbar bg="light">Light Navbar</Navbar>
          <Navbar bg="dark"><span className="text-light">Dark Navbar</span></Navbar>
        </Container>
      </AppContext.Provider>
    </AppProvider>,
    document.getElementById('root'),
  );
});

initialize({
  messages: []
});
