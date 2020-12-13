import { Router } from 'express';
import PipedriveController from '../controllers/PipedriveController';

const pipedriveRouter = Router();
const pipedriveController = new PipedriveController();

pipedriveRouter.get('/', pipedriveController.GetWonDeals);

export default pipedriveRouter;
