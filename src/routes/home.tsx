import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Chat from "../component/chat";
import Time from "../component/time";
import { setAiResponse, setModal } from "../redux/action";
import { Weather, Forecast, Pollution } from "../types";
import { newDate } from "../utils/date";
import Icon from "../utils/icon";
import Pol2Str from "../utils/pol-2-str";
import CurrentWeather from "../utils/weather/currentWeather";
import DaytWeather from "../utils/weather/dayWeather";
import PollutionData from "../utils/weather/pollution";
import UpperCase from "../utils/upperCase";
import GPT from "../utils/GPT";

function Home() {
  const [currentWeather, setCurrentWeather] = useState<Weather>();
  const [dayWeather, setDayWeather] = useState<Forecast>();
  const [pollutionData, setPollutionData] = useState<Pollution>();
  const [search, setSearch] = useState("");
  const [background, setBackground] = useState("");
  const [city, setCity] = useState("Seoul");

  const dispatch = useDispatch();

  const { month, date, day } = newDate();

  useEffect(() => {
    fetchCurrentWeather(city);
    const date = new Date();
    const hours = date.getHours();
    switch (true) {
      case hours >= 6 && hours < 9:
        return setBackground("dawn");
      case hours >= 9 && hours < 12:
        return setBackground("morning");
      case hours >= 12 && hours < 18:
        return setBackground("afternoon");
      case hours >= 18 && hours < 21:
        return setBackground("evening");
      case hours >= 21:
      case hours < 6:
        return setBackground("night");
    }
    console.log(hours);
  }, []);

  const fetchCurrentWeather = async (city: string) => {
    const response = await CurrentWeather(city);
    if (response) {
      setCurrentWeather(response);
      fetchDayWeather();
      fetchPollutionData();
      setCity(city);
    } else {
      alert("City not found.");
      setCity("Seoul");
      setSearch("");
    }
  };

  const fetchDayWeather = async () => {
    const response = await DaytWeather(city);
    if (response) setDayWeather(response);
  };

  const fetchPollutionData = async () => {
    const response = await PollutionData(city);
    if (response) setPollutionData(response);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    fetchCurrentWeather(search);
    setSearch("");
  };

  const onClick = async (forecast: any) => {
    try {
      const result = await GPT(forecast);
      dispatch(setAiResponse(result));
    } catch (error) {
      console.error("Error occurred while fetching data:", error);
    }
  };
  return (
    <div className={`wrapper ${background}`}>
      {/* Header */}
      <div className="header m-auto display items-center justify--between">
        <div className="text text--title">WEEATHER</div>
        <div className="text" style={{ fontSize: "1.5rem", display: "flex" }}>
          {day}, {month}&nbsp;
          {date} &nbsp;
          <Time />
        </div>
        <form className="searchbar" onSubmit={onSubmit}>
          <input placeholder="search" value={search} onChange={onChange} />
          <svg
            onClick={onSubmit}
            style={{ width: "1.5rem", cursor: "pointer" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="rgba(255,255,255,1)"
          >
            <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
          </svg>
        </form>
      </div>
      {/* Body */}
      <div className="current display m-auto">
        <div className="position--relative" style={{ width: "50%" }}>
          <div className="position--absolute center m-auto" style={{ width: "80%" }}>
            <div className="text" style={{ fontSize: "2rem" }}>
              NOW
            </div>
            <div className="text--city">{UpperCase(city)}</div>
          </div>
        </div>
        <div className="position--relative" style={{ width: "50%" }}>
          <div className="blur position--absolute center m-auto" style={{ width: "70%", height: "80%", padding: "1.5rem" }}>
            {currentWeather && (
              <div
                className="display card"
                style={{ width: "100%", height: "100%", border: "none" }}
                onClick={() => {
                  dispatch(setModal(true));
                  onClick(currentWeather);
                }}
              >
                <div>
                  <div style={{ width: "200px", height: "70%" }}>{Icon(currentWeather.weather[0].icon)}</div>
                  <div className="text display items-center justify--center" style={{ fontSize: "5rem", height: "30%" }}>
                    {currentWeather.main.temp.toFixed(0)}°C
                  </div>
                </div>
                <div className="justify--center" style={{ width: "calc(100% - 200px)", display: "grid" }}>
                  <div className="text display items-center" style={{ fontSize: "1.5rem" }}>
                    {UpperCase(currentWeather.weather[0].description)}
                  </div>
                  <div className="text display items-center" style={{ fontSize: "1.5rem" }}>
                    <svg style={{ width: "1.5rem" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)">
                      <path d="M12 3.09723L7.05025 8.04697C4.31658 10.7806 4.31658 15.2128 7.05025 17.9465C9.78392 20.6801 14.2161 20.6801 16.9497 17.9465C19.6834 15.2128 19.6834 10.7806 16.9497 8.04697L12 3.09723ZM12 0.268799L18.364 6.63276C21.8787 10.1475 21.8787 15.846 18.364 19.3607C14.8492 22.8754 9.15076 22.8754 5.63604 19.3607C2.12132 15.846 2.12132 10.1475 5.63604 6.63276L12 0.268799Z"></path>
                    </svg>
                    &nbsp;
                    <div style={{ fontSize: "1.5rem" }}>{currentWeather.main.humidity}%</div>
                  </div>
                  <div className="text display items-center">
                    <svg style={{ width: "1.5rem" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)">
                      <path d="M4 4H8V6H4V4ZM16 19H20V21H16V19ZM2 9H7V11H2V9ZM9 9H12V11H9V9ZM14 9H20V11H14V9ZM4 14H10V16H4V14ZM12 14H15V16H12V14ZM17 14H22V16H17V14ZM10 4H22V6H10V4ZM2 19H14V21H2V19Z"></path>
                    </svg>
                    &nbsp;
                    {pollutionData && <div style={{ fontSize: "1.5rem" }}>{Pol2Str(pollutionData.list[0]?.main.aqi)}</div>}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {dayWeather && (
        <div className="m-auto" style={{ display: "flex", width: "1500px", height: "13rem", justifyContent: "space-evenly" }}>
          {dayWeather.list.slice(0, 5).map((forecast, index) => (
            <div
              className="card blur"
              key={index}
              onClick={() => {
                dispatch(setModal(true));
                onClick(forecast);
              }}
            >
              <div className="text" style={{ fontSize: "2rem" }}>
                {new Date(forecast.dt * 1000).toLocaleTimeString("en-US", { hour: "numeric", hour12: true })}
              </div>
              <div className="text" style={{ width: "100px", height: "100px", margin: "auto" }}>
                {Icon(forecast.weather[0].icon)}
              </div>
              <div className="text" style={{ fontSize: "1.5rem" }}>
                {forecast.main.temp.toFixed(0)}°C
              </div>
            </div>
          ))}
        </div>
      )}
      <Chat />
    </div>
  );
}

export default Home;
