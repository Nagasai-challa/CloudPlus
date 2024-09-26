import { useEffect, useState } from "react";

const Body = () => {
    const key = "5fcff7fd909a7f00e463bfd186b741f5";
    const base = "https://api.openweathermap.org/data/2.5/";

    const indianCities = [
        "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad",
        "Chennai", "Kolkata", "Pune", "Jaipur", "Surat",
        "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane",
        "Bhopal", "Visakhapatnam", "Patna", "Vadodara", "Ghaziabad"
    ];

    const [searchText, setSearhText] = useState("guntur");
    const [buttonClicked, setButtonClicked] = useState(true);
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const [filteredCities, setFilteredCities] = useState([]);

    useEffect(() => {
        if (buttonClicked) {
            fetchData();
        }
    }, [buttonClicked]);

    async function fetchData() {
        try {
            const data = await fetch(
                `${base}weather?q=${searchText}&APPID=${key}`
            );
            const json = await data.json();
            if (json.cod === "404") {
                setError("City not found");
                setWeatherData(null);
            } else {
                setError(null);
                setWeatherData(json);
            }
        } catch (err) {
            setError("An error occurred");
            setWeatherData(null);
        } finally {
            setButtonClicked(false);
        }
    }

    function handleButton() {
        setButtonClicked(true);
    }

    function handleSearchChange(e) {
        const input = e.target.value;
        setSearhText(input);
        const filtered = indianCities.filter(city =>
            city.toLowerCase().startsWith(input.toLowerCase())
        );
        setFilteredCities(filtered);
    }

    function handleCityClick(city) {
        setSearhText(city);
        setFilteredCities([]);
    }

    return (
        <div className="container mx-auto p-4">
            <div className="search-bar flex items-center justify-center space-x-4">
                <input
                    className="search-input border rounded-lg py-2 px-4 w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    placeholder="Search for a city..."
                    spellCheck="false"
                    value={searchText}
                    onChange={handleSearchChange}
                />
                <button 
                    className="search-button bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
                    onClick={handleButton}
                >
                    Search
                </button>
            </div>

            {filteredCities.length > 0 && (
                <ul className="suggestions mt-2 border rounded-lg p-2 bg-white shadow-md">
                    {filteredCities.map((city, index) => (
                        <li 
                            key={index} 
                            className="cursor-pointer p-2 hover:bg-gray-200 transition-all"
                            onClick={() => handleCityClick(city)}
                        >
                            {city}
                        </li>
                    ))}
                </ul>
            )}

            {error ? (
                <h1 className="error text-red-500 text-center mt-4">{error}</h1>
            ) : weatherData ? (
                <div className="weather-data mt-6">
                    <div className="rain-temp text-center">
                        <h2 className="city text-3xl font-semibold mb-2">{weatherData.name}</h2>
                        <span className="temp text-5xl font-bold">{Math.round(weatherData.main.temp - 273.15)}°C</span>
                        <span className="rain text-xl block mt-2">{weatherData.weather[0].description.toUpperCase()} ⛈</span>
                    </div>

                    <div className="test grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        <div className="p-4 border rounded-lg shadow-md text-center">
                            <p className="text-lg font-medium">Temperature</p>
                            <h1 className="text-4xl font-bold">{Math.round(weatherData.main.temp - 273.15)}°C</h1>
                        </div>
                        <div className="p-4 border rounded-lg shadow-md text-center">
                            <p className="text-lg font-medium">Humidity</p>
                            <h1 className="text-4xl font-bold">{weatherData.main.humidity}%</h1>
                        </div>
                        <div className="p-4 border rounded-lg shadow-md text-center">
                            <p className="text-lg font-medium">Wind Speed</p>
                            <h1 className="text-4xl font-bold">{weatherData.wind.speed}m/s</h1>
                        </div>
                    </div>
                </div>
            ) : (
                <h1 className="loading text-center text-xl mt-4">LOADING...</h1>
            )}
        </div>
    );
};

export default Body;
