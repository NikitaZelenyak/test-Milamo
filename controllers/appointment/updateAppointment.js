const { Appointment } = require("../../models/appointment");
const { NotFound, Conflict } = require("http-errors");

const updateAppointment = async (req, res) => {
  const { appointmentId } = req.params;
  const { timeStart, timeEnd, date, staff } = req.body;
  const appointments = await Appointment.find({ date, staff });

  const isBooked = appointments.some((appointment) => {
    return (
      Number(appointment.timeStart) <= Number(timeStart) &&
      Number(timeStart) <= Number(appointment.timeEnd)
    );
  });
  if (isBooked) {
    throw new Conflict(`This ${timeStart}-${timeEnd} is busy`);
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
