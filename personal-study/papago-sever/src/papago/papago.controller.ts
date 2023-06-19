import { Body, Controller, Post } from '@nestjs/common';
import { PapagoService } from './papago.service';
import { TranslateDTO } from './dto/translate.dto';
import { PapagoResult } from './dto/papagoResponse.dto';

@Controller('papago')
export class PapagoController {
  constructor(private papagoService: PapagoService) {}

  @Post()
  async translate(@Body() tranlateDTO: TranslateDTO): Promise<PapagoResult> {
    return this.papagoService.translate(tranlateDTO);
  }
}
