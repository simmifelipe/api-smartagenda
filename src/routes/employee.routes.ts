import { Router } from "express";

import { CreateEmployeeController } from "../modules/employee/useCases/CreateEmployee/CreateEmployeeController";

const employeeRoutes = Router();

const createEmployeeController = new CreateEmployeeController();

employeeRoutes.post("/", createEmployeeController.handle);

export { employeeRoutes };
