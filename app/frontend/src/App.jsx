import { useState } from 'react'
import { initialSlots } from './data/mockSlots'
import { initialReservations } from './data/mockReservations'
import ParkingSlots from './components/ParkingSlots'
import ReservationForm from './components/ReservationForm'
import UserReservations from './components/UserReservations'
import './App.css'

function App() {
  const [slots, setSlots] = useState(initialSlots)
  const [selectedSlot, setSelectedSlot] = useState(null)
  const [reservations, setReservations] = useState(initialReservations)

  const handleSelectSlot = (slot) => {
    setSelectedSlot(selectedSlot?.id === slot.id ? null : slot)
  }

  const handleReserve = (newReservation) => {
    setReservations((prev) => [newReservation, ...prev])
    setSlots((prev) =>
      prev.map((s) => (s.id === newReservation.slotId ? { ...s, isAvailable: false } : s))
    )
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

        {/* User's Reservations Display (PARK-FE-03) */}
        <UserReservations
          reservations={reservations}
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
