import express from 'express';
import bodyParser from 'body-parser';
import ApiController from './apiController';

const app = express();

app.set('port', process.env.PORT || 8080);
app.locals.apiVersion = process.env.apiVersion || 1;
app.use(bodyParser.json());

// routes
const apiController: ApiController = new ApiController(app);
apiController.registerRoutes(app);

app.listen(app.get('port'), () => {
    console.log('Running at http://localhost:%d', app.get('port'));
});

export default app;