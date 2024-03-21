import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home/Home';
import Item from './Components/Item/Item';
import Cart from './Components/Cart/Cart';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './LPLogo.png';
import { NavDropdown } from 'react-bootstrap';
import PastOrders from './Components/PastOrders/PastOrders';

function App() {
  return (
    <div className="container-fluid" style={{ backgroundColor: '#222', color: '#fff', minHeight: '100vh' }}>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to='/'>
              <img src={logo} alt="Your Logo" height="150" className="d-inline-block align-left" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to='/' style={{ color: '#FF5147' }}><b>Home</b></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/items' style={{ color: '#FF5147', marginLeft: "10px" }}><b>Inventory</b></Link>
                </li>

                <NavDropdown title={<span style={{ color: '#FF5147', fontWeight: 'bold' }}>Orders</span>} id="basic-nav-dropdown">
                  <Link className="dropdown-item" to='/carts'>Current Orders</Link>
                  <Link className="dropdown-item" to='/pastorders'>Previous Orders</Link>

                </NavDropdown>

                {/* <li className="nav-item">
                  <Link className="nav-link" to='/carts' style={{ color: '#dc3545' }}><b>Orders</b></Link>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/items' element={<Item />} />
          <Route path='/carts' element={<Cart />} />
          <Route path='/pastorders' element={<PastOrders />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
