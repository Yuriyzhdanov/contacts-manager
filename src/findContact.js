export function findContactsByQuery(q, contacts) {
  q = q ? q.toLowerCase().trim() : ''

  if (q === '') return []

  const queries = q.split(' ').filter(Boolean)

  const contactMatches = contacts.map(contact => {
    let matchCount = 0

    queries.forEach(query => {
      if (
        (contact.phone && contact.phone.toLowerCase().includes(query)) ||
        (contact.firstName &&
          contact.firstName.toLowerCase().includes(query)) ||
        (contact.lastName && contact.lastName.toLowerCase().includes(query))
      ) {
        matchCount++
      }
    })

    return { contact, matchCount }
  })

  const maxMatches = Math.max(...contactMatches.map(item => item.matchCount), 0)

  return contactMatches
    .filter(item => item.matchCount === maxMatches && item.matchCount > 0)
    .map(item => item.contact)
}
