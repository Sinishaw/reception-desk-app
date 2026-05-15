'use client';

import React from 'react';
import Link from 'next/link';
import DashboardLayout from '@/components/DashboardLayout';

export default function ScheduleAppointmentPage() {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = React.useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call and show success
    setIsSuccessModalOpen(true);
  };

  return (
    <DashboardLayout>
      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <header className="mb-12">
          <Link 
            href="/visitors?tab=appointments" 
            className="inline-flex items-center gap-2 text-[#4e6073] font-bold text-sm mb-6 hover:text-[#9c3f00] transition-colors group"
          >
            <span className="material-symbols-outlined text-[20px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
            Back to Appointments
          </Link>
          <h1 className="text-5xl font-black tracking-tighter mb-4 leading-tight">
            Schedule New <span className="text-[#9c3f00]">Appointment</span>
          </h1>
          <p className="text-base text-[#4e6073] font-medium max-w-xl opacity-80">
            Define visitor details and host availability for the upcoming visit.
          </p>
        </header>

        <section className="bg-white rounded-[3.5rem] p-10 border border-[#e0c0b2]/10 shadow-2xl shadow-[#9c3f00]/5">
          <form className="space-y-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Visitor Details Section */}
              <div className="space-y-8">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#ffeae1] text-[#9c3f00] flex items-center justify-center">
                    <span className="material-symbols-outlined">person</span>
                  </div>
                  <h3 className="text-xl font-black tracking-tight">Visitor Details</h3>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-[#4e6073] ml-2">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Jonathan Reed"
                      className="w-full h-16 px-6 rounded-2xl bg-[#f5ded4] border-none focus:ring-2 focus:ring-[#9c3f00]/20 outline-none font-bold text-[#251913] transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-[#4e6073] ml-2">Company / Organization</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Acme Architecture"
                      className="w-full h-16 px-6 rounded-2xl bg-[#f5ded4] border-none focus:ring-2 focus:ring-[#9c3f00]/20 outline-none font-bold text-[#251913] transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-[#4e6073] ml-2">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="j.reed@example.com"
                      className="w-full h-16 px-6 rounded-2xl bg-[#f5ded4] border-none focus:ring-2 focus:ring-[#9c3f00]/20 outline-none font-bold text-[#251913] transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Appointment Logic Section */}
              <div className="space-y-8">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#cfe2f9] text-[#4e6073] flex items-center justify-center">
                    <span className="material-symbols-outlined">event_available</span>
                  </div>
                  <h3 className="text-xl font-black tracking-tight">Visit Logistics</h3>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-[#4e6073] ml-2">Date</label>
                      <input 
                        type="date" 
                        className="w-full h-16 px-6 rounded-2xl bg-[#f5ded4] border-none focus:ring-2 focus:ring-[#9c3f00]/20 outline-none font-bold text-[#251913] transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-[#4e6073] ml-2">Time</label>
                      <input 
                        type="time" 
                        className="w-full h-16 px-6 rounded-2xl bg-[#f5ded4] border-none focus:ring-2 focus:ring-[#9c3f00]/20 outline-none font-bold text-[#251913] transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-[#4e6073] ml-2">Select Host</label>
                    <select className="w-full h-16 px-6 rounded-2xl bg-[#f5ded4] border-none focus:ring-2 focus:ring-[#9c3f00]/20 outline-none font-bold text-[#251913] transition-all appearance-none">
                      <option>Sarah Jenkins (Design Director)</option>
                      <option>Marcus Thorne (Lead Architect)</option>
                      <option>Elena Rodriguez (Senior Partner)</option>
                      <option>David Chen (Project Manager)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-[#4e6073] ml-2">Purpose of Visit</label>
                    <textarea 
                      placeholder="e.g. Design review for Onyx Tower project"
                      className="w-full h-32 p-6 rounded-2xl bg-[#f5ded4] border-none focus:ring-2 focus:ring-[#9c3f00]/20 outline-none font-bold text-[#251913] transition-all resize-none"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-10 border-t border-[#e0c0b2]/20 flex flex-col sm:flex-row items-center gap-6">
              <button 
                type="submit"
                className="w-full sm:w-auto h-16 px-12 rounded-2xl bg-gradient-to-br from-[#9c3f00] to-[#c45100] text-white font-black text-lg shadow-xl shadow-[#9c3f00]/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
              >
                <span>Schedule Appointment</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <Link 
                href="/visitors?tab=appointments" 
                className="w-full sm:w-auto h-16 px-10 rounded-2xl bg-[#f5ded4] text-[#4e6073] font-black text-base hover:bg-[#ffeae1] active:scale-95 transition-all flex items-center justify-center"
              >
                Cancel
              </Link>
            </div>
          </form>
        </section>
      </div>

      <AppointmentScheduledModal 
        isOpen={isSuccessModalOpen} 
        onClose={() => setIsSuccessModalOpen(false)} 
      />
      
      <SchedulingFailedModal 
        isOpen={isErrorModalOpen} 
        onClose={() => setIsErrorModalOpen(false)} 
      />
    </DashboardLayout>
  );
}

function AppointmentScheduledModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-[#251913]/40 backdrop-blur-md animate-in fade-in duration-500">
      <div className="bg-white w-full max-w-2xl rounded-[3.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-8 duration-700 relative">
        <div className="absolute top-0 right-0 -z-10 w-[400px] h-[400px] bg-[#9c3f00]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="p-12 text-center flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-[#f5ded4] flex items-center justify-center mb-8 relative">
            <div className="absolute inset-0 rounded-full animate-ping bg-[#9c3f00]/10 opacity-75"></div>
            <span className="material-symbols-outlined text-[#9c3f00] text-5xl font-black">check_circle</span>
          </div>

          <h2 className="text-5xl font-black text-[#251913] tracking-tighter mb-4">Appointment Scheduled</h2>
          <p className="text-[#4e6073] text-lg font-medium max-w-md mb-12">
            The digital invitation and access pass have been dispatched to the guest.
          </p>

          <div className="w-full bg-[#fff8f6] rounded-[2.5rem] p-8 border border-[#e0c0b2]/20 text-left mb-12 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#9c3f00]">badge</span>
                <span className="font-bold text-on-surface">Digital Badge Issued</span>
              </div>
              <span className="px-3 py-1 bg-[#ffeae1] text-[#9c3f00] text-[10px] font-black uppercase tracking-widest rounded-full">Active</span>
            </div>
            <div className="flex items-center gap-3 text-[#4e6073] text-sm font-medium">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span>Verified via Concierge Onyx Portal</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <Link 
              href="/visitors?tab=appointments"
              className="flex-1 py-5 rounded-2xl bg-[#251913] text-white font-black text-sm uppercase tracking-widest hover:bg-[#3b2d27] transition-all active:scale-95 text-center"
            >
              Return to Dashboard
            </Link>
            <button 
              onClick={onClose}
              className="flex-1 py-5 rounded-2xl bg-[#f5ded4] text-[#4e6073] font-black text-sm uppercase tracking-widest hover:bg-[#ffeae1] transition-all active:scale-95"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SchedulingFailedModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/40 backdrop-blur-md animate-in fade-in duration-500">
      <div className="bg-white w-full max-w-lg rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-500">
        <div className="p-10 text-center flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-error-container/20 text-error flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-4xl">error</span>
          </div>

          <h2 className="text-3xl font-black text-on-surface tracking-tighter mb-2">Scheduling Failed</h2>
          <p className="text-secondary text-sm font-medium mb-10 px-6">
            We encountered an error while attempting to save the appointment. Please review the details and try again.
          </p>

          <button 
            onClick={onClose}
            className="w-full py-4 rounded-2xl bg-[#ba1a1a] text-white font-bold text-sm shadow-lg shadow-error/20 hover:bg-[#ba1a1a]/90 transition-all active:scale-95"
          >
            Retry Submission
          </button>
          <button 
            onClick={onClose}
            className="w-full py-4 mt-3 rounded-2xl bg-[#f5ded4] text-[#4e6073] font-bold text-sm hover:bg-[#ffeae1] transition-all active:scale-95"
          >
            Review Details
          </button>
        </div>
      </div>
    </div>
  );
}
