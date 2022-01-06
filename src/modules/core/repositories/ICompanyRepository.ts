import { AppError } from "@shared/errors/AppError";
import { Address } from "@modules/core/infra/typeorm/entities/Address";
import { Company } from "@modules/core/infra/typeorm/entities/Company";


interface ICreateCompanyDTO {
  name: string;
  document: string;
  phone: string;
  address?: Address;

  email: string;
}

interface ICompanyRepository {

  create({ name, document, phone, address, email }: ICreateCompanyDTO): Promise<Company | AppError>;
  findByDocument(document: string): Promise<Company>;
  findById(id: string): Promise<Company>;

}

export { ICompanyRepository, ICreateCompanyDTO };