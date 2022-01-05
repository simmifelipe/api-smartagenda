import { ICreateAddressDTO } from "@modules/core/dto/ICreateAddressDTO";
import { Address } from "@modules/core/infra/typeorm/entities/Address";
import { IAddressRepository } from "@modules/core/repositories/IAddressRepository";


class AddressRepositoryInMemory implements IAddressRepository {
  addresses: Address[] = [];

  async create({ street, city, zipcode, number, state }: ICreateAddressDTO): Promise<void> {
    const address = new Address();

    Object.assign(address, {
      street, city, zipcode, number, state
    });

    this.addresses.push(address);
  }

  async list(): Promise<Address[]> {
    const all = this.addresses;
    return all;
  }
}

export { AddressRepositoryInMemory };