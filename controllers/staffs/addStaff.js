const { Staff } = require("../../models/staff");

const addStaff = async (req, res) => {
  const result = await Staff.create({ ...req.body });
  res.status(201).json({
    message: "create",
    status: 201,
    data: {
      result,
    },
  });
};

module.exports = addStaff;
