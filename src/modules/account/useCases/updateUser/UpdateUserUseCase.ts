import { inject, injectable } from "tsyringe";

import { IUpdateUserDTO } from '@modules/account/dto/IUpdateUserDTO';
import { IUserRepository } from '@modules/account/repositories/IUserRepository';
import { AppError } from '@shared/errors/AppError';


@injectable()
class UpdateUserUseCase {

  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository,
  ) { }

  async execute({ id, name, email, first_access, photo, active }: IUpdateUserDTO): Promise<void> {

    const userExists = await this.userRepository.findById(id);

    if (!userExists) {
      throw new AppError("Usuário não encontrado", 400)
    }

    await this.userRepository.update({ ...userExists, name, email, first_access, photo, active, updated_at: new Date() });
  }

}

export { UpdateUserUseCase };