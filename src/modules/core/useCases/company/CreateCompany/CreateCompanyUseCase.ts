import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError'
import { Address } from '@modules/core/infra/typeorm/entities/Address';
import { Company } from '@modules/core/infra/typeorm/entities/Company';
import { ICompanyRepository } from '@modules/core/repositories/ICompanyRepository';

interface IRequest {
  name: string;
  document: string;
  phone: string;
  address?: Address;
  email: string;
}

@injectable()
class CreateCompanyUseCase {
  constructor(
    @inject("CompanyRepository")
    private companyRepository: ICompanyRepository
  ) { }

  async execute({ name, document, phone, address, email }: IRequest): Promise<Company | AppError> {
    const companyAlreadyExist = await this.companyRepository.findByDocument(document);

    if (companyAlreadyExist) {
      return new AppError("Company with this document number already exist", 400);
    }

    return this.companyRepository.create({ name, document, phone, address, email });
  }
}

export { CreateCompanyUseCase };