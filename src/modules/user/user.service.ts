import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { UserModel } from '~/db/user.model'

@Injectable()
export class UserService {
    constructor(
        @InjectModel(UserModel)
        private userRepository: typeof UserModel
    ) {}

    async findOrCreate(telegramId: number) {
        const [user, created] = await this.userRepository.findOrCreate({
            where: { telegramId },
            defaults: { telegramId }
        })

        return {
            user,
            isNew: created
        }
    }
}
