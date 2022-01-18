import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

import route from './route/routes'

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use('/users', route);

const PORT = 5000;

const URL = "mongodb+srv://pickup:pickup@cluster0.rah7w.mongodb.net/pickup?retryWrites=true&w=majority"


mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running successfully on port ${PORT}`)
    })
}).catch(error => {
    console.log('Error: ', error.message)
})
