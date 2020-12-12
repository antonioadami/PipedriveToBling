import { Router } from 'express';
import BlingController from '../controllers/BlingController';

const blingRouter = Router();
const blingController = new BlingController();

blingRouter.get('/', blingController.GetProducts);
blingRouter.post('/', blingController.NewSale);

export default blingRouter;
