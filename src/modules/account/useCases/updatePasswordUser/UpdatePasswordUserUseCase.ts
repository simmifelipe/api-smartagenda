import { compare, hash } from 'bcrypt';
import { inject, injectable } from "tsyringe";

import { IUserRepository } from "@modules/account/repositories/IUserRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  id: string,
  lastPassword: string;
  newPassword: string;
}

@injectable()
class UpdatePasswordUserUseCase {

  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) { }

  async execute({ id, lastPassword, newPassword }: IRequest): Promise<void> {

    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new AppError("Usuário não encontrado", 400);
    }

    const passwordMatch = await compare(lastPassword, user.password);
    if (!passwordMatch) {
      throw new AppError('A senha atual não está correta');
    }

    const passwordHash = await hash(newPassword, 8);

    await this.userRepository.updatePassword(id, passwordHash);
  }


}

export { UpdatePasswordUserUseCase };