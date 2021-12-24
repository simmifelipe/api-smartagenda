import { Employee } from "../../entities/Employee";

interface ICreateEmployeeDTO {
  name: string;
  phone: string;
  company_id: string;
}

interface IEmployeeRepository {
  create({ name, phone, company_id }: ICreateEmployeeDTO): Promise<Employee>;
}

export { IEmployeeRepository, ICreateEmployeeDTO };
