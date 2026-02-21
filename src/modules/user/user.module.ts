import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { UserModel } from '~/db/user.model'
import { UserService } from '~/modules/user/user.service'
import { UserController } from '~/modules/user/user.controller'

@Module({
    imports: [SequelizeModule.forFeature([UserModel])],
    controllers: [UserController],
    providers: [UserService]
})
export class UsersModule {}
