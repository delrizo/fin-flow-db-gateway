import { SequelizeModule } from '@nestjs/sequelize'

export const SequelizeRootModule = SequelizeModule.forRoot({
    dialect: 'postgres',

    username: 'fin-flow-admin',
    password: 'fin-flow-admin',
    database: 'fin-flow-core',

    host: '192.168.3.10',
    port: 8000,

    autoLoadModels: true,
    logging: false,

    timezone: '+03:00', // Временная зона Минска (UTC+3)
    dialectOptions: {
        useUTC: false // Отключаем использование UTC
    },
    models: []
})
