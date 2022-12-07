const express = require("express");
const router = express.Router();
const { guests: ctrl } = require("../../controllers/index");
const validation = require("../../middlewares/validation");
const { schemas } = require("../../models/guest");
const { ctrlWrapper } = require("../../helpers/index");

router.post("/", validation(schemas.addSchema), ctrlWrapper(ctrl.addGuest));
router.get("/", ctrlWrapper(ctrl.getGuest));
module.exports = router;
