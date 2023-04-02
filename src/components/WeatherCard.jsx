import React, { useState } from "react";

const WeatherCard = ({ weather, temperature }) => {
  console.log(weather);
  const [isCelsius, setIsCelsius] = useState(true);
  const handleChangeT = () => setIsCelsius(!isCelsius);
console.log(weather?.weather[0].icon)
  return (
    <article>
      <h2>
        {weather?.name}, {weather?.sys.country}
      </h2>
      <section>
        <header>
          <img
           /*  src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} */
           src={`../static/${weather?.weather[0].icon}.svg`}
           alt=""
          />
        
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
          <button onClick={handleChangeT}>Change to {isCelsius ? `ºF` : `ºC`}</button>
        </footer>
      </section>
    </article>
  );
};

export default WeatherCard;
