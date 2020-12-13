import blingRouter from '@modules/Bling/infra/http/routes/Bling.routes';
import pipedriveRouter from '@modules/Pipedrive/infra/http/routes/Pipedrive.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/bling', blingRouter);
routes.use('/pipedrive', pipedriveRouter);

export default routes;
