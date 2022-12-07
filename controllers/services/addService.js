const { Service } = require("../../models/service");

const addService = async (req, res) => {
  const result = await Service.create({ ...req.body });

  res.status(201).json({
    message: "created",
    code: 201,
    date: {
      result,
    },
  });
};
module.exports = addService;
