import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import exampleRoute from './routes/exampleRoute';

const app: Application = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/example', exampleRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
