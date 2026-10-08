function isValidDate(date) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return false;
  }

  const parsedDate = new Date(`${date}T00:00:00Z`);

  return (
    parsedDate.getUTCFullYear() === Number(date.slice(0, 4)) &&
    parsedDate.getUTCMonth() + 1 === Number(date.slice(5, 7)) &&
    parsedDate.getUTCDate() === Number(date.slice(8, 10))
  );
}

export function validateReservationDates(startDate, endDate) {
  if (!isValidDate(startDate) || !isValidDate(endDate)) {
    return {
      valid: false,
      message: "Dates must use the YYYY-MM-DD format."
    };
  }

  const today = new Date().toISOString().split("T")[0];

  if (startDate < today) {
    return {
      valid: false,
      message: "The reservation start date cannot be in the past."
    };
  }

  if (endDate < startDate) {
    return {
      valid: false,
      message: "The end date cannot be before the start date."
    };
  }

  return {
    valid: true,
    message: "Reservation dates are valid."
  };
}