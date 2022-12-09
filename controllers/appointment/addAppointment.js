const { Appointment } = require("../../models/appointment");
const { Conflict } = require("http-errors");
const addAppointment = async (req, res) => {
  const { timeStart, timeEnd, date, staff } = req.body;
  const appointments = await Appointment.find({ date, staff });

  const isBooked = appointments.some((appointment) => {
    return (
      (Number(appointment.timeStart) <= Number(timeStart) &&
        Number(timeStart) <= Number(appointment.timeEnd) &&
        Number(timeEnd) >= Number(appointment.timeEnd)) ||
      (Number(appointment.timeStart) <= Number(timeStart) &&
        Number(timeStart) <= Number(appointment.timeEnd) &&
        Number(timeEnd) <= Number(appointment.timeStart))
    );
  });

  if (isBooked) {
    throw new Conflict(`This ${timeStart}-${timeEnd} is busy`);
  }

  const result = await Appointment.create({ ...req.body });

  res.status(201).json({
    message: "created",
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = addAppointment;
