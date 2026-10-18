import React, { useState, useEffect } from 'react';
import { 
  ALL_TOPICS, SEO_SECTIONS, SeoTopic, getTopicById, searchTopics 
} from './data/seoRoadmapData';
import { Navbar } from './components/Navbar';
import { RoadmapGraph } from './components/RoadmapGraph';
import { CategorizedListView } from './components/CategorizedListView';
import { TopicDetailModal } from './components/TopicDetailModal';
import { SerpSimulator } from './components/SerpSimulator';
import { SchemaGenerator } from './components/SchemaGenerator';
import { SeoAuditChecklist } from './components/SeoAuditChecklist';
import { AiTutorModal } from './components/AiTutorModal';
import { 
  WandSparkles, Sparkles, BookOpen, Compass, ShieldCheck, 
  Search, ArrowRight, ExternalLink, Bookmark, CheckCircle2,
  Code2, Check
} from 'lucide-react';

export default function App() {
  const [activeView, setActiveView] = useState<'roadmap' | 'catalog' | 'serp' | 'schema' | 'checklist'>('roadmap');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<SeoTopic | null>(null);
  const [isTutorOpen, setIsTutorOpen] = useState(false);

  // Bookmarks persistence
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('seo_bookmarks');
      if (saved) return new Set(JSON.parse(saved));
    } catch {}
    return new Set(['what-is-seo', 'what-is-geo', 'core-web-vitals']);
  });

  // Completed topics persistence
  const [completedIds, setCompletedIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('seo_completed');
      if (saved) return new Set(JSON.parse(saved));
    } catch {}
    return new Set(['what-is-seo']);
  });

  useEffect(() => {
    try {
      localStorage.setItem('seo_bookmarks', JSON.stringify(Array.from(bookmarkedIds)));
    } catch {}
  }, [bookmarkedIds]);

  useEffect(() => {
    try {
      localStorage.setItem('seo_completed', JSON.stringify(Array.from(completedIds)));
    } catch {}
  }, [completedIds]);

  const toggleBookmark = (id: string) => {
    setBookmarkedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleCompleted = (id: string) => {
    setCompletedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const totalTopics = ALL_TOPICS.length;
  const completedCount = completedIds.size;
  const bookmarkedCount = bookmarkedIds.size;

  const handleOpenBookmarks = () => {
    setActiveView('catalog');
  };

  return (
    <div className="min-h-screen bg-[#eef2f7] text-[#2d3748] flex flex-col font-['Inter',sans-serif] selection:bg-amber-200">
      {/* Navigation */}
      <Navbar
        activeView={activeView}
        setActiveView={setActiveView}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        bookmarkedCount={bookmarkedCount}
        completedCount={completedCount}
        totalCount={totalTopics}
        onOpenBookmarks={handleOpenBookmarks}
        onOpenTutor={() => setIsTutorOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-6 sm:py-10 space-y-10">
        {/* Neumorphic Hero Card (36-48px Poppins 600 Heading, 16px Inter 400 Body) */}
        {activeView === 'roadmap' && !searchQuery && (
          <div className="relative overflow-hidden p-6 sm:p-10 rounded-3xl bg-[#eef2f7] shadow-[10px_10px_24px_#cbd5e1,-10px_-10px_24px_#ffffff] border border-white/80 transition-all">
            <div className="relative z-10 flex items-center gap-6 lg:gap-10">
              {/* Left: Text Content */}
              <div className="flex-1 min-w-0 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eef2f7] shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] text-amber-800 text-xs font-['Inter'] font-semibold tracking-wide border border-white/40">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    Complete SEO & AI Search Roadmap 2026
                  </div>

                  {/* Owner / Creator Portfolio Link */}
                  <a
                    href="https://muhaimenul-islam-ratul.github.io/Muhaimenul-Islam/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View Owner & Creator Portfolio"
                    className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#eef2f7] shadow-[3px_3px_8px_#d1d9e6,-3px_-3px_8px_#ffffff] hover:shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff] border border-white/80 transition-[box-shadow,border-color] duration-150 cursor-pointer"
                  >
                    <img
                      src="https://muhaimenul-islam-ratul.github.io/Muhaimenul-Islam/hero-portrait.png"
                      alt="Muhaimenul Islam Ratul"
                      className="w-6 h-6 rounded-full object-cover border border-amber-400 shadow-xs flex-shrink-0"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://github.com/muhaimenul-islam-ratul.png";
                      }}
                    />
                    <div className="flex items-center gap-1.5 text-left">
                      <span className="text-[11px] text-stone-500 font-['Inter']">Owner:</span>
                      <span className="text-xs font-['Poppins'] font-semibold text-stone-900 group-hover:text-amber-800 transition-colors">
                        Muhaimenul Islam Ratul
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-amber-700 ml-0.5" />
                    </div>
                  </a>
                </div>

                {/* Heading: Poppins, weight 600, size 36-48px */}
                <h1 className="font-['Poppins'] font-semibold text-4xl sm:text-[42px] lg:text-[48px] text-[#1a202c] tracking-tight leading-[1.2]">
                  Search Engine Optimization (SEO) & <br className="hidden sm:inline" />
                  Modern AI Search (GEO / AEO) Guidelines
                </h1>

                {/* Body text: Inter, weight 400, size 16px */}
                <p className="text-[16px] text-[#4a5568] leading-relaxed max-w-2xl font-normal font-['Inter']">
                  Master Google's core algorithms, Technical SEO, Core Web Vitals, Content strategy, Link building, and modern Generative Engine Optimization (GEO) with detailed Bangla explanations and real-world case studies.
                </p>

                {/* Quick stats with Neumorphic chips */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <span className="px-3.5 py-1.5 rounded-xl bg-[#eef2f7] shadow-[4px_4px_10px_#d1d9e6,-4px_-4px_10px_#ffffff] text-[#4a5568] font-medium text-sm font-['Inter']">
                    📁 9 Core Chapters
                  </span>
                  <span className="px-3.5 py-1.5 rounded-xl bg-[#eef2f7] shadow-[4px_4px_10px_#d1d9e6,-4px_-4px_10px_#ffffff] text-[#4a5568] font-medium text-sm font-['Inter']">
                    ⚡ 50+ Practical Guides & Examples
                  </span>
                  <span className="px-3.5 py-1.5 rounded-xl bg-[#eef2f7] shadow-[4px_4px_10px_#d1d9e6,-4px_-4px_10px_#ffffff] text-[#4a5568] font-medium text-sm font-['Inter']">
                    🛠️ Live SERP & Schema Toolkit
                  </span>
                  <span className="px-3.5 py-1.5 rounded-xl bg-[#eef2f7] shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] text-emerald-800 font-semibold text-sm font-['Inter'] border border-emerald-200/40">
                    ✓ In-Depth Real-World Case Studies
                  </span>
                </div>
              </div>

              {/* Right: Dual-Layer Portrait — hidden on small screens */}
              <div className="hidden md:flex flex-shrink-0 items-end justify-center relative w-64 lg:w-72 xl:w-80 self-stretch">
                {/* Soft ambient glow base */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-60 h-60 lg:w-72 lg:h-72 rounded-full bg-amber-400/30 blur-3xl" />
                </div>

                {/* Stacked portrait container — both images overlap exactly */}
                <div className="relative z-10 w-full max-h-72 lg:max-h-80 xl:max-h-[340px] animate-hero-float select-none">
                  {/* Layer 1: Light background portrait (base) */}
                  <img
                    src="/hero-portrait-light.png"
                    alt="Muhaimenul Islam Ratul — SEO Expert & Creator"
                    className="w-full h-full object-contain object-bottom drop-shadow-2xl"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://muhaimenul-islam-ratul.github.io/Muhaimenul-Islam/hero-portrait.png";
                    }}
                  />
                  {/* Layer 2: Vivid-glow matrix portrait (multiply blend — yellow becomes deeper, richer amber halo) */}
                  <img
                    src="/hero-portrait-matrix.png"
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-contain object-bottom"
                    style={{ mixBlendMode: 'multiply', opacity: 0.75 }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Search query feedback banner */}
        {searchQuery && (
          <div className="p-4 rounded-2xl bg-[#eef2f7] shadow-[inset_3px_3px_7px_#d1d9e6,inset_-3px_-3px_7px_#ffffff] border border-amber-300/60 text-stone-800 flex items-center justify-between text-[15px] font-['Inter']">
            <span>
              অনুসন্ধান: <strong className="font-semibold text-amber-900">"{searchQuery}"</strong>
            </span>
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs font-semibold text-amber-800 neu-button px-3 py-1.5"
            >
              অনুসন্ধান মুছুন
            </button>
          </div>
        )}

        {/* Views Switching */}
        {activeView === 'roadmap' && (
          <RoadmapGraph
            onSelectTopic={(topic) => setSelectedTopic(topic)}
            bookmarkedIds={bookmarkedIds}
            completedIds={completedIds}
            searchQuery={searchQuery}
          />
        )}

        {activeView === 'catalog' && (
          <CategorizedListView
            onSelectTopic={(topic) => setSelectedTopic(topic)}
            bookmarkedIds={bookmarkedIds}
            completedIds={completedIds}
            searchQuery={searchQuery}
          />
        )}

        {activeView === 'serp' && <SerpSimulator />}

        {activeView === 'schema' && <SchemaGenerator />}

        {activeView === 'checklist' && <SeoAuditChecklist />}

        {/* Related Roadmaps Section (Neumorphic Card) */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#eef2f7] shadow-[8px_8px_20px_#d1d9e6,-8px_-8px_20px_#ffffff] border border-white/80 text-center space-y-4 mt-12">
          {/* Section heading: Poppins 600 - English first, then Bangla */}
          <h2 className="font-['Poppins'] font-semibold text-2xl sm:text-3xl text-[#1a202c]">
            Explore Related Roadmaps
            <span className="block text-lg sm:text-xl text-stone-600 font-medium mt-1">
              সম্পর্কিত অন্যান্য জনপ্রিয় রোডম্যাপসমূহ
            </span>
          </h2>
          {/* Body: Inter 400, 16px */}
          <p className="text-[16px] text-stone-600 max-w-xl mx-auto font-['Inter']">
            Explore complementary web development & engineering roadmaps:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            {[
              { title: 'Frontend Roadmap', link: 'https://roadmap.sh/frontend' },
              { title: 'HTML Roadmap', link: 'https://roadmap.sh/html' },
              { title: 'CSS Roadmap', link: 'https://roadmap.sh/css' },
              { title: 'JavaScript Roadmap', link: 'https://roadmap.sh/javascript' },
              { title: 'AI Engineer Roadmap', link: 'https://roadmap.sh/ai-engineer' },
              { title: 'System Design', link: 'https://roadmap.sh/system-design' }
            ].map((rm, idx) => (
              <a
                key={idx}
                href={rm.link}
                target="_blank"
                rel="noreferrer"
                className="neu-button px-4 py-2.5 text-[15px] font-['Inter'] font-medium text-stone-700 hover:text-stone-950 flex items-center gap-2 border border-white/60"
              >
                <span>{rm.title}</span>
                <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
              </a>
            ))}
          </div>
        </div>
      </main>

      {/* Floating Neumorphic AI Tutor Button */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-[968px] px-4 pointer-events-none">
        <button
          type="button"
          onClick={() => setIsTutorOpen(true)}
          className="pointer-events-auto relative flex items-center justify-center gap-2.5 rounded-full bg-[#eef2f7] shadow-[6px_6px_16px_#cbd5e1,-6px_-6px_16px_#ffffff] py-3 px-6 text-stone-800 border border-white/80 font-['Inter'] text-[15px] font-semibold active:bg-[#e9eef5] active:shadow-[inset_3px_3px_6px_#cbd5e1,inset_-3px_-3px_6px_#ffffff] transition-colors duration-150"
        >
          <div className="w-6 h-6 rounded-full bg-amber-400 text-stone-900 flex items-center justify-center shadow-xs">
            <WandSparkles className="h-3.5 w-3.5 text-stone-900" />
          </div>
          <span className="font-semibold text-amber-700 font-['Poppins']">AI Tutor</span>
          <span className="hidden sm:inline text-stone-600 font-normal">| এসইও নিয়ে প্রশ্ন করুন (Type here)</span>
          <span className="block sm:hidden text-stone-600">প্রশ্ন করুন</span>
        </button>
      </div>

      {/* Topic Detail Modal */}
      <TopicDetailModal
        topic={selectedTopic}
        onClose={() => setSelectedTopic(null)}
        isBookmarked={selectedTopic ? bookmarkedIds.has(selectedTopic.id) : false}
        isCompleted={selectedTopic ? completedIds.has(selectedTopic.id) : false}
        onToggleBookmark={toggleBookmark}
        onToggleCompleted={toggleCompleted}
        onSelectTopic={(topic) => setSelectedTopic(topic)}
        allTopics={ALL_TOPICS}
      />

      {/* AI Tutor Assistant Modal */}
      <AiTutorModal
        isOpen={isTutorOpen}
        onClose={() => setIsTutorOpen(false)}
        onOpenTopic={(topic) => setSelectedTopic(topic)}
      />

      {/* Footer */}
      <footer className="mt-auto border-t border-[#d1d9e6]/60 bg-[#eef2f7] py-8 text-center text-sm font-['Inter'] text-stone-500">
        <div className="max-w-7xl mx-auto px-4 space-y-3">
          <p className="font-semibold text-stone-700 font-['Poppins'] text-base">
            Bangla SEO Roadmap 2026 • Master SEO & AI Optimization
          </p>
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <span>Designed & Developed by</span>
            <a
              href="https://muhaimenul-islam-ratul.github.io/Muhaimenul-Islam/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-stone-900 hover:text-amber-800 transition-colors underline underline-offset-4 decoration-amber-500"
            >
              <img
                src="https://muhaimenul-islam-ratul.github.io/Muhaimenul-Islam/hero-portrait.png"
                alt="Muhaimenul Islam Ratul"
                className="w-5 h-5 rounded-full object-cover border border-amber-400 shadow-xs"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://github.com/muhaimenul-islam-ratul.png";
                }}
              />
              <span>Muhaimenul Islam Ratul</span>
              <ExternalLink className="w-3 h-3 text-amber-600" />
            </a>
          </div>
          <p className="text-stone-500 text-xs max-w-xl mx-auto">
            সকল বিষয়বস্তু সার্চ ইঞ্জিন অপ্টিমাইজেশন (SEO) এবং আধুনিক জেনারেটিভ ইঞ্জিন অপ্টিমাইজেশন (GEO)-এর সর্বশেষ গাইডলাইন অনুসারে সংকলিত।
          </p>
        </div>
      </footer>
    </div>
  );
}
