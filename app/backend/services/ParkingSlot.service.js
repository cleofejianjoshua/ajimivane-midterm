import ParkingSlot from "../models/ParkingSlot.model.js"

const getAllParkingSlots = async () => {
    return await ParkingSlot.find();
}

const createParkingSlots = async (data) => {
    const parkingSlot = new ParkingSlot(data);
    return await parkingSlot.save();
}

export default { getAllParkingSlots, createParkingSlots };