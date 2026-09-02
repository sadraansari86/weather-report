import { useState } from "react";
import "./App.css";
import GettingWeather from "./components/gettingWeather";
import ShowingWeather from "./components/showingWeather";

function App() {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [isError, setIsError] = useState(false);

    const fetchWeather = async () => {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ffba7b26d26c3be070e680d67822622c&units=metric`,
        );
        const data = await response.json();

        if (data.cod == 404) {
            setWeatherData(null);
            setIsError(true);
        } else {
            setIsError(false);
            setWeatherData(data);
        }
    };

    return (
        <div
            className="body"
            style={{
                height: !weatherData && "100px",
                height: isError && "190px",
            }}
        >
            <GettingWeather
                city={city}
                setCity={setCity}
                fetchWeather={fetchWeather}
            />

            <ShowingWeather weatherData={weatherData} error={isError} />
        </div>
    );
}

export default App;
