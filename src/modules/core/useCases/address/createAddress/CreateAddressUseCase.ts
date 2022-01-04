
import { inject, injectable } from "tsyringe";
import { IAddressRepository } from "@modules/core/repositories/IAddressRepository";

interface IRequest {
  street: string;
  city: string;
  zipcode: string;
  number: string;
  state: string;
}

@injectable()
class CreateAddressUseCase {
  constructor(
    @inject("AddressRepository")
    private addressRepository: IAddressRepository) { }

  execute({ street, city, zipcode, number, state }: IRequest): void {
    this.addressRepository.create({ street, city, zipcode, number, state })
  }
}

export { CreateAddressUseCase };