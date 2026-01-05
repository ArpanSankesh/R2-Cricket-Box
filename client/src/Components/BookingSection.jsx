// client/src/pages/BookingPage.jsx
import React, { useState } from 'react';

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const timeSlots = [
    { id: 1, time: '6:00 AM', price: 600, status: 'available' },
    { id: 2, time: '7:00 AM', price: 600, status: 'available' },
    { id: 3, time: '8:00 AM', price: 600, status: 'booked' },
    { id: 4, time: '9:00 AM', price: 600, status: 'available' },
    { id: 5, time: '10:00 AM', price: 700, status: 'available' },
    { id: 6, time: '11:00 AM', price: 700, status: 'available' },
    { id: 7, time: '12:00 PM', price: 700, status: 'available' },
    { id: 8, time: '1:00 PM', price: 700, status: 'booked' },
    { id: 9, time: '2:00 PM', price: 700, status: 'available' },
    { id: 10, time: '3:00 PM', price: 700, status: 'available' },
    { id: 11, time: '4:00 PM', price: 800, status: 'available' },
    { id: 12, time: '5:00 PM', price: 800, status: 'available' },
    { id: 13, time: '6:00 PM', price: 800, status: 'available' },
    { id: 14, time: '7:00 PM', price: 800, status: 'available' },
    { id: 15, time: '8:00 PM', price: 800, status: 'booked' },
    { id: 16, time: '9:00 PM', price: 800, status: 'available' },
  ];

  const handleBook = (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedSlot || !name || !phone) {
      alert('Please fill all fields');
      return;
    }
    alert(`Booking Confirmed!\nDate: ${selectedDate}\nTime: ${selectedSlot.time}\nAmount: ₹${selectedSlot.price}`);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        
        {/* Heading */}
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold">Book Your Slot</h1>
          <p className="text-2xl text-gray-400">Reserve your turf slot</p>
        </div>

        <form onSubmit={handleBook}>
          <div className='flex flex-col gap-6'>
            
            {/* Left Column - Date & Time */}
            <div className="space-y-4">
              
              {/* Select Date */}
              <div className='flex flex-col gap-2'>
                <label className="block text-sm font-medium">Select Date</label>
                <input 
                  type="date"
                  value={selectedDate}
                  min={today}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-zinc-900 border border-zinc-700 rounded-lg text-white focus:border-green-500 focus:outline-none"
                  required
                />
              </div>

              {/* Select Time */}
              <div className='flex flex-col gap-2'>
                <label className="block text-sm font-medium">Select Time</label>
                <div className="grid grid-cols-4 gap-2 max-h-80 overflow-y-auto pr-1">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot.id}
                      type="button"
                      onClick={() => slot.status === 'available' && setSelectedSlot(slot)}
                      disabled={slot.status === 'booked'}
                      className={`p-2 rounded-lg text-xs border transition ${
                        slot.status === 'booked'
                          ? 'bg-zinc-900/50 border-zinc-800 text-gray-600 cursor-not-allowed'
                          : selectedSlot?.id === slot.id
                            ? 'bg-green-500 border-green-500 text-black font-bold'
                            : 'bg-zinc-900 border-zinc-700 hover:border-green-500'
                      }`}
                    >
                      <div className="font-medium">{slot.time}</div>
                      <div className={`text-[10px] mt-0.5 ${
                        slot.status === 'booked' ? 'text-gray-600' : 
                        selectedSlot?.id === slot.id ? 'text-black' : 'text-green-400'
                      }`}>
                        {slot.status === 'booked' ? 'Booked' : `₹${slot.price}`}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Details & Book */}
            <div className="flex flex-col gap-2">
              <p className='text-sm font-medium'>Contact Info</p>
              
              {/* Name */}
              <div className='flex flex-col gap-2'>
                <input 
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full px-3 py-2 text-sm bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:border-green-500 focus:outline-none"
                  required
                />
              </div>

              {/* Phone */}
              <div className='flex flex-col gap-2'>
                <input 
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="10-digit number"
                  pattern="[0-9]{10}"
                  className="w-full px-3 py-2 text-sm bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:border-green-500 focus:outline-none"
                  required
                />
              </div>

              {/* Selected Slot Info */}
              {selectedSlot && (
                <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-3">
                  <div className="text-xs text-gray-400 mb-1">Selected Slot</div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{selectedSlot.time}</span>
                    <span className="text-lg font-bold text-green-400">₹{selectedSlot.price}</span>
                  </div>
                </div>
              )}

              {/* Book Button */}
              <button 
                type="submit"
                className="w-full bg-green-500 text-black py-2.5 rounded-lg text-sm font-bold hover:bg-green-400 transition mt-2"
              >
                Book Slot {selectedSlot && `- ₹${selectedSlot.price}`}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
