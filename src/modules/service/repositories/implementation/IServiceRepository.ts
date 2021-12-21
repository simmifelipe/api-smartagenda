import { Service } from "../../entities/Service";

interface CreateServiceDTO {
  description: string;
  company_id: string;
}

interface IServiceRepository {
  create({ description, company_id }: CreateServiceDTO): Promise<Service>;
  listByCompany(companyId: string): Promise<Service[]>;
}

export { IServiceRepository, CreateServiceDTO };
