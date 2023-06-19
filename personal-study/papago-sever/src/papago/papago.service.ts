import { Injectable } from '@nestjs/common';
import { TranslateDTO } from './dto/translate.dto';
import { ConfigService } from '@nestjs/config';
import { EnvironmentVariables } from './papago.type';

import axios from 'axios';
import { PapagoResponseDTO, PapagoResult } from './dto/papagoResponse.dto';

@Injectable()
export class PapagoService {
  constructor(private configService: ConfigService<EnvironmentVariables>) {}

  async translate(translateDTO: TranslateDTO): Promise<PapagoResult> {
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'X-Naver-Client-Id': this.configService.get('PAPAGO_ID'),
      'X-Naver-Client-Secret': this.configService.get('PAPAGO_SECRET'),
    };

    let translated: PapagoResult;

    try {
      translated = await axios
        .post<PapagoResponseDTO>(
          'https://openapi.naver.com/v1/papago/n2mt',
          translateDTO,
          { headers },
        )
        .then((res) => res.data.message.result);
    } catch (err) {
      console.error(err);
    }

    return translated;
  }
}
