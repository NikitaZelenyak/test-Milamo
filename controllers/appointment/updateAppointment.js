const { Appointment } = require("../../models/appointment");
const { NotFound, Conflict } = require("http-errors");

const updateAppointment = async (req, res) => {
  const { appointmentId } = req.params;
  const { date, staff, confirm } = req.body;
  const isBooked = await Appointment.find({ date, staff });

  if (isBooked.length > 0) {
    throw new Conflict(`This staff:${staff} is busy`);
  }

  const result = await Appointment.findByIdAndUpdate(appointmentId, req.body, {
    new: true,
  });

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

module.exports = updateAppointment;
