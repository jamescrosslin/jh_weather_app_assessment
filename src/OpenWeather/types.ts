// credit to TheJoeFin for typescript definitions - https://gist.github.com/TheJoeFin/5d9be4cb2d5ca0136021cb9ce2a9c9e5

type CurrentWeather = {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust?: number;
  rain?: rain1hr_mm;
  snow?: snow1hr_mm;
  weather: Weather[];
};

 type rain1hr_mm = {
   '1h': number;
 };

 type snow1hr_mm = {
   '1h': number;
 };

 type Weather = {
   id: number;
   main: string;
   description: string;
   icon: string;
 };

 type Minutely = {
   dt: number;
   precipitation: number;
 };

 type Hourly = {
   dt: number;
   temp: number;
   feels_like: number;
   pressure: number;
   humidity: number;
   dew_point: number;
   uvi: number;
   clouds: number;
   visibility: number;
   wind_speed: number;
   wind_deg: number;
   wind_gust?: number;
   rain?: rain1hr_mm;
   snow?: snow1hr_mm;
   weather: Weather[];
   pop: number;
 };

 type Daily = {
   dt: number;
   sunrise: number;
   sunset: number;
   moonrise: number;
   moonset: number;
   moon_phase: number;
   summary: string;
   temp: DayTemp;
   feels_like: DayFeelsLike;
   pressure: number;
   humidity: number;
   dew_point: number;
   wind_speed: number;
   wind_deg: number;
   wind_gust?: number;
   weather: Weather[];
   clouds: number;
   pop: number;
   rain?: number; // rain volume in mm
   snow?: number; // snow volume in mm
   uvi: number;
 };

 type DayTemp = {
   day: number;
   min: number;
   max: number;
   night: number;
   eve: number;
   morn: number;
 };

 type DayFeelsLike = {
   day: number;
   night: number;
   eve: number;
   morn: number;
 };

 type Alert = {
   sender_name: string;
   event: string;
   start: number;
   end: number;
   description: string;
   tags: string[];
 };

export type OneCallResponse = {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current?: CurrentWeather;
  minutely?: Minutely[];
  hourly?: Hourly[];
  daily?: Daily[];
  alerts?: Alert[];
};

export type OptionalOneCallField = 'current' | 'minutely' | 'hourly' | 'daily' | 'alerts';
