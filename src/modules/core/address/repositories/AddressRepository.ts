import { getRepository, Repository } from "typeorm";
import { Address } from "../entities/Address";
import { IAddressRepository, ICreateAddressDTO } from "./implementations/IAddressRepository";

class AddressRepository implements IAddressRepository {

  private repository: Repository<Address>;

  constructor() {
    this.repository = getRepository(Address);
  }

  async create({ street, city, zipcode, number, state }: ICreateAddressDTO): Promise<void> {

    const address = this.repository.create({
      street,
      city,
      zipcode,
      number,
      state,
    })

    await this.repository.save(address);
  }

  async list(): Promise<Address[]> {

    const addresses = await this.repository.find();

    return addresses;
  }
}

export { AddressRepository };