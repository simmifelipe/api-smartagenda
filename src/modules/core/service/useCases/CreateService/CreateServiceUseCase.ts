import { inject, injectable } from "tsyringe";
import { Service } from "../../entities/Service";
import { IServiceRepository } from "../../repositories/implementation/IServiceRepository";

interface IRequest {
  description: string;
  company_id: string;
}

@injectable()
class CreateServiceUseCase {
  constructor(
    @inject("ServiceRepository")
    private serviceRepository: IServiceRepository
  ) {}

  async execute({ description, company_id }: IRequest): Promise<Service> {
    return await this.serviceRepository.create({ description, company_id });
  }
}

export { CreateServiceUseCase };
