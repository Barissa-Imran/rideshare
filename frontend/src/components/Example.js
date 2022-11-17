import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Form, Col, FormGroup, Row, Input } from "reactstrap";

function Example(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div style={{zIndex: "1"}}>
      <Button color="secondary" className="m-2" onClick={toggle}>
        Where to?
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Asap Cab services</ModalHeader>
        <ModalBody>
          <Form className="p-2">
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Input
                    id="pickup"
                    name="pickup"
                    placeholder="Search pick-up location"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Input
                    id="destination"
                    name="destination"
                    placeholder="Destination"
                  />
                </FormGroup>
              </Col>
              <p>Distance: </p>
              <p>Duration: </p>
              <p>Price: </p>
            </Row>
            <Button className="btn-sm" type="button" >Calculate Route</Button>
            <Button className="btn-sm mx-2 btn-danger" type="button">Clear</Button>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Confirm Ride
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Example;
