import type { OpenWeatherAPI } from './services/OpenWeather/OpenWeatherAPI';

declare module 'express-serve-static-core' {
  interface Locals {
    openWeather?: OpenWeatherAPI;
    normalizedWeatherRequests?: {
      latitude: string;
      longitude: string;
      exclude?: string;
    };
  }
}
