import React from 'react';

const TopBar = () => {
  return (
    <header className="flex-shrink-0 flex items-center justify-between px-16 h-24 sticky top-0 z-10 bg-background font-manrope tracking-tight shadow-[0_24px_40px_rgba(37,25,19,0.05)]">
      <div>
        <h1 className="text-2xl font-bold tracking-tighter text-on-surface">The Architectural Concierge</h1>
      </div>
      <div className="flex items-center gap-8">
        <div className="relative flex items-center bg-surface-container rounded-full px-6 py-2.5 w-80 group focus-within:bg-surface-container-highest transition-all">
          <span className="material-symbols-outlined text-secondary mr-3 text-[20px]">search</span>
          <input 
            className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-secondary/50 outline-none" 
            placeholder="Global Search..." 
            type="text"
          />
        </div>
        <div className="flex items-center gap-4">
          <button className="p-3 text-secondary hover:bg-surface-container-highest/50 transition-all duration-300 rounded-full">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="p-3 text-secondary hover:bg-surface-container-highest/50 transition-all duration-300 rounded-full">
            <span className="material-symbols-outlined">settings</span>
          </button>
          <div className="h-10 w-px bg-outline-variant/30 mx-2"></div>
          <div className="w-10 h-10 rounded-full border-2 border-primary/20 overflow-hidden">
            <img 
              alt="Receptionist profile picture" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWGSocSFV3zUnzN3wcUW8rVnyG8c0LHvOwVTRymrwDKTDcg61KfAJvA-QZ5Om_hKSOKXP8KgEn9h1YmcmSlb1SbgObEtfnwoTQyaZcCHrihjZyLhTvPlDLY3ZB0B0TJqHfP66OzCUD5VcwJ5SQ2iraX6vURSn2Ol_pcfI7z5lh_l7nj237DOF91QswRul3S8X0k6QWfLzu8LzCfAd-M_PkjeIaSQ2ilo4EhuzduDfc7FUSph9kZxw91jvwSzaYPKWNelTTnzrtckDz"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
