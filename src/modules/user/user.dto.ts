import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber } from 'class-validator'

export class RegisterUserDto {
    @ApiProperty({
        description: 'Telegram Id',
        example: 1
    })
    @IsNumber()
    @IsNotEmpty()
    declare telegramId: number
}
