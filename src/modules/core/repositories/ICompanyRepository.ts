import { AppError } from "@shared/errors/AppError";
import { Address } from "@modules/core/infra/typeorm/entities/Address";
import { Company } from "@modules/core/infra/typeorm/entities/Company";


interface ICreateCompanyDTO {
  name: string;
  document: string;
  phone: string;
  address?: Address;

  email: string;
  password: string;
}

interface ICompanyRepository {

  create({ name, document, phone, address, email, password }: ICreateCompanyDTO): Promise<Company | AppError>;
  findByDocument(document: string): Promise<Company>;

}

export { ICompanyRepository, ICreateCompanyDTO };