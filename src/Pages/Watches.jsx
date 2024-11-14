import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Sidenav from '../Components/Sidenav';
import { Link } from 'react-router-dom';
import Watch from '../Slides/Watch1';

function Watches() {
  return (
    <div>
      <Row>
        <Col sm={2}>
          <Sidenav />
        </Col>
        <Col sm={10}>
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

export default Watches;
