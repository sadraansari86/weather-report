import { useState } from "react";
import "./App.css";
import WeatherForm from "./components/gettingWeather";

function App() {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeather = async () => {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ffba7b26d26c3be070e680d67822622c&units=metric`,
        );
        const data = await response.json();
        setWeatherData(data);
        console.log(data);
    };

    return (
        <div className="body">
            <WeatherForm
                city={city}
                setCity={setCity}
                fetchWeather={fetchWeather}
            />
        </div>
    );
}

export default App;
