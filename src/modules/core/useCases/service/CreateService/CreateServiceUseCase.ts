import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { Service } from "@modules/core/infra/typeorm/entities/Service";
import { ICompanyRepository } from "@modules/core/repositories/ICompanyRepository";
import { IServiceRepository } from "@modules/core/repositories/IServiceRepository";

interface IRequest {
  description: string;
  company_id: string;
}

@injectable()
class CreateServiceUseCase {
  constructor(
    @inject("ServiceRepository")
    private serviceRepository: IServiceRepository,
    @inject("CompanyRepository")
    private companyRepository: ICompanyRepository
  ) { }

  async execute({ description, company_id }: IRequest): Promise<Service> {
    const serviceAlreadyExists = await this.serviceRepository.findByDescription({ description, company_id });

    if (serviceAlreadyExists) {
      throw new AppError('Serviço já cadastrado');
    }

    const companyExists = await this.companyRepository.findById(company_id);
    if (!companyExists) {
      throw new AppError('Empresa não cadastrada');
    }

    return await this.serviceRepository.create({ description, company_id });
  }
}

export { CreateServiceUseCase };
