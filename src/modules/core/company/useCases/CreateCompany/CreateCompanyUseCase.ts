import { inject, injectable } from 'tsyringe';
import { Address } from '../../../address/entities/Address';
import { Company } from '../../entities/Company';
import { ICompanyRepository } from '../../repositories/implementations/ICompanyRepository';

interface IRequest {
  name: string;
  document: string;
  phone: string;
  address?: Address;

  email: string;
  password: string;
}

@injectable()
class CreateCompanyUseCase {
  constructor(
    @inject("CompanyRepository")
    private companyRepository: ICompanyRepository
  ) { }

  async execute({ name, document, phone, address, email, password }: IRequest): Promise<Company | Error> {
    const companyAlreadyExist = await this.companyRepository.findByDocument(document);

    if (companyAlreadyExist) {
      return new Error("Company with this document number already exist");
    }

    return this.companyRepository.create({ name, document, phone, address, email, password });
  }
}

export { CreateCompanyUseCase };