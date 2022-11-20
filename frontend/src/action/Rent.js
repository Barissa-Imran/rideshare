import { Link } from "react-router-dom";

let createRental = async () => {
    fetch("http://127.0.0.1:8000/api/rental/",{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    });
}
