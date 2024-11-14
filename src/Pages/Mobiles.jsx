import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Sidenav from '../Components/Sidenav';
import Phone from '../Slides/Phone';

import { Link } from 'react-router-dom';

function Mobiles() {
  return (
    <div >
      <Row>
        <Col sm={2}>
          <Sidenav />
        </Col>
        <Col sm={10}>
          <h1>Mobiles</h1>
          <div style={{ height: '500px', marginBottom: '20px', position: 'relative' }}>
            <Phone />
            <Link to='/dismob' style={{ position: 'absolute', bottom: '1px', right: '10px' }}>
              <button className="btn btn-primary btn-sm">View All</button>  
            </Link>
          </div>

          
        </Col>
      </Row>
    </div>
  );
} 

export default Mobiles;
