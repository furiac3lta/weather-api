import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";
import Loading from "./components/Loading";

function App() {
  const [latlon, setLatlon] = useState();
  const [weather, setWeather] = useState();
  const [search, setSearch] = useState();
  const [temperature, setTemperature] = useState();

  console.log(weather?.weather[0]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.input.value.toLowerCase().trim());
    e.target.input.value = "";
  };
  const handleLang = (e) => {
    setLang("es");
  };
  useEffect(() => {
    const success = (pos) => {
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
      };
      setLatlon(obj);
    };

    const error = () => {};
    navigator.geolocation.getCurrentPosition(success, error);
  }, [search]);

  useEffect(() => {
    if (latlon) {
      const apikey = "a6f139938d4bc72a171fbf83d3bcb13b";
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latlon.lat}&lon=${latlon.lon}&appid=${apikey}&q=${search}`;
      axios
        .get(url)
        .then((res) => {
          const celsius = (res.data.main.temp - 273.15).toFixed(1);
          const farenheit = ((celsius * 9) / 5 + 32).toFixed(1);
          setTemperature({ celsius, farenheit });
          setWeather(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [latlon]);

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(../assets/${weather?.weather[0].icon}.jpg)`,
      }}
    >
      {weather ? (
        <>
          <div className="contain">
            {/* {" "} */}
            <h1 className="title">Wheather app</h1>
            <form onSubmit={handleSearch} action="">
              <input id="input" type="text" autoComplete="off" />
              <button>search</button>
            </form>
            <WeatherCard weather={weather} temperature={temperature} />
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default App;
