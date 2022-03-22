import React, { useState } from "react";
import axios from "axios";
export default function Search() {
    const [searchTerm, setSearchTerm] = useState("");
    const [showTemp, SetShowTemp] = useState("");
    let sr = "";
    let htm = "";
    function handleResponse(response) {
        sr = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
        htm = (
            <ul>
                <li>Temperature: {Math.round(response.data.main.temp)} °C</li>
                <li>Description: {response.data.weather[0].description}</li>
                <li>Humidity: {response.data.main.humidity}%</li>
                <li>Wind: {response.data.wind.speed}km/h</li>
                <li>
                    <img src={sr} alt={response.data.weather[0].description} />
                </li>
            </ul>
        );
        SetShowTemp(htm);
    }
    function onSubmit(event) {
        debugger;
        event.preventDefault();
        if (searchTerm === "") {
            sr = "";
            alert("Enter your city...");
        } else {
            var url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=dc97aa33cb622bac3515eb911c553e12`;
            axios.get(url).then(handleResponse);
        }
    }
    function handleChange(event) {
        if (event.target.value !== "") {
            setSearchTerm(event.target.value);
        } else {
            setSearchTerm("");
        }
    }
    return (
        <>
            <form onSubmit={onSubmit} style={{ fontFamily: "Calibri" }}>
                <input
                    type="text"
                    onChange={handleChange}
                    style={{
                        height: "36px",
                        fontFamily: "Calibri",
                        fontSize: "16px",
                        borderRadius: "4px",
                        border: "1px solid #aaa",
                        outline: "none"
                    }}
                />
                <input
                    type="submit"
                    value="search"
                    style={{
                        marginLeft: "10px",
                        height: "40px",
                        background: "#885df1",
                        color: "#fff",
                        fontFamily: "Calibri",
                        fontSize: "18px",
                        borderRadius: "4px",
                        border: "none"
                    }}
                />
            </form>
            {showTemp ? showTemp : ""}
        </>
    );
}
