import "reflect-metadata"
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';

import "shared/infra/typeorm";
import "@shared/container";

import { router } from "@shared/infra/http/routes";
import { AppError } from '@shared/errors/AppError';

const app = express();

app.use(express.json());

app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({ message: err.message });
  }

  return response.status(500).json({
    status: "error",
    message: `internal server error - ${err.message}`,
  });
})

app.listen(3333, () => console.log('Server is running!'));

