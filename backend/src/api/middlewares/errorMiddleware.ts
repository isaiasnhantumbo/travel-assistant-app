import { NextFunction, Request, Response } from "express";
import { ValidateError } from "tsoa";

import { AppError } from "../../shared/errors/AppError";

export const errorMiddleware = (
  error: Error & Partial<AppError>,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof ValidateError) {
    console.warn(`Caught Validation Error for ${req.path}:`, error.fields);
    return res.status(400).json({
      message: "Validation Failed",
      details: error?.fields
    });
  }
  console.log("Error", error);

  const statusCode = error.statusCode ?? 500;
  const message =
    error.statusCode != null ? error.message : "Internal Server Error";
  return res.status(statusCode).json({ message });
};
