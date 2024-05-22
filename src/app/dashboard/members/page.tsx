"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Sidebar from '../../components/sidebar';

const Members = () => {
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedVertical, setSelectedVertical] = useState('All');

  const handleYearFilterChange = (event: any) => {
    setSelectedYear(event.target.value);
  };

  const handleVerticalFilterChange = (event: any) => {
    setSelectedVertical(event.target.value);
  };

  // Sample data for members and their sections with additional details
  const members = [
    { name: 'John Doe', section: 'AR/VR', pendingTasks: 3, issuedItems: 2, year: 1 },
    { name: 'Jane Smith', section: 'ML/DL', pendingTasks: 1, issuedItems: 1, year: 2 },
    { name: 'Alex Johnson', section: 'Robotics and Drones', pendingTasks: 2, issuedItems: 3, year: 3 },
    { name: 'Alex Johnson', section: 'Robotics and Drones', pendingTasks: 2, issuedItems: 3, year: 3 },
    { name: 'Alex Johnson', section: 'Robotics and Drones', pendingTasks: 2, issuedItems: 3, year: 3 },
    { name: 'John Doe', section: 'AR/VR', pendingTasks: 3, issuedItems: 2, year: 1 },
    { name: 'Jane Smith', section: 'ML/DL', pendingTasks: 1, issuedItems: 1, year: 2 },
    { name: 'Alex Johnson', section: 'Robotics and Drones', pendingTasks: 2, issuedItems: 3, year: 3 },
    { name: 'Alex Johnson', section: 'Robotics and Drones', pendingTasks: 2, issuedItems: 3, year: 3 },
    { name: 'Alex Johnson', section: 'Robotics and Drones', pendingTasks: 2, issuedItems: 3, year: 3 },
    // Add more members as needed
  ];

  // Filter members based on selected year and vertical
  const filteredMembers = members.filter((member) => {
    return (
      (selectedYear === 'All' || member.year.toString() === selectedYear) &&
      (selectedVertical === 'All' || member.section === selectedVertical)
    );
  });

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6">
        <h2 className="text-3xl font-semibold mb-6">Members</h2>
        {/* Filter dropdowns */}
        <div className="flex space-x-4 mb-4">
          <select
            className="bg-black text-white px-8 py-2 rounded"
            value={selectedYear}
            onChange={handleYearFilterChange}
          >
            <option value="All">All Years</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <select
            className="bg-black text-white px-4 py-2 rounded"
            value={selectedVertical}
            onChange={handleVerticalFilterChange}
          >
            <option value="All">All Verticals</option>
            <option value="AR/VR">AR/VR</option>
            <option value="ML/DL">ML/DL</option>
            <option value="Robotics and Drones">Robotics and Drones</option>
            {/* Add more vertical options as needed */}
          </select>
        </div>
        <div className="overflow-y-auto max-h-96">
          <div className="grid grid-cols-1 gap-6">
            {filteredMembers.map((member, index) => (
              <div key={index} className="bg-white p-4 shadow rounded">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-500">{member.section}</p>
                <div className="flex justify-between mt-4">
                  <p className="text-sm text-gray-600">Pending Tasks: {member.pendingTasks}</p>
                  <p className="text-sm text-gray-600">Issued Items: {member.issuedItems}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
