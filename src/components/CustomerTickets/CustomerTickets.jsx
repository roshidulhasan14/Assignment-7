import React from 'react';

const CustomerTickets = (fetchTickets) => {

    const ticketData = ues(fetchTickets)
    console.log(ticketData)

    return (
        <div class="max-w-md bg-white p-5 rounded-xl shadow-lg font-sans">
            
            <div class="flex justify-between items-start mb-2">
                <h2 class="text-lg font-semibold text-gray-800">
                    Login Issues - Can't Access Account
                </h2>
                <div class="flex items-center space-x-1 bg-green-100 text-green-700 font-bold px-3 py-1 rounded-full text-sm">
                    <span class="w-2 h-2 bg-green-600 rounded-full"></span>
                    <span>Open</span>
                </div>
            </div>
            
            <p class="text-gray-500 text-sm leading-snug mb-4">
                Customer is unable to log in to their account. They've tried resetting their password multiple times but still...
            </p>

            <div class="flex justify-between items-center pt-3 border-t border-gray-100 text-xs">
                
                <div class="flex items-center space-x-4">
                    <span class="font-medium text-gray-500">
                        #1001
                    </span>
                    <span class="font-bold text-red-500 uppercase tracking-wider text-[0.6rem]">
                        HIGH PRIORITY
                    </span>
                </div>

                <div class="flex items-center space-x-3 text-gray-500">
                    <span class="font-medium">
                        John Smith
                    </span>
                    <span class="flex items-center space-x-1">
                        📅
                        <span>1/15/2024</span>
                    </span>
                </div>
                
            </div>
        </div>

    

    );
};

export default CustomerTickets;

