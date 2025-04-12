// const ms = require('ms')
import ms from 'ms'

function getDeltaTimestamp(startTimestamp) {
  const timestamp = Date.now()
  return timestamp - startTimestamp
}

function getFormattedTime(startTimestamp) {
  const deltaTimestamp = getDeltaTimestamp(startTimestamp)
  return ms(deltaTimestamp, { long: true })
}

const recentCalls = []

function addRecentCall(phone) {
  const recentCall = {
    phone,
    timestamp: Date.now(),
    get formattedTime() {
      return getFormattedTime(this.timestamp)
    },
  }
  recentCalls.unshift(recentCall)
}

const randPhone = () => (Math.random() * 10000000).toFixed(0).padStart(9, '0')

setInterval(() => {
  console.log('======================')
  for (const recentCall of recentCalls) {
    console.log(recentCall.phone, recentCall.formattedTime)
  }
  console.log('======================')
}, 1000)

setInterval(() => {
  addRecentCall(randPhone())
}, 3333)
