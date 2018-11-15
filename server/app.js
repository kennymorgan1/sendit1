import express from 'express';
import parcelRoutes from './routes/parcels';
import userRoutes from './routes/users';
import bodyParser from 'body-parser';

const app = express();


app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use('/api/v1/parcels', parcelRoutes);
app.use('/api/v1/users', userRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);    
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
module.exports = app;