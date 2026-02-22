import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
// import { ValidationPipe } from '@nestjs/common'
import { Transport, MicroserviceOptions } from '@nestjs/microservices'
// import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { RootModule } from '~/root.module'

async function bootstrap() {
    const logger = new Logger('Bootstrap')

    logger.debug(`[isDev]: ${process.env.isDev}`)
    // if (!process.env.isDev) {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(RootModule, {
        transport: Transport.TCP,
        options: { port: 3001 }
    })

    await app.listen()
    logger.debug('Database Gateway is listening on port 3001')

    return
    // }

    // const app = await NestFactory.create(RootModule)
    // app.useGlobalPipes(new ValidationPipe({ transform: true }))

    // app.enableCors()

    // app.connectMicroservice<MicroserviceOptions>({
    //     transport: Transport.TCP,
    //     options: { port: 3001 }
    // })

    // const config = new DocumentBuilder().build()
    // const document = SwaggerModule.createDocument(app, config)

    // SwaggerModule.setup('api', app, document, {
    //     yamlDocumentUrl: '/api/yml',
    //     swaggerOptions: { persistAuthorization: true }
    // })

    // await app.startAllMicroservices()
    // await app.listen(3000)

    // logger.debug('Database Gateway is listening on HTTP 3000 and TCP 3001')
}
bootstrap()
