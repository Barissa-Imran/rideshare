import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Input,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import { FaLocationArrow, FaTimes } from "react-icons/fa";

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import React, { useRef, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

const center = { lat: 75, lng: 34 };

const Rideshare = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  // const [currentLatLng, setCurrentLatLng] = useState({ lat: 0, lng: 0 });
  // If browser supports navigator.geolocation, generate Lat/Long else let user know there is an error
  /* const getPosition = () => {
     console.log("something")
     if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(showPosition, posError); // Passing in a success callback and an error callback fn
     } else {
       alert("Sorry, Geolocation is not supported by this browser."); // Alert is browser does not support geolocation
     }
   };
   // Geolocation error callback fn. Query permissions to check if the error occured due to user not allowing location to be shared
   const posError = () => {
     if (navigator.permissions) {
       navigator.permissions.query({ name: "geolocation" }).then((res) => {
         if (res.state === "denied") {
           alert(
             "Enable location permissions for this website in your browser settings."
           );
         }
       });
     } else {
       alert(
         "Unable to access your location. You can continue by submitting location manually."
       ); // Obtaining Lat/long from address necessary
     }
   };
   // Geolocation success callback fn
   const showPosition = (position) => {
     let lat = position.coords.latitude; // You have obtained latitude coordinate!
     let long = position.coords.longitude; // You have obtained longitude coordinate!

     return {
       lat: lat,
       lng: long
     }
   }; */

  // End

  const [map, setMap] = useState(/** @type google.maps.Map */(null));
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef();

  if (!isLoaded) {
    return <SkeletonText />;
  }

  async function calculateRoute() {
    if (originRef.current.value === "" || destiantionRef.current.value === "") {
      return;
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destiantionRef.current.value = "";
  }

  return (
    <Helmet title="rideshare">
      <Flex
        position="relative"
        flexDirection="column"
        alignItems="center"
        bgColor="blue.200"
        h="100vh"
        w="100vw"
      >
        <Box position="absolute" left={0} top={0} h="100%" w="100%">
          {/* Google Map Box */}
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{ width: "100%", height: "100%" }}
            options={{
              zoomControl: false,
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
            }}
            onLoad={(map) => setMap(map)}
          >
            <Marker position={center} />
            {directionsResponse && (
              <DirectionsRenderer directions={directionsResponse} />
            )}
          </GoogleMap>
        </Box>

        <Box
          p={4}
          borderRadius="lg"
          mt={4}
          bgColor="white"
          shadow="base"
          minW="container.md"
          zIndex="1"
        >
          <HStack spacing={4}>
            <Autocomplete>
              <Input type="text" placeholder="Origin" ref={originRef} />
            </Autocomplete>

            <Autocomplete>
              <Input type="text" placeholder="Destination" ref={destiantionRef} />
            </Autocomplete>

            <ButtonGroup>
              <Button colorScheme="pink" type="submit" onClick={calculateRoute}>
                Calculate Route
              </Button>
              <IconButton
                aria-label="center back"
                icon={<FaTimes />}
                onClick={clearRoute}
              />
            </ButtonGroup>
          </HStack>
          <HStack spacing={4} mt={4} justifyContent="space-between">
            <Text>Distance: {distance}</Text>
            <Text>Duration: {duration}</Text>
            <Text>Price: </Text>
            <IconButton
              aria-label="center back"
              icon={<FaLocationArrow />}
              isRound
              onClick={() => map.panTo(center)}
            />
          </HStack>
        </Box>
      </Flex>
    </Helmet >
  );
}

export default Rideshare;
