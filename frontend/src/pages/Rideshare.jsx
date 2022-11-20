import React, { useState, useRef, useEffect } from "react";
import { Placeholder } from "reactstrap";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Form, Col, FormGroup, Row, Input, ButtonGroup } from "reactstrap";
import { FaTimes, FaLocationArrow, } from "react-icons/fa"
import TripModal from "../components/UI/TripModal";
import axios from 'axios';

import {
    useJsApiLoader,
    GoogleMap,
    MarkerF,
    Autocomplete,
    DirectionsRenderer,
} from "@react-google-maps/api";

const center = { lat: 48.8584, lng: 2.2945 };

const Test2 = (args) => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ["places"],
    });

    const [map, setMap] = useState(/** @type google.maps.Map */(null));
    const [directionsResponse, setDirectionsResponse] = useState(null);
    const [distance, setDistance] = useState("");
    const [duration, setDuration] = useState("");

    const [modal, setModal] = useState(false);

    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');

    const [message, setMessage] = useState("");

    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef();
    /** @type React.MutableRefObject<HTMLInputElement> */
    const destiantionRef = useRef();
    /** @type React.MutableRefObject<HTMLInputElement> */
    const userRef = useRef();

    if (!isLoaded) {
        return (
            <div>

                <Placeholder animation='glow'>
                    <Placeholder xs={6} />
                </Placeholder>
                <Placeholder animation='glow'>
                    <Placeholder xs={7} />
                </Placeholder>
            </div>
        )
    }



    async function calculateRoute() {
        console.log(originRef.current.value)
        if (origin === '' || destination === '') {
            return
        }
        // eslint-disable-next-line no-undef
        const directionsService = new google.maps.DirectionsService()
        const results = await directionsService.route({
            origin: origin,
            destination: destination,
            // eslint-disable-next-line no-undef
            travelMode: google.maps.TravelMode.DRIVING,
        })
        setDirectionsResponse(results)
        setDistance(results.routes[0].legs[0].distance.text)
        setDuration(results.routes[0].legs[0].duration.text)

    }
    let newdistance = distance.replace(/\D/g, '');
    const price = newdistance * 2.70;
    function clearRoute() {
        setDirectionsResponse(null)
        setDistance('')
        setDuration('')
        originRef.current.value = ''
        destiantionRef.current.value = ''
    }

    const user = JSON.parse(localStorage.getItem("user"))
    const userId = user["user_id"]

    const handleSubmit = e => {
        e.preventDefault();

        axios.post('/api/trips/', {
            rider: userId,
            pick_up_address: origin,
            drop_off_address: destination,
            price: price,
        })
        .then(response=> {
            alert("Driver arriving shortly")
            setMessage("Driver will be arriving shortly");
        })
        .catch(error=> {
            alert("Error! fill in the form to continue.")
            console.log(error)
        })
    }


    return (
        <div className="position-relative" style={{ height: "100vh", width: "100vw", display: "flex", flexDirection: "column", alignItems: "center" }}>

            <div className="p-4 m-4 bg-white " style={{ zIndex: "1" }}>

                <Form className="p-2" onSubmit={handleSubmit} method="POST">

                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Input name="rider" ref={userRef} hidden value={userId}></Input>
                                <Autocomplete>
                                    <Input
                                        id="pickup"
                                        name="pick_up_address"
                                        type="text"
                                        placeholder="Search pick-up location"
                                        onChange={e => setOrigin(e.target.value)}
                                        ref={originRef}
                                    />
                                </Autocomplete>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Autocomplete>
                                    <Input
                                        id="destination"
                                        name="drop_off_address"
                                        type="text"
                                        placeholder="Destination"
                                        onChange={e => setDestination(e.target.value)}
                                        ref={destiantionRef}
                                    />
                                </Autocomplete>
                            </FormGroup>
                        </Col>
                    </Row>
                    <div className="d-flex justify-content-between">
                        <p>Distance: {distance}</p>
                        <p>Duration: {duration}</p>
                        <p>Price: ${price}</p>
                    </div>
                    <ButtonGroup>
                    <Button className="btn-sm" type="button" onClick={calculateRoute}>Calculate Route</Button>
                    <Button className="btn-sm btn-danger" type="button" onClick={clearRoute}>Clear</Button>
                    </ButtonGroup>
                    <Button className="btn-sm mx-4" color="primary" type="submit">Confirm</Button>
                </Form>

            </div>

            <div className="position-absolute l-0 t-0'" style={{ height: "100%", width: "100%" }}>
                {/* Google Map Box */}
                <GoogleMap
                    center={center}
                    zoom={15}
                    mapContainerStyle={{ width: '100%', height: '100%' }}
                    options={{
                        zoomControl: false,
                        streetViewControl: false,
                        mapTypeControl: false,
                        fullscreenControl: false,
                    }}
                    onLoad={map => setMap(map)}
                >
                    <MarkerF position={center} />
                    {directionsResponse && (
                        <DirectionsRenderer directions={directionsResponse} />
                    )}
                </GoogleMap>
            </div>
        </div>
    );
};

export default Test2;
