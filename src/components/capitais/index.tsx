import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Grid, Labels, Info } from "./styles";

export interface WeatherData {
  location: { name: string };
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

export function Capitais() {
  const [data, setData] = useState<WeatherData[]>([]);

  const SearchCapital = async () => {
    Promise.all([
      axios.get(
        "http://api.weatherapi.com/v1/forecast.json?key=d75ce30bd8014067951211311222602&q=rio de janeiro&days=1&aqi=no&alerts=no"
      ),
      axios.get(
        "http://api.weatherapi.com/v1/forecast.json?key=d75ce30bd8014067951211311222602&q=sao paulo&days=1&aqi=no&alerts=no"
      ),
      axios.get(
        "http://api.weatherapi.com/v1/forecast.json?key=d75ce30bd8014067951211311222602&q=belo horizonte&days=1&aqi=no&alerts=no"
      ),
      axios.get(
        "http://api.weatherapi.com/v1/forecast.json?key=d75ce30bd8014067951211311222602&q=brasilia&days=1&aqi=no&alerts=no"
      ),
      axios.get(
        "http://api.weatherapi.com/v1/forecast.json?key=d75ce30bd8014067951211311222602&q=belen&days=1&aqi=no&alerts=no"
      ),
      axios.get(
        "http://api.weatherapi.com/v1/forecast.json?key=d75ce30bd8014067951211311222602&q=salvador&days=1&aqi=no&alerts=no"
      ),
      axios.get(
        "http://api.weatherapi.com/v1/forecast.json?key=d75ce30bd8014067951211311222602&q=curitiba&days=1&aqi=no&alerts=no"
      ),
      axios.get(
        "http://api.weatherapi.com/v1/forecast.json?key=d75ce30bd8014067951211311222602&q=fortaleza&days=1&aqi=no&alerts=no"
      ),
      axios.get(
        "http://api.weatherapi.com/v1/forecast.json?key=d75ce30bd8014067951211311222602&q=manaus&days=1&aqi=no&alerts=no"
      ),
      axios.get(
        "http://api.weatherapi.com/v1/forecast.json?key=d75ce30bd8014067951211311222602&q=joao   pessoa&days=1&aqi=no&alerts=no"
      ),
    ]).then((responses) => {
      const datas = responses.map((responses) => responses.data);
      setData(datas);
    });
  };

  useEffect(() => {
    SearchCapital();
  }, []);
  return (
    <Container>
      <div className="containerTitle">
        {" "}
        <h1>Capitais</h1>{" "}
      </div>
      {data && (
        <Grid>
          <div className="labels1">
            <Labels>Min</Labels>
            <Labels>Max</Labels>
          </div>
          <div className="labels2">
            <Labels>Min</Labels>
            <Labels>Max</Labels>
          </div>

          {data.map((c) => (
            <div className="containerCapitals" key={c.location.name}>
              <Info>{c.forecast.forecastday[0].day.maxtemp_c.toFixed()}º </Info>
              <Info>
                {c.forecast.forecastday[0].day.mintemp_c.toFixed()}º
              </Info>{" "}
              <Info>{c.location.name}</Info>
            </div>
          ))}

          <> </>
        </Grid>
      )}
    </Container>
  );
}
