import { AxiosError } from "axios";
import { NextFunction, Request, Response } from "express";
import { AppError } from "./AppError";

export const errorHandler = (
  error: Error | AxiosError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      success: false,
      message: error.message
    });
  }

  if ("isAxiosError" in error && error.isAxiosError) {
    const status = error.response?.status;

    if (status === 404) {
      return res.status(404).json({ success: false, message: "City not found" });
    }

    if (status === 401) {
      return res.status(502).json({
        success: false,
        message: "Weather provider rejected the API key"
      });
    }

    if (!error.response) {
      return res.status(503).json({
        success: false,
        message: "Unable to reach the weather provider"
      });
    }

    return res.status(502).json({
      success: false,
      message: "Weather provider failed to respond correctly"
    });
  }

  return res.status(500).json({
    success: false,
    message: "Something went wrong"
  });
};
