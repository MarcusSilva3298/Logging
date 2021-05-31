import { UsersRepository } from '@modules/user/infra/prisma/repositories/UsersRepository'
import { IUsersRepository } from '@modules/user/repositories/IUsersRepository'
import { container } from 'tsyringe'

container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository)
