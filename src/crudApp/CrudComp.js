import React, { useEffect, useState } from 'react';
import './curd.css';

const CrudComp = () => {
    const [users, setUsers] = useState([{ id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" }]);

    const [newUser, setNewUser] = useState({ name: '', email: '' });
    const [editingUser, setEditingUser] = useState(null);

    const handleAddUser = (event) => {
        if (newUser.name && newUser.email) {
            const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
            setUsers([...users, { id: newId, ...newUser }]);
            setNewUser({ name: '', email: '' });
        }
    };

    const handleUpdateUser = ()=>{
        const updatedUser = users.map((user)=> user.id === editingUser.id ? editingUser : user);
        setUsers(updatedUser);
    }


    const handleDelete = (removeId) => {
        console.log('id...delete...', removeId);
        console.log('users....', users);
        const newData = users.filter((usr) => usr.id !== removeId);
        console.log('newData....', newData);
        setUsers(newData);
    };

    return (
        <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
            <h1>User Management</h1>
            {/* Add newUser */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2vw' }}>
                <h3>Add User</h3>
                <input type='text' placeholder='Name' style={{ marginRight: '10px' }}
                    value={newUser.name}
                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                />
                <input type='email' placeholder='Email' style={{ marginRight: '10px' }}
                    value={newUser.email}
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                />
                <button onClick={handleAddUser}>Add</button>
            </div>
            {/* display user */}
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
                                        <li key={user.id} style={{ display: 'flex', gap: '2vw', alignItems: 'center', justifyContent: 'center' }}>
                                            <span>{user.name} ({user.email})</span>
                                            <button onClick={()=>setEditingUser(user)}>Edit</button>
                                            <button onClick={() => handleDelete(user.id)}>Delete</button>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    )
                }
            </div>

            {/* editing user */}
            {editingUser && (<div>
                <h3>Edit User</h3>
                <div>
                    <input type='text' placeholder='edit user' value={editingUser?.name} onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })} />
                    <input type='email' placeholder='edit email' value={editingUser?.email} onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })} />
                    <button onClick={handleUpdateUser}>Update</button>
                    <button onClick={()=> setEditingUser(null)}>Cancel</button>
                </div>
            </div>)}
        </div>
    )
}

export default CrudComp;