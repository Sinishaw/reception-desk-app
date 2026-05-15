'use client';

import React, { createContext, useContext, useState } from 'react';

export interface Visitor {
  id: string;
  name: string;
  company: string;
  checkInTime: string;
  host: string;
  status: 'Checked In' | 'Checked Out' | 'Expected';
}

interface CheckoutContextType {
  isOpen: boolean;
  step: 'details' | 'confirmed';
  checkoutStatus: 'idle' | 'success' | 'error';
  selectedVisitor: Visitor | null;
  openCheckout: (visitor: Visitor) => void;
  closeCheckout: () => void;
  finalizeCheckout: () => void;
}

const CheckoutContext = createContext<CheckoutContextType | undefined>(undefined);

export const CheckoutProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<'details' | 'confirmed'>('details');
  const [checkoutStatus, setCheckoutStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [selectedVisitor, setSelectedVisitor] = useState<Visitor | null>(null);

  const openCheckout = (visitor: Visitor) => {
    setSelectedVisitor(visitor);
    setStep('details');
    setCheckoutStatus('idle');
    setIsOpen(true);
  };

  const closeCheckout = () => {
    setIsOpen(false);
    setTimeout(() => {
      setStep('details');
      setCheckoutStatus('idle');
      setSelectedVisitor(null);
    }, 300);
  };

  const finalizeCheckout = () => {
    setCheckoutStatus('idle'); // Represent loading
    setStep('confirmed');
    
    // Simulate API call
    setTimeout(() => {
      // For demonstration, let's say 90% success rate
      const isSuccess = Math.random() > 0.1;
      setCheckoutStatus(isSuccess ? 'success' : 'error');
    }, 1500);
  };

  return (
    <CheckoutContext.Provider value={{ 
      isOpen, step, selectedVisitor, 
      openCheckout, closeCheckout, finalizeCheckout 
    }}>
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckout = () => {
  const context = useContext(CheckoutContext);
  if (context === undefined) {
    throw new Error('useCheckout must be used within a CheckoutProvider');
  }
  return context;
};
