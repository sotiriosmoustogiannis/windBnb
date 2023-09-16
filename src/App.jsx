import { useState } from 'react'
import './App.css'
import Navbar from './Navbar.jsx'
import StayList from './StayList.jsx'
import staysJson from './stays.json'

const stays = staysJson.stays

function App() {

  const [formData, setFormData] = useState({ location: "", guests: 0 })
  const [filteredStays, setFilteredStays] = useState([])

  const handleChange = (evt) => {
    const changeField = evt.target.name;
    const newValue = evt.target.value;
    setFormData((currData) => {
      currData[changeField] = newValue
      return { ...currData }
    })

    // For every letter you write , search if there is a stay
    // Remove the comments
    // const filterLocationStays = stays.filter((stay) => (stay.city === formData.location))
    // console.log(filterLocationStays)
    // const filterGuestStays = formData.guests !== 0 ? filterLocationStays.filter((stay) => (stay.maxGuests <= formData.guests)) : filterLocationStays

    // setFilteredStays(filterGuestStays)

  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const filterLocationStays = stays.filter((stay) => (stay.city === formData.location))
    console.log(filterLocationStays)
    const filterGuestStays = formData.guests !== 0 ? filterLocationStays.filter((stay) => (stay.maxGuests <= formData.guests)) : filterLocationStays

    setFilteredStays(filterGuestStays)

    setFormData({ location: "", guests: 0 })
  }

  return (
    <>
      <Navbar formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
      {filteredStays.length !== 0 ? (
        <StayList stays={filteredStays} />
      ) : (
        <StayList stays={stays} />
      )
      }

    </>
  )
}

export default App
