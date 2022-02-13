import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('api')

  app.enableCors({
    origin: false
      ? function (origin, callback) {
          const whitelist = []
          if (whitelist.includes(origin) || !origin) {
            callback(null, true)
          } else {
            callback(new Error(`${origin} Not allowed by CORS`))
          }
        }
      : true,
    allowedHeaders: 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe',
    methods: 'GET,PUT,POST,DELETE,UPDATE,OPTIONS',
    credentials: true,
  })

  await app.listen(8080)
}

bootstrap()
