import { LANG } from '../papago.type';
import { IsNotEmpty, IsString } from 'class-validator';

export class TranslateDTO {
  @IsNotEmpty()
  @IsString()
  source: LANG;

  @IsNotEmpty()
  @IsString()
  target: LANG;

  @IsNotEmpty()
  @IsString()
  text: string;
}
