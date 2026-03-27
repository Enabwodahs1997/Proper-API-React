import React from 'react'

function ClassCard({ className, users }) {
    const filteredUsers = users || []
    return (
        <div className={className}>
            <ul>
                {filteredUsers.map((user) => (
                <li key={user.id} className='user-row'>
                    <div>{user.name}</div>
                    <div>{user.email}</div>
                    <div>{user.phone}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ClassCard