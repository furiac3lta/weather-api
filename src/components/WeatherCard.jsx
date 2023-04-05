import React, { useState } from "react";
import "animate.css";

const WeatherCard = ({ weather, temperature }) => {
  const [isCelsius, setIsCelsius] = useState(true);
  const handleChangeT = () => setIsCelsius(!isCelsius);

  return (
    <article>
      <h2>
        {weather?.name}, {weather?.sys.country}
      </h2>
      <section>
        <header>
          <img className="animate__animated animate__flip animate__infinite	infinite animate__slow" src={`../assets/${weather?.weather[0].icon}.svg`} alt="" />
        </header>
        <article>
          <h1>{}</h1>
          <h3>
            <b>Clouds: </b>"{weather?.weather[0].description}"
          </h3>
          <ul>
            <li>
              <span>
                <b>Wind Speed: </b>
              </span>
              {(weather?.wind.speed * 3.6).toFixed(2)} k/h
            </li>
            <li>
              <span>
                <b>Clouds: </b>
              </span>
              {weather?.clouds.all} %
            </li>
            <li>
              <span>
                <b>Pressure: </b>
              </span>
              {weather?.main.pressure} hPa
            </li>
          </ul>
        </article>
        <footer>
          <h2 className="temp">
            {isCelsius
              ? `${temperature?.celsius} ºC`
              : `${temperature?.farenheit} ºF`}
          </h2>
          <button onClick={handleChangeT}>
            Change to {isCelsius ? `ºF` : `ºC`}
          </button>
        </footer>
      </section>
    </article>
  );
};

export default WeatherCard;
