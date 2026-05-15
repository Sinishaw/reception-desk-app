import React from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div className="flex w-full max-w-[1920px] h-screen overflow-hidden border-x border-outline-variant/5 bg-background">
        <Sidebar />
        <main className="flex-1 flex flex-col h-screen overflow-y-auto">
          <TopBar />
          <div className="p-16 space-y-12">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
