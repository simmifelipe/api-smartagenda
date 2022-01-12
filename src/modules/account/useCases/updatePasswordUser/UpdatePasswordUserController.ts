import { container } from 'tsyringe';
import { Request, Response } from "express";
import { UpdatePasswordUserUseCase } from './UpdatePasswordUserUseCase';


class UpdatePasswordUserController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, lastPassword, newPassword } = request.body;

    const updatePasswordUserUseCase = container.resolve(UpdatePasswordUserUseCase);
    await updatePasswordUserUseCase.execute({ id, lastPassword, newPassword });

    return response.status(204).send();
  }
}

export { UpdatePasswordUserController };