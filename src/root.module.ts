import { Module } from '@nestjs/common'
import { ConfigRootModule } from '~/root/config.root.module'
import { SequelizeRootModule } from '~/root/sequelize.root.module'

@Module({
    imports: [ConfigRootModule, SequelizeRootModule]
})
export class RootModule {}
