import React, { useState } from 'react';
import { 
  Compass, BookOpen, Search, Bookmark, CheckCircle, 
  Menu, X, Sparkles, Layers, ShieldCheck, Code2, ExternalLink
} from 'lucide-react';

interface NavbarProps {
  activeView: 'roadmap' | 'catalog' | 'serp' | 'schema' | 'checklist';
  setActiveView: (view: 'roadmap' | 'catalog' | 'serp' | 'schema' | 'checklist') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  bookmarkedCount: number;
  completedCount: number;
  totalCount: number;
  onOpenBookmarks: () => void;
  onOpenTutor: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  setActiveView,
  searchQuery,
  setSearchQuery,
  bookmarkedCount,
  completedCount,
  totalCount,
  onOpenBookmarks,
  onOpenTutor,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const progressPercent = Math.round((completedCount / totalCount) * 100) || 0;

  const navItems = [
    { id: 'roadmap', label: 'Roadmap (রোডম্যাপ)', icon: Compass },
    { id: 'catalog', label: 'Guidebook (গাইডবুক)', icon: BookOpen },
    { id: 'serp', label: 'SERP Preview (সার্প)', icon: Search },
    { id: 'schema', label: 'Schema (স্কিমা)', icon: Code2 },
    { id: 'checklist', label: 'Audit Checklist (অডিট)', icon: ShieldCheck },
  ] as const;

