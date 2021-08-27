import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {Container, Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
        <Navbar bg="dark" variant='dark' expand="lg">
          <Container>
            <LinkContainer to='/cs428portfolio/'>
              <Navbar.Brand>John L.</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className='mr-auto'>
                <LinkContainer to="/cs428portfolio/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/cs428portfolio/proj1">
                  <Nav.Link>Project 1</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/cs428portfolio/proj2">
                  <Nav.Link>Project 2</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/cs428portfolio/proj3">
                  <Nav.Link>Project 3</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Switch>
          <Route exact path="/cs428portfolio/" component={Home} />
          <Route exact path="/cs428portfolio/proj1" component={Proj1} />
          <Route exact path="/cs428portfolio/proj2" component={Proj2} />
          <Route exact path="/cs428portfolio/proj3" component={Proj3} />
        </Switch>
    </Router>
  );
}

function Home() {
  return (
    <h1>Home</h1>
  )
}

function Proj1() {
  return (
    <h1>Project 1</h1>
  )
}

function Proj2() {
  return (
    <h1>Project 2</h1>
  )
}

function Proj3() {
  return (
    <h1>Project 3</h1>
  )
}

export default App;