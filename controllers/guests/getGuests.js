const { Guest } = require("../../models/guest");

const getGuest = async (_, res) => {
  const result = await Guest.find();

  res.json({
    status: "successes",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getGuest;
