import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import contacts from './contacts.json'


function App() {
  const [contactList, setContactList] = useState(contacts.slice(0,5))
  const [remainingContacts, setRemainingContacts] = useState(contacts.slice(5));

   const addRandomContact = () => {
     //Randomly select a contact from the remaining contacts
   const randomIndex = Math.floor(Math.random() * remainingContacts.length);
   const randomContact = remainingContacts[randomIndex];

  //Add the contact to the list and remove it from the remaining contacts
   setContactList([...contactList, randomContact])
   setRemainingContacts(remainingContacts.filter((c) => c.id !== randomContact.id))
  }

  const sortByName = () => {
    // Sort the contact list by name
    const sortedList = [...contactList].sort((a, b) => (a.name > b.name ?1 :-1))
    setContactList(sortedList)
  }

  const sortByPopularity = () => {
    // Sort the contact list by popularity
    const sortedList = [...contactList].sort((a, b) => (a.name > b.name ? 1 : -1))
    setContactList(sortedList)
  }

  const deleteContact = (id) => {
    //Remove the contact with the givens id from the contact list
    const newList = contactList.filter((c) => c.id !== id)
    setContactList(newList);
  }

  return( //render method
    <div className='App'>
      <h1>Welcome to Cheetah Zoo</h1>
      <button onClick= {addRandomContact}>Add Random Contact</button> 
      <button onClick= {sortByName}>Sort By Name</button>
      <button onClick= {sortByPopularity}>Sort by Popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contactList.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt={contact.name}/>
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? "🏆" : null}</td>
              <td>{contact.wonEmmy ? "🏆" : null}</td>
              <td>
                <button onClick={() => deleteContact(contact.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
