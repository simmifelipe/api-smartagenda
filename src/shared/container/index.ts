import { container } from 'tsyringe';

import { AddressRepository } from '../../modules/core/address/repositories/AddressRepository';
import { IAddressRepository } from '../../modules/core/address/repositories/implementations/IAddressRepository';
import { ICompanyRepository } from '../../modules/core/company/repositories/implementations/ICompanyRepository';
import { EmployeeRepository } from '../../modules/core/employee/repositories/EmployeeRepository';
import { IEmployeeRepository } from '../../modules/core/employee/repositories/implementations/IEmployeeRepository';
import { IServiceRepository } from '../../modules/core/service/repositories/implementation/IServiceRepository';
import { ServiceRepository } from '../../modules/core/service/repositories/ServiceRepository';
import { CompanyRepository } from '../../modules/core/company/repositories/CompanyRepository';

container.registerSingleton<IAddressRepository>("AddressRepository", AddressRepository);
container.registerSingleton<ICompanyRepository>("CompanyRepository", CompanyRepository);
container.registerSingleton<IServiceRepository>("ServiceRepository", ServiceRepository);
container.registerSingleton<IEmployeeRepository>("EmployeRepository", EmployeeRepository);