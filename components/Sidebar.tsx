'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRegistration } from './RegistrationProvider';

const Sidebar = () => {
  const { openModal } = useRegistration();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const navItems = [
    { label: 'Dashboard', icon: 'grid_view', href: '/analytics' },
    { 
      label: 'Visitors', 
      icon: 'group', 
      href: '/visitors',
      subItems: [
        { label: 'Active List', icon: 'list_alt', href: '/visitors' },
        { label: 'Registration', icon: 'person_add', onClick: openModal },
        { label: 'Appointments', icon: 'event_note', href: '/visitors?tab=appointments' },
        { label: 'Schedule', icon: 'calendar_add_on', href: '/appointments/schedule' },
      ]
    },
  ];

  return (
    <aside className="hidden md:flex flex-none flex-col h-screen w-80 bg-surface-container-low py-10 px-6 gap-y-8 border-r border-outline-variant/10 shadow-2xl relative z-20">
      {/* Branding Section */}
      <div className="flex flex-col items-center gap-4 px-2 text-center mb-4">
        <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-primary-container flex items-center justify-center text-on-primary shadow-2xl shadow-primary/30 transform hover:rotate-3 transition-transform duration-500">
          <span className="material-symbols-outlined text-[48px] font-light">architecture</span>
        </div>
        <div className="space-y-1">
          <h1 className="text-xl font-black text-on-surface tracking-tighter uppercase">Concierge Onyx</h1>
          <div className="h-1 w-12 bg-primary/20 rounded-full mx-auto"></div>
        </div>
      </div>

      {/* Navigation Section */}
      <nav className="flex flex-col gap-y-3 mt-4">
        {navItems.map((item) => {
          const currentFullUrl = searchParams.toString() ? `${pathname}?${searchParams.toString()}` : pathname;
          const isActive = pathname === item.href || (item.subItems?.some(sub => pathname === sub.href || currentFullUrl === sub.href));
          
          return (
            <div key={item.label} className="flex flex-col gap-y-2">
              <Link 
                href={item.href}
                className={`group flex items-center gap-5 px-6 py-5 rounded-[1.5rem] transition-all duration-500 relative overflow-hidden ${
                  isActive 
                    ? 'bg-primary text-on-primary shadow-xl shadow-primary/20' 
                    : 'text-on-surface-variant/70 hover:text-primary hover:bg-white/60'
                }`}
              >
                {/* Active Glow Effect */}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
                )}
                
                <span className={`material-symbols-outlined text-[28px] transition-transform duration-500 group-hover:scale-110 ${isActive ? 'font-black' : 'font-light'}`}>
                  {item.icon}
                </span>
                <span className="font-black text-sm uppercase tracking-[0.2em]">{item.label}</span>
                
                {isActive && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
                )}
              </Link>
              
              {item.subItems && (
                <div className="flex flex-col gap-y-1 ml-6 pl-4 border-l-2 border-outline-variant/20 py-2">
                  {item.subItems.map((sub) => {
                    const currentFullUrl = searchParams.toString() ? `${pathname}?${searchParams.toString()}` : pathname;
                    const isSubActive = currentFullUrl === sub.href;
                    
                    const content = (
                      <div className={`flex items-center gap-4 py-2.5 px-4 rounded-xl transition-all duration-300 ${
                        isSubActive 
                          ? 'bg-primary/5 text-primary' 
                          : 'text-secondary/60 hover:text-primary hover:translate-x-1'
                      }`}>
                        <span className={`material-symbols-outlined text-[20px] ${isSubActive ? 'font-black' : 'font-light'}`}>
                          {sub.icon}
                        </span>
                        <span className="text-xs font-black uppercase tracking-widest">{sub.label}</span>
                      </div>
                    );

                    return sub.onClick ? (
                      <button 
                        key={sub.label}
                        onClick={sub.onClick}
                        className="text-left"
                      >
                        {content}
                      </button>
                    ) : (
                      <Link 
                        key={sub.label}
                        href={sub.href!}
                      >
                        {content}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Footer Actions */}
      <div className="mt-auto flex flex-col gap-4 pt-8 border-t border-outline-variant/10">
        <button 
          className="w-full py-5 px-6 bg-white text-primary border border-outline-variant/30 font-black uppercase tracking-widest text-xs rounded-2xl flex items-center justify-center gap-3 hover:bg-primary hover:text-on-primary transition-all shadow-sm active:scale-95 group"
          onClick={openModal}
        >
          <span className="material-symbols-outlined group-hover:rotate-90 transition-transform duration-500">add_circle</span>
          <span>Quick Register</span>
        </button>
        
        <div className="grid grid-cols-2 gap-2">
          <button className="flex flex-col items-center justify-center gap-1 p-4 rounded-2xl bg-surface-container hover:bg-surface-container-high transition-colors text-secondary group">
            <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">contact_support</span>
            <span className="text-[10px] font-black uppercase tracking-tighter">Help</span>
          </button>
          <button className="flex flex-col items-center justify-center gap-1 p-4 rounded-2xl bg-surface-container hover:bg-error/10 hover:text-error transition-colors text-secondary group">
            <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">logout</span>
            <span className="text-[10px] font-black uppercase tracking-tighter">Exit</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
