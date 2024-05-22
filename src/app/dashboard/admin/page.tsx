import React from 'react';

const userDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-white shadow-lg">
        <div className="p-4 border-b">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
        </div>
        <div className="p-4">
          <nav>
            <ul>
              <li className="mb-2">
                <a href="/dashboard/task" className="block p-2 rounded hover:bg-gray-200">Tasks</a>
              </li>
              <li className="mb-2">
                <a href="/dashboard/inventory" className="block p-2 rounded hover:bg-gray-200">Inventory</a>
              </li>
              <li className="mb-2">
                <a href="/dashboard/members" className="block p-2 rounded hover:bg-gray-200">Members</a>
              </li>
            </ul>
          </nav>
          <div className="mt-6">
            <h2 className="text-xl font-semibold">Profile</h2>
            <div className="mt-2">
              <a href="#" className="block p-2 rounded hover:bg-gray-200">View Profile</a>
              <a href="#" className="block p-2 rounded hover:bg-gray-200">Edit Profile</a>
            </div>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-1 p-6">
        <h2 className="text-3xl font-semibold mb-6">Welcome to Your Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Add your dashboard content here */}
          <div className="bg-white p-4 shadow rounded">Task Content</div>
          <div className="bg-white p-4 shadow rounded">Task Content</div>
          <div className="bg-white p-4 shadow rounded">Task Content</div>
        </div>
      </div>
    </div>
  );
};

export default userDashboard;
