const { Guest } = require("../../models/guest");

const addGuest = async (req, res) => {
  const result = await Guest.create({ ...req.body });
  res.status(201).json({
    status: "created",
    code: 201,
    data: {
      result,
    },
  });
};
module.exports = addGuest;
