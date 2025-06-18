import React, { useState } from 'react';
import Navbar from './Navbar';

interface Appointment {
  id: string;
  patientName: string;
  doctorName: string;
  time: string;
  reason: string;
  status: 'Scheduled' | 'Completed' | 'Cancelled';
  date: string; // YYYY-MM-DD format
}

const CalendarPage: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Sample appointments data
  const appointments: Appointment[] = [
    {
      id: '1',
      patientName: 'Miles Dyson',
      doctorName: 'Dr. John Smith',
      time: '11:00 AM',
      reason: 'Check-up',
      status: 'Scheduled',
      date: '2025-06-15'
    },
    {
      id: '2',
      patientName: 'Sarah Connor',
      doctorName: 'Dr. John Smith',
      time: '10:30 AM',
      reason: 'Annual Check-up',
      status: 'Scheduled',
      date: '2025-06-18'
    },
    {
      id: '3',
      patientName: 'Kyle Reese',
      doctorName: 'Dr. Jane Doe',
      time: '1:00 PM',
      reason: 'Consultation',
      status: 'Completed',
      date: '2025-06-18'
    },
    {
      id: '4',
      patientName: 'John Connor',
      doctorName: 'Dr. Jane Doe',
      time: '1:00 PM',
      reason: 'Consultation',
      status: 'Completed',
      date: '2025-06-18'
    }
  ];

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const getAppointmentsForDate = (date: string) => {
    return appointments.filter(apt => apt.date === date);
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Calculate previous month's last days to show in first row
    const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 0);
    const daysInPrevMonth = prevMonth.getDate();
    
    // Add previous month's trailing days
    for (let i = firstDay - 1; i >= 0; i--) {
      const day = daysInPrevMonth - i;
      days.push(
        <div key={`prev-${day}`} className="h-32 bg-gray-50 border border-gray-100 rounded p-2 text-gray-400">
          <div className="text-lg font-medium text-center mb-1">{day}</div>
        </div>
      );
    }

    // Days of the current month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = formatDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
      const dayAppointments = getAppointmentsForDate(dateStr);
      const isToday = dateStr === formatDate(new Date());
      const isSelected = dateStr === formatDate(selectedDate);

      const displayedAppointments = dayAppointments.slice(0, 2);
      const remainingCount = dayAppointments.length - 2;

      days.push(
        <div
          key={day}
          className={`h-32 bg-white border border-gray-200 rounded p-2 cursor-pointer overflow-hidden relative
            ${isToday ? 'bg-blue-50 border-blue-300' : ''} 
            ${isSelected ? 'border-blue-500 ring-2 ring-blue-200' : ''}
            hover:bg-gray-50`}
          onClick={() => setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))}
        >
          <div className="text-lg font-medium text-center mb-1">{day}</div>
          <div className="space-y-1">
            {displayedAppointments.map((apt) => (
              <div key={apt.id} className={`text-xs rounded px-2 py-1 text-center
                ${apt.status === 'Scheduled' ? 'bg-blue-100 text-blue-800' : ''}
                ${apt.status === 'Completed' ? 'bg-green-100 text-green-800' : ''}
                ${apt.status === 'Cancelled' ? 'bg-red-100 text-red-800' : ''}
              `}>
                <div className="font-medium">{apt.time}</div>
              </div>
            ))}
            {remainingCount > 0 && (
              <div className="text-xs text-gray-500 font-medium px-2 py-1 bg-gray-100 rounded text-center">
                +{remainingCount} more
              </div>
            )}
          </div>
        </div>
      );
    }

    // Add next month's leading days to fill the grid (42 days total for 6 weeks)
    const totalDays = 42; // 6 weeks × 7 days
    const remainingDays = totalDays - days.length;
    
    for (let day = 1; day <= remainingDays; day++) {
      days.push(
        <div key={`next-${day}`} className="h-32 bg-gray-50 border border-gray-100 rounded p-2 text-gray-400">
          <div className="text-lg font-medium text-center mb-1">{day}</div>
        </div>
      );
    }

    return days;
  };

  const selectedDateAppointments = getAppointmentsForDate(formatDate(selectedDate));

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar activePage="calendar" />
      
      <div className="flex h-[calc(100vh-4rem)]">
        <div className="flex-1 p-6 flex flex-col">
          <h1 className="text-3xl font-semibold text-gray-900 mb-4">Monthly Calendar</h1>
          
          <div className="flex items-center justify-between mb-4">
            <button 
              onClick={() => navigateMonth('prev')} 
              className="text-2xl text-blue-600 hover:text-blue-800 p-2 hover:bg-blue-50 rounded"
            >
              ‹
            </button>
            <h2 className="text-xl font-medium text-gray-900">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h2>
            <button 
              onClick={() => navigateMonth('next')} 
              className="text-2xl text-blue-600 hover:text-blue-800 p-2 hover:bg-blue-50 rounded"
            >
              ›
            </button>
          </div>

          <div className="grid grid-cols-7 grid-rows-[auto_repeat(6,1fr)] gap-2 flex-1">
            {dayNames.map(day => (
              <div key={day} className="font-medium text-gray-600 text-center py-2">
                {day}
              </div>
            ))}
            {renderCalendarDays()}
          </div>
        </div>

        <div className="w-80 bg-white border-l border-gray-200 p-6 flex flex-col">
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-900">
              {selectedDate.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </h3>
          </div>
          
          <div className="flex-1 space-y-2 overflow-y-auto">
            {selectedDateAppointments.map(apt => (
              <div key={apt.id} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-medium text-gray-900">{apt.patientName}</span>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full
                    ${apt.status === 'Scheduled' ? 'bg-blue-600 text-white' : ''}
                    ${apt.status === 'Completed' ? 'bg-green-600 text-white' : ''}
                    ${apt.status === 'Cancelled' ? 'bg-red-600 text-white' : ''}
                  `}>
                    {apt.status}
                  </span>
                </div>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>Dr: {apt.doctorName}</div>
                  <div>Time: {apt.time}</div>
                  <div>Reason: {apt.reason}</div>
                </div>
              </div>
            ))}
            {selectedDateAppointments.length === 0 && (
              <div className="text-center text-gray-500 italic py-8">
                No appointments for this date
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
