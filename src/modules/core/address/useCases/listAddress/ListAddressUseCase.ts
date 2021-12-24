import { inject, injectable } from "tsyringe";
import { Address } from "../../entities/Address";
import { IAddressRepository } from "../../repositories/implementations/IAddressRepository";

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