import React from 'react';
import Link from 'next/link';
import Sidebar from '../../components/sidebar';

// Sample tasks data
const tasksData = [
  {
    id: 1,
    name: 'Task 1',
    description: 'Description for Task 1',
    assignedTo: 'John Doe',
    status: 'In Progress',
    deadline: '2024-06-01',
  },
  {
    id: 1,
    name: 'Task 3',
    description: 'Description for Task 1',
    assignedTo: 'John Doe',
    status: 'In Progress',
    deadline: '2024-06-01',
  },
  {
    id: 2,
    name: 'Task 2',
    description: 'Description for Task 2',
    assignedTo: 'Jane Smith',
    status: 'Completed',
    deadline: '2024-05-25',
  },
  // Add more tasks as needed
];

const Tasks = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6">
        <h2 className="text-3xl font-semibold mb-6">Tasks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasksData.map(task => (
            <div key={task.id} className="bg-white p-4 shadow rounded">
              <h3 className="text-lg font-semibold mb-2">{task.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{task.description}</p>
              <p className="text-sm text-gray-500 mb-2">Assigned to: {task.assignedTo}</p>
              <p className="text-sm text-gray-500 mb-2">Status: {task.status}</p>
              <p className="text-sm text-gray-500 mb-2">Deadline: {task.deadline}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
