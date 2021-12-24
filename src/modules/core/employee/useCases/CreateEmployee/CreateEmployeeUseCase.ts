import { inject, injectable } from "tsyringe";
import { Employee } from "../../entities/Employee";
import { IEmployeeRepository } from "../../repositories/implementations/IEmployeeRepository";

interface IRequest {
  name: string;
  phone: string;
  company_id: string;
}

@injectable()
class CreateEmployeeUseCase {
  constructor(
    @inject("EmployeRepository")
    private employeeRepostory: IEmployeeRepository
  ) {}

  async execute({ name, phone, company_id }: IRequest): Promise<Employee> {
    return await this.employeeRepostory.create({ name, phone, company_id });
  }
}

export { CreateEmployeeUseCase };
