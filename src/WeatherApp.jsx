
import InfoBox from "./InfoBox";
import SearchBox from "./Searchbox";
import { useState } from "react";
export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo]= useState({
        city : "Delhi",
        feelslikes :24.84,
        temp: 25.05,
        tempMin : 25.05,
        tempMax : 25.05,
        humidity :47,
        weather : "haze",
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    };

    return(
        <div style={{textAlign:"Center"}}>
            <h2> Weather Widge</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}