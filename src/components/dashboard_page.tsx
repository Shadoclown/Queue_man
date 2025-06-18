import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

interface Appointment {
  id: string;
  patientName: string;
  doctorName: string;
  appointmentType: string;
  date: string;
  time: string;
  status: 'Scheduled' | 'Completed' | 'Cancelled';
}

const DashboardPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('Today');
  const [statusFilter, setStatusFilter] = useState('All');

  // Sample appointment data
  const appointments: Appointment[] = [
    {
      id: '1',
      patientName: 'Sarah Connor',
      doctorName: 'Dr. John Smith',
      appointmentType: 'Annual Check-up',
      date: '6/18/2025',
      time: '10:30 AM',
      status: 'Scheduled'
    },
    {
      id: '2',
      patientName: 'Kyle Reese',
      doctorName: 'Dr. Jane Doe',
      appointmentType: 'Consultation',
      date: '6/18/2025',
      time: '1:00 PM',
      status: 'Scheduled'
    }
  ];

  const filteredAppointments = appointments.filter(appointment => {
    const matchesSearch = appointment.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        appointment.doctorName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || appointment.status === statusFilter;
    const isNotCancelled = appointment.status !== 'Cancelled';
    return matchesSearch && matchesStatus && isNotCancelled;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <Navbar activePage="dashboard" />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Today's Appointments</h2>
            <p className="text-gray-600">Overview of all appointments for today.</p>
          </div>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 flex items-center">
            <span className="mr-2">+</span>
            Add Appointment
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search patients/doctors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-4">
            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="Today">Date: Today</option>
              <option value="Tomorrow">Date: Tomorrow</option>
              <option value="This Week">Date: This Week</option>
            </select>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="All">Status: All</option>
              <option value="Scheduled">Status: Scheduled</option>
              <option value="Completed">Status: Completed</option>
              <option value="Cancelled">Status: Cancelled</option>
            </select>
          </div>
        </div>

        {/* Appointments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAppointments.map((appointment) => (
            <div key={appointment.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
              {/* Status Badge */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-blue-600">{appointment.patientName}</h3>
                <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {appointment.status}
                </span>
              </div>
              
              {/* Doctor Info */}
              <div className="mb-2">
                <p className="text-sm text-gray-600">Dr. {appointment.doctorName}</p>
              </div>
              
              {/* Appointment Type */}
              <div className="mb-4">
                <p className="text-sm text-blue-600 italic">{appointment.appointmentType}</p>
              </div>
              
              {/* Date and Time */}
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{appointment.date} at {appointment.time}</span>
                <div className="flex space-x-2">
                  <button className="p-1 hover:bg-gray-100 rounded">
                    ✏️
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    🗑️
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredAppointments.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No appointments found matching your criteria.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default DashboardPage;
