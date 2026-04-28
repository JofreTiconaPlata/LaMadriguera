import express from 'express';
import cors from 'cors';
import { env } from './config/env';

export const app = express();

app.use(cors({ origin: env.corsOrigin === '*' ? true : env.corsOrigin }));
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'LaMadriguera API',
    app: 'Parquo Mobile Backend',
    timestamp: new Date().toISOString(),
  });
});

