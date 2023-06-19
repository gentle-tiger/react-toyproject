import Joi from 'joi';

export const configValidationSchema = Joi.object({
  PORT: Joi.number().default(8000),
  PAPAGO_ID: Joi.string().required(),
  PAPAGO_SECRET: Joi.string().required(),
});
