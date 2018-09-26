export function addAlert (alert) {
  return {
    type: 'ADD_ALERT',
    alert
  }
}

export function resetAlerts () {
  return {
    type: 'RESET_ALERTS'
  }
}
