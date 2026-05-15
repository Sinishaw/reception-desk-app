'use client';

import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      {/* Dashboard Content */}
      <div className="p-2 space-y-12">
        {/* Real-time Metrics Section */}
        <section>
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-[10px]">Live Operations</span>
              <h3 className="text-3xl font-bold text-on-surface">Real-time Metrics</h3>
            </div>
            <div className="flex gap-2 items-center text-secondary text-sm font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Live data stream active
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Current Visitors */}
            <div className="bg-surface-container-low p-8 rounded-[2rem] flex flex-col justify-between h-56 group hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
              <div className="flex justify-between items-start">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors duration-500">
                  <span className="material-symbols-outlined text-3xl">group</span>
                </div>
              </div>
              <div>
                <p className="text-secondary font-bold text-sm uppercase tracking-widest opacity-60">Current Visitors On-Site</p>
                <p className="text-6xl font-black text-on-surface mt-2 tracking-tighter">124</p>
              </div>
            </div>

            {/* Overstayed Visitors */}
            <div className="bg-orange-50 p-8 rounded-[2rem] flex flex-col justify-between h-56 border border-orange-100 relative overflow-hidden group hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-500">
              <div className="absolute -right-6 -top-6 opacity-10 group-hover:scale-110 transition-transform duration-700">
                <span className="material-symbols-outlined text-[140px] text-orange-600">warning</span>
              </div>
              <div className="flex justify-between items-start relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-orange-600 flex items-center justify-center text-white shadow-lg shadow-orange-600/20">
                  <span className="material-symbols-outlined text-3xl">alarm_off</span>
                </div>
              </div>
              <div className="relative z-10">
                <p className="text-orange-900/60 font-bold text-sm uppercase tracking-widest">Overstayed Visitors</p>
                <p className="text-6xl font-black text-orange-900 mt-2 tracking-tighter">08</p>
              </div>
            </div>

            {/* Daily Visitor Count */}
            <div className="bg-surface-container-low p-8 rounded-[2rem] flex flex-col justify-between h-56 group hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
              <div className="flex justify-between items-start">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors duration-500">
                  <span className="material-symbols-outlined text-3xl">calendar_today</span>
                </div>
              </div>
              <div>
                <p className="text-secondary font-bold text-sm uppercase tracking-widest opacity-60">Daily Visitor Count</p>
                <p className="text-6xl font-black text-on-surface mt-2 tracking-tighter">382</p>
              </div>
            </div>
          </div>
        </section>

        {/* Visitor Trends & Activity Bento Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Chart Area */}
          <div className="lg:col-span-2 bg-white p-10 rounded-[3rem] shadow-sm border border-outline-variant/10">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h3 className="text-2xl font-bold tracking-tight">Visitor Trends</h3>
                <p className="text-sm text-secondary font-medium mt-1">Hourly occupancy volume for today</p>
              </div>
              <div className="flex bg-surface-container-low rounded-2xl p-1.5">
                <button className="px-6 py-2 text-sm font-bold bg-white text-on-surface rounded-xl shadow-sm">Today</button>
                <button className="px-6 py-2 text-sm font-medium text-secondary hover:text-primary transition-colors">Weekly</button>
              </div>
            </div>

            {/* Visual representation of a chart */}
            <div className="h-64 flex items-end justify-between gap-4 px-2">
              {[20, 35, 45, 70, 85, 100, 75, 60, 40, 30, 25, 15].map((height, i) => (
                <div
                  key={i}
                  className={`w-full rounded-t-2xl transition-all duration-1000 delay-${i * 100} ${height > 80 ? 'bg-primary' :
                    height > 50 ? 'bg-primary/40' :
                      'bg-surface-container-highest'
                    }`}
                  style={{ height: `${height}%` }}
                ></div>
              ))}
            </div>
            <div className="flex justify-between mt-6 px-4 text-[10px] text-secondary/50 font-black uppercase tracking-[0.2em]">
              <span>08:00</span>
              <span>10:00</span>
              <span>12:00</span>
              <span>14:00</span>
              <span>16:00</span>
              <span>18:00</span>
              <span>20:00</span>
            </div>
          </div>

          {/* Host Activity Side Card */}
          <div className="bg-surface-container-low p-10 rounded-[3rem]">
            <h3 className="text-xl font-bold mb-8 tracking-tight">Peak Host Activity</h3>
            <div className="space-y-8">
              <HostActivityRow
                name="Sarah Jenkins"
                role="Creative Director"
                visits={14}
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuBlp_t40b-hhO4iM5JLa5RKyOVBGXW0e-ldj-muP4oQMIBLXvvXpn21A5oDRFfD4462R5BNNsX1eXyD-PdE73pFZaw1symzzmWaU5lBikDMH_EpoQerTMYnIHkSWmnu67HhH7YMgRxJ08EIb3PfMu-wkSSzoVe16Tc8XonBdfbzpXPvQCn0ywOXaF7S6BhY1svNO6Xsk5A21Pi3F6yLo6n95r6OHp0ijdxlMkU16DKDWhWGQaygpIczM2FQFDzY77L2WDTlWqd13YP-"
              />
              <HostActivityRow
                name="Marcus Thorne"
                role="Chief Operations"
                visits={11}
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuDaHS4LXeTKyiZi3X2dPrdAzPPJhstxahA0Jow42X5I3HxQSLzqDZWJOfJWZWjChq-cBew8z09NTLlrSDRHM0DU_9ilBaEFdhbXP6vRGGjjP8U5y_J1ybZyyguenFCs1dYB3ZI8Y1EIVMRXUuOsEX9AorY5VEP9uYNwM4iPKxLLKO4dHLiLSjQEcz7J84icZS9YhwMvnX5PkGm6u8tXtKLOWUSTslEjzDFSp-37Y_nEsk6v5VFW9S9Yg7TlWFgvRonwWQ88poqpTMIq"
              />
              <HostActivityRow
                name="Elena Rodriguez"
                role="Lead Counsel"
                visits={9}
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuCYqT2OVcbop0ba-god9h50GJuB96AE_pFCbO4JMaQOVdDRByko2aj1YlAsR9gzSu3goaKH-OOLHVDZWFupskn0fbZF-bNOoRYd69ETxUfedZCoF_UtSgSNmhFs4AbOE5DOYltVVhIFwdy_XHNeENxJS59O3v3oWWTCudrU2fnLA_SLtulwclr3ThKSC1u-YYfx9XyiTzvJxMXTj0_jP18MP-sI1aRXS_8ReES6-91L3_YQFdABAgijNWbjTC-GPJwIO534HDr1O445"
              />
            </div>
            <button className="w-full mt-10 py-4 text-primary font-bold text-sm border-2 border-primary/10 rounded-2xl hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
              View All Hosts
            </button>
          </div>
        </section>

        {/* Generate Reports Section */}
        <section className="bg-surface-container-highest/30 rounded-[3rem] p-12 relative overflow-hidden border border-surface-container-highest">
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-5 pointer-events-none">
            <span className="material-symbols-outlined text-[350px] -mr-24 -mt-24">description</span>
          </div>
          <div className="relative z-10">
            <div className="mb-12">
              <h3 className="text-3xl font-extrabold text-on-surface tracking-tighter">Generate Reports</h3>
              <p className="text-lg text-secondary font-medium max-w-2xl mt-2">
                Create customized data exports for audits and compliance. Select your parameters below to generate a detailed summary.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-end">
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-secondary px-1">Report Type</label>
                <select className="w-full bg-white border-none rounded-2xl h-16 px-6 text-sm font-bold text-on-surface focus:ring-2 focus:ring-primary/20 appearance-none outline-none shadow-sm">
                  <option>Full Audit Log</option>
                  <option>Security Summary</option>
                  <option>Host Activity Report</option>
                  <option>Overstay Analysis</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-secondary px-1">Date Range</label>
                <div className="relative">
                  <input className="w-full bg-white border-none rounded-2xl h-16 px-6 text-sm font-bold text-on-surface focus:ring-2 focus:ring-primary/20 shadow-sm outline-none cursor-pointer" readOnly value="Last 7 Days" />
                  <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 text-secondary opacity-40">calendar_month</span>
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-secondary px-1">Format</label>
                <div className="flex bg-white p-1.5 rounded-2xl h-16 shadow-sm">
                  <button className="flex-1 rounded-xl bg-primary text-on-primary font-bold text-sm">PDF</button>
                  <button className="flex-1 rounded-xl text-secondary font-bold text-sm hover:bg-surface-container-low transition-colors">Excel</button>
                </div>
              </div>
              <div>
                <button className="w-full h-16 bg-on-surface text-surface rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all">
                  <span className="material-symbols-outlined">download</span>
                  Generate Report
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}

function HostActivityRow({ name, role, visits, image }: any) {
  return (
    <div className="flex items-center gap-5 group cursor-pointer">
      <div className="relative">
        <img src={image} alt={name} className="w-14 h-14 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary rounded-full border-2 border-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="material-symbols-outlined text-[10px] text-white font-bold">trending_up</span>
        </div>
      </div>
      <div className="flex-1">
        <p className="text-base font-bold text-on-surface leading-none mb-1 group-hover:text-primary transition-colors">{name}</p>
        <p className="text-xs text-secondary font-medium uppercase tracking-widest opacity-60">{role}</p>
      </div>
      <div className="text-right">
        <p className="text-xl font-black text-on-surface">{visits}</p>
        <p className="text-[10px] text-secondary font-black uppercase tracking-widest opacity-40">Visits</p>
      </div>
    </div>
  );
}
