'use client';

import React from 'react';
import { useRegistration } from './RegistrationProvider';

const ConfirmationView = () => {
  const { registrationStatus, formData, closeModal, prevStep } = useRegistration();

  const isSuccess = registrationStatus === 'success';

  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 text-center animate-in fade-in zoom-in-95 duration-700">
      {registrationStatus === 'idle' ? (
        <div className="flex flex-col items-center gap-6">
          <div className="w-20 h-20 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
          <p className="text-secondary font-bold animate-pulse">Finalizing your registration...</p>
        </div>
      ) : isSuccess ? (
        <div className="max-w-md mx-auto space-y-8">
          {/* Animated Success Icon */}
          <div className="relative inline-flex">
            <div className="w-28 h-28 bg-primary/10 rounded-full flex items-center justify-center animate-ping absolute inset-0 opacity-20"></div>
            <div className="w-28 h-28 bg-primary text-on-primary rounded-full flex items-center justify-center shadow-2xl shadow-primary/40 relative">
              <span className="material-symbols-outlined text-6xl animate-in slide-in-from-bottom-4 duration-500">check</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-4xl font-black text-on-surface tracking-tight">Check-in Confirmed!</h3>
            <p className="text-secondary text-lg leading-relaxed">
              Welcome, <span className="text-on-surface font-bold">{formData.fullName || 'Julianne Moore'}</span>. Your host has been notified of your arrival.
            </p>
          </div>

          <div className="bg-surface-container p-6 rounded-[2rem] border border-outline-variant/10 shadow-inner">
            <div className="flex items-center gap-4 text-left">
              <div className="bg-primary-fixed p-3 rounded-2xl">
                <span className="material-symbols-outlined text-primary">notifications_active</span>
              </div>
              <p className="text-xs font-medium text-secondary">
                Please take a seat in the lounge. Someone will be with you shortly.
              </p>
            </div>
          </div>

          <button 
            className="w-full h-16 bg-on-surface text-surface rounded-2xl font-black text-lg shadow-xl hover:brightness-110 transition-all active:scale-[0.98]"
            onClick={closeModal}
          >
            Return to Dashboard
          </button>
        </div>
      ) : (
        <div className="max-w-md mx-auto space-y-8 animate-in fade-in slide-in-from-top-4 duration-500">
          {/* Error Icon */}
          <div className="w-28 h-28 bg-error/10 text-error rounded-full flex items-center justify-center mx-auto">
            <span className="material-symbols-outlined text-6xl">error</span>
          </div>

          <div className="space-y-4">
            <h3 className="text-4xl font-black text-on-surface tracking-tight">Registration Failed</h3>
            <p className="text-secondary text-lg leading-relaxed">
              We encountered an issue while processing your registration. Please try again or seek assistance.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <button 
              className="w-full h-16 bg-primary text-on-primary rounded-2xl font-black text-lg shadow-xl hover:bg-primary-container transition-all active:scale-[0.98]"
              onClick={prevStep}
            >
              Try Again
            </button>
            <button 
              className="w-full h-16 border-2 border-outline-variant/30 text-on-surface-variant rounded-2xl font-black text-lg hover:bg-surface-container-low transition-all"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Footer Branding */}
      <div className="mt-12 opacity-20 flex items-center gap-2">
        <span className="material-symbols-outlined text-sm">architecture</span>
        <p className="font-manrope tracking-[0.2em] text-[10px] font-black uppercase">Concierge Onyx Security</p>
      </div>
    </div>
  );
};

export default ConfirmationView;
