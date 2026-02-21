import { ApiProperty } from '@nestjs/swagger'
import { Model } from 'sequelize-typescript'

export class BaseModel extends Model {
    @ApiProperty({ example: 1, description: 'User id' })
    declare id: number

    @ApiProperty({ description: 'Driver created date', type: Date })
    declare createdAt: Date

    @ApiProperty({ description: 'Driver updated date', type: Date })
    declare updatedAt: Date
}
