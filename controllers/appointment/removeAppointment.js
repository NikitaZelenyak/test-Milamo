const { Appointment } = require("../../models/appointment");
const { NotFound } = require("http-errors");

const removeAppointment = async (req, res) => {
  const { appointmentId } = req.params;
  const result = await Appointment.findByIdAndRemove(appointmentId);

  if (!result) {
    throw new NotFound(`Appointment with id=${appointmentId} not found`);
  }

  res.status(200).json({
    message: "successes",
    code: 200,
    data: {
      result,
    },
  });
};
module.exports = removeAppointment;
