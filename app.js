import express from 'express';
import { userRouter } from './routes/rUser.js';
import { msgRouter } from './routes/rMessages.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/user', userRouter);
app.use('/messages', msgRouter);

app.listen(port, function (err) {
  console.log('Server listening on Port', port);
});
