import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Sidenav from '../Components/Sidenav';
import Phone from '../Slides/Phone';
import Laptop from '../Slides/Laptop1';

import { Link } from 'react-router-dom';
import Watch from '../Slides/Watch1';
import Header from './Header';


function Dashboard() {
  return (
    <div>
      <Row>
        <Col sm={2}>
          <Sidenav />
        </Col>
        <Col sm={10}>
          <Header/>
        <h1>Mobiles</h1>
        <div style={{ height: '500px', marginBottom: '20px', position: 'relative' }}>
          <Phone />
          <Link to='/dismob' style={{ position: 'absolute', bottom: '1px', right: '10px' }}>
            <button className="btn btn-primary btn-sm">View All</button>  
          </Link>
        </div>
        <h1>Laptops</h1>
          <div style={{ height: '500px', marginBottom: '20px', position: 'relative' }}>
            <Laptop />
            <Link to='/dislap' style={{ position: 'absolute', bottom: '1px', right: '10px' }}>
              <button className="btn btn-primary btn-sm">View All</button> 
            </Link>
          </div>
          <h1>Watches</h1>
          <div style={{ height: '500px', marginBottom: '20px', position: 'relative' }}>
            <Watch />
            <Link to='/diswat' style={{ position: 'absolute', bottom: '1px', right: '10px' }}>
              <button className="btn btn-primary btn-sm">View All</button> 
            </Link>
          </div>
       
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
