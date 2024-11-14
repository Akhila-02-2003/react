import React from 'react'
import { useParams } from 'react-router-dom'
import { Row,Col } from 'react-bootstrap';
import { LaptopData } from '../Data/Laptop';
import Sidenav from '../Components/Sidenav';

function LaptopDet() {
    const {id} = useParams();
    const item = LaptopData.find((e)=>e.id === Number(id))
   
  return (
    <div>
      <Row>
      <Col sm={2}>
      <Sidenav/>
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
  )
}

export default LaptopDet
