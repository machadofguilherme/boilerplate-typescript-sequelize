import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express());

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}...`);
});