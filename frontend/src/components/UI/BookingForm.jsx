import React from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";
import AuthContext from "../../action/AuthContext";
import { useState, useContext } from "react";
const BookingForm = () => {
  const [email, setEmail]  = useState("");
  const [car_model, setModel] = useState("");
  const [pickup_location, setLocation] = useState("");
  const [from_date, setFrom] = useState("");
  const [to_date, setTo] = useState("");
 
  const {rentCar} = useContext(AuthContext);

  const submitHandler = async e => {
    e.preventDefault();
    rentCar(email, car_model, pickup_location, from_date, to_date);
};
  return (
    <Form onSubmit={submitHandler}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="email" placeholder="Email" 
        onChange={e => setEmail(e.target.value)}
        />
       </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="Pick up location"
        onChange={e => setLocation(e.target.value)}
        />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <p>Select Car Model</p>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
      <select 
      onChange={e => setModel(e.target.value)}
      >
          <option>Select</option>
          <option value="Tesla Malibu">Tesla Malibu</option>
          <option value="Toyota Aventador">Toyota Aventador</option>
          <option value="BMWX3">BMWX3</option>
          <option value="Nissan Mercielago">Nissan Mercielago</option>
          <option value="Ferrari Camry">Ferrari Camry</option>
          <option value="Mercedes Benz XC90">Mercedes Benz XC90</option>
      </select>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <p>From Date</p>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input  placeholder="From Date:Format (YYYY-MM-DD)"
        onChange={e => setFrom(e.target.value)}
        />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <p>To Date</p>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
         placeholder="To Date:Format (YYYY-MM-DD)"
         onChange={e => setTo(e.target.value)}
        />
      </FormGroup>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </Form>
  );
};

export default BookingForm;
