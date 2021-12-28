import { Router } from "express";

import { CreateEmployeeController } from "@modules/core/useCases/employee/CreateEmployee/CreateEmployeeController";

const employeeRoutes = Router();

const createEmployeeController = new CreateEmployeeController();

employeeRoutes.post("/", createEmployeeController.handle);

export { employeeRoutes };
