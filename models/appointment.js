const { Schema, model } = require("mongoose");
const Joi = require("joi");
const handlerSchemaErrors = require("../helpers/handlerSchemaErrors");
const appointmentSchema = Schema(
  {
    guest: {
      type: String,
      required: [true, "Set name of guest for appointment"],
    },
    staff: {
      type: String,
      required: [true, "Set name of staff for appointment"],
    },
    service: {
      type: String,
      required: [true, "Set name of service for appointment"],
    },
    date: {
      type: String,
      required: [true, "Set date for appointment"],
    },
    timeStart: {
      type: String,
      required: [true, "Set time for appointment"],
    },
    timeEnd: {
      type: String,
      required: [true, "Set time for appointment"],
    },
    confirm: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const addSchema = Joi.object({
  guest: Joi.string().required(),
  staff: Joi.string().required(),
  service: Joi.string().required(),
  date: Joi.string().required(),
  timeStart: Joi.string().required(),
  timeEnd: Joi.string().required(),
  confirm: Joi.boolean().default(false),
});

const updateSchema = Joi.object({
  date: Joi.string().required(),
  timeStart: Joi.string().required(),
  timeEnd: Joi.string().required(),
  confirm: Joi.boolean().default(false),
});

const confirmSchema = Joi.object({
  confirm: Joi.boolean().required(),
});
const schemas = {
  updateSchema,
  addSchema,
  confirmSchema,
};
appointmentSchema.post("save", handlerSchemaErrors);

const Appointment = model("appointment", appointmentSchema);

module.exports = {
  Appointment,
  schemas,
};
