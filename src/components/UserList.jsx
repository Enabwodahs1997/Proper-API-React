import { useState } from 'react'
import './UserList.css'
import { Filter } from './Filter'
import ClassCard from './ClassCard'

export function UserList() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [filterInput, setFilterInput] = useState('')

  async function fetchUsers() {
      setLoading(true)
      setError('')

      await new Promise((resolve) => setTimeout(resolve, 2000)) // Simulate delay
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok')
          }
          return res.json()
        })
        .then((data) => {
          setUsers(data)
        })
        .catch((err) => {
          setError(err.message)
        })
        .finally(() => {
          setLoading(false)
        })
  }

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filterInput.toLowerCase())
  )

  if (loading) return <p className='animated-spinner'>Loading...</p>
  if (error) return <p className='userlist-error'>{error}</p>

  return (
    <>
    <header className='userlist-header'>
    <section className='user-list'>
        <div className='user-list-controls'>
            <button onClick={fetchUsers}>Fetch Users</button>
            <label className='filter-label' htmlFor='filter'>
            Filter Users:
            <Filter filterInput={filterInput} setFilterInput={setFilterInput} />
            </label>
        </div>
    </section>
    </header>
        <div className='user-list-results'>
        <h1>User List:</h1>
            <ClassCard className='user-card' users={filteredUsers} />
        </div>
    </>
  )
}

export default UserList