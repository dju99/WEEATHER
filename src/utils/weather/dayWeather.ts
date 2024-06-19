import axios from "axios";
import { Forecast } from "../../types";

export default async function DaytWeather(city: string) {
  const API_KEY = "";
  try {
    const response = await axios.get<Forecast>(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
    return response.data;
  } catch (error) {
    return false;
  }
}
