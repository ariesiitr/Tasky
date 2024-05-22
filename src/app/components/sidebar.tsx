import React from "react"
import Link from "next/link";

const Sidebar = () =>{
    return (
       
        
        <div className="w-1/4 bg-white shadow-lg">
          <div className="p-4 border-b">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
          </div>
          <div className="p-4">
           
            <div className="mt-6">
              <h2 className="text-xl font-semibold">General</h2>
              <div className="mt-2">
                <Link href="/dashboard/task" className="block p-2 rounded hover:bg-gray-200">Tasks</Link>
              </div>
              <div className="mt-2">
                <Link href="/dashboard/members" className="block p-2 rounded hover:bg-gray-200">Members</Link>
              </div>
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-semibold">Inventory</h2>
              <div className="mt-2">
                <Link href="/dashboard/inventory" className="block p-2 rounded hover:bg-gray-200">View Inventory</Link>
              </div>
              <div className="mt-2">
                <Link href="/dashboard/inventory" className="block p-2 rounded hover:bg-gray-200">Add Items</Link>
              </div>
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-semibold">Profile</h2>
              <div className="mt-2">
                <Link href="#" className="block p-2 rounded hover:bg-gray-200">View Profile</Link>
              </div>
            </div>

          </div>
          </div>
        
    );
}
export default Sidebar