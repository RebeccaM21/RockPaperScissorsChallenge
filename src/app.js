import express from 'express'; 
import dotenv from 'dotenv'; 

import { router as challengeRouter } from './routes/challengeRouter.js';
import { router as homePageRouter } from './routes/homePageRouter.js';
import { router as paperRouter } from './routes/paperRouter.js';
import { router as rockRouter } from './routes/rockRouter.js';
import { router as scissorsRouter } from './routes/scissorsRouter.js';

dotenv.config({
    path: `.env.${process.env.NODE_ENV}`
});

const app = express();

const port = process.env.PORT;
const host = process.env.HOST;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use(`/`, homePageRouter);
app.use(`/challenge`, challengeRouter);
app.use(`/paper`, paperRouter);
app.use(`/rock`, rockRouter);
app.use(`/scissors`, scissorsRouter);


const server = app.listen(port, host, () => {
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`Server is running on http://${SERVERHOST}:${SERVERPORT}`);
});

export default server;