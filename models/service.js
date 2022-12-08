const { Schema, model } = require("mongoose");
const Joi = require("joi");
const handlerSchemaErrors = require("../helpers/handlerSchemaErrors");

const serviceSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for service"],
    },
    category: {
      type: String,
      required: [true, "Set category for service"],
    },
    price: {
      type: Number,
      require: [true, "Set price for service"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const addSchema = Joi.object({
  name: Joi.string().required(),
  category: Joi.string().required(),
  price: Joi.number().required(),
});

const schemas = {
  addSchema,
};
serviceSchema.post("save", handlerSchemaErrors);

const Service = model("service", serviceSchema);

module.exports = {
  Service,
  schemas,
};
