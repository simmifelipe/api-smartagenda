import { Address } from "@modules/core/infra/typeorm/entities/Address";
import { ICreateAddressDTO } from "../dto/ICreateAddressDTO";

interface IAddressRepository {
  create(data: ICreateAddressDTO): Promise<void>;
  list(): Promise<Address[]>;
}

export { IAddressRepository };
