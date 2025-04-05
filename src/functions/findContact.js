/**
 * @param {string} searchQuery
 * @param {Array} contactsList
 * @returns {Array}
 */
export function searchContacts(searchQuery, contactsList) {
  if (
    !searchQuery ||
    typeof searchQuery !== 'string' ||
    !Array.isArray(contactsList)
  ) {
    return []
  }

  const normalizedQuery = searchQuery.toLowerCase().trim()
  const queryWords = normalizedQuery.split(' ').filter(word => word)

  const matchedContacts = []

  contactsList.forEach(contact => {
    let relevanceScore = 0

    queryWords.forEach(word => {
      if (
        (contact.phone && contact.phone.toLowerCase().includes(word)) ||
        (contact.firstName && contact.firstName.toLowerCase().includes(word)) ||
        (contact.lastName && contact.lastName.toLowerCase().includes(word))
      ) {
        relevanceScore++
      }
    })

    if (relevanceScore > 0) {
      matchedContacts.push({ ...contact, relevanceScore })
    }
  })

  return matchedContacts.sort((a, b) => b.relevanceScore - a.relevanceScore)
}
