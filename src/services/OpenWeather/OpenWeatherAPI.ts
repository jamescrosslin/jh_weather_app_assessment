import axios, { AxiosPromise } from 'axios';
import { OneCallResponse } from './OpenWeatherTypes';

export class OpenWeatherAPI {
  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  private apiKey;
  private baseURL = 'https://api.openweathermap.org/data/3.0/onecall';

  async getWeatherByCoordinates(
    { latitude, longitude, exclude }:
    { latitude: string; longitude: string; exclude?: string },
  ): AxiosPromise<OneCallResponse> {
    const searchParams = new URLSearchParams({
      appid: this.apiKey,
      lat: latitude,
      lon: longitude,
    });

    if (exclude) {
      searchParams.append('exclude', exclude);
    }

    const url = `${this.baseURL}?${searchParams.toString()}`;
    const response = await axios.get<OneCallResponse>(url);
    return response;
  }
}
