import { container } from 'tsyringe';

import { AddressRepository } from '../../modules/address/repositories/AddressRepository';
import { IAddressRepository } from '../../modules/address/repositories/implementations/IAddressRepository';
import { CompanyRepository } from '../../modules/company/repositories/CompanyRepository';
import { ICompanyRepository } from '../../modules/company/repositories/implementations/ICompanyRepository';

container.registerSingleton<IAddressRepository>("AddressRepository", AddressRepository);
container.registerSingleton<ICompanyRepository>("CompanyRepository", CompanyRepository);