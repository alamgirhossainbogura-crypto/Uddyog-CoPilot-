import express from 'express';
import cors from 'cors';
import aiRoutes from './routes/aiRoutes';

const app = express();

app.use(cors());
app.use(express.json());

// Health check — also useful as Render's "Health Check Path"
app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use(aiRoutes);

const PORT = process.env.PORT ? Number(process.env.PORT) : 5000;

app.listen(PORT, () => {
  console.log(`Uddyog-CoPilot backend running on port ${PORT}`);
});
