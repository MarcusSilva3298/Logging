import { CreateUserController } from '@modules/user/useCases/createUser/CreateUserController'
import { Router } from 'express'

const usersRoutes = Router()

const createUserController = new CreateUserController()

usersRoutes.post('/', createUserController.handle)

export { usersRoutes }
