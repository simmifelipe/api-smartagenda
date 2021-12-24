import { Router } from 'express'

import { CreateAddressController } from '../modules/core/address/useCases/createAddress/CreateAddressController';
import { ListAddressController } from '../modules/core/address/useCases/listAddress/ListAddressController';

const addressRoutes = Router();

const createAddressController = new CreateAddressController();
const listAddressCotnroller = new ListAddressController();

addressRoutes.post("/", createAddressController.handle);
addressRoutes.get("/", listAddressCotnroller.handle);

export { addressRoutes }; 