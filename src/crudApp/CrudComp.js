import React, { useEffect, useState } from 'react';
import './curd.css';

const CrudComp = () => {
    const [users, setUsers] = useState([{ id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" }]);

    const [newUser, setNewUser] = useState({name:'',email:''});
    const [editing, setEditingUser] = useState(null);

    const handleAddUser = () => {

    };

    const handleEdit = () => {

    };

    
    const handleDelete = () => {

    };

    return (
        <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
            <h1>User Management</h1>
            {/* Add newUser */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2vw' }}>
                <h3>Add User</h3>
                <input type='text' placeholder='Name' style={{ marginRight: '10px' }} />
                <input type='text' placeholder='Email' style={{ marginRight: '10px' }} />
                <button onClick={handleAddUser}>Add</button>
            </div>
            <div>
                <h3>UserList</h3>
                {
                    users.length === 0 ? (
                        <p>No User found.</p>
                    ) : (
                        <ul>
                            {
                                users?.map((user) => {
                                    return (
                                        <li style={{display:'flex',gap:'2vw',alignItems:'center',justifyContent:'center'}}>
                                            <span>{user.name} ({user.email})</span>
                                            <button onClick={handleEdit}>Edit</button>
                                            <button onClick={handleDelete}>Delete</button>
                                        </li>
                                        )
                                })
                            }
                        </ul>
                    )
                }
            </div>
        </div>
    )
}

export default CrudComp;