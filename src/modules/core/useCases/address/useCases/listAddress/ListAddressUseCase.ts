import { inject, injectable } from "tsyringe";

import { Address } from "@modules/core/infra/typeorm/entities/Address";
import { IAddressRepository } from "@modules/core/repositories/IAddressRepository";

@injectable()
class ListAddressUseCase {
  constructor(
    @inject("AddressRepository")
    private addressRepository: IAddressRepository
  ) { }

  async execute(): Promise<Address[]> {
    const addresses = await this.addressRepository.list();

    return addresses;
  }
}

export { ListAddressUseCase };