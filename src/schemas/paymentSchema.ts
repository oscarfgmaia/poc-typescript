import Joi from "joi";

export const paymentSchema = Joi.object({
  value: Joi.number().required(),
  description: Joi.string().required(),
  date: Joi.date().default(() => new Date()),
});
