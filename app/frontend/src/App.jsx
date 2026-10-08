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

  // PARK-FE-04: Cancel reservation handler
  const handleCancelReservation = (reservationId, slotId) => {
    // 1. Remove the cancelled reservation
    setReservations((prev) => prev.filter((r) => r.id !== reservationId))

    // 2. Free up the parking slot so it becomes available again
    setSlots((prev) =>
      prev.map((s) => (s.id === slotId ? { ...s, isAvailable: true } : s))
    )
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

        {/* User's Reservations Display & Cancel (PARK-FE-03 & PARK-FE-04) */}
        <UserReservations
          reservations={reservations}
          onCancelReservation={handleCancelReservation}
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
