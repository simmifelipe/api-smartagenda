import { getRepository, Repository } from "typeorm";
import { Service } from "../entities/Service";
import {
  CreateServiceDTO,
  IServiceRepository,
} from "./implementation/IServiceRepository";

class ServiceRepository implements IServiceRepository {
  private repository: Repository<Service>;

  constructor() {
    this.repository = getRepository(Service);
  }

  async create({
    description,
    company_id,
  }: CreateServiceDTO): Promise<Service> {
    const service = this.repository.create({ description, company_id });

    return this.repository.save(service);
  }

  async listByCompany(company_id: string): Promise<Service[]> {
    const services = this.repository.find({ where: { company_id: company_id } });

    return services;
  }
}

export { ServiceRepository };
