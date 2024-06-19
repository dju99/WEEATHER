import axios from "axios";
import { Weather } from "../../types";

export default async function CurrentWeather(city: string) {
  const API_KEY = "";
  try {
    const response = await axios.get<Weather>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    return response.data;
  } catch (error) {}
}
