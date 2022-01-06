import { getRepository, Repository } from "typeorm";

import { Company } from '@modules/core/infra/typeorm/entities/Company';
import { ICompanyRepository, ICreateCompanyDTO } from "@modules/core/repositories/ICompanyRepository";


class CompanyRepository implements ICompanyRepository {
  private repository: Repository<Company>;

  constructor() {
    this.repository = getRepository(Company);
  }
  
  
  async create({ name, document, phone, address, email }: ICreateCompanyDTO): Promise<Company> {
    const company = this.repository.create({
      name,
      document,
      phone,
      address,
      email,
    });
    
    return await this.repository.save(company);
  }
  
  async findByDocument(document: string): Promise<Company> {
    return this.repository.findOne({ where: { document: document } });
  }
  
  async findById(id: string): Promise<Company> {
    return await this.repository.findOne(id);
  }
}

export { CompanyRepository };
