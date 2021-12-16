
import { Router } from 'express';

import { addressRoutes } from './address.routes';
import { companyRoutes } from './company.routes';

const router = Router();

router.use('/address', addressRoutes);
router.use('/company', companyRoutes);

export { router };