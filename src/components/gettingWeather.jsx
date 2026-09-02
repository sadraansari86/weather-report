export default function GettingWeather({ city, setCity, fetchWeather }) {
    function handleChange(e) {
        setCity(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetchWeather();
        setCity("");
    }

    return (
        <form className="GettingWeather" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter City Name"
                onChange={handleChange}
                value={city}
            />
            <button>Get Weather Report</button>
        </form>
    );
}
