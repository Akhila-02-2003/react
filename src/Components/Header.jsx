import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar'; // Import Navbar here
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <NavDropdown title="Gadgets" id="navbarScrollingDropdown">
            <NavDropdown.Item as={Link} to="/mobiles">Mobiles</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/laptops">Laptops</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/watches">Watches</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
