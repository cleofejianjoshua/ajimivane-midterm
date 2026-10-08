import { useState } from 'react'
import { initialSlots } from './data/mockSlots'
import ParkingSlots from './components/ParkingSlots'
import ReservationForm from './components/ReservationForm'
import './App.css'

function App() {
  const [slots, setSlots] = useState(initialSlots)
  const [selectedSlot, setSelectedSlot] = useState(null)
  const [reservations, setReservations] = useState([])

  const handleSelectSlot = (slot) => {
    // Toggle selection: if already selected, deselect; otherwise select
    setSelectedSlot(selectedSlot?.id === slot.id ? null : slot)
  }

  const handleReserve = (newReservation) => {
    // 1. Add to reservations list
    setReservations((prev) => [newReservation, ...prev])

    // 2. Mark slot as occupied / unavailable
    setSlots((prev) =>
      prev.map((s) => (s.id === newReservation.slotId ? { ...s, isAvailable: false } : s))
    )

    // 3. Clear selected slot
    setSelectedSlot(null)
  }

  return (
    <div className="app-layout">
      <header className="app-header">
        <h1>Parking Reservation</h1>
      </header>

      <main className="app-main">
        {/* Reservation Form (PARK-FE-02) */}
        <ReservationForm
          selectedSlot={selectedSlot}
          onReserve={handleReserve}
        />

        {/* Parking Slots Display (PARK-FE-01) */}
        <ParkingSlots
          slots={slots}
          selectedSlotId={selectedSlot?.id}
          onSelectSlot={handleSelectSlot}
        />
      </main>
    </div>
  )
}

export default App
