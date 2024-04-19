import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './config/db';
import contactRoutes from './routes/contactRoutes';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/contacts', contactRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});