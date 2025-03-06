import { Request, Response, NextFunction } from 'express';
import { isOptionalOneCallField, isLatitude, isLongitude } from '../utils/weatherRequestValidation';
import { CustomError } from '../CustomError';

export const normalizeWeatherRequest = (req: Request, _res: Response, next: NextFunction) => {
  const { latitude, longitude, exclude } = req.query;

  const assertedValues = {
    latitude: parseFloat(latitude as string),
    longitude: parseFloat(longitude as string),
    exclude: (exclude as string).split(','),
  };

  const validation = {
    latitude: isLatitude(assertedValues.latitude),
    longitude: isLongitude(assertedValues.longitude),
    exclude: assertedValues.exclude.every(field => isOptionalOneCallField(field)),
  };

  if (!validation.latitude) {
    const err = new CustomError('Latitude must be a number between -90 and 90.', 400);
    return next(err);
  }

  if (!validation.longitude) {
    const err = new CustomError('Longitude must be a number between -180 and 180.', 400);
    return next(err);
  }

  if (exclude !== undefined && !validation.exclude) {
    const err = new CustomError('Invalid exclude value: only current, minutely, hourly, daily, and alerts may be excluded. Use a comma separated string to denote multiple exclusions.', 400);

    return next(err);
  }

  const normalizedValues = {
    latitude: assertedValues.latitude.toString(),
    longitude: assertedValues.longitude.toString(),
    exclude: assertedValues.exclude.join(','),
  };

  req.app.locals.normalizedWeatherRequests = normalizedValues;

  next();
};
