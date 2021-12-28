import { Address } from "@modules/core/infra/typeorm/entities/Address";


interface ICreateAddressDTO {
  street: string;
  city: string;
  zipcode: string;
  number: string;
  state: string;
}

interface IAddressRepository {
  create({ street, city, zipcode, number, state }: ICreateAddressDTO): Promise<void>;
  list(): Promise<Address[]>;
}

export { IAddressRepository, ICreateAddressDTO };