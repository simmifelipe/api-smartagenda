import { Router } from "express";

import { CreateServiceController } from "@modules/core/useCases/service/CreateService/CreateServiceContoller";

const servicesRoutes = Router();

const createServiceController = new CreateServiceController();

servicesRoutes.post("/", createServiceController.handle);

export { servicesRoutes };
