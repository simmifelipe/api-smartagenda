import { Address } from "@modules/core/infra/typeorm/entities/Address";
import { IAddressRepository, ICreateAddressDTO } from "@modules/core/repositories/IAddressRepository";


class AddressRepositoryInMemory implements IAddressRepository {
  adresses: Address[] = [];

  async create({ street, city, zipcode, number, state }: ICreateAddressDTO): Promise<void> {
    const address = new Address();

    Object.assign(address, {
      street, city, zipcode, number, state
    });

    this.adresses.push(address);
  }

  async list(): Promise<Address[]> {
    const all = this.adresses;
    return all;
  }
}

export { AddressRepositoryInMemory };