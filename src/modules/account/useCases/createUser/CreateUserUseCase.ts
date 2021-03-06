import { inject, injectable } from "tsyringe";
import { hash } from 'bcrypt';

import { IUserRepository } from "@modules/account/repositories/IUserRepository";
import { ICreateUserDTO } from "@modules/account/dto/ICreateUserDTO";
import { User } from "@modules/account/infra/typeorm/entities/User";
import { AppError } from "@shared/errors/AppError";

@injectable()
class CreateUserUseCase {

  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) { }

  async execute({ name, email, password, first_access = true, photo, active = true }: ICreateUserDTO): Promise<User> {
    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError('Já existe um usuário registrado com este e-mail');
    }

    const passwordHash = await hash(password, 8);

    const user = await this.userRepository.create({ name, email, password: passwordHash, first_access, photo, active, });
    return user;
  }

}

export { CreateUserUseCase };