import { Module } from '@nestjs/common'
import { ConfigRootModule } from '~/root/config.root.module'
import { SequelizeRootModule } from '~/root/sequelize.root.module'
import { UsersModule } from '~/modules/user/user.module'

@Module({
    imports: [ConfigRootModule, SequelizeRootModule, UsersModule]
})
export class RootModule {}
