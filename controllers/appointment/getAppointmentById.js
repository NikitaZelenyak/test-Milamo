const { Appointment } = require("../../models/appointment");
const { NotFound } = require("http-errors");

const getAppointmentById = async (req, res) => {
  const { appointmentId } = req.params;
  const result = await Appointment.findById(appointmentId);
  if (!result) {
    throw NotFound(`Appointment with id=${appointmentId} not found`);
  }
  res.json({
    message: "successes",
    code: 200,
    data: {
      result,
    },
  });
};
module.exports = getAppointmentById;
