'use client';

import React from 'react';
import { useRegistration } from './RegistrationProvider';

const HOSTS = [
  { id: 1, name: 'Elena Rodriguez', role: 'Operations Director', department: 'Executive' },
  { id: 2, name: 'Marcus Thorne', role: 'Chief Technology Officer', department: 'Technology' },
  { id: 3, name: 'Sarah Jenkins', role: 'Head of Brand Strategy', department: 'Marketing' },
  { id: 4, name: 'David Chen', role: 'General Counsel', department: 'Legal' },
  { id: 5, name: 'Arjun Patel', role: 'Lead Systems Architect', department: 'Engineering' },
  { id: 6, name: 'Isabella Vane', role: 'Talent Acquisition Manager', department: 'Human Resources' },
];

const SelectHostView = () => {
  const { prevStep, closeModal, nextStep, setHost } = useRegistration();
  const placeholderImg = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200";

  return (
    <div className="animate-in fade-in slide-in-from-right-8 duration-500">
      <div className="mb-10">
        <h3 className="text-2xl font-black mb-2">Who are you visiting?</h3>
        <p className="text-secondary text-sm">Search for your host or select from the list below.</p>
      </div>

      {/* Search Bar */}
      <div className="mb-10 relative">
        <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-secondary/60">search</span>
        <input 
          type="text" 
          placeholder="Search by name or department..."
          className="w-full pl-14 pr-6 py-4 bg-surface-container-highest rounded-2xl border-none focus:ring-2 focus:ring-primary/20 transition-all text-sm font-medium outline-none"
        />
      </div>

      {/* Bento Grid of Hosts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        {HOSTS.map((host) => (
          <div 
            key={host.id}
            className="bg-surface-container-low hover:bg-white p-5 rounded-3xl border border-outline-variant/10 transition-all duration-300 group cursor-pointer hover:shadow-xl hover:shadow-primary/5 active:scale-[0.98]"
            onClick={() => {
              setHost(host);
              nextStep();
            }}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-primary-fixed/30 group-hover:border-primary transition-colors">
                <img src={placeholderImg} alt={host.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <span className="px-3 py-1 bg-secondary-container/50 text-on-secondary-container text-[10px] font-black tracking-wider uppercase rounded-full">
                {host.department}
              </span>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-0.5 group-hover:text-primary transition-colors">{host.name}</h4>
              <p className="text-secondary text-xs mb-4">{host.role}</p>
              <div className="flex items-center gap-2 text-primary font-bold text-xs opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                <span>Select Host</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Assistance Section */}
      <div className="bg-surface-container rounded-[2rem] p-8 flex flex-col sm:flex-row items-center justify-between gap-6 mb-10 border border-outline-variant/5">
        <div className="flex items-center gap-5 text-center sm:text-left">
          <div className="bg-primary-fixed p-3 rounded-2xl">
            <span className="material-symbols-outlined text-primary text-2xl">support_agent</span>
          </div>
          <div>
            <h5 className="font-bold">Can't find your host?</h5>
            <p className="text-secondary text-xs">Our front desk staff is ready to help you.</p>
          </div>
        </div>
        <button className="whitespace-nowrap border-2 border-primary/20 text-primary font-bold py-3 px-6 rounded-2xl hover:bg-primary hover:text-white transition-all text-xs">
          Request Assistance
        </button>
      </div>

      {/* Footer Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-outline-variant/10">
        <button 
          className="text-secondary font-bold hover:text-primary transition-all text-sm px-4"
          onClick={prevStep}
        >
          Go Back
        </button>
        <button 
          className="text-outline font-bold hover:text-error transition-all text-sm px-4"
          onClick={closeModal}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default SelectHostView;
