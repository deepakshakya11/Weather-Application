import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./WeatherApp.css";
import React, { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] =  useState({
        city: "",
        // feelslike:0 ,
        temp: 0,
        tempMin: 0,
        tempMax: 0,
        humidity: 0,
        weather: "",
    });
    
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div className="WeatherApp">
            <h2>Weather Application</h2>
            <SearchBox updateInfo ={updateInfo} />
            <InfoBox info={weatherInfo} />
            </div>
    );
            
}