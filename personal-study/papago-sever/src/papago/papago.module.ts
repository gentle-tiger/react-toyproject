import { Module } from '@nestjs/common';
import { PapagoService } from './papago.service';
import { PapagoController } from './papago.controller';

@Module({
  providers: [PapagoService],
  controllers: [PapagoController],
})
export class PapagoModule {}
