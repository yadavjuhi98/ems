import React, { useEffect, useState } from 'react';
import { setLocalStorage } from '../../utils/localStorage';

const Header = ({ data, changeUser }) => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Retrieve the loggedInUser from localStorage
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    
    if (loggedInUser) {
      setUsername(loggedInUser.firstName); // Default to 'User' if firstName is missing
    } else {
      setUsername('Admin'); // Fallback for when no user is logged in
    }
  }, []);

  const logOutUser = () => {
    // localStorage.setItem('loggedInUser', ''); // Clear the loggedInUser
    // props.changeUser(''); // Notify the parent component about logout
    // Optionally reload the page or redirect
    // window.location.reload();
    //  localStorage.clear();
    //  location.href = 'localhost:5173';

    localStorage.clear();
        window.location.href = '/'
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">
        {data?.firstName || 'User'} 👋
          {/* username */}
        </span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
