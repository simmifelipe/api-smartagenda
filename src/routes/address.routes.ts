import { Router } from 'express'

import { CreateAddressController } from '../modules/address/useCases/createAddress/CreateAddressController';
import { ListAddressController } from '../modules/address/useCases/listAddress/ListAddressController';

const addressRoutes = Router();

const createAddressController = new CreateAddressController();
const listAddressCotnroller = new ListAddressController();

addressRoutes.post("/", createAddressController.handle);
addressRoutes.get("/", listAddressCotnroller.handle);

export { addressRoutes }; 