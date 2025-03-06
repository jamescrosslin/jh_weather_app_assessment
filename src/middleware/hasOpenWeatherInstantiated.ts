import type { NextFunction, Request, Response } from 'express';
import { CustomError } from '../CustomError';

export const hasOpenWeatherInstantiated = (req: Request, _res: Response, next: NextFunction) => {
  if (req.app.locals.openWeather === undefined) {
    const err = new CustomError('OpenWeatherAPI is not instantiated', 500);
    return next(err);
  }

  next();
};
