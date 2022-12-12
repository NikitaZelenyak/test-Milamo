const { Appointment } = require("../../models/appointment");
const { Conflict } = require("http-errors");
const addAppointment = async (req, res) => {
  const { date, staff } = req.body;
  const isBooked = await Appointment.find({ date, staff });
  console.log(isBooked);
  if (isBooked.length > 0) {
    throw new Conflict(`This staff:${staff} is busy`);
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
