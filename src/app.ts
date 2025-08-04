import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import routes from './routes';
import { errorHandler } from './middlewares/errorHandler'; // ✅ import it

dotenv.config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

// ✅ All routes go here
app.use('/api', routes);

// ❗ 404 handler (optional)
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// ✅ Error handler middleware should be the last one
app.use(errorHandler);

export default app;
