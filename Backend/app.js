import dotenv from 'dotenv'
dotenv.config();
import cors from 'cors'
import express from 'express';

const app = express();
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World for uber');
})

export default app;