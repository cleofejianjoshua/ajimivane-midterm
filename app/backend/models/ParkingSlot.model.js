import mongoose from "mongoose";

const parkingSlotSchema = new mongoose.Schema({
    slotNumber: { 
        type: String, required: [true, 'Slot Number is required'] },
    floorLevel: { 
        type: String, required: [true, 'Floor Level is required'] },
    status: { 
        type: String, enum: ['available', 'occupied'], default: 'available' }
}, { timestamps: true });

const ParkingSlot = mongoose.model('ParkingSlot', parkingSlotSchema);
export default ParkingSlot;