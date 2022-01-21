import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateCompanyController } from '@modules/core/useCases/company/CreateCompany/CreateCompanyController';

const companyRoutes = Router();
const createCompanyController = new CreateCompanyController();

companyRoutes.use(ensureAuthenticated);

companyRoutes.post("/", createCompanyController.handle);

export { companyRoutes };