'use client';

import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import DashboardLayout from '@/components/DashboardLayout';
import { useRegistration } from '@/components/RegistrationProvider';
import { useCheckout, Visitor } from '@/components/CheckoutProvider';
import AppointmentsTab from './AppointmentsTab';

export default function VisitorsPage() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get('tab') === 'appointments' ? 'appointments' : 'history';
  const { openModal } = useRegistration();
  const { openCheckout } = useCheckout();
  const [activeTab, setActiveTab] = React.useState<'history' | 'appointments'>(initialTab);

  React.useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab === 'appointments') {
      setActiveTab('appointments');
    } else {
      setActiveTab('history');
    }
  }, [searchParams]);

  return (
    <DashboardLayout>
      {/* Section 1: Dashboard Integrated Functions (Check-In, Checkout, History) */}
      <section className="bg-surface-container-low rounded-[3rem] p-2 overflow-hidden shadow-sm">
        {/* Kiosk-Style Premium Tab Navigation */}
        <div className="p-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="relative p-1.5 bg-surface-container-highest/50 backdrop-blur-md rounded-[2rem] flex items-center shadow-inner border border-outline-variant/10">
            {/* Sliding Indicator (Pure CSS/Tailwind approach) */}
            <div 
              className={`absolute h-[calc(100%-12px)] top-1.5 transition-all duration-500 ease-spring bg-white rounded-[1.75rem] shadow-lg shadow-primary/5 border border-outline-variant/5 ${
                activeTab === 'history' ? 'left-1.5 w-[200px]' : 'left-[208px] w-[200px]'
              }`}
            />
            
            <button
              className={`relative z-10 w-[200px] py-4 rounded-[1.75rem] text-sm font-black uppercase tracking-widest transition-colors duration-500 flex items-center justify-center gap-3 ${
                activeTab === 'history' ? 'text-primary' : 'text-secondary/60 hover:text-secondary'
              }`}
              onClick={() => setActiveTab('history')}
            >
              <span className="material-symbols-outlined text-[20px]">group</span>
              <span>Visitors</span>
            </button>
            <button
              className={`relative z-10 w-[200px] py-4 rounded-[1.75rem] text-sm font-black uppercase tracking-widest transition-colors duration-500 flex items-center justify-center gap-3 ${
                activeTab === 'appointments' ? 'text-primary' : 'text-secondary/60 hover:text-secondary'
              }`}
              onClick={() => setActiveTab('appointments')}
            >
              <span className="material-symbols-outlined text-[20px]">event_note</span>
              <span>Appointments</span>
            </button>
          </div>

          <div className="flex items-center gap-4">
            {activeTab === 'history' && (
              <button
                className="group flex items-center gap-3 px-8 py-4 bg-primary text-on-primary rounded-[2rem] font-black uppercase tracking-widest text-xs shadow-xl shadow-primary/20 hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition-all animate-in fade-in zoom-in duration-500"
                onClick={openModal}
              >
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-90 transition-transform duration-500">
                  <span className="material-symbols-outlined text-[20px]">add</span>
                </div>
                <span>New Visitor</span>
              </button>
            )}
            {activeTab === 'appointments' && (
              <Link
                href="/appointments/schedule"
                className="group flex items-center gap-3 px-8 py-4 bg-primary text-on-primary rounded-[2rem] font-black uppercase tracking-widest text-xs shadow-xl shadow-primary/20 hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition-all animate-in fade-in zoom-in duration-500"
              >
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-90 transition-transform duration-500">
                  <span className="material-symbols-outlined text-[20px]">calendar_add_on</span>
                </div>
                <span>New Appointment</span>
              </Link>
            )}
          </div>
        </div>

        <div className="bg-white rounded-[2.5rem] overflow-hidden min-h-[600px] border border-outline-variant/10 shadow-sm">
          {activeTab === 'history' ? (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              {/* Header Design matching Appointments Tab Exactly */}
              <div className="p-10 flex justify-between items-center border-b border-outline-variant/5 bg-surface-container-low/30">
                <div>
                  <h3 className="text-2xl font-black text-on-surface tracking-tighter">Active Visitors</h3>
                  <p className="text-sm text-secondary font-medium mt-1">Manage on-site visitors and checkout procedures</p>
                </div>
                <div className="flex gap-4">
                  <div className="relative w-64 hidden md:block">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-secondary opacity-40">search</span>
                    <input
                      className="w-full bg-white border-none rounded-2xl h-12 pl-12 pr-4 text-sm font-medium focus:ring-2 focus:ring-primary/10 shadow-sm outline-none"
                      placeholder="Search visitors..."
                      type="text"
                    />
                  </div>
                  <button className="h-12 px-6 rounded-2xl bg-white text-secondary font-bold text-sm flex items-center gap-2 border border-outline-variant/10 hover:bg-surface-container transition-all">
                    <span className="material-symbols-outlined text-[20px]">filter_list</span>
                    <span>Filter</span>
                  </button>
                </div>
              </div>

              {/* Visitor Table matching Appointments spacing */}
              <div className="overflow-x-auto p-2">
                <table className="w-full text-left border-separate border-spacing-y-2">
                  <thead>
                    <tr className="text-secondary font-black text-[10px] uppercase tracking-[0.2em]">
                      <th className="px-8 py-4 pl-12">Visitor Name</th>
                      <th className="px-8 py-4">Company</th>
                      <th className="px-8 py-4">Host</th>
                      <th className="px-8 py-4">Time</th>
                      <th className="px-8 py-4">Status</th>
                      <th className="px-8 py-4 pr-12 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-2">
                    <VisitorRow
                      visitor={{
                        id: '1',
                        name: 'Elena Aris',
                        company: 'Lumina Studios',
                        host: 'Marcus Vane',
                        checkInTime: '09:14 AM',
                        status: 'Checked In'
                      }}
                      initials="EA"
                      statusColor="bg-emerald-500"
                      onCheckout={openCheckout}
                    />
                    <VisitorRow
                      visitor={{
                        id: '2',
                        name: 'Jonathan Doe',
                        company: 'Skyline Urbanism',
                        host: 'Sarah Jenkins',
                        checkInTime: '10:45 AM',
                        status: 'Checked In'
                      }}
                      initials="JD"
                      statusColor="bg-emerald-500"
                      bgClass="bg-primary-fixed"
                      textClass="text-primary"
                      onCheckout={openCheckout}
                    />
                    <VisitorRow
                      visitor={{
                        id: '3',
                        name: 'Michael Wu',
                        company: 'Apex Structural',
                        host: 'David K.',
                        checkInTime: '11:02 AM',
                        status: 'Checked In'
                      }}
                      initials="MW"
                      statusColor="bg-orange-500"
                      bgClass="bg-tertiary-fixed"
                      textClass="text-primary"
                      onCheckout={openCheckout}
                    />
                  </tbody>
                </table>
              </div>

              {/* Pagination matching Appointments Tab */}
              <div className="px-10 py-8 flex justify-between items-center bg-surface-container-low/20 mt-4">
                <p className="text-sm text-secondary font-medium">Showing <span className="text-on-surface font-bold">3</span> of <span className="text-on-surface font-bold">12</span> visitors</p>
                <div className="flex items-center gap-2">
                  <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-outline-variant/10 text-secondary hover:bg-surface-container transition-all">
                    <span className="material-symbols-outlined">chevron_left</span>
                  </button>
                  <div className="flex gap-1">
                    <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary text-on-primary font-bold text-sm">1</button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white text-secondary font-bold text-sm hover:bg-surface-container transition-all">2</button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white text-secondary font-bold text-sm hover:bg-surface-container transition-all">3</button>
                  </div>
                  <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-outline-variant/10 text-secondary hover:bg-surface-container transition-all">
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <AppointmentsTab />
          )}
        </div>
      </section>

      {/* Section 3: Appointments List (Upcoming) - Only show on History tab to avoid redundancy */}
      {activeTab === 'history' && (
        <section className="pb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-sm font-extrabold uppercase tracking-[0.2em] text-primary/60">Upcoming Appointments</h2>
            <button className="text-sm font-bold text-primary hover:underline underline-offset-4">View All Calendar</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AppointmentCard
              time="1:30 PM"
              name="Adrian Sterling"
              details="Host: Catherine Shaw • Level 4"
            />
            <AppointmentCard
              time="2:45 PM"
              name="Beatrice Thorne"
              details="Host: Gregory Miles • Boardroom A"
            />
            <AppointmentCard
              time="4:00 PM"
              name="Silas Thorne"
              details="Host: Design Committee • Gallery 2"
            />
          </div>
        </section>
      )}
    </DashboardLayout>
  );
}

