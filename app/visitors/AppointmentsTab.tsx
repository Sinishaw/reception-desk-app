'use client';

import React from 'react';
import Link from 'next/link';
import { useRegistration } from '@/components/RegistrationProvider';

export default function AppointmentsTab() {
  const [isCancelModalOpen, setIsCancelModalOpen] = React.useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = React.useState(false);
  const [selectedVisitor, setSelectedVisitor] = React.useState<string>('');
  
  const { openModal, updateFormData } = useRegistration();

  const handleCancelClick = (name: string) => {
    setSelectedVisitor(name);
    setIsCancelModalOpen(true);
  };

  const handleConfirmCancel = () => {
    setIsCancelModalOpen(false);
    setIsSuccessModalOpen(true);
  };

  const handleCheckIn = (data: any) => {
    updateFormData({
      fullName: data.name,
      company: data.company,
      email: data.email,
      purpose: 'Appointment Check-in'
    });
    openModal();
  };

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Appointments List Container */}
      <div className="bg-white rounded-[3rem] shadow-sm border border-outline-variant/10 overflow-hidden">
        <div className="p-10 flex justify-between items-center border-b border-outline-variant/5 bg-surface-container-low/30">
          <div>
            <h3 className="text-2xl font-black text-on-surface tracking-tighter">Active Appointments</h3>
            <p className="text-sm text-secondary font-medium mt-1">Manage scheduled visitors and check-in procedures</p>
          </div>
          <div className="flex gap-4">
            <div className="relative w-64 hidden md:block">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-secondary opacity-40">search</span>
              <input
                className="w-full bg-white border-none rounded-2xl h-12 pl-12 pr-4 text-sm font-medium focus:ring-2 focus:ring-primary/10 shadow-sm outline-none"
                placeholder="Filter appointments..."
                type="text"
              />
            </div>
            <button className="h-12 px-6 rounded-2xl bg-white text-secondary font-bold text-sm flex items-center gap-2 border border-outline-variant/10 hover:bg-surface-container transition-all">
              <span className="material-symbols-outlined text-[20px]">filter_list</span>
              <span>Filter</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto p-2">
          <table className="w-full text-left border-separate border-spacing-y-2">
            <thead>
              <tr className="text-secondary font-black text-[10px] uppercase tracking-[0.2em]">
                <th className="px-8 py-4">Visitor Name</th>
                <th className="px-8 py-4">Company</th>
                <th className="px-8 py-4">Host</th>
                <th className="px-8 py-4">Time</th>
                <th className="px-8 py-4">Status</th>
                <th className="px-8 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              <AppointmentRow
                initials="AM"
                name="Adeline Miller"
                email="adeline.m@gmail.com"
                company="Stellar Designs Co."
                host="Sarah Jenkins"
                time="09:30 AM"
                status="Confirmed"
                statusColor="bg-primary-fixed text-primary"
                hostImage="https://lh3.googleusercontent.com/aida-public/AB6AXuBj3cDSO9WljUE8L0YhfW9S_v21H1zqTfos1bfVNBAx--PUp-vaL84sayAseNuwRE2yC8AgYVsWG8nWUEQgBEzTn00N9gNibVBko7gU0GNYISsYMh9NGGem7di8QXbVT5Ggb8P0dFjJQ6sZ2GSoFHCeKJ6fylGqWYxBlg8-CDaBW7Gd4hz80WRkHuDFYp6CAXhH-3d9Ga7-xlNiEq-0b6Mg8VFic1BEwjv4ULz6QhxeapwxpmELD6pRxAkouxFi2aJ1srL813zrSQki"
                onCancel={() => handleCancelClick("Adeline Miller")}
                onCheckIn={() => handleCheckIn({ name: "Adeline Miller", company: "Stellar Designs Co.", email: "adeline.m@gmail.com" })}
              />
              <AppointmentRow
                initials="JB"
                name="James Bennett"
                email="james.bennett@techflow.io"
                company="TechFlow Solutions"
                host="Marcus Thorne"
                time="10:15 AM"
                status="Pending"
                statusColor="bg-surface-container-highest text-secondary"
                hostImage="https://lh3.googleusercontent.com/aida-public/AB6AXuAHRxjDgsWKPbYpj8PMEslMlvfH6bK9j26LV1se_EZHpluMB83-eBOiM9Bto68Z0UNkB7KGh6tbX-LbNPi5eBd1ExcJnbjQEgOzDiR2TujIo9Im08-Yh_bapBc7XoPBzG0uoBnyqkkpLHQjq4uqTP-dWr67330n6xO3U_wlEtZRrnv_Cb0ZZ6gHXfMmzOIcDyGVnQOJ1sZQI0BGvo63gtrZ0YAMyVlGiC4AdFDkoJ91GtpVLHcBuEpT9IeCBZt6U14YLQ21dPMLoyL_"
                disableCheckIn
                onCancel={() => handleCancelClick("James Bennett")}
                onCheckIn={() => handleCheckIn({ name: "James Bennett", company: "TechFlow Solutions", email: "james.bennett@techflow.io" })}
              />
              <AppointmentRow
                initials="EL"
                name="Eleanor Lang"
                email="e.lang@vanguard.com"
                company="Vanguard Global"
                host="Elena Rodriguez"
                time="11:00 AM"
                status="Confirmed"
                statusColor="bg-primary-fixed text-primary"
                hostImage="https://lh3.googleusercontent.com/aida-public/AB6AXuBGoWBdA9kKayMyQzpVM-Eaf9uVqxjFygI_7RoqwiK0lyUSgjWdvQSFEpsypMDFjnpps-8JSz7uBZmev-bx-m9gaEVWhpe5FIbynbTvRGC2lPXq_JhBJVs7GzEQDeIfc9mGJoHtc0t0kRPBiI3PGSVtUmuj8CTKZqpBC9KlngLlFYgYBthCRdxpIPFSS0eidI4TRVjfmSwCHaF5zCvBnbGtluOgrHplYoBfRHGC8xZX8cY8FBfzR6OtAqq1FBeau02Bg4Nr_Jsqxa5e"
                onCancel={() => handleCancelClick("Eleanor Lang")}
                onCheckIn={() => handleCheckIn({ name: "Eleanor Lang", company: "Vanguard Global", email: "e.lang@vanguard.com" })}
              />
              <AppointmentRow
                initials="KH"
                name="Kevin Hudson"
                email="k.hudson@architex.org"
                company="Architex Partners"
                host="David Chen"
                time="01:45 PM"
                status="Confirmed"
                statusColor="bg-primary-fixed text-primary"
                hostImage="https://lh3.googleusercontent.com/aida-public/AB6AXuDoFFY6lgF9Sb1lr4d-K-GMQ7FCRRZohwCAQVNOSqq2jy6SKBkXKtiN96cSmEKmq-hiOM3eOdxtnhKzMsDdEyWm_D66aYu3zPp7OhsX-Lob19AGnyRkNujYm-elz34cw80-PI2XmVC3m34czh9Cg-68U4d_4Qfft4Oq4na96SJ2SHP8dpSHcyBHIRR5fPkraWrznkcp4z1Jjnb2QPb_hp8TYZCAKllzUd8xzmioqouoRauw2IVQzlCOswKn5zZgUoEh9TiOSA1_QKbs"
                onCancel={() => handleCancelClick("Kevin Hudson")}
                onCheckIn={() => handleCheckIn({ name: "Kevin Hudson", company: "Architex Partners", email: "k.hudson@architex.org" })}
              />
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-10 py-8 flex justify-between items-center bg-surface-container-low/20">
          <p className="text-sm text-secondary font-medium">Showing <span className="text-on-surface font-bold">4</span> of <span className="text-on-surface font-bold">24</span> appointments</p>
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

      {/* Modals */}
      <CancelAppointmentModal
        isOpen={isCancelModalOpen}
        onClose={() => setIsCancelModalOpen(false)}
        onConfirm={handleConfirmCancel}
        visitorName={selectedVisitor}
      />
      <CancelSuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        visitorName={selectedVisitor}
      />

    </div>
  );
}

