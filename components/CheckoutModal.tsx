'use client';

import React from 'react';
import { useCheckout } from './CheckoutProvider';

const CheckoutModal = () => {
  const { isOpen, step, selectedVisitor, closeCheckout, finalizeCheckout } = useCheckout();

  if (!isOpen || !selectedVisitor) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-on-surface/30 backdrop-blur-md animate-in fade-in duration-300"
        onClick={closeCheckout}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-surface rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        <div className="max-h-[90vh] overflow-y-auto">
          {step === 'details' ? (
            <CheckoutDetailsView visitor={selectedVisitor} />
          ) : (
            <CheckoutConfirmedView visitor={selectedVisitor} />
          )}
        </div>

        {/* Close Button Top Right */}
        <button 
          className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md text-on-surface/40 flex items-center justify-center hover:bg-white/20 transition-all"
          onClick={closeCheckout}
        >
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>
    </div>
  );
};

const CheckoutDetailsView = ({ visitor }: { visitor: any }) => {
  const { finalizeCheckout, closeCheckout } = useCheckout();

  return (
    <div className="p-10 md:p-12 space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2">
        <h2 className="text-4xl font-extrabold text-on-background tracking-tighter">Visitor Checkout</h2>
        <p className="text-secondary font-medium text-lg">Review details and finalize the departure.</p>
      </div>

      <div className="bg-surface-container-low p-8 rounded-3xl space-y-10">
        {/* Visitor Identity */}
        <div className="bg-surface-container-lowest p-6 rounded-2xl flex items-center gap-6 shadow-[0_8px_32px_rgba(0,0,0,0.02)]">
          <div className="h-16 w-16 bg-primary-fixed rounded-full flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: '"FILL" 1' }}>person</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-on-surface">{visitor.name}</h3>
            <p className="text-sm text-secondary font-medium">{visitor.company}</p>
            <div className="mt-1 flex items-center gap-2 text-[10px] text-secondary/60 font-bold uppercase tracking-widest">
              <span>Checked in: {visitor.checkInTime}</span>
              <span className="h-1 w-1 bg-outline-variant rounded-full"></span>
              <span>Escort: {visitor.host}</span>
            </div>
          </div>
        </div>

        {/* Checkout Process */}
        <div className="space-y-8">
          <div className="flex items-center justify-between p-6 bg-surface-container rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-primary-fixed flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">badge</span>
              </div>
              <div>
                <h4 className="font-bold text-on-surface">Visitor Badge Returned</h4>
                <p className="text-xs text-secondary font-medium">Confirm physical badge collected</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input defaultChecked className="sr-only peer" type="checkbox" />
              <div className="w-14 h-8 bg-outline/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-bold text-on-surface-variant ml-1">Departure Notes</label>
            <textarea 
              className="w-full bg-surface-container-highest border-none rounded-2xl p-5 text-on-surface placeholder:text-secondary/50 focus:ring-2 focus:ring-primary/20 transition-all outline-none" 
              placeholder="Add any feedback, lost items reported, or follow-up requirements..." 
              rows={4}
            ></textarea>
          </div>
        </div>

        {/* Digital Record Preview */}
        <div className="bg-surface-container/60 backdrop-blur-xl p-6 rounded-2xl border border-white/20">
          <div className="flex justify-between items-start mb-4">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Digital Record Preview</span>
            <span className="material-symbols-outlined text-primary text-sm">verified</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <p className="text-[11px] text-secondary/70 uppercase tracking-widest font-bold">Status</p>
              <p className="text-xl font-bold text-on-surface">Pending Checkout</p>
            </div>
            <div className="text-right">
              <p className="text-[11px] text-secondary/70 uppercase tracking-widest font-bold">Departure</p>
              <p className="text-lg font-medium text-on-surface">
                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 pt-4">
          <button 
            className="flex-1 py-5 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-2xl font-bold text-lg shadow-xl shadow-primary/10 hover:brightness-110 active:scale-[0.98] transition-all"
            onClick={finalizeCheckout}
          >
            Finalize Checkout
          </button>
          <button 
            className="px-8 py-5 text-secondary font-bold hover:bg-surface-container-highest rounded-2xl transition-all"
            onClick={closeCheckout}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const CheckoutConfirmedView = ({ visitor }: { visitor: any }) => {
  const { closeCheckout, checkoutStatus, finalizeCheckout } = useCheckout();

  if (checkoutStatus === 'idle') {
    return (
      <div className="p-20 flex flex-col items-center justify-center text-center space-y-8 animate-in fade-in duration-500">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary animate-pulse">sync</span>
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-on-surface">Finalizing Departure</h2>
          <p className="text-secondary font-medium">Please wait while we log the checkout...</p>
        </div>
      </div>
    );
  }

  if (checkoutStatus === 'error') {
    return (
      <div className="p-12 flex flex-col items-center text-center animate-in zoom-in-95 duration-500">
        <div className="w-24 h-24 rounded-full bg-error-container flex items-center justify-center mb-8 shadow-xl shadow-error/10">
          <span className="material-symbols-outlined text-error text-5xl">warning</span>
        </div>
        <h1 className="text-3xl font-extrabold text-on-surface mb-4">Checkout Interrupted</h1>
        <p className="text-lg text-secondary font-medium mb-12 max-w-md">
          We encountered an issue while finalizing the departure for {visitor.name}. Please try again or contact system support.
        </p>
        
        <div className="w-full space-y-4">
          <button 
            className="w-full py-5 bg-primary text-on-primary rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
            onClick={finalizeCheckout}
          >
            <span className="material-symbols-outlined">refresh</span>
            Try Again
          </button>
          <button 
            className="w-full py-4 text-secondary font-bold hover:bg-surface-container-highest rounded-2xl transition-all"
            onClick={closeCheckout}
          >
            Cancel & Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-10 md:p-12 flex flex-col items-center text-center animate-in zoom-in-95 fade-in duration-700">
      <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary to-primary-container flex items-center justify-center mb-8 shadow-2xl shadow-primary/20">
        <span className="material-symbols-outlined text-on-primary text-5xl" style={{ fontVariationSettings: '"FILL" 1' }}>logout</span>
      </div>

      <h1 className="text-4xl font-extrabold tracking-tight text-on-surface mb-4">
        Checkout Successful
      </h1>
      <p className="text-lg text-secondary font-medium mb-12">
        Visitor departure has been logged.
      </p>

      <div className="w-full bg-surface-container-low rounded-[2rem] p-8 shadow-inner relative overflow-hidden text-left mb-12">
        <div className="absolute top-0 left-0 w-1.5 h-full bg-primary"></div>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-1">
            <span className="text-secondary text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">Visitor</span>
            <span className="text-lg font-bold text-on-surface">{visitor.name}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-secondary text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">Company</span>
            <span className="text-lg font-bold text-on-surface">{visitor.company}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-secondary text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">Host Visited</span>
            <span className="text-lg font-bold text-on-surface">{visitor.host}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-secondary text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">Checkout Time</span>
            <span className="text-lg font-bold text-on-surface">
              {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
            </span>
          </div>
        </div>
      </div>

      <div className="w-full space-y-4">
        <button 
          className="w-full py-5 bg-on-surface text-surface rounded-2xl font-bold text-lg shadow-xl hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
          onClick={closeCheckout}
        >
          <span className="material-symbols-outlined">dashboard</span>
          Back to Visitors
        </button>
        <button 
          className="w-full py-4 text-primary font-bold hover:bg-primary/5 rounded-2xl transition-all"
        >
          Log Feedback
        </button>
      </div>

      <div className="mt-12 opacity-20 flex items-center gap-2">
        <span className="material-symbols-outlined text-sm text-secondary">verified_user</span>
        <p className="font-manrope tracking-[0.2em] text-[10px] font-black uppercase text-secondary">Protocol Verified</p>
      </div>
    </div>
  );
};

export default CheckoutModal;
