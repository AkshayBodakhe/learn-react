import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  selectUsers, 
  selectUsersLoading, 
  selectUserDetailLoading,
  selectUsersError,
  selectSelectedUser,
  clearUsers,
  clearSelectedUser,
  clearError 
} from '../store/userSlice';
import { fetchUsers, fetchUserById } from '../store/actions/userActions';
import { AppDispatch } from '../store/storeConfig';

const UserList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector(selectUsers);
  const selectedUser = useSelector(selectSelectedUser);
  const loading = useSelector(selectUsersLoading);
  const userDetailLoading = useSelector(selectUserDetailLoading);
  const error = useSelector(selectUsersError);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  useEffect(() => {
    // Fetch users when component mounts only if users array is empty
    if (users.length === 0) {
      dispatch(fetchUsers());
    }
  }, []);

  const handleUserClick = useCallback((userId: number) => {
    // Only fetch if it's a different user or no user is selected
    if (selectedUserId !== userId || !selectedUser) {
      setSelectedUserId(userId);
      dispatch(fetchUserById(userId));
    }
  }, [selectedUserId, selectedUser, dispatch]);

  const handleClearUsers = useCallback(() => {
    dispatch(clearUsers());
  }, []);

  const handleClearSelectedUser = useCallback(() => {
    dispatch(clearSelectedUser());
    setSelectedUserId(null);
  }, []);

  const handleClearError = useCallback(() => {
    dispatch(clearError());
  }, []);

  const handleRefreshUsers = useCallback(() => {
    dispatch(fetchUsers());
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h2>Loading users...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h2>Error: {error}</h2>
        <button onClick={handleClearError} style={{ margin: '10px' }}>
          Clear Error
        </button>
        <button onClick={() => dispatch(fetchUsers())} style={{ margin: '10px' }}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>User List (Async Thunk Demo)</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <button onClick={handleRefreshUsers} style={{ marginRight: '10px' }}>
          Refresh Users
        </button>
        <button onClick={handleClearUsers} style={{ marginRight: '10px' }}>
          Clear Users
        </button>
        <button onClick={handleClearSelectedUser}>
          Clear Selected User
        </button>
      </div>

      <div style={{ display: 'flex', gap: '20px' }}>
        {/* Users List */}
        <div style={{ flex: 1 }}>
          <h3>Users ({users.length})</h3>
        <div style={{ maxHeight: '500px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px' }}>
          {users.map((user) => (
            <div 
              key={user.id}
              onClick={() => handleUserClick(user.id)}
              style={{
                padding: '10px',
                margin: '5px 0',
                border: selectedUserId === user.id ? '2px solid #007bff' : '1px solid #ddd',
                borderRadius: '5px',
                cursor: 'pointer',
                backgroundColor: selectedUserId === user.id ? '#f0f8ff' : 'white',
                transition: 'all 0.2s ease'
              }}
            >
              <strong>{user.name}</strong>
              <br />
              <small>{user.email}</small>
              <br />
              <small>Company: {user.company.name}</small>
            </div>
          ))}
        </div>
        </div>

        {/* Selected User Details */}
        <div style={{ flex: 1 }}>
          <h3>Selected User Details</h3>
          {userDetailLoading ? (
            <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px', textAlign: 'center', color: '#666' }}>
              Loading user details...
            </div>

          ) : selectedUser ? (
            <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px' }}>
              <h4>{selectedUser.name}</h4>
              <p><strong>Email:</strong> {selectedUser.email}</p>
              <p><strong>Username:</strong> {selectedUser.username}</p>
              <p><strong>Phone:</strong> {selectedUser.phone}</p>
              <p><strong>Website:</strong> {selectedUser.website}</p>
              
              <h5>Company</h5>
              <p><strong>Name:</strong> {selectedUser.company.name}</p>
              <p><strong>Catch Phrase:</strong> {selectedUser.company.catchPhrase}</p>
              
              <h5>Address</h5>
              <p>{selectedUser.address.street}, {selectedUser.address.suite}</p>
              <p>{selectedUser.address.city}, {selectedUser.address.zipcode}</p>
            </div>
          ) : (
            <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px', textAlign: 'center', color: '#666' }}>
              Click on a user to see details
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default UserList; 