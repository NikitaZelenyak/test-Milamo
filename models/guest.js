const { Schema, model } = require("mongoose");
const Joi = require("joi");
const handlerSchemaErrors = require("../helpers/handlerSchemaErrors");
const pattern = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}/;
const guestSchema = Schema(
  {
    firstName: {
      type: String,
      required: [true, "Set first name for guest"],
    },
    lastName: {
      type: String,
      required: [true, "Set last name for guest"],
    },
    email: {
      type: String,
      unique: true,
    },
    phone: {
      type: String,
      match: pattern,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const addSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email(),
  phone: Joi.string().required().pattern(pattern),
});

const schemas = {
  addSchema,
};
guestSchema.post("save", handlerSchemaErrors);
const Guest = model("guest", guestSchema);

module.exports = {
  Guest,
  schemas,
};
