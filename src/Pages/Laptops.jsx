import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Sidenav from '../Components/Sidenav';

import Laptop from '../Slides/Laptop1'; // Ensure this import is correct
import { Link } from 'react-router-dom';

function Laptops() {
  return (
    <div >
      <Row>
        <Col sm={2}>
          <Sidenav />
        </Col>
        <Col sm={10}>
          

          <h1>Laptops</h1>
          <div style={{ height: '500px', marginBottom: '20px', position: 'relative' }}>
            <Laptop />
            <Link to='/dislap' style={{ position: 'absolute', bottom: '1px', right: '10px' }}>
              <button className="btn btn-primary btn-sm">View All</button> 
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Laptops;
