import { AppError } from "@shared/errors/AppError";
import { Company } from "@modules/core/infra/typeorm/entities/Company";


interface ICreateCompanyDTO {
  name: string;
  document: string;
  phone?: string;
  email?: string;

  user_id: string;
}

interface ICompanyRepository {
  create({ name, document, phone, email, user_id }: ICreateCompanyDTO): Promise<Company | AppError>;
  findByDocument(document: string): Promise<Company>;
  findById(id: string): Promise<Company>;

}

export { ICompanyRepository, ICreateCompanyDTO };