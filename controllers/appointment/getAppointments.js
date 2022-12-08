const { Appointment } = require("../../models/appointment");
const { NotFound } = require("http-errors");
const currentDate = new Date();

const getAppointments = async (req, res) => {
  const {
    day = currentDate.getDay(),
    month = currentDate.getMonth() + 1,
    year = currentDate.getFullYear(),
  } = req.query;

  const result = await Appointment.find({ date: `${day}.${month}.${year}` });

  if (result.length === 0) {
    throw NotFound(`Any appointments on this date:${day}.${month}.${year}`);
  }

  res.json({
    message: "successes",
    code: 200,
    data: {
      result,
    },
  });
};
module.exports = getAppointments;
