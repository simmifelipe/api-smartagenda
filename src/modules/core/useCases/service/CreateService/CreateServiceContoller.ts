import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateServiceUseCase } from "./CreateServiceUseCase";

class CreateServiceController {
  async handle(request: Request, response: Response) {
    const { description, company_id } = request.body;

    const createServiceUseCase = container.resolve(CreateServiceUseCase);
    const result = await createServiceUseCase.execute({
      description,
      company_id
    });

    return response.status(201).json(result);
  }
}

export { CreateServiceController };
