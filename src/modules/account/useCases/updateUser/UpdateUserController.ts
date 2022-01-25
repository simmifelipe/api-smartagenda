import { Request, Response } from "express";
import { container } from 'tsyringe';

import { UpdateUserUseCase } from './UpdateUserUseCase';

class UpdateUserController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, name, email, first_access, photo, active } = request.body;

    const updateUserUseCase = container.resolve(UpdateUserUseCase);
    await updateUserUseCase.execute({ id, name, email, first_access, photo, active });

    return response.status(204).send();
  }

}

export { UpdateUserController };