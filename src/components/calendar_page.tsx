import React, { useState } from 'react';
import Navbar from './Navbar';

interface Appointment {
  id: string;
  patientName: string;
  doctorName: string;
  time: string;
  reason: string;
  status: 'Scheduled' | 'Cancelled';
  date: string; // YYYY-MM-DD format
}

const CalendarPage: React.FC = () => {
  // Set initial date to January 2025 where we have appointments
  const [currentDate, setCurrentDate] = useState(new Date(2025, 0, 1)); // January 2025
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 0, 15)); // January 15, 2025

  // Sample appointments data with more examples - added for current month too
  const appointments: Appointment[] = [
    // January 2025
    {
      id: '1',
      patientName: 'Miles Dyson',
      doctorName: 'Dr. John Smith',
      time: '9:00 AM',
      reason: 'Check-up',
      status: 'Scheduled',
      date: '2025-01-15'
    },
    {
      id: '2',
      patientName: 'Sarah Connor',
      doctorName: 'Dr. Jane Doe',
      time: '10:30 AM',
      reason: 'Annual Check-up',
      status: 'Scheduled',
      date: '2025-01-15'
    },
    {
      id: '3',
      patientName: 'Kyle Reese',
      doctorName: 'Dr. Mike Johnson',
      time: '2:00 PM',
      reason: 'Consultation',
      status: 'Scheduled',
      date: '2025-01-15'
    },
    {
      id: '4',
      patientName: 'John Connor',
      doctorName: 'Dr. John Smith',
      time: '3:30 PM',
      reason: 'Follow-up',
      status: 'Scheduled',
      date: '2025-01-15'
    },
    {
      id: '5',
      patientName: 'Ellen Ripley',
      doctorName: 'Dr. Jane Doe',
      time: '11:00 AM',
      reason: 'Physical Exam',
      status: 'Scheduled',
      date: '2025-01-16'
    },
    {
      id: '6',
      patientName: 'Dutch Schaefer',
      doctorName: 'Dr. Mike Johnson',
      time: '1:00 PM',
      reason: 'Injury Assessment',
      status: 'Scheduled',
      date: '2025-01-16'
    },
    {
      id: '7',
      patientName: 'Anna Williams',
      doctorName: 'Dr. Emily Davis',
      time: '9:30 AM',
      reason: 'Routine Checkup',
      status: 'Scheduled',
      date: '2025-01-17'
    },
    {
      id: '8',
      patientName: 'Marcus Wright',
      doctorName: 'Dr. John Smith',
      time: '2:30 PM',
      reason: 'Blood Test Results',
      status: 'Scheduled',
      date: '2025-01-17'
    },
    {
      id: '9',
      patientName: 'Catherine Brewster',
      doctorName: 'Dr. Jane Doe',
      time: '4:00 PM',
      reason: 'Vaccination',
      status: 'Scheduled',
      date: '2025-01-17'
    },
    {
      id: '10',
      patientName: 'Tech-Com Soldier',
      doctorName: 'Dr. Mike Johnson',
      time: '10:00 AM',
      reason: 'Emergency Visit',
      status: 'Cancelled',
      date: '2025-01-18'
    },
    {
      id: '11',
      patientName: 'Bishop Android',
      doctorName: 'Dr. Emily Davis',
      time: '11:30 AM',
      reason: 'System Check',
      status: 'Scheduled',
      date: '2025-01-18'
    },
    {
      id: '12',
      patientName: 'Newt Jorden',
      doctorName: 'Dr. John Smith',
      time: '3:00 PM',
      reason: 'Pediatric Exam',
      status: 'Scheduled',
      date: '2025-01-18'
    },
    {
      id: '13',
      patientName: 'Dillon Kane',
      doctorName: 'Dr. Jane Doe',
      time: '8:30 AM',
      reason: 'Pre-op Consultation',
      status: 'Scheduled',
      date: '2025-01-20'
    },
    {
      id: '14',
      patientName: 'Mac Eliot',
      doctorName: 'Dr. Mike Johnson',
      time: '1:30 PM',
      reason: 'Physical Therapy',
      status: 'Scheduled',
      date: '2025-01-20'
    },
    {
      id: '15',
      patientName: 'Billy Sole',
      doctorName: 'Dr. Emily Davis',
      time: '4:30 PM',
      reason: 'Mental Health Check',
      status: 'Scheduled',
      date: '2025-01-20'
    },
    // June 2025 (current month shown in screenshot)
    {
      id: '16',
      patientName: 'Sarah Connor',
      doctorName: 'Dr. John Smith',
      time: '9:00 AM',
      reason: 'Follow-up',
      status: 'Scheduled',
      date: '2025-06-15'
    },
    {
      id: '17',
      patientName: 'Kyle Reese',
      doctorName: 'Dr. Jane Doe',
      time: '10:30 AM',
      reason: 'Physical Exam',
      status: 'Scheduled',
      date: '2025-06-15'
    },
    {
      id: '18',
      patientName: 'John Connor',
      doctorName: 'Dr. Mike Johnson',
      time: '2:00 PM',
      reason: 'Consultation',
      status: 'Scheduled',
      date: '2025-06-18'
    },
    {
      id: '19',
      patientName: 'Ellen Ripley',
      doctorName: 'Dr. Emily Davis',
      time: '11:00 AM',
      reason: 'Check-up',
      status: 'Scheduled',
      date: '2025-06-18'
    },
    {
      id: '20',
      patientName: 'Dutch Schaefer',
      doctorName: 'Dr. John Smith',
      time: '3:30 PM',
      reason: 'Emergency Visit',
      status: 'Cancelled',
      date: '2025-06-18'
    },
    {
      id: '21',
      patientName: 'Anna Williams',
      doctorName: 'Dr. Jane Doe',
      time: '9:30 AM',
      reason: 'Routine Checkup',
      status: 'Scheduled',
      date: '2025-06-20'
    },
    {
      id: '22',
      patientName: 'Marcus Wright',
      doctorName: 'Dr. Mike Johnson',
      time: '1:30 PM',
      reason: 'Blood Test Results',
      status: 'Scheduled',
      date: '2025-06-20'
    },
    {
      id: '23',
      patientName: 'Catherine Brewster',
      doctorName: 'Dr. Emily Davis',
      time: '4:00 PM',
      reason: 'Vaccination',
      status: 'Scheduled',
      date: '2025-06-25'
    }
  ];

  // Doctor color mapping
  const doctorColors = {
    'Dr. John Smith': { bg: 'bg-blue-100', text: 'text-blue-800' },
    'Dr. Jane Doe': { bg: 'bg-green-100', text: 'text-green-800' },
    'Dr. Mike Johnson': { bg: 'bg-purple-100', text: 'text-purple-800' },
    'Dr. Emily Davis': { bg: 'bg-orange-100', text: 'text-orange-800' },
  };

  const getDoctorColors = (doctorName: string) => {
    return doctorColors[doctorName as keyof typeof doctorColors] || { bg: 'bg-gray-100', text: 'text-gray-800' };
  };

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
    return appointments.filter(apt => apt.date === date && apt.status !== 'Cancelled');
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

  const navigateToToday = () => {
    const today = new Date();
    setCurrentDate(new Date(today.getFullYear(), today.getMonth(), 1));
    setSelectedDate(today);
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

      const displayedAppointments = dayAppointments.slice(0, 6);
      const remainingCount = dayAppointments.length - 6;

      days.push(
        <div
          key={day}
          className={`h-32 bg-white rounded p-2 cursor-pointer overflow-hidden relative hover:bg-gray-50
            ${isToday ? 'border-2 border-blue-600 shadow-lg' : 'border border-gray-200'} 
            ${isSelected && !isToday ? 'border-blue-500 ring-2 ring-blue-200' : ''}
          `}
          onClick={() => setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))}
        >
          <div className={`text-lg font-medium text-center mb-1 ${isToday ? 'text-blue-600 font-bold' : ''}`}>
            {day}
          </div>
          <div className="grid grid-cols-3 grid-rows-2 gap-1 h-20">
            {displayedAppointments.map((apt) => {
              const colors = getDoctorColors(apt.doctorName);
              return (
                <div key={apt.id} className={`text-xs rounded px-1 py-1 text-center flex items-center justify-center
                  ${apt.status === 'Cancelled' ? 'bg-red-100 text-red-800' : `${colors.bg} ${colors.text}`}
                `}>
                  <div className="font-medium truncate">{apt.time}</div>
                </div>
              );
            })}
            {remainingCount > 0 && (
              <div className="text-xs text-gray-500 font-medium bg-gray-100 rounded flex items-center justify-center">
                +{remainingCount}
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
            <div className="flex items-center gap-4">
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
            <button 
              onClick={navigateToToday}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm font-medium"
            >
              Today
            </button>
          </div>

          {/* Doctor Legend */}
          <div className="mb-4 flex flex-wrap gap-4 text-sm">
            {Object.entries(doctorColors).map(([doctor, colors]) => (
              <div key={doctor} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded ${colors.bg}`}></div>
                <span>{doctor}</span>
              </div>
            ))}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-red-100"></div>
              <span>Cancelled</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded border-2 border-blue-600 bg-white"></div>
              <span>Today</span>
            </div>
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
            {selectedDateAppointments.map(apt => {
              const colors = getDoctorColors(apt.doctorName);
              return (
                <div key={apt.id} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-medium text-gray-900">{apt.patientName}</span>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full
                      ${apt.status === 'Cancelled' ? 'bg-red-600 text-white' : 'bg-blue-600 text-white'}
                    `}>
                      {apt.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div className={`font-medium ${colors.text}`}>Dr: {apt.doctorName}</div>
                    <div>Time: {apt.time}</div>
                    <div>Reason: {apt.reason}</div>
                  </div>
                </div>
              );
            })}
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
