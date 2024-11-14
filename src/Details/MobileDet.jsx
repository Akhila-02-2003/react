import React from 'react'
import { MobileData } from '../Data/Mobile'
import { useParams } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap';
import Sidenav from '../Components/Sidenav';

function MobileDet() {
  const { id } = useParams();
  const item = MobileData.find((e) => e.id === Number(id));
  console.log(id);
  
  return (
    <div>
      <Row>
        <Col sm={2}>
          <Sidenav />
        </Col>
        <Col sm={10}>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '250px' }}>
        <div style={{ border: '2px solid #ddd', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={item.Images} alt="Watch" style={{ width: '300px', height: '300px', marginBottom: '20px' }} />
            <div style={{ textAlign: 'center' }}>
              <p>Brand: {item.Brand}</p>
              <p>Model: {item.Model}</p>
              <p>Price: {item.Price}</p>
              <button>Add to cart</button>
            </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default MobileDet;
