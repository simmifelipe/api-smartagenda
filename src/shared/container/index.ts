import { container } from 'tsyringe';

import { AddressRepository } from '@modules/core/infra/typeorm/implementations/AddressRepository';
import { CompanyRepository } from '@modules/core/infra/typeorm/implementations/CompanyRepository';
import { EmployeeRepository } from '@modules/core/infra/typeorm/implementations/EmployeeRepository';
import { ServiceRepository } from '@modules/core/infra/typeorm/implementations/ServiceRepository';
import { IAddressRepository } from '@modules/core/repositories/IAddressRepository';
import { ICompanyRepository } from '@modules/core/repositories/ICompanyRepository';
import { IEmployeeRepository } from '@modules/core/repositories/IEmployeeRepository';
import { IServiceRepository } from '@modules/core/repositories/IServiceRepository';
import { IUserRepository } from '@modules/account/repositories/IUserRepository';
import { UserRepository } from '@modules/account/infra/typeorm/implementations/UserRepository';


container.registerSingleton<IAddressRepository>("AddressRepository", AddressRepository);
container.registerSingleton<ICompanyRepository>("CompanyRepository", CompanyRepository);
container.registerSingleton<IServiceRepository>("ServiceRepository", ServiceRepository);
container.registerSingleton<IEmployeeRepository>("EmployeRepository", EmployeeRepository);
container.registerSingleton<IUserRepository>("UserRepository", UserRepository);