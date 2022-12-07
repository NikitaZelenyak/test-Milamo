const express = require("express");
const router = express.Router();
const { services: ctrl } = require("../../controllers/index");
const validation = require("../../middlewares/validation");
const { schemas } = require("../../models/service");
const { ctrlWrapper } = require("../../helpers/index");

router.post("/", validation(schemas.addSchema), ctrlWrapper(ctrl.addService));
router.get("/", ctrlWrapper(ctrl.getServices));
module.exports = router;
