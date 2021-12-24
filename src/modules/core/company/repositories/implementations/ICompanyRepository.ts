import { AppError } from '../../../../../errors/AppError';
import { Address } from '../../../address/entities/Address';
import { Company } from '../../entities/Company';

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