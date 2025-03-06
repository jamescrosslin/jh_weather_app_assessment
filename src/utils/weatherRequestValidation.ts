import type { OptionalOneCallField } from '../services/OpenWeather/OpenWeatherTypes';

export const isLatitude = (latitude: number): boolean => {
  return latitude >= -90 && latitude <= 90;
};

export const isLongitude = (longitude: number): boolean => {
  return longitude >= -180 && longitude <= 180;
};

export const isOptionalOneCallField = (exclude: string): exclude is OptionalOneCallField => {
  return ['current', 'minutely', 'hourly', 'daily', 'alerts'].includes(exclude);
};
