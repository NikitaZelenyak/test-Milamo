const { Schema, model } = require("mongoose");
const Joi = require("joi");

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
    time: {
      type: String,
      required: [true, "Set time for appointment"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const addSchema = Joi.object({
  name: Joi.string().required(),
  staff: Joi.string().required(),
  service: Joi.number().required(),
  date: Joi.string().required(),
  time: Joi.string().required(),
});

const schemas = {
  addSchema,
};

const Appointment = model("appointment", appointmentSchema);

module.exports = {
  Appointment,
  schemas,
};
