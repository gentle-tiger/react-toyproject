export enum LANG {
  english = 'en',
  korean = 'ko',
}

export interface EnvironmentVariables {
  PORT: number;
  PAPAGO_ID: string;
  PAPAGO_SECRET: string;
}
