const { Service } = require("../../models/service");
const getServices = async (_, res) => {
  const result = await Service.find();
  res.json({
    message: "successes",
    code: 200,
    data: {
      result,
    },
  });
};
module.exports = getServices;
