const { Staff } = require("../../models/staff");

const getStaffs = async (_, res) => {
  const result = await Staff.find();

  res.json({
    message: "successes",
    core: 200,
    data: {
      result,
    },
  });
};
module.exports = getStaffs;