function VisitorRow({
  visitor,
  initials,
  statusColor,
  onCheckout,
  bgClass = "bg-secondary-container",
  textClass = "text-secondary"
}: {
  visitor: Visitor,
  initials: string,
  statusColor: string,
  onCheckout: (v: Visitor) => void,
  bgClass?: string,
  textClass?: string
}) {
  return (
    <tr className="group hover:bg-surface-container-low transition-colors rounded-2xl">
      <td className="py-6 pl-6 rounded-l-2xl">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full ${bgClass} flex items-center justify-center ${textClass} font-bold text-sm`}>
            {initials}
          </div>
          <div className="font-bold text-on-surface">{visitor.name}</div>
        </div>
      </td>
      <td className="py-6 text-sm text-secondary font-medium">{visitor.company}</td>
      <td className="py-6 text-sm text-secondary">{visitor.host}</td>
      <td className="py-6 text-sm text-secondary">{visitor.checkInTime}</td>
      <td className="py-6">
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100">
          <span className={`w-1.5 h-1.5 rounded-full ${statusColor} mr-2`}></span>
          On-site
        </span>
      </td>
      <td className="py-6 pr-6 rounded-r-2xl">
        <button
          className="flex items-center gap-2 px-4 py-2 bg-secondary-container text-on-secondary-container hover:bg-secondary/20 transition-colors rounded-xl text-xs font-bold shadow-sm"
          onClick={() => onCheckout(visitor)}
        >
          <span className="material-symbols-outlined text-[18px]">logout</span>
          <span>Check Out</span>
        </button>
      </td>
    </tr>
  );
}

function AppointmentCard({ time, name, details }: any) {
  return (
    <div className="bg-surface-container rounded-3xl p-8 transition-transform hover:-translate-y-1 cursor-pointer">
      <div className="flex items-start justify-between mb-6">
        <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center">
          <span className="material-symbols-outlined text-primary text-3xl">calendar_today</span>
        </div>
        <span className="text-sm font-bold text-secondary">{time}</span>
      </div>
      <h4 className="text-xl font-bold mb-1">{name}</h4>
      <p className="text-sm text-secondary mb-8">{details}</p>
      <button className="w-full py-4 bg-white text-on-surface font-bold rounded-2xl shadow-sm hover:shadow-md transition-shadow active:scale-95">
        Pre-check In
      </button>
    </div>
  );
}
