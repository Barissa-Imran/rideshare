import React, {useState} from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";
import { Autocomplete } from "@react-google-maps/api";
import PaymentMethod from "./PaymentMethod";
import axios from "axios";

const BookingForm = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  const userId = user["user_id"]
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [fromDate, setFromdate] = useState('');
  const [ToDate, setTodate] = useState('');
  const [result, setResult] = useState();

  const submitBooking = e => {
    e.preventDefault();

    axios.post('/api/rental/', {
      user: userId,
      pickup_location: pickup,
      drop_off_address: dropoff,
      car_model: 'Toyota Aventador',
      from_date: fromDate,
      to_date: ToDate
    })
      .then(response => {
        setResult(response.data)
        window.location.href = response.data
      })
      .catch(error => {
        alert(error.message)
      })
  }

  return (
    <Form onSubmit={submitBooking} method="POST">
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="First Name" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Last Name" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="email" placeholder="Email" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="number" placeholder="Phone Number" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="From Address" name="pickup_address" onChange={e => setPickup(e.target.value)} />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="To Address" onChange={e => setDropoff(e.target.value)} />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <select name="" id="">
          <option value="1 person">1 Person</option>
          <option value="2 person">2 Person</option>
          <option value="3 person">3 Person</option>
          <option value="4 person">4 Person</option>
          <option value="5+ person">5+ Person</option>
        </select>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <select name="" id="">
          <option value="1 luggage">1 luggage</option>
          <option value="2 luggage">2 luggage</option>
          <option value="3 luggage">3 luggage</option>
          <option value="4 luggage">4 luggage</option>
          <option value="5+ luggage">5+ luggage</option>
        </select>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="date" placeholder="Journey Date" onChange={e => setFromdate(e.target.value)} />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="date" placeholder="To Date" onChange={e => setTodate(e.target.value)} />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="time"
          placeholder="Journey Time"
          className="time__picker"
        />
      </FormGroup>

      <FormGroup>
        <textarea
          rows={5}
          type="textarea"
          className="textarea"
          placeholder="Write"
        ></textarea>
      </FormGroup>
      <FormGroup>
        <h5 className="mb-4 fw-bold ">Payment Information</h5>
        <PaymentMethod result={result}/>
      </FormGroup>
    </Form>
  );
};

export default BookingForm;
