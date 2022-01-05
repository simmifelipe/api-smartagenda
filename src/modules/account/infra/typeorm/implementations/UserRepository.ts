import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "@modules/account/dto/ICreateUserDTO";
import { IUserRepository } from "@modules/account/repositories/IUserRepository";
import { User } from "../entities/User";

class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({ name, email, password, admin }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({ name, email, password, admin });
    return await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ where: {email: email} });
    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);
    return user;
  }

}

export { UserRepository };