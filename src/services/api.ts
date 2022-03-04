import axios from "axios";

const baseUrl = "http://api.weatherapi.com/v1/forecast.json?";
const apiKey = "d75ce30bd8014067951211311222602";

export const getWeatherData = async (cityname: string) => {
  try {
    const { data } = await axios.get(
      baseUrl + `key=${apiKey}&q=${cityname}&days=7&aqi=yes&lang=pt&forecastday`
    );
    return data;
  } catch (error) {
    throw error;
  }
};
