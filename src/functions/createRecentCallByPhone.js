import ms from 'ms'

function getDeltaTimestamp(startTimestamp) {
  const timestamp = Date.now()
  return timestamp - startTimestamp
}

function getFormattedTime(startTimestamp) {
  const deltaTimestamp = getDeltaTimestamp(startTimestamp)
  return ms(deltaTimestamp, { long: true })
}

function createRecentCallByPhone(phone) {
  const recentCall = {
    phone,
    timestamp: Date.now(),
    get formattedTime() {
      return getFormattedTime(this.timestamp)
    },
  }
  return recentCall
}

export default createRecentCallByPhone