function AppointmentRow({
  initials,
  name,
  email,
  company,
  host,
  time,
  status,
  statusColor,
  hostImage,
  disableCheckIn = false,
  onCancel,
  onCheckIn
}: any) {
  return (
    <tr className="group hover:bg-surface-container-low transition-colors rounded-[2rem] overflow-hidden">
      <td className="px-8 py-6 rounded-l-[2rem]">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center text-primary font-black text-sm">
            {initials}
          </div>
          <div>
            <p className="font-bold text-on-surface">{name}</p>
            <p className="text-xs text-secondary font-medium opacity-60">{email}</p>
          </div>
        </div>
      </td>
      <td className="px-8 py-6">
        <p className="text-sm font-bold text-on-surface">{company}</p>
      </td>
      <td className="px-8 py-6">
        <div className="flex items-center gap-3">
          <img src={hostImage} alt={host} className="w-8 h-8 rounded-xl object-cover ring-2 ring-white" />
          <span className="text-sm font-medium text-secondary">{host}</span>
        </div>
      </td>
      <td className="px-8 py-6">
        <span className="text-sm font-black text-primary tracking-tight">{time}</span>
      </td>
      <td className="px-8 py-6">
        <span className={`px-4 py-1.5 rounded-full ${statusColor} text-[10px] font-black uppercase tracking-widest`}>
          {status}
        </span>
      </td>
      <td className="px-8 py-6 text-right rounded-r-[2rem]">
        <div className="flex items-center justify-end gap-3">
          <button
            onClick={onCheckIn}
            disabled={disableCheckIn}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all active:scale-95 ${disableCheckIn
              ? 'bg-surface-container-highest text-secondary opacity-40 cursor-not-allowed'
              : 'bg-primary text-on-primary shadow-lg shadow-primary/20 hover:bg-primary-container'
              }`}
          >
            Check In
          </button>
          <button
            onClick={onCancel}
            className="px-5 py-2.5 rounded-xl font-bold text-xs text-secondary hover:bg-surface-container transition-all"
          >
            Cancel
          </button>
        </div>
      </td>
    </tr>
  );
}

function CancelAppointmentModal({ isOpen, onClose, onConfirm, visitorName }: any) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden border border-outline-variant/10 animate-in zoom-in-95 duration-300">
        <div className="p-8 text-center">
          <div className="w-16 h-16 bg-error-container/30 text-error rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-3xl">event_busy</span>
          </div>
          <h3 className="text-2xl font-black text-on-surface mb-2 tracking-tighter">Cancel Appointment?</h3>
          <p className="text-secondary text-sm font-medium px-4">
            Are you sure you want to cancel the appointment for <span className="font-bold text-on-surface">{visitorName}</span>? This action cannot be undone.
          </p>
        </div>
        <div className="p-8 pt-0 flex flex-col gap-3">
          <button
            onClick={onConfirm}
            className="w-full py-4 rounded-2xl bg-error text-on-error font-bold text-sm shadow-lg shadow-error/20 hover:bg-error/90 active:scale-95 transition-all"
          >
            Confirm Cancellation
          </button>
          <button
            onClick={onClose}
            className="w-full py-4 rounded-2xl bg-surface-container-high text-on-surface font-bold text-sm hover:bg-surface-container-highest active:scale-95 transition-all"
          >
            Keep Appointment
          </button>
        </div>
      </div>
    </div>
  );
}

function CancelSuccessModal({ isOpen, onClose, visitorName }: any) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white z-[100] animate-in fade-in duration-500">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-secondary-container/30 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

      <section className="max-w-4xl mx-auto px-6 py-12 flex flex-col items-center justify-center text-center animate-in slide-in-from-bottom-8 duration-700">
        {/* Success Icon */}
        <div className="w-24 h-24 rounded-full bg-surface-container-high flex items-center justify-center mb-8 relative">
          <div className="absolute inset-0 rounded-full animate-pulse bg-primary/5"></div>
          <span className="material-symbols-outlined text-primary text-5xl">cancel</span>
        </div>

        <h2 className="text-5xl font-black text-on-surface tracking-tighter mb-4">Appointment Canceled</h2>
        <p className="text-secondary text-lg font-medium max-w-lg mb-12">The appointment has been successfully removed from the schedule. A notification has been sent to the host and the visitor.</p>

        {/* Visitor Card Preview */}
        <div className="bg-white/60 backdrop-blur-xl w-full max-w-md rounded-[2.5rem] p-8 border border-outline-variant/15 text-left shadow-2xl mb-12 group hover:bg-white transition-all duration-500">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 rounded-2xl bg-surface-container flex items-center justify-center grayscale opacity-50">
              <span className="material-symbols-outlined text-4xl">person</span>
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60 block mb-1">Canceled Entry</span>
              <h3 className="text-2xl font-black text-on-surface tracking-tighter">{visitorName}</h3>
              <p className="text-secondary text-sm font-medium">Visitor • Appointment Canceled</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-outline-variant/5">
              <span className="text-secondary text-sm font-medium">Status</span>
              <span className="text-error font-bold text-sm">Successfully Removed</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-secondary text-sm font-medium">Action Timestamp</span>
              <span className="text-on-surface font-black text-sm">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
          </div>
        </div>

        {/* Action Cluster */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <button
            onClick={onClose}
            className="bg-primary text-on-primary font-bold py-4 px-10 rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all w-full sm:w-auto"
          >
            Return to Appointments
          </button>
          <button className="bg-surface-container-highest text-secondary font-bold py-4 px-10 rounded-2xl hover:bg-surface-container transition-all w-full sm:w-auto">
            Schedule New
          </button>
        </div>
      </section>
    </div>
  );
}
