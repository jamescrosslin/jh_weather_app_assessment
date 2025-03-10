import express from 'express';
import type { Application, NextFunction, Request, Response } from 'express';
import { OpenWeatherAPI } from './services/OpenWeather/OpenWeatherAPI';
import { loadVariableFromEnv } from './utils/loadVariableFromEnv';
import { normalizeWeatherRequest } from './middleware/normalizeWeatherRequest';
import { CustomError } from './CustomError';
import { hasOpenWeatherInstantiated } from './middleware/hasOpenWeatherInstantiated';
import { asyncHandler } from './utils/asyncHandler';

const app: Application = express();
const port = 3000;

const openWeatherApiKey = await loadVariableFromEnv('OPEN_WEATHER_API_KEY');

app.locals.openWeather = new OpenWeatherAPI(openWeatherApiKey);

app.get('/',
  (req, res) => {
    res.status(200).send({
      message: 'Welcome to the Weather API',
    });
  },
);

app.get('/weather',
  hasOpenWeatherInstantiated,
  normalizeWeatherRequest,
  asyncHandler(async (req: Request, res: Response) => {
    const { latitude, longitude, exclude } = req.app.locals.normalizedWeatherRequests;

    const inputs = {
      latitude,
      longitude,
      exclude,
    };

    const weather = await app.locals.openWeather.getWeatherByCoordinates(inputs);

    res.status(200).json(weather.data);
  }),
);

app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (err: CustomError, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.statusCode || 500;

    res.status(status).json({
      message: err.message,
      err,
    });
  });

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
