import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';
import 'reflect-metadata';
import '../mongoose';

import routes from './routes';
import AppError from '../../errors/AppError';

import '@shared/container';

export default class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
        this.errors();
    }

    private middlewares(): void {
        this.app.use(cors());
        this.app.use(express.json());
    }

    private routes(): void {
        this.app.use(routes);
    }

    private errors(): void {
        this.app.use(
            (
                error: Error,
                request: Request,
                response: Response,
                _next: NextFunction,
            ) => {
                if (error instanceof AppError) {
                    return response.status(error.statusCode).json({
                        status: 'error',
                        message: error.message,
                    });
                }

                console.error(error);

                return response.status(500).json({
                    status: 'error',
                    message: 'Internal server error',
                });
            },
        );
    }
}
