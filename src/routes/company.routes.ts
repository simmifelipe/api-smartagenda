import { Router } from 'express';

import { CreateCompanyController } from '../modules/core/company/useCases/CreateCompany/CreateCompanyController';

const companyRoutes = Router();

const createCompanyController = new CreateCompanyController();

companyRoutes.post("/", createCompanyController.handle);

export { companyRoutes };