const { Appointment } = require("../../models/appointment");
const { NotFound } = require("http-errors");

const updateStatusAppointment = async (req, res) => {
  const { appointmentId } = req.params;

  const result = await Appointment.findByIdAndUpdate(appointmentId, req.body, {
    new: true,
  });

  if (!result) {
    throw NotFound(`Appointment with id=${appointmentId} not found`);
  }
  res.json({
    message: "successes",
    status: "Status was update",
    code: 200,
    data: {
      result,
    },
  });
};
module.exports = updateStatusAppointment;
