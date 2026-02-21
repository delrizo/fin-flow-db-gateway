import { Controller } from '@nestjs/common'
import { MessagePattern, Payload } from '@nestjs/microservices'
import { UserService } from '~/modules/user/user.service'
import { RegisterUserDto } from '~/modules/user/user.dto'

@Controller('user')
export class UserController {
    constructor(private readonly usersService: UserService) {}

    @MessagePattern('register_user')
    async registerUser(@Payload() data: RegisterUserDto) {
        return await this.usersService.findOrCreate(data.telegramId)
    }
}
