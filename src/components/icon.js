import {
  mdiWeatherSunny,
  mdiWeatherNight,
  mdiWeatherRainy,
  mdiWeatherSnowy,
  mdiWeatherWindy,
  mdiWeatherSnowyRainy,
  mdiWeatherFog,
  mdiWeatherCloudy,
  mdiWeatherPartlyCloudy,
  mdiWeatherNightPartlyCloudy,
  mdiWeatherHail,
  mdiWeatherTornado
} from "@mdi/js";

export default icon => {
  switch (icon) {
    case "clear-day":
      return mdiWeatherSunny;
    case "clear-night":
      return mdiWeatherNight;
    case "rain":
      return mdiWeatherRainy;
    case "snow":
      return mdiWeatherSnowy;
    case "wind":
      return mdiWeatherWindy;
    case "sleet":
      return mdiWeatherSnowyRainy;
    case "fog":
      return mdiWeatherFog;
    case "cloudy":
      return mdiWeatherCloudy;
    case "partly-cloudy-day":
      return mdiWeatherPartlyCloudy;
    case "partly-cloudy-night":
      return mdiWeatherNightPartlyCloudy;
    case "hail":
      return mdiWeatherHail;
    case "thunderstorm":
      return mdiWeatherTornado;
    case "tornado":
      return mdiWeatherTornado;
    default:
      return mdiWeatherSunny;
  }
};
