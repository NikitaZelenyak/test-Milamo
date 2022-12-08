const { Schema, model } = require("mongoose");
const Joi = require("joi");
const handlerSchemaErrors = require("../helpers/handlerSchemaErrors");
const staffSchema = Schema(
  {
    firstName: {
      type: String,
      required: [true, "Set first name for staff"],
    },
    lastName: {
      type: String,
      required: [true, "Set last name for staff"],
    },
    jobTitle: {
      type: String,
      require: [true, "Set job title for staff"],
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
  jobTitle: Joi.string().required(),
});

const schemas = {
  addSchema,
};
staffSchema.post("save", handlerSchemaErrors);

const Staff = model("staff", staffSchema);

module.exports = {
  Staff,
  schemas,
};
