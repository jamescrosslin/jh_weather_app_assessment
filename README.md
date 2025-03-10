# JH Weather App Assessment

## Overview
This repository contains a simple weather application developed as
part of an assessment. The app fetches and displays weather 
information for a specified location. The project is meant to be a
strong example of type safety, SOLID principles, self documenting code,
and semantic versioning.

## Features
- Fetch current weather data for a given location
- Display temperature, humidity, and weather conditions
- User-friendly interface

## Requirements
- An OpenWeather OneCall 3.0 endpoint subscription: https://openweathermap.org/api/one-call-3

## Installation
1. Clone the repository:
  ```sh
  git clone https://github.com/yourusername/jh_weather_app_assessment.git
  ```
2. Navigate to the project directory:
  ```sh
  cd jh_weather_app_assessment
  ```
3. Install dependencies:
  ```sh
  npm install
  ```

## Usage
1. Start the application:
  ```sh
  npm start OPEN_WEATHER_API_KEY=<your OpenWeather one call api key>
  ```

2. Open your browser and navigate to `http://localhost:3000`.

3. When making a request to this endpoint, you are required to provide
  coordinates for latitude and longitude as query parameters. There is an
  option to exclude specific data in the return in the form of a comma delimited 
  list without spaces.


## Contact
For any questions or feedback, please contact James Crosslin or open an issue  on github: https://github.com/jamescrosslin/jh_weather_app_assessment/issues.
