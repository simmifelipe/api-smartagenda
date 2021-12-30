import { getRepository, Repository } from "typeorm";
import { Employee } from "@modules/core/infra/typeorm/entities/Employee";
import {
  ICreateEmployeeDTO,
  IEmployeeRepository,
} from "@modules/core/repositories/IEmployeeRepository";

class EmployeeRepository implements IEmployeeRepository {
  private repository: Repository<Employee>;

  constructor() {
    this.repository = getRepository(Employee);
  }

  async create({ name, phone, company_id }: ICreateEmployeeDTO): Promise<Employee> {
    const employee = this.repository.create({
      name,
      phone,
      company_id,
    });

    return await this.repository.save(employee);
  }
}

export { EmployeeRepository };
