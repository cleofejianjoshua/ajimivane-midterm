import express from "express";
import * as ParkingSlotController from "./controllers/"

const router = express.Route();

// Project CRUD
router.post("/", ParkingSlotController.getAllParkingSlots);
router.get("/", ParkingSlotController.createParkingSlot)

export default router;