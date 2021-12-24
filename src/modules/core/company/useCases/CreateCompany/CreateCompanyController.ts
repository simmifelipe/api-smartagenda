import { container } from "tsyringe";
import { Request, Response } from "express";
import { CreateCompanyUseCase } from "./CreateCompanyUseCase";

class CreateCompanyController {
  async handle(request: Request, response: Response) {
    const { name, document, phone, address, email, password } = request.body;

    const createCompanyUseCase = container.resolve(CreateCompanyUseCase);
    const result = await createCompanyUseCase.execute({
      name,
      document,
      phone,
      address,
      email,
      password,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(201).json(result);
  }
}

export { CreateCompanyController };
