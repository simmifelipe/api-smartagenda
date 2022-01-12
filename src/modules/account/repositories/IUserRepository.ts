
import { ICreateUserDTO } from "../dto/ICreateUserDTO";
import { IUpdateUserDTO } from "../dto/IUpdateUserDTO";
import { User } from "../infra/typeorm/entities/User";

interface IUserRepository {
  create(data: ICreateUserDTO): Promise<User>;
  update(data: IUpdateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
  updatePassword(id: string, newPassword: string): Promise<void>;
}

export { IUserRepository };