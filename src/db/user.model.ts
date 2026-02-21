import { Table, Column, DataType } from 'sequelize-typescript'
import { ApiProperty } from '@nestjs/swagger'
import { BaseModel } from '~/db/base.model'

@Table({ tableName: 'users' })
export class UserModel extends BaseModel {
    @ApiProperty({ example: 1, description: 'Telegram Id' })
    @Column({
        type: DataType.BIGINT,
        unique: true,
        allowNull: false
    })
    declare telegramId: number
}
