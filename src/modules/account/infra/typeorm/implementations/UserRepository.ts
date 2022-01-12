import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "@modules/account/dto/ICreateUserDTO";
import { IUserRepository } from "@modules/account/repositories/IUserRepository";
import { User } from "../entities/User";
import { IUpdateUserDTO } from "@modules/account/dto/IUpdateUserDTO";


class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({ name, email, password, first_access, photo }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({ name, email, password, first_access, photo });
    let createdUser = await this.repository.save(user);

    delete createdUser.password;

    return createdUser;
  }

  async update({ id, name, email, first_access, photo, active }: IUpdateUserDTO): Promise<void> {
    await this.repository.update(id, { name, email, first_access, photo, active });
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ where: { email: email } });
    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);
    return user;
  }

  async updatePassword(id: string, newPassword: string): Promise<void> {
    await this.repository.update(id, { password: newPassword });
  }

}

export { UserRepository };