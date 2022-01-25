
import { Router } from 'express';

import { CreateUserController } from '@modules/account/useCases/createUser/CreateUserController';
import { UpdateUserController } from '@modules/account/useCases/updateUser/UpdateUserController';
import { UpdatePasswordUserController } from '@modules/account/useCases/updatePasswordUser/UpdatePasswordUserController';

const userRoutes = Router();

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const updatePasswordUserController = new UpdatePasswordUserController();

userRoutes.post("/", createUserController.handle);
userRoutes.put("/", updateUserController.handle);
userRoutes.patch("/password", updatePasswordUserController.handle);

export { userRoutes };