  return (
    <header className="sticky top-0 z-40 w-full bg-[#eef2f7] border-b border-[#d1d9e6]/70 shadow-[0_4px_16px_rgba(209,217,230,0.5)]">
      {/* Main Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <div 
          onClick={() => setActiveView('roadmap')}
          className="flex items-center gap-3.5 cursor-pointer group flex-shrink-0"
        >
          <div className="w-11 h-11 rounded-2xl bg-[#eef2f7] shadow-[5px_5px_12px_#d1d9e6,-5px_-5px_12px_#ffffff] text-amber-600 flex items-center justify-center font-bold text-sm tracking-tight border border-white/60 transition-[box-shadow,border-color] duration-150">
            <span className="font-['Poppins'] font-bold text-amber-600">SEO</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-['Poppins'] font-semibold text-lg sm:text-xl text-[#1a202c] tracking-tight">
                Bangla SEO Roadmap
              </span>
              <span className="text-[11px] font-['Inter'] font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200 shadow-xs">
                2026
              </span>
            </div>
            <p className="text-[12px] font-['Inter'] text-stone-500 hidden sm:block">
              SEO, GEO & Modern Search Optimization Knowledge Base
            </p>
          </div>
        </div>

        {/* Global Neumorphic Search Bar */}
        <div className="relative flex-1 max-w-xs sm:max-w-md hidden md:block">
          <Search className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="টপিক বা কীওয়ার্ড খুঁজুন (যেমন: ক্যানোনিকাল, GEO, robots.txt)..."
            className="w-full pl-10 pr-9 py-2.5 rounded-2xl bg-[#eef2f7] shadow-[inset_3px_3px_6px_#d1d9e6,inset_-3px_-3px_6px_#ffffff] border border-white/80 text-[15px] font-['Inter'] text-stone-800 placeholder-stone-400 focus:outline-hidden transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Stats & Actions with Soft UI Buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
          {/* Progress Indicator */}
          <div 
            title={`পড়া সম্পন্ন: ${completedCount}/${totalCount} টি টপিক`}
            className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#eef2f7] shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] text-xs font-['Inter'] font-medium text-stone-600 border border-white/50"
          >
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>অগ্রগতি: <strong className="text-amber-700 font-semibold">{progressPercent}%</strong></span>
          </div>

          {/* Bookmarks Counter */}
          <button
            onClick={onOpenBookmarks}
            title="সংরক্ষিত বুকমার্কগুলো দেখুন"
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition-all ${
              bookmarkedCount > 0
                ? 'neu-button text-amber-800 border border-amber-200/50'
                : 'neu-button text-stone-600'
            }`}
          >
            <Bookmark className="w-4 h-4 text-amber-500" fill={bookmarkedCount > 0 ? 'currentColor' : 'none'} />
            <span className="hidden sm:inline font-['Inter'] font-medium text-sm">বুকমার্ক</span>
            <span className="font-['Inter'] font-semibold text-xs text-amber-800">({bookmarkedCount})</span>
          </button>

          {/* Owner Portfolio Badge */}
          <a
            href="https://muhaimenul-islam-ratul.github.io/Muhaimenul-Islam/"
            target="_blank"
            rel="noopener noreferrer"
            title="Muhaimenul Islam Ratul (Roadmap Owner & Creator)"
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl neu-button text-xs font-['Inter'] font-semibold text-stone-800 hover:text-amber-800 border border-white/60 transition-[box-shadow,border-color] duration-150"
          >
            <img
              src="https://muhaimenul-islam-ratul.github.io/Muhaimenul-Islam/hero-portrait.png"
              alt="Muhaimenul Islam Ratul"
              className="w-6 h-6 rounded-full object-cover border border-amber-400 shadow-xs flex-shrink-0"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://github.com/muhaimenul-islam-ratul.png";
              }}
            />
            <span className="hidden lg:inline text-stone-700">Owner: <strong className="font-semibold text-amber-800">Muhaimenul Islam</strong></span>
            <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl neu-button text-stone-700 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Desktop Navigation Sub-bar with Neumorphic Tabs */}
      <div className="hidden md:flex border-t border-[#d1d9e6]/50 bg-[#eef2f7] px-4 sm:px-6 py-2">
        <div className="max-w-7xl mx-auto w-full flex items-center gap-3 overflow-x-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveView(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-['Inter'] font-semibold whitespace-nowrap border transition-colors duration-150 ${
                  isActive
                    ? 'neu-pressed text-amber-900 border-amber-400/60'
                    : 'neu-button text-stone-700 hover:text-stone-900 border-white/70'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-amber-600' : 'text-stone-500'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#d1d9e6] bg-[#eef2f7] p-4 space-y-3 shadow-lg">
          {/* Mobile Search */}
          <div className="relative w-full">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="টপিক বা কীওয়ার্ড খুঁজুন..."
              className="w-full pl-9 pr-8 py-2.5 rounded-xl neu-input text-sm text-stone-800"
            />
          </div>

          {/* Navigation Links */}
          <div className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveView(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-['Inter'] transition-[box-shadow,border-color,background-color] duration-150 ${
                    isActive
                      ? 'neu-pressed text-amber-800 font-semibold'
                      : 'neu-button text-stone-700 font-medium'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Owner Portfolio in Mobile Menu */}
          <a
            href="https://muhaimenul-islam-ratul.github.io/Muhaimenul-Islam/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-between p-3 rounded-2xl bg-[#eef2f7] shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] border border-white/60"
          >
            <div className="flex items-center gap-2.5">
              <img
                src="https://muhaimenul-islam-ratul.github.io/Muhaimenul-Islam/hero-portrait.png"
                alt="Muhaimenul Islam Ratul"
                className="w-8 h-8 rounded-full object-cover border border-amber-400"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://github.com/muhaimenul-islam-ratul.png";
                }}
              />
              <div className="text-left">
                <span className="text-[10px] text-stone-500 uppercase tracking-wider block font-semibold leading-none">
                  Roadmap Owner
                </span>
                <span className="text-xs font-['Poppins'] font-semibold text-stone-900 mt-0.5 block">
                  Muhaimenul Islam Ratul
                </span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-amber-700" />
          </a>

          <div className="pt-2 border-t border-[#d1d9e6] flex items-center justify-between text-xs font-['Inter'] text-stone-600">
            <span>পড়া সম্পন্ন: {completedCount}/{totalCount} ({progressPercent}%)</span>
            <button
              onClick={() => {
                onOpenTutor();
                setMobileMenuOpen(false);
              }}
              className="text-amber-700 font-semibold flex items-center gap-1 neu-button px-3 py-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              এআই টিউটর
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
