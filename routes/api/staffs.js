const express = require("express");
const router = express.Router();
const { staffs: ctrl } = require("../../controllers/index");
const validation = require("../../middlewares/validation");
const { schemas } = require("../../models/staff");
const { ctrlWrapper } = require("../../helpers/index");

router.post("/", validation(schemas.addSchema), ctrlWrapper(ctrl.addStaff));
router.get("/", ctrlWrapper(ctrl.getStaffs));

module.exports = router;
