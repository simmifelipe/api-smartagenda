import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateEmployeeUseCase } from "./CreateEmployeeUseCase";

class CreateEmployeeController {
  async handle(request: Request, response: Response) {
    const { name, phone, company_id } = request.body;

    const createEmployeeUseCase = container.resolve(CreateEmployeeUseCase);
    const result = await createEmployeeUseCase.execute({
      name,
      phone,
      company_id,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(201).json(result);
  }
}

export { CreateEmployeeController };
