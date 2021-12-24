import { container } from 'tsyringe';
import { Request, Response } from "express";
import { CreateAddressUseCase } from "./CreateAddressUseCase";

class CreateAddressController {

  handle(request: Request, response: Response) {
    const { street, city, zipcode, number, state } = request.body;

    const createAddressUseCase = container.resolve(CreateAddressUseCase);
    createAddressUseCase.execute({ street, city, zipcode, number, state });

    return response.status(201).send();
  }


}

export { CreateAddressController };