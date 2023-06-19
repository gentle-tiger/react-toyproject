import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PapagoModule } from './papago/papago.module';
import { configValidationSchema } from './config.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      validationSchema: configValidationSchema,
      isGlobal: true,
    }),
    PapagoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
