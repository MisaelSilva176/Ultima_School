import  express  from 'express';

const app = express();

import rotas from './route.js';
rotas(app);

export default app;