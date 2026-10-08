function UserReservations({ reservations, onCancelReservation }) {
  const handleCancel = (item) => {
    if (window.confirm(`Cancel reservation for Slot ${item.slotNumber}?`)) {
      onCancelReservation(item.id, item.slotId)
    }
  }

  return (
    <section className="reservations-section">
      <h2>My Reservations</h2>

      {reservations.length === 0 ? (
        <p className="empty-text">No reservations yet.</p>
      ) : (
        <ul className="reservations-list">
          {reservations.map((item) => (
            <li key={item.id} className="reservation-item">
              <div>
                <strong>Slot {item.slotNumber}</strong> — {item.driverName} ({item.vehiclePlate})
                <span className="res-date"> • {item.date}</span>
              </div>

              {onCancelReservation && item.status === 'Active' && (
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => handleCancel(item)}
                >
                  Cancel
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default UserReservations
