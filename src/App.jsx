//import { useState } from 'react'
import {navbar} from 'react'
import {background} from 'react'
import backgroundImg from "./assets/vector1.png"
import backgroundImg from "./assets/vector2.png"

import './App.css'
import Navbar from './components/CustomerTickets/Navbar/Navbar'
import CustomerTickets from './components/CustomerTickets/CustomerTickets'


const fetchTickets = async ()=>{
  const res = await fetch("/tickets.json")
  return res.json()
}

function App() {

  const ticketsPromise = fetchTickets()

  /*const [count, setCount] = useState(0)*/

  return (
    <>
      
        <Navbar></Navbar>

        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <CustomerTickets ticketsPromise={ticketsPromise}></CustomerTickets>
        </Suspense>

        <div className='background flex g-2 items-center'>
          <div>
            <span className='bg-gradient-to-l from-[#975BF0] to-[#632EE3] w-[400px] h-100px]'>In-Progress</span>
            <span>
              <img src="vector1.png" alt="" />
            </span>
            
          </div>
          <div>
            <span className='bg-gradient-to-l from-[#00827A] to-[#35B26F] '>Resolved</span>
            <span>
              <img src="vector2.png" alt="" />
            </span>
          </div>
        </div>









 



export default function Dashboard() {
const [tickets, setTickets] = useState(initialTickets);
const [tasks, setTasks] = useState([]);


// Add ticket to task status
const handleCardClick = (ticket) => {
if (!tasks.find((t) => t.id === ticket.id)) {
setTasks([...tasks, ticket]);
alert(`Added '${ticket.title}' to Task Status`);
}
};


// Complete task
const handleComplete = (id) => {
alert(`Task ${id} marked as complete!`);
setTasks(tasks.filter((t) => t.id !== id));
};


// Count tickets
const inProgressCount = tickets.filter((t) => t.status === "In-Progress").length;
const resolvedCount = 0; // for now static


return (
<div className="min-h-screen bg-gray-50 p-6">
{/* Banner */}
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-6 rounded-lg shadow">
<h2 className="text-lg font-semibold">In-Progress</h2>
<p className="text-3xl font-bold">{inProgressCount}</p>
</div>
<div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-lg shadow">
<h2 className="text-lg font-semibold">Resolved</h2>
<p className="text-3xl font-bold">{resolvedCount}</p>
</div>
</div>


<div className="grid grid-cols-3 gap-6">

  {/* Tickets Section */}
<div className="col-span-2 space-y-4">
<h3 className="text-lg font-bold">Customer Tickets</h3>
<div className="grid grid-cols-2 gap-4">
{tickets.map((ticket) => (
<div
key={ticket.id}
onClick={() => handleCardClick(ticket)}
className="bg-white rounded-lg shadow p-4 border cursor-pointer hover:shadow-lg transition"
>
<div className="flex justify-between items-center mb-2">
<span
className={`px-2 py-1 text-xs font-semibold rounded ${
ticket.status === "Open"
? "bg-green-100 text-green-600"
: ticket.status === "In-Progress"
? "bg-yellow-100 text-yellow-600"
: "bg-gray-100 text-gray-600"
}`}
>
{ticket.status}
</span>
<span className={`text-xs font-bold ${ticket.priorityColor}`}>
{ticket.priority}
</span>
</div>
<h4 className="font-semibold">{ticket.title}</h4>
<p className="text-sm text-gray-600 line-clamp-2">
{ticket.description}
</p>
<div className="flex justify-between text-xs text-gray-500 mt-2">
<span>{ticket.customer}</span>
<span>{ticket.createdAt}</span>
</div>
</div>
))}
</div>
</div>

{/* Task Status Section */}
<div>
<h3 className="text-lg font-bold mb-2">Task Status</h3>
<div className="space-y-2">
{tasks.length === 0 && (
<p className="text-sm text-gray-500">No tasks added yet.</p>
)}
{tasks.map((task) => (
<div
key={task.id}
className="flex justify-between items-center bg-green-100 text-green-700 py-2 px-3 rounded"
>
<span>{task.title}</span>
<button
onClick={() => handleComplete(task.id)}
className="bg-green-600 text-white text-sm px-3 py-1 rounded hover:bg-green-700"
>
Complete
</button>
</div>
))}
</div>


<h3 className="text-lg font-bold mt-6 mb-2">Resolved Task</h3>
<p className="text-gray-500 text-sm">No resolved tasks yet.</p>
</div>
</div>
</div>
);
}
     
    </>
  )
}





export default App
