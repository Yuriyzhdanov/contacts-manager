class Contacts extends Array {
  #currentId

  constructor() {
    super()
    this.#currentId = 1
  }

  add(contact) {
    this.#currentId += 1
    Object.assign(contact, { id: this.#currentId })
    this.push(contact)
  }

  edit(updateContact) {
    const index = this.findIndex(c => c.id === updateContact.id)
    if (index !== -1) {
      Object.assign(this[index], updateContact)
    }
  }

  remove(contact) {
    const index = this.findIndex(c => c.id === contact.id)
    if (index !== -1) {
      this.splice(index, 1)
    }
  }
}

const contacts = new Contacts()

contacts

contacts.add({ firstName: 'Vasya', lastName: 'Petrov' })
contacts.add({ firstName: 'John', lastName: 'Snow' })

console.log(contacts)
contacts.edit({ id: 2, name: 'Alice Cooper' })
console.log(contacts)

contacts.remove({ id: 2 })
console.log(contacts)

// contacts.forEach(contact => console.log(contact))

// for (const item in contacts) {
//   console.log(item)
// }
