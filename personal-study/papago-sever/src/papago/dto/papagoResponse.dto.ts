export class PapagoResponseDTO {
  message: {
    result: {
      srcLangType: string;
      tarLangType: string;
      translatedText: string;
      engineType: string;
    };
    '@type': string;
    '@service': string;
    '@version': string;
  };
}

export type PapagoResult = PapagoResponseDTO['message']['result'];
