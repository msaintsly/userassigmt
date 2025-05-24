import React, { useEffect, useState } from 'react';

const UserCard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://randomuser.me/api/');
      const data = await res.json();
      setUser(data.results[0]);
    } catch (error) {
      console.error('Error fetching user:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="flex justify-center mt-10">
      {loading ? (
        <p className="text-lg text-gray-600">Wait! Loading user...</p>
      ) : (
        <div className="bg-white p-6 rounded-xl shadow-md text-center w-80">
          <img
            src={user.picture.large}
            alt="User"
            className="rounded-full mx-auto mb-4 w-24 h-24"
          />
          <h2 className="text-xl font-semibold">
            {user.name.first} {user.name.last}
          </h2>
          <p className="text-gray-600 text-sm">{user.email}</p>
          <p className="text-gray-600 text-sm mb-4">{user.location.country}</p>
          <p className="text-gray-600 text-sm mb-4">{user.gender}</p>
          <button
            onClick={fetchUser}
            className="mt-2 bg-blue-600 text-red px-4 py-2 rounded hover:bg-blue-700"
          >
            Click for New User
          </button>
        </div>
      )}
    </div>
  );
};

export default UserCard;