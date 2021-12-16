import { getRepository, Repository } from "typeorm";
import { Company } from "../entities/Company";
import {
  ICompanyRepository,
  ICreateCompanyDTO,
} from "./implementations/ICompanyRepository";

class CompanyRepository implements ICompanyRepository {
  private repository: Repository<Company>;

  constructor() {
    this.repository = getRepository(Company);
  }

  async findByDocument(document: string): Promise<Company> {
    return this.repository.findOne({ where: { document: document } });
  }

  async create({
    name,
    document,
    phone,
    address,
  }: ICreateCompanyDTO): Promise<Company> {
    const company = this.repository.create({
      name,
      document,
      phone,
      address,
    });

    return await this.repository.save(company);
  }
}

export { CompanyRepository };
