import { useState } from 'react'
import { initialSlots } from './data/mockSlots'
import ParkingSlots from './components/ParkingSlots'
import './App.css'

function App() {
  const [slots] = useState(initialSlots)
  const [selectedSlot, setSelectedSlot] = useState(null)

  return (
    <div className="app-layout">
      <header className="app-header">
        <h1>Parking Reservation</h1>
      </header>

      <main className="app-main">
        <ParkingSlots
          slots={slots}
          selectedSlotId={selectedSlot?.id}
          onSelectSlot={setSelectedSlot}
        />
      </main>
    </div>
  )
}

export default App
