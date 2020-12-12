import blingRouter from '@modules/Bling/infra/http/routes/Bling.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/bling', blingRouter);

export default routes;
