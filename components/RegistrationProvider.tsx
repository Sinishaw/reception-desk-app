'use client';

import React, { createContext, useContext, useState } from 'react';

interface Host {
  id: number;
  name: string;
  role: string;
  department: string;
}

interface FormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  purpose: string;
  location: string;
}

interface RegistrationContextType {
  isOpen: boolean;
  step: 'details' | 'host' | 'review' | 'confirmation';
  formData: FormData;
  selectedHost: Host | null;
  registrationStatus: 'success' | 'error' | 'idle';
  openModal: () => void;
  closeModal: () => void;
  nextStep: () => void;
  prevStep: () => void;
  updateFormData: (data: Partial<FormData>) => void;
  setHost: (host: Host) => void;
  finalizeRegistration: () => void;
}

const RegistrationContext = createContext<RegistrationContextType | undefined>(undefined);

const INITIAL_FORM_DATA: FormData = {
  fullName: '',
  company: '',
  email: '',
  phone: '',
  purpose: '',
  location: '',
};

export const RegistrationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<'details' | 'host' | 'review' | 'confirmation'>('details');
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [selectedHost, setSelectedHost] = useState<Host | null>(null);
  const [registrationStatus, setRegistrationStatus] = useState<'success' | 'error' | 'idle'>('idle');

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setStep('details');
    setRegistrationStatus('idle');
    // Optional: Reset form data if you want a fresh start
    // setFormData(INITIAL_FORM_DATA);
    // setSelectedHost(null);
  };

  const nextStep = () => {
    if (step === 'details') setStep('host');
    else if (step === 'host') setStep('review');
    else if (step === 'review') setStep('confirmation');
  };

  const prevStep = () => {
    if (step === 'confirmation') setStep('review');
    else if (step === 'review') setStep('host');
    else if (step === 'host') setStep('details');
  };

  const updateFormData = (data: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const setHost = (host: Host) => {
    setSelectedHost(host);
  };

  const finalizeRegistration = () => {
    // Simulate API call
    setRegistrationStatus('idle');
    setTimeout(() => {
      // Mock success for now, but can be toggled for error testing
      const isSuccess = true; 
      setRegistrationStatus(isSuccess ? 'success' : 'error');
      setStep('confirmation');
    }, 1000);
  };

  return (
    <RegistrationContext.Provider value={{ 
      isOpen, step, formData, selectedHost, registrationStatus,
      openModal, closeModal, nextStep, prevStep, 
      updateFormData, setHost, finalizeRegistration
    }}>
      {children}
    </RegistrationContext.Provider>
  );
};

export const useRegistration = () => {
  const context = useContext(RegistrationContext);
  if (context === undefined) {
    throw new Error('useRegistration must be used within a RegistrationProvider');
  }
  return context;
};
