import { container } from 'tsyringe';
import { Request, Response } from "express";
import { CreateCompanyUseCase } from './CreateCompanyUseCase';

class CreateCompanyController {

  handle(request: Request, response: Response) {
    const { name, document, phone, address, email, password } = request.body;

    const createCompanyUseCase = container.resolve(CreateCompanyUseCase);
    createCompanyUseCase.execute({ name, document, phone, address, email, password });

    return response.status(201).send();
  }
}

export { CreateCompanyController };