import { container } from 'tsyringe';

import { AddressRepository } from '@modules/core/infra/typeorm/repositories/AddressRepository';
import { CompanyRepository } from '@modules/core/infra/typeorm/repositories/CompanyRepository';
import { EmployeeRepository } from '@modules/core/infra/typeorm/repositories/EmployeeRepository';
import { ServiceRepository } from '@modules/core/infra/typeorm/repositories/ServiceRepository';
import { IAddressRepository } from '@modules/core/repositories/IAddressRepository';
import { ICompanyRepository } from '@modules/core/repositories/ICompanyRepository';
import { IEmployeeRepository } from '@modules/core/repositories/IEmployeeRepository';
import { IServiceRepository } from '@modules/core/repositories/IServiceRepository';


container.registerSingleton<IAddressRepository>("AddressRepository", AddressRepository);
container.registerSingleton<ICompanyRepository>("CompanyRepository", CompanyRepository);
container.registerSingleton<IServiceRepository>("ServiceRepository", ServiceRepository);
container.registerSingleton<IEmployeeRepository>("EmployeRepository", EmployeeRepository);