import { server } from './server/Server';

server.listen(process.env.PORT || 3333, () => console.log(`Protocol http executing on port ${process.env.PORT || 3333}`));


/*
const express = require('express');

const webhookRoutes = require('./routes/webhooksRoutes');
const reportRoutes = require('./routes/reportsRoutes');

const logMiddleware = require('./middlewares/logMiddleware');
const globalErrorHandler = require('./errorHandling/errorHandlingMiddleware');
const NotFoundError = require('./errorHandling/notFoundError');

const app = express();


app.use(express.json());

app.use(logMiddleware);
//routes
app.use('/webhooks', webhookRoutes);
app.use('/reports', reportRoutes);

app.all('*', (req, res, next) => {
  next(new NotFoundError([`${req.originalUrl} not found!`]));
});

app.use(globalErrorHandler);

module.exports = app;

*/
