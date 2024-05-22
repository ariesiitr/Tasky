"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Sidebar from '../../components/sidebar';

// Sample inventory data
const inventoryData = {
  tools: [
    { id: 1, name: 'Hammer', available: true, occupiedTill: null },
    { id: 2, name: 'Screwdriver Set', available: false, occupiedTill: '2024-06-01' },
    // Add more tool items as needed
  ],
  electronics: [
    { id: 3, name: 'Laptop', available: true, occupiedTill: null },
    { id: 4, name: 'Tablet', available: false, occupiedTill: '2024-05-25' },
    // Add more electronic items as needed
  ],
  devices: [
    { id: 5, name: 'Printer', available: true, occupiedTill: null },
    { id: 6, name: 'Scanner', available: false, occupiedTill: '2024-05-30' },
    // Add more device items as needed
  ],
};

const Inventory = () => {
  const [activeSection, setActiveSection] = useState('tools'); // Default active section is 'tools'

  const lendItem = (section: any, itemId: any) => {
    // Implement lending logic here
    console.log(`Lending ${itemId} from ${section}`);
  };

  const renderInventoryItems = (section: string) => {
    return inventoryData[section].map((item: { id: React.Key | null | undefined; name: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; available: any; occupiedTill: any; }) => (
      <div key={item.id} className="bg-white p-4 shadow rounded flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-sm">{item.available ? 'Available' : `Occupied till: ${item.occupiedTill}`}</p>
        </div>
        {item.available && (
          <button
            onClick={() => lendItem(section, item.id)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Lend
          </button>
        )}
      </div>
    ));
  };
  
  

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6">
        <h2 className="text-3xl font-semibold mb-6">Inventory</h2>
        <div className="mb-4">
          <button
            className={`mr-4 ${activeSection === 'tools' ? 'font-semibold' : 'font-normal'}`}
            onClick={() => setActiveSection('tools')}
          >
            Tools
          </button>
          <button
            className={`mr-4 ${activeSection === 'electronics' ? 'font-semibold' : 'font-normal'}`}
            onClick={() => setActiveSection('electronics')}
          >
            Electronics
          </button>
          <button
            className={`mr-4 ${activeSection === 'devices' ? 'font-semibold' : 'font-normal'}`}
            onClick={() => setActiveSection('devices')}
          >
            Devices
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Render inventory items based on active section */}
          {renderInventoryItems(activeSection)}
        </div>
      </div>
    </div>
  );
};

export default Inventory;
