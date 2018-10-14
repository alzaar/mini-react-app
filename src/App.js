import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Components/MenuComponent'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="#">Mixin Restaurant</NavbarBrand>
          </div>
        </Navbar>
        <Menu />
      </div>
    );
  }
}

export default App;
