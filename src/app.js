import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import config from './config';
import apollo from './graphql';

dotenv.config();
const app = express();
const port = config.port;
app.use(
  cors({
    origin: config.corsDomain, // process.env.NODE_ENV === 'development'? '*' : PROD domain
    optionsSuccessStatus: 200
  })
);

app.get('/', (req, res) => res.send('HELLO WORLD'));
apollo(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
