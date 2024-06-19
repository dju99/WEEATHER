import axios from "axios";
import { Geocode, Pollution } from "../../types";

export default async function PollutionData(city: string) {
  const API_KEY = "";
  try {
    const geocode = await axios.get<Geocode[]>(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`);
    const { lat, lon } = geocode.data[0];
    try {
      const response = await axios.get<Pollution>(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
      return response.data;
    } catch (error) {
      return false;
    }
  } catch {}
}
