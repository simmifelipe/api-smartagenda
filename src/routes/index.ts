import { Router } from "express";

import { addressRoutes } from "./address.routes";
import { companyRoutes } from "./company.routes";
import { employeeRoutes } from "./employee.routes";
import { servicesRoutes } from "./service.routes";

const router = Router();

router.use("/address", addressRoutes);
router.use("/company", companyRoutes);
router.use("/service", servicesRoutes);
router.use("/employee", employeeRoutes);

export { router };
