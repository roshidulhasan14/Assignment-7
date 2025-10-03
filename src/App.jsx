import React, { useState, useEffect } from "react";
import Navbar from "./components/CustomerTickets/Navbar/Navbar"
import Footer from "./components/Footer"
import './App.css'

function App() {
  
  const [tickets, setTickets] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  // Load tickets.json
  useEffect(() => {
    fetch("/tickets.json")
      .then((res) => res.json())
      .then((data) => setTickets(data))
      .catch((err) => console.error("Error loading tickets:", err));
  }, []);

  // Move ticket to In-Progress
  const moveToProgress = (ticket) => {
    if (
      !inProgress.some((t) => t.id === ticket.id) &&
      !resolved.some((t) => t.id === ticket.id)
    ) {
      setInProgress([...inProgress, ticket]);
      alert(`${ticket.title} moved to In-Progress ✅`);
    }
  };

  // Complete ticket → move to Resolved
  const completeTask = (ticket) => {
    setInProgress(inProgress.filter((t) => t.id !== ticket.id));
    setResolved([...resolved, ticket]);
    alert(`${ticket.title} marked as Resolved 🎉`);
  };

  return (
    <>
    <Navbar></Navbar>
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Status Counters */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-purple-500 text-white p-6 rounded-2xl shadow text-center">
          <h2 className="text-xl font-bold">In-Progress</h2>
          <p className="text-4xl">{inProgress.length}</p>
        </div>
        <div className="bg-green-500 text-white p-6 rounded-2xl shadow text-center">
          <h2 className="text-xl font-bold">Resolved</h2>
          <p className="text-4xl">{resolved.length}</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Left Side: All Tickets */}
        <div className="col-span-2">
          <h3 className="text-lg font-semibold mb-4">Customer Tickets</h3>
          <div className="space-y-4 grid grid-cols-2 gap-4">
            {tickets.map((ticket) => (
              <div
                key={ticket.id}
                onClick={() => moveToProgress(ticket)}
                className="cursor-pointer border p-4 bg-white rounded-xl shadow hover:bg-gray-100 transition"
              >
                <div className="flex justify-between items-center">
                  <h4 className="font-bold">{ticket.title}</h4>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded ${ticket.priorityColor}`}
                  >
                    {ticket.priority}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{ticket.description}</p>
                <div className="mt-2 text-xs text-gray-500">
                  <p>👤 {ticket.customer}</p>
                  <p>📅 {ticket.createdAt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Task Status */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Task Status</h3>

          {/* In-Progress Tickets */}
          <div className="space-y-4">
            {inProgress.map((task) => (
              <div
                key={task.id}
                className="flex justify-between items-center border p-3 rounded-lg bg-white shadow"
              >
                <span>{task.title}</span>
                <button
                  onClick={() => completeTask(task)}
                  className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600"
                >
                  Complete
                </button>
              </div>
            ))}
          </div>

          {/* Resolved Tickets */}
          <h3 className="text-lg font-semibold mt-6 mb-2">Resolved Tickets</h3>
          <div className="space-y-2">
            {resolved.map((task) => (
              <div
                key={task.id}
                className="p-2 bg-green-100 border border-green-400 rounded-lg"
              >
                {task.title}
              </div>
            ))}
            {resolved.length === 0 && (
              <p className="text-sm text-gray-500">No resolved tickets yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  <Footer></Footer>
  </>
  );
}


export default App;