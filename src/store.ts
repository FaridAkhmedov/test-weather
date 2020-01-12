import { Action, ReducerClass, Immutable } from "reducer-class/dist";
import { createAction } from "redux-actions";
import { createStore } from "redux";

interface Currently extends Hourly {
  precipType: string;
  precipAccumulation: number;
}

interface Daily extends Hourly {
  precipType: string;
  sunriseTime: number;
  sunsetTime: number;
  moonPhase: number;
  precipIntensityMax: number;
  precipIntensityMaxTime: number;
  precipAccumulation: number;
  temperatureHigh: number;
  temperatureHighTime: number;
  temperatureLow: number;
  temperatureLowTime: number;
  apparentTemperatureHigh: number;
  apparentTemperatureHighTime: number;
  apparentTemperatureLow: number;
  apparentTemperatureLowTime: number;
  windGustTime: number;
  uvIndexTime: number;
  temperatureMin: number;
  temperatureMinTime: number;
  temperatureMax: number;
  temperatureMaxTime: number;
  apparentTemperatureMin: number;
  apparentTemperatureMinTime: number;
  apparentTemperatureMax: number;
  apparentTemperatureMaxTime: number;
}

interface Hourly {
  summary: string;
  icon: string;
  time: number;
  precipIntensity: number;
  precipProbability: number;
  temperature: number;
  apparentTemperature: number;
  dewPoint: number;
  humidity: number;
  pressure: number;
  windSpeed: number;
  windGust: number;
  windBearing: number;
  cloudCover: number;
  uvIndex: number;
  visibility: number;
  ozone: number;
}

interface Collection<T> {
  summary: string;
  icon: string;
  data: T[];
}

interface State {
  latitude: number;
  longitude: number;
  timezone: string;
  currently: Currently;
  daily: Collection<Daily>;
  hourly: Collection<Hourly>;
}

type Action<T> = { payload: T };
export const setupData = createAction("FETCHCURRENTLY");

class Reducer extends ReducerClass<State> {
  public initialState = {
    daily: {
      summary: "",
      icon: "",
      data: []
    },
    latitude: 0,
    longitude: 0,
    timezone: "",
    hourly: {
      summary: "",
      icon: "",
      data: []
    },
    currently: {
      time: 0,
      summary: "",
      icon: "",
      precipIntensity: 0,
      precipProbability: 0,
      precipType: "",
      precipAccumulation: 0,
      temperature: 0,
      apparentTemperature: 0,
      dewPoint: 0,
      humidity: 0,
      pressure: 0,
      windSpeed: 0,
      windGust: 0,
      windBearing: 0,
      cloudCover: 0,
      uvIndex: 0,
      visibility: 0,
      ozone: 0
    }
  };

  @Action(setupData) public setupData(
    state: Immutable<State>,
    draft: State,
    action: Action<State>
  ) {
    draft.currently = action.payload.currently;
    draft.hourly = action.payload.hourly;
    draft.latitude = action.payload.latitude;
    draft.daily = action.payload.daily;
    draft.longitude = action.payload.longitude;
    draft.timezone = action.payload.timezone;
    return undefined;
  }
}

export default createStore(Reducer.create());
