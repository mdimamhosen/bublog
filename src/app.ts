import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { routes } from './app/routes/routes';
import notFound from './app/middlewares/notFound';
import globalErrorHandler from './app/middlewares/globalErrorHandler';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ['http://localhost:5000', 'https://bublog-nine.vercel.app/'],
    credentials: true,
  }),
);
app.use(cookieParser());

app.get('/', (req: Request, res: Response) => {
  res.send('Home route...');
});

app.use('/api', routes);

app.use('/api', (req: Request, res: Response) => {
  res.send('API route...');
});

// Global error handler
app.use(globalErrorHandler);

app.use(notFound);

export default app;
