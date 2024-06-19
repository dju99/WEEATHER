import Mist from "../assets/mist";
import Cloud from "../assets/cloud";
import DayClear from "../assets/day/day-clear";
import DayFewCloud from "../assets/day/day-few_cloud";
import DayRain from "../assets/day/day-rain";
import DaySnow from "../assets/day/day-snow";
import NightClear from "../assets/night/night-clear";
import NightFewCloud from "../assets/night/night-few-cloud";
import NightRain from "../assets/night/night-rain";
import NightSnow from "../assets/night/night-snow";
import Rain from "../assets/rain";
import Thunder from "../assets/thunder";

function Icon(code: string) {
  switch (code) {
    case "01d":
      return <DayClear />;
    case "01n":
      return <NightClear />;
    case "02d":
      return <DayFewCloud />;
    case "02n":
      return <NightFewCloud />;
    case "03d":
    case "03n":
    case "04d":
    case "04n":
      return <Cloud />;
    case "09d":
    case "09n":
      return <Rain />;
    case "10d":
      return <DayRain />;
    case "10n":
      return <NightRain />;
    case "11d":
    case "11n":
      return <Thunder />;
    case "13d":
      return <DaySnow />;
    case "13n":
      return <NightSnow />;
    case "50d":
    case "50n":
      return <Mist />;
  }
}

export default Icon;
