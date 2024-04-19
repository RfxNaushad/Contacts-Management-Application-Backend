import Joi from 'joi';

const phoneRegex = /^\+?[1-9]\d{1,14}$/;

export const contactSchema = Joi.object({
  name: Joi.string().required().min(3).max(30),
  email: Joi.string().email().optional(),
  phoneNumber: Joi.string().pattern(phoneRegex).required(),
  address: Joi.string().required().min(5).max(100),
  profilePicture: Joi.string().uri().optional()
});