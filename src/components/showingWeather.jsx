import { useState } from "react";

const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
};

export default function ShowingWeather({ weatherData }) {
    const [isCelsius, setIsCelsius] = useState(true);

    const toggleTemperature = () => {
        setIsCelsius(!isCelsius);
    };

    const renderTemperature = (temperature) => {
        if (isCelsius) {
            return Math.round(temperature);
        } else {
            return Math.round((temperature * 9) / 5 + 32);
        }
    };

    return (
        <>
            {weatherData && (
                <div className="weatherDetail">
                    <h2 className="city">
                        {weatherData.name}

                        <sub className="country">
                            ({weatherData.sys.country})
                        </sub>
                    </h2>
                    <p className="date">
                        {new Date(weatherData.dt * 1000).toLocaleDateString(
                            "en-US",
                            options,
                        )}
                    </p>
                    <div className="temperature">
                        {renderTemperature(weatherData.main.temp)}
                        <sup className="temp-unit" onClick={toggleTemperature}>
                            {isCelsius ? "°C" : "°F"} /{" "}
                            {isCelsius ? "°F" : "°C"}
                        </sup>
                    </div>
                    <p className="description">
                        {weatherData.weather[0].description.toUpperCase()}
                    </p>
                    <div className="weather-details">
                        <div className="col">
                            <div>
                                <p>{weatherData.wind.speed} m/s</p>
                                <p>Wind speed</p>
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <p>{weatherData.main.humidity} %</p>
                                <p>Humidity</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
