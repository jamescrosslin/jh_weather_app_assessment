import { NextFunction, Request, RequestHandler, Response } from 'express';
import { CustomError } from '../CustomError';

export const asyncHandler = (cb: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      return await cb(req, res, next);
    }
    catch (err) {
      const message = err.message || 'An error occurred';
      const error = new CustomError(message, 500);
      return next(error);
    }
  };
};
