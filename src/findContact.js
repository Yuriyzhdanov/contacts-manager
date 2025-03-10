const contacts = [
  { firstName: 'Вася', lastName: 'Петров', phone: '54321' },
  { firstName: 'Тома', lastName: 'Ветров', phone: '5821' },
  { firstName: 'Ирина', lastName: 'Васильева', phone: '3456' },
  { firstName: 'Ирина', lastName: 'Иринова', phone: '1234' },
  { firstName: 'Ирина', lastName: 'Ириновна', phone: '1234' },
  { firstName: 'Ирина', lastName: 'Ириновна', phone: '12345' },
]

function findContactsByQuery(q) {
  q = q.toLocaleLowerCase().trim()

  if (q === '') return []

  const queries = q.split(' ').filter(q => q)

  const contactMatches = contacts.map(contact => {
    let matchCount = 0

    queries.forEach(query => {
      if (
        contact.phone.toLocaleLowerCase().includes(query) ||
        contact.firstName.toLocaleLowerCase().includes(query) ||
        contact.lastName.toLocaleLowerCase().includes(query)
      ) {
        matchCount++
      }
    })

    matchCount
    return { contact, matchCount }
  })

  const maxMatches = Math.max(...contactMatches.map(item => item.matchCount))

  return contactMatches
    .filter(item => item.matchCount === maxMatches && item.matchCount > 0)
    .map(item => item.contact)
}

const results = findContactsByQuery('   ирина   иринова   3  ')

console.log(results)
