const express = require("express");
const router = express.Router();
const { appointments: ctrl } = require("../../controllers/index");
const validation = require("../../middlewares/validation");
const { schemas } = require("../../models/appointment");
const { ctrlWrapper } = require("../../helpers/index");

router.get("/", ctrlWrapper(ctrl.getAppointments));
router.get("/:appointmentId", ctrlWrapper(ctrl.getAppointmentById));

router.post(
  "/",
  validation(schemas.addSchema),
  ctrlWrapper(ctrl.addAppointment)
);

router.put(
  "/:appointmentId",
  validation(schemas.updateSchema),
  ctrlWrapper(ctrl.updateAppointment)
);
router.patch(
  "/:appointmentId/confirm",
  validation(schemas.confirmSchema),
  ctrlWrapper(ctrl.updateStatusAppointment)
);
router.delete("/:appointmentId", ctrlWrapper(ctrl.removeAppointment));

module.exports = router;
