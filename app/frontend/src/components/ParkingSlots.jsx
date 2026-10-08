function ParkingSlots({ slots, selectedSlotId, onSelectSlot }) {
  const availableCount = slots.filter((s) => s.isAvailable).length

  return (
    <div className="slots-container">
      <div className="slots-header">
        <h2>Parking Slots</h2>
        <p className="subtitle">
          {availableCount} of {slots.length} slots available
        </p>
      </div>

      <div className="slots-grid">
        {slots.map((slot) => {
          const isSelected = selectedSlotId === slot.id

          return (
            <div
              key={slot.id}
              className={`slot-card ${slot.isAvailable ? 'available' : 'occupied'} ${isSelected ? 'selected' : ''}`}
              onClick={() => {
                if (slot.isAvailable && onSelectSlot) {
                  onSelectSlot(slot)
                }
              }}
            >
              <span className="slot-number">{slot.slotNumber}</span>
              <span className={`status-badge ${slot.isAvailable ? 'status-available' : 'status-occupied'}`}>
                {slot.isAvailable ? 'Available' : 'Occupied'}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ParkingSlots
