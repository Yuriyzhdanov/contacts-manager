const contacts = [
  { firstName: 'Вася', lastName: 'Петров', phone: '54321' },
  { firstName: 'Тома', lastName: 'Ретров', phone: '5821' },
  { firstName: 'Ирина', lastName: 'Васильева', phone: '3456' },
  { firstName: 'Ирина', lastName: 'Иринова', phone: '1234' },
  { firstName: 'Ирина', lastName: 'Ириновна', phone: '1234' },
]

function findContactsByQuery(q) {
  const findedContacts = []

  q = q.toLocaleLowerCase().trim()

  if (q === '') return []

  const queries = q.split(' ').filter(q => q)

  contacts.forEach(contact => {
    let matchCount = 0
    let bestMatch = ''
    let matchMap = {}

    queries.forEach(query => {
      let count = 0

      if (contact.phone.toLocaleLowerCase().includes(query)) count++
      if (contact.firstName.toLocaleLowerCase().includes(query)) count++
      if (contact.lastName.toLocaleLowerCase().includes(query)) count++

      if (count > 0) {
        matchCount += count
        count
        matchCount

        matchMap[query] = (matchMap[query] || 0) + count // Увеличиваем счетчик для слова
        bestMatch
        // Проверяем, является ли текущее слово наиболее часто встречающимся
        console.log(!bestMatch)
        console.log(matchMap[query])
        console.log(matchMap[bestMatch])
        if (!bestMatch || matchMap[query] > matchMap[bestMatch]) {
          bestMatch
          matchMap
          bestMatch = query
          matchCount
          bestMatch
        }
      }
    })
    if (matchCount > 0) {
      findedContacts.push(bestMatch)
    }
  })

  return findedContacts
}

const results = findContactsByQuery('   ирина   иринова   3  ')

console.log(results)
