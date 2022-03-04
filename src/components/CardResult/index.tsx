import { ContainerTitle, CardResultt, ContainerSearch } from "./styles";
import React, { useEffect, useState } from "react";
import { getWeatherData } from "../../services/api";
import { BsSearch } from "react-icons/bs";

export interface WeatherData {
  location: {
    region: string;
    name: string;
    country: string;
  };
  current: {
    temp_c: string;
    vis_km: string;
    feelslike_c: string;
    humidity: string;

    condition: {
      text: string;
      icon: string;
    };
  };
  forecast: {
    forecastday: [
      {
        day: {
          maxtemp_c: number;
          mintemp_c: number;
        };
      }
    ];
  };
  responses: [
    {
      data: {
        current: { cloud: string };
      };
    }
  ];
}

export function CardResult() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [city, setCity] = useState("");

  const getData = async () => {
    try {
      const data = await getWeatherData(city);

      setWeatherData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseCard = () => {
    setWeatherData(null);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <ContainerTitle>
        <h1>Previsão do tempo </h1>{" "}
      </ContainerTitle>
      {weatherData && (
        <CardResultt>
          <p className="place">
            {weatherData?.location.name}, {weatherData?.location.region} -{" "}
            {weatherData?.location.country}
            <button className="Xbotton" onClick={handleCloseCard} type="button">
              {" "}
              X
            </button>
          </p>

          <div className="temp">
            {" "}
            <h1>
              {weatherData?.current.temp_c}ºC{" "}
              {weatherData?.current.condition.text}{" "}
            </h1>
            <img src={weatherData?.current.condition.icon} alt="temp" />
            <div className="moreInformation">
              <div className="info1">
                <p>
                  <span className="arrow">🠋 </span>
                  {weatherData?.forecast.forecastday[0].day.mintemp_c}º {"   "}
                  {weatherData?.forecast.forecastday[0].day.maxtemp_c}º
                  <span className="arrow">🠉 </span>{" "}
                </p>
                <p>
                  <span>vento</span> {weatherData?.current.vis_km} Km/h
                </p>
              </div>
              <div className="info2">
                <p>
                  <span>Sensação </span> {weatherData?.current.feelslike_c}ºC
                </p>
                <p>
                  {" "}
                  <span>Humidade </span> {weatherData?.current.humidity}%
                </p>{" "}
              </div>
            </div>
          </div>
        </CardResultt>
      )}
      <ContainerSearch>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="insira aqui o nome da cidade "
        />
        <button type="button" onClick={() => getData()}>
          {" "}
          <BsSearch />{" "}
        </button>
      </ContainerSearch>
    </>
  );
}
