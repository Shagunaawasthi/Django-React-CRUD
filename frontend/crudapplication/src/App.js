import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from 'react-bootstrap/Navbar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Post from './components/Post';
import Display from "./components/Display";
import { Button, Nav, Form, FormControl } from 'react-bootstrap'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href={'/post'}>Create</Nav.Link>
                            <Nav.Link href={'/view'}>View</Nav.Link>
                            <Nav.Link >Help</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Navbar>
                    <br></br>
                    <Switch>
                        <Route exact path='/post' component={Post} />
                        <Route exact path='/view' component={Display} />

                    </Switch>

                </div>
            </Router>
        );
    }


}

export default App;
