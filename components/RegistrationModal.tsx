'use client';

import React from 'react';
import { useRegistration } from './RegistrationProvider';
import SelectHostView from './SelectHostView';
import ReviewConfirmView from './ReviewConfirmView';
import ConfirmationView from './ConfirmationView';

const RegistrationModal = () => {
  const { isOpen, step, formData, updateFormData, closeModal, nextStep } = useRegistration();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-on-surface/20 backdrop-blur-md"
        onClick={closeModal}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-surface rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        {/* Main Content Area */}
        <div className="flex flex-col max-h-[90vh] overflow-y-auto">
          {/* Header Area (Shared or Specific) */}
          <div className="p-10 md:p-12 pt-6 md:pt-8 pb-0">
            <div className="flex items-center justify-between mb-4">
              <div className="flex flex-col items-start gap-2">
                <span className="text-xs font-bold tracking-widest text-primary uppercase">
                  Step {step === 'details' ? '01' : step === 'host' ? '02' : '03'} of 03
                </span>
                <h2 className="text-4xl font-bold tracking-tight text-on-surface">
                  {step === 'details' ? 'Visitor Details' : step === 'host' ? 'Select Host' : 'Review & Confirm'}
                </h2>
              </div>
              <div className="flex gap-2">
                <div className={`h-1.5 w-12 rounded-full transition-colors duration-500 ${step === 'details' || step === 'host' || step === 'review' ? 'bg-primary' : 'bg-surface-container-highest'}`}></div>
                <div className={`h-1.5 w-12 rounded-full transition-colors duration-500 ${step === 'host' || step === 'review' ? 'bg-primary' : 'bg-surface-container-highest'}`}></div>
                <div className={`h-1.5 w-12 rounded-full transition-colors duration-500 ${step === 'review' ? 'bg-primary' : 'bg-surface-container-highest'}`}></div>
              </div>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-10 md:p-12 pt-0">
            {step === 'details' ? (
              <div className="animate-in fade-in slide-in-from-left-8 duration-500">
                <div className="bg-surface-container-low rounded-3xl p-8 md:p-10 border border-outline-variant/10">
                  <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); nextStep(); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Building & Floor Search */}
                  <div className="flex flex-col gap-2 group md:col-span-2">
                    <label className="text-sm font-semibold text-secondary px-1">Building & Floor</label>
                    <div className="bg-surface-container-highest rounded-xl transition-all relative flex items-center focus-within:ring-2 focus-within:ring-primary/20">
                      <span className="material-symbols-outlined text-secondary ml-4">location_on</span>
                      <input 
                        className="w-full bg-transparent border-none focus:ring-0 px-4 py-4 text-on-surface placeholder:text-outline/50 font-medium outline-none" 
                        list="building-floors" 
                        placeholder="Search building or floor..." 
                        type="text"
                        value={formData.location}
                        onChange={(e) => updateFormData({ location: e.target.value })}
                      />
                      <datalist id="building-floors">
                        <option value="Building A - Level 1" />
                        <option value="Building A - Level 2" />
                        <option value="Building B - Level 1" />
                        <option value="Building B - Level 4" />
                        <option value="Building C - Lobby" />
                      </datalist>
                    </div>
                  </div>

                  {/* Full Name */}
                  <div className="flex flex-col gap-2 group">
                    <label className="text-sm font-semibold text-secondary px-1">Full Name</label>
                    <div className="bg-surface-container-highest rounded-xl transition-all focus-within:ring-2 focus-within:ring-primary/20">
                      <input 
                        className="w-full bg-transparent border-none focus:ring-0 px-4 py-4 text-on-surface placeholder:text-outline/50 font-medium outline-none" 
                        placeholder="e.g. Julianne Moore" 
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => updateFormData({ fullName: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div className="flex flex-col gap-2 group">
                    <label className="text-sm font-semibold text-secondary px-1">Company</label>
                    <div className="bg-surface-container-highest rounded-xl transition-all focus-within:ring-2 focus-within:ring-primary/20">
                      <input 
                        className="w-full bg-transparent border-none focus:ring-0 px-4 py-4 text-on-surface placeholder:text-outline/50 font-medium outline-none" 
                        placeholder="e.g. Design Studio Inc." 
                        type="text"
                        value={formData.company}
                        onChange={(e) => updateFormData({ company: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2 group">
                    <label className="text-sm font-semibold text-secondary px-1">Email Address</label>
                    <div className="bg-surface-container-highest rounded-xl transition-all focus-within:ring-2 focus-within:ring-primary/20">
                      <input 
                        className="w-full bg-transparent border-none focus:ring-0 px-4 py-4 text-on-surface placeholder:text-outline/50 font-medium outline-none" 
                        placeholder="julianne@example.com" 
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateFormData({ email: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="flex flex-col gap-2 group">
                    <label className="text-sm font-semibold text-secondary px-1">Phone Number</label>
                    <div className="bg-surface-container-highest rounded-xl transition-all focus-within:ring-2 focus-within:ring-primary/20">
                      <input 
                        className="w-full bg-transparent border-none focus:ring-0 px-4 py-4 text-on-surface placeholder:text-outline/50 font-medium outline-none" 
                        placeholder="+1 (555) 000-0000" 
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateFormData({ phone: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Purpose of Visit */}
                  <div className="flex flex-col gap-2 md:col-span-2 group">
                    <label className="text-sm font-semibold text-secondary px-1">Purpose of Visit</label>
                    <div className="bg-surface-container-highest rounded-xl transition-all relative">
                      <select 
                        className="w-full bg-transparent border-none focus:ring-0 px-4 py-4 text-on-surface font-medium appearance-none outline-none"
                        value={formData.purpose}
                        onChange={(e) => updateFormData({ purpose: e.target.value })}
                      >
                        <option disabled value="">Select a purpose...</option>
                        <option value="meeting">Scheduled Meeting</option>
                        <option value="delivery">Delivery / Courier</option>
                        <option value="interview">Job Interview</option>
                        <option value="maintenance">Maintenance / Service</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-secondary">
                        <span className="material-symbols-outlined">expand_more</span>
                      </div>
                    </div>
                  </div>

                  {/* Identification */}
                  <div className="flex flex-col gap-2 md:col-span-2 group">
                    <label className="text-sm font-semibold text-secondary px-1">Identification</label>
                    <button 
                      className="w-full flex items-center justify-center gap-3 bg-surface-container-highest border-2 border-dashed border-outline/20 hover:border-primary/50 text-on-surface-variant font-bold py-4 rounded-xl transition-all group/upload" 
                      type="button"
                    >
                      <span className="material-symbols-outlined text-primary group-hover/upload:scale-110 transition-transform">badge</span>
                      <span>Upload Identification</span>
                    </button>
                    <p className="text-[10px] text-outline px-1">Accepted formats: JPG, PNG, PDF (Max 5MB)</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
                  <button 
                    className="text-primary font-bold hover:underline transition-all px-4 py-2" 
                    type="button"
                    onClick={closeModal}
                  >
                    Cancel Registration
                  </button>
                  <button 
                    className="w-full md:w-auto bg-gradient-to-br from-primary to-primary-container text-on-primary px-12 py-5 rounded-xl font-bold text-lg shadow-xl shadow-primary/10 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-3" 
                    type="submit"
                  >
                    Next Step
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : step === 'host' ? (
          <SelectHostView />
        ) : step === 'review' ? (
          <ReviewConfirmView />
        ) : (
          <ConfirmationView />
        )}
      </div>
          
          {/* Architectural Quote/Accent */}
          {step !== 'confirmation' && (
            <div className="pb-10 text-center opacity-30 select-none">
              <p className="font-manrope tracking-[0.3em] text-[10px] font-black uppercase text-secondary">Precision in Hospitality</p>
            </div>
          )}
        </div>

        {/* Close Button Top Right */}
        <button 
          className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/20 transition-all shadow-xl"
          onClick={closeModal}
        >
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>
    </div>
  );
};

export default RegistrationModal;
