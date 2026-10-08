import ParkingSlotService from "../services/ParkingSlot.service";

export const getParkingSlots = async (req, res) => {
    try {
        const parkingslots = await ParkingSlotService.getAllParkingSlots;
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message )};
    }
}