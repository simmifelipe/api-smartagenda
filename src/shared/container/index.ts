import { container } from 'tsyringe';

import { AddressRepository } from '../../modules/address/repositories/AddressRepository';
import { IAddressRepository } from '../../modules/address/repositories/implementations/IAddressRepository';
import { CompanyRepository } from '../../modules/company/repositories/CompanyRepository';
import { ICompanyRepository } from '../../modules/company/repositories/implementations/ICompanyRepository';
import { EmployeeRepository } from '../../modules/employee/repositories/EmployeeRepository';
import { IEmployeeRepository } from '../../modules/employee/repositories/implementations/IEmployeeRepository';
import { IServiceRepository } from '../../modules/service/repositories/implementation/IServiceRepository';
import { ServiceRepository } from '../../modules/service/repositories/ServiceRepository';

container.registerSingleton<IAddressRepository>("AddressRepository", AddressRepository);
container.registerSingleton<ICompanyRepository>("CompanyRepository", CompanyRepository);
container.registerSingleton<IServiceRepository>("ServiceRepository", ServiceRepository);
container.registerSingleton<IEmployeeRepository>("EmployeRepository", EmployeeRepository);