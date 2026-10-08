import { useState } from 'react'

function ReservationForm({ selectedSlot, onReserve }) {
  const [vehiclePlate, setVehiclePlate] = useState('')
  const [driverName, setDriverName] = useState('')
  const [reservationDate, setReservationDate] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!selectedSlot) {
      setMessage('Please select an available parking slot first.')
      return
    }

    if (!vehiclePlate.trim() || !driverName.trim()) {
      setMessage('Please fill in all fields.')
      return
    }

    // Call parent handler to create reservation
    onReserve({
      id: Date.now().toString(),
      slotId: selectedSlot.id,
      slotNumber: selectedSlot.slotNumber,
      driverName: driverName.trim(),
      vehiclePlate: vehiclePlate.trim().toUpperCase(),
      date: reservationDate || new Date().toISOString().split('T')[0],
      createdAt: new Date().toISOString(),
      status: 'Active',
    })

    // Reset form
    setVehiclePlate('')
    setDriverName('')
    setReservationDate('')
    setMessage(`Slot ${selectedSlot.slotNumber} reserved successfully!`)

    setTimeout(() => setMessage(''), 4000)
  }

  return (
    <div className="form-card">
      <div className="form-header">
        <h3>Reserve a Slot</h3>
        <span className={`selected-pill ${selectedSlot ? 'has-selection' : ''}`}>
          {selectedSlot ? `Slot ${selectedSlot.slotNumber}` : 'No slot selected'}
        </span>
      </div>

      {message && <div className="form-alert">{message}</div>}

      <form onSubmit={handleSubmit} className="reservation-form">
        <div className="form-group">
          <label htmlFor="driverName">Driver Name</label>
          <input
            id="driverName"
            type="text"
            placeholder="e.g. John Doe"
            value={driverName}
            onChange={(e) => setDriverName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="vehiclePlate">Plate Number</label>
          <input
            id="vehiclePlate"
            type="text"
            placeholder="e.g. ABC 1234"
            value={vehiclePlate}
            onChange={(e) => setVehiclePlate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="reservationDate">Date</label>
          <input
            id="reservationDate"
            type="date"
            value={reservationDate}
            onChange={(e) => setReservationDate(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="submit-btn"
          disabled={!selectedSlot}
        >
          {selectedSlot ? `Confirm Reservation (${selectedSlot.slotNumber})` : 'Select a Slot First'}
        </button>
      </form>
    </div>
  )
}

export default ReservationForm
