'use client';

import React, { useState } from 'react';
import { useRegistration } from './RegistrationProvider';

const ReviewConfirmView = () => {
  const { formData, selectedHost, prevStep, closeModal, finalizeRegistration } = useRegistration();
  const [tagNumber, setTagNumber] = useState('');
  const [isTagSectionOpen, setIsTagSectionOpen] = useState(false);
  
  const hostPlaceholder = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200";
  const today = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  return (
    <div className="animate-in fade-in slide-in-from-right-8 duration-500 space-y-8">
      {/* Collapsible Tag Section */}
      <div className="border border-outline-variant/20 rounded-3xl overflow-hidden bg-white shadow-sm transition-all duration-500">
        <button 
          onClick={() => setIsTagSectionOpen(!isTagSectionOpen)}
          className="w-full flex items-center justify-between p-6 hover:bg-surface-container-low transition-colors"
        >
          <div className="flex items-center gap-4">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${tagNumber ? 'bg-primary/10 text-primary' : 'bg-surface-container text-secondary/40'}`}>
              <span className="material-symbols-outlined">tag</span>
            </div>
            <div className="text-left">
              <p className="text-xs font-black uppercase tracking-widest text-primary/60">Access Badge</p>
              <h4 className="text-lg font-bold text-on-surface">
                {tagNumber || 'Assign Tag Number'}
              </h4>
            </div>
          </div>
          <span className={`material-symbols-outlined transition-transform duration-500 ${isTagSectionOpen ? 'rotate-180' : ''}`}>
            expand_more
          </span>
        </button>

        <div className={`transition-all duration-500 ease-in-out ${isTagSectionOpen ? 'max-h-[600px] border-t border-outline-variant/20' : 'max-h-0'}`}>
          <div className="p-8 space-y-8">
            <div className="space-y-3">
              <label className="text-xs font-black text-on-surface uppercase tracking-widest ml-1" htmlFor="tag-number">Tag Assignment</label>
              <input 
                className="w-full bg-surface-container-highest border border-outline-variant/20 rounded-2xl h-16 px-6 text-base font-black text-on-surface focus:ring-2 focus:ring-primary/20 transition-all outline-none" 
                id="tag-number" 
                placeholder="e.g. ARCH-8829" 
                type="text"
                value={tagNumber}
                onChange={(e) => setTagNumber(e.target.value)}
              />
            </div>

            {/* Visitor Card Preview */}
            <div className="bg-white rounded-[2.5rem] border border-outline-variant/30 shadow-xl overflow-hidden max-w-sm mx-auto">
              <div className="h-3 bg-primary w-full"></div>
              <div className="p-8 flex flex-col items-center text-center space-y-4">
                <div className="space-y-1">
                  <span className="text-[8px] font-black uppercase tracking-[0.3em] text-primary/40">Visitor Card</span>
                  <h3 className="text-xl font-black text-on-surface leading-tight tracking-tight uppercase">
                    {formData.fullName || 'ALEXANDER STERLING'}
                  </h3>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="px-4 py-1.5 bg-primary text-on-primary rounded-full text-[9px] font-black tracking-[0.1em] uppercase">
                    {today}
                  </div>
                  <div className="text-[10px] font-black text-on-surface-variant">
                    Tag: <span className="text-primary font-black">{tagNumber || 'PENDING'}</span>
                  </div>
                </div>
                <div className="w-32 h-10 flex items-center justify-center opacity-20">
                  <span className="material-symbols-outlined text-4xl">barcode</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary View (Single Column) */}
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-black mb-1 text-on-surface tracking-tighter">Verify Details</h3>
          <p className="text-on-surface-variant/80 text-sm font-semibold">Please verify the visitor and host information.</p>
        </div>

        <div className="space-y-4">
          {/* Visitor Info Card */}
          <div className="bg-surface-container-low p-8 rounded-3xl space-y-6 border border-outline-variant/10 shadow-sm">
            <div className="flex justify-between items-center border-b border-outline-variant/10 pb-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-primary">Visitor Details</span>
              <span className="material-symbols-outlined text-primary/40 text-xl">person</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="text-[10px] text-primary/60 font-black uppercase tracking-wider block mb-1">Full Name</label>
                <p className="text-xl font-bold text-on-surface">{formData.fullName || 'Alexander Sterling'}</p>
              </div>
              <div>
                <label className="text-[10px] text-primary/60 font-black uppercase tracking-wider block mb-1">Email Address</label>
                <p className="text-sm font-bold text-on-surface truncate">{formData.email || 'alexander@example.com'}</p>
              </div>
              <div>
                <label className="text-[10px] text-primary/60 font-black uppercase tracking-wider block mb-1">Company</label>
                <p className="text-sm font-bold text-on-surface">{formData.company || 'Design Studio Inc.'}</p>
              </div>
              <div>
                <label className="text-[10px] text-primary/60 font-black uppercase tracking-wider block mb-1">Purpose of Visit</label>
                <p className="text-sm font-bold text-on-surface">{formData.purpose || 'Quarterly Review'}</p>
              </div>
            </div>
          </div>

          {/* Host Info Card */}
          <div className="bg-surface-container p-6 rounded-3xl border border-outline-variant/10 flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl overflow-hidden bg-white border-2 border-white shadow-sm">
                <img className="w-full h-full object-cover" src={hostPlaceholder} alt="Host" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-primary block mb-1">Assigned Host</span>
                <p className="text-lg font-black text-on-surface leading-tight">{selectedHost?.name || 'Sarah Jenkins'}</p>
                <p className="text-xs text-on-surface-variant font-bold">{selectedHost?.role || 'Design Lead'}</p>
              </div>
            </div>
            <button onClick={prevStep} className="p-3 text-primary hover:bg-white rounded-xl transition-colors">
              <span className="material-symbols-outlined font-black">edit</span>
            </button>
          </div>

          {/* Signature Area */}
          <div className="bg-surface-container-low p-6 rounded-3xl border border-outline-variant/10 shadow-sm overflow-hidden">
            <div className="relative w-full h-48 bg-white border border-outline-variant/30 rounded-2xl cursor-crosshair overflow-hidden group">
              {/* Overlay Label and Clear */}
              <div className="absolute top-4 left-5 right-5 flex justify-between items-center pointer-events-none z-10">
                <label className="text-[10px] font-black uppercase tracking-widest text-primary/40">Visitor Signature</label>
                <button className="text-[10px] font-black text-primary hover:underline uppercase tracking-wider transition-colors pointer-events-auto">Clear</button>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <p className="text-on-surface-variant/20 text-xs font-bold">Sign here for security clearance</p>
              </div>
            </div>
            <p className="text-[10px] text-on-surface-variant font-bold italic leading-relaxed px-1 mt-3">
              By signing, you agree to the architectural firm's safety and confidentiality protocols.
            </p>
          </div>
        </div>
      </div>

      {/* Final Actions */}
      <div className="flex flex-row items-center gap-4 pt-6 border-t border-outline-variant/10">
        <button 
          className="flex-1 h-16 bg-primary text-on-primary rounded-2xl font-black text-lg shadow-xl shadow-primary/20 hover:bg-primary-container transition-all active:scale-[0.98] flex items-center justify-center gap-3"
          onClick={finalizeRegistration}
        >
          Finalize
          <span className="material-symbols-outlined">check_circle</span>
        </button>
        <button 
          className="flex-1 h-16 bg-surface-container-highest text-on-surface-variant rounded-2xl font-black text-lg hover:bg-surface-container transition-all flex items-center justify-center gap-2"
          onClick={prevStep}
        >
          <span className="material-symbols-outlined">edit</span>
          Edit
        </button>
      </div>

      {/* Footer Accent */}
      <div className="pt-6 text-center opacity-30 select-none">
        <p className="font-manrope tracking-[0.3em] text-[10px] font-black uppercase text-secondary">Architectural Security Standards</p>
      </div>
    </div>
  );
};

export default ReviewConfirmView;
