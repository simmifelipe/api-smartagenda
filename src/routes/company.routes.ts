import { Router } from 'express';

import { CreateCompanyController } from '../modules/company/useCases/CreateCompanyController';

const companyRoutes = Router();

const createCompanyController = new CreateCompanyController();

companyRoutes.post("/", createCompanyController.handle);

export { companyRoutes };