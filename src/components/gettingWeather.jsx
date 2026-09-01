export default function WeatherForm({ city, setCity, fetchWeather }) {
    function handleChange(e) {
        setCity(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetchWeather();
        setCity("");
    }

    return (
        <form className="weatherForm" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter city name"
                onChange={handleChange}
                value={city}
            />
            <button>Get weather</button>
        </form>
    );
}
