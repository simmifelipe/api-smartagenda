import { Service } from "@modules/core/infra/typeorm/entities/Service";

interface CreateServiceDTO {
  description: string;
  company_id: string;
}

interface IServiceRepository {
  create({ description, company_id }: CreateServiceDTO): Promise<Service>;
  listByCompany(company_id: string): Promise<Service[]>;
}

export { IServiceRepository, CreateServiceDTO };
