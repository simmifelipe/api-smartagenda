
import "reflect-metadata"

import { CreateAddressUseCase } from "./CreateAddressUseCase"
import { AddressRepositoryInMemory } from "@modules/core/repositories/in-memory/AddressRepositoryInMemory";

let createAddressUseCase: CreateAddressUseCase;
let addressesRepositoryInMemory: AddressRepositoryInMemory;

describe('Create Address', () => {

  beforeEach(() => {
    addressesRepositoryInMemory = new AddressRepositoryInMemory();
    createAddressUseCase = new CreateAddressUseCase(addressesRepositoryInMemory);
  })

  it("should be able to create a new address", async () => {
    createAddressUseCase.execute({
      city: 'Porto Alegre',
      street: 'Av. Padre Cacique',
      number: "381",
      state: "RS",
      zipcode: "95478-000",
    });

    const all = await addressesRepositoryInMemory.list();

    expect(all).toHaveLength(1);
  })

})