import { inject, injectable } from "tsyringe";
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

import { IUserRepository } from '@modules/account/repositories/IUserRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  },
  token: string;
}

@injectable()
class AuthenticateUserUseCase {

  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository,
  ) { }

  async execute({ email, password }: IRequest): Promise<IResponse> {

    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new AppError('Email or password incorrect!');
    }

    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new AppError('Email or password incorrect!');
    }

    const token = sign({}, "1a64ebcb1de42683bc2f2ba11040bc53", {
      subject: user.id,
      expiresIn: '1d',
    });

    return {
      user: {
        name: user.name,
        email: user.email,
      },
      token,
    }
  }
}

export { AuthenticateUserUseCase };