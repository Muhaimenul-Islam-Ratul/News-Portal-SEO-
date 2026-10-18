import React, { useState, useRef } from 'react';
import { SeoTopic, SEO_SECTIONS } from '../data/seoRoadmapData';
import { 
  ZoomIn, ZoomOut, RotateCcw, CheckCircle, Bookmark, Sparkles, 
  Layers, Compass, ChevronDown, ChevronRight, Lightbulb, ArrowRight
} from 'lucide-react';

interface RoadmapGraphProps {
  onSelectTopic: (topic: SeoTopic) => void;
  bookmarkedIds: Set<string>;
  completedIds: Set<string>;
  searchQuery: string;
}

export const RoadmapGraph: React.FC<RoadmapGraphProps> = ({
  onSelectTopic,
  bookmarkedIds,
  completedIds,
  searchQuery,
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [activeTabMode, setActiveTabMode] = useState<'visual' | 'tree'>('visual');
  const [selectedSectionFilter, setSelectedSectionFilter] = useState<string>('all');
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(SEO_SECTIONS.map(s => s.id))
  );

  const containerRef = useRef<HTMLDivElement>(null);

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.15, 1.5));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.15, 0.65));
  const handleResetZoom = () => setZoomLevel(1);

  const toggleSectionExpand = (id: string) => {
    setExpandedSections(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const isTopicHighlighted = (topic: SeoTopic) => {
    if (!searchQuery.trim()) return false;
    const q = searchQuery.toLowerCase();
    return (
      topic.titleBn.toLowerCase().includes(q) ||
      topic.titleEn.toLowerCase().includes(q) ||
      topic.summary.toLowerCase().includes(q)
    );
  };

  const displayedSections = selectedSectionFilter === 'all'
    ? SEO_SECTIONS
    : SEO_SECTIONS.filter(s => s.id === selectedSectionFilter);

  return (
    <div className="relative w-full flex flex-col bg-[#eef2f7] rounded-3xl shadow-[10px_10px_24px_#cbd5e1,-10px_-10px_24px_#ffffff] border border-white/80 overflow-hidden animate-fade-in font-['Inter',sans-serif]">
      {/* Top Toolbar (Neumorphic) */}
      <div className="sticky top-0 z-30 px-5 py-3.5 bg-[#eef2f7]/95 backdrop-blur-md border-b border-[#d1d9e6]/70 flex flex-wrap items-center justify-between gap-3 shadow-[0_2px_8px_rgba(209,217,230,0.4)]">
        <div className="flex items-center gap-2.5">
          {/* Mode Switcher */}
          <div className="bg-[#eef2f7] p-1 rounded-2xl flex items-center shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] border border-white/60">
            <button
              type="button"
              onClick={() => setActiveTabMode('visual')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-sm font-['Inter'] font-semibold border transition-colors duration-150 ${
                activeTabMode === 'visual'
                  ? 'neu-button text-amber-900 border-amber-300/40 shadow-[2px_2px_6px_#d1d9e6,-2px_-2px_6px_#ffffff]'
                  : 'text-stone-600 hover:text-stone-900 border-transparent'
              }`}
            >
              <Compass className="w-4 h-4 text-amber-600" />
              ভিজ্যুয়াল রোডম্যাপ
            </button>
            <button
              type="button"
              onClick={() => setActiveTabMode('tree')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-sm font-['Inter'] font-semibold border transition-colors duration-150 ${
                activeTabMode === 'tree'
                  ? 'neu-button text-amber-900 border-amber-300/40 shadow-[2px_2px_6px_#d1d9e6,-2px_-2px_6px_#ffffff]'
                  : 'text-stone-600 hover:text-stone-900 border-transparent'
              }`}
            >
              <Layers className="w-4 h-4 text-stone-600" />
              ট্রি ভিউ
            </button>
          </div>

          {/* Section Filter Pills */}
          <div className="hidden lg:flex items-center gap-2 overflow-x-auto">
            <button
              type="button"
              onClick={() => setSelectedSectionFilter('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-['Inter'] font-semibold border transition-colors duration-150 ${
                selectedSectionFilter === 'all'
                  ? 'neu-pressed text-amber-900 border-amber-400/60'
                  : 'neu-button text-stone-600 border-white/70'
              }`}
            >
              সবগুলো অধ্যায়
            </button>
            {SEO_SECTIONS.slice(0, 5).map(sec => (
              <button
                key={sec.id}
                type="button"
                onClick={() => setSelectedSectionFilter(sec.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-['Inter'] font-semibold border transition-colors duration-150 whitespace-nowrap ${
                  selectedSectionFilter === sec.id
                    ? 'neu-pressed text-amber-900 border-amber-400/60'
                    : 'neu-button text-stone-600 border-white/70'
                }`}
              >
                {sec.titleBn.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Zoom Controls */}
        <div className="flex items-center gap-2 ml-auto">
          <button
            onClick={handleZoomOut}
            className="neu-button p-2 text-stone-700 text-sm"
            title="ছোট করুন (Zoom Out)"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <span className="text-xs font-mono font-bold text-stone-700 px-1">
            {Math.round(zoomLevel * 100)}%
          </span>
          <button
            onClick={handleZoomIn}
            className="neu-button p-2 text-stone-700 text-sm"
            title="বড় করুন (Zoom In)"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={handleResetZoom}
            className="neu-button p-2 text-stone-700 text-sm ml-1"
            title="রিসেট ভিউ"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mode 1: Visual Flowchart in Neumorphic styling */}
      {activeTabMode === 'visual' && (
        <div 
          ref={containerRef}
          className="w-full overflow-x-auto overflow-y-auto p-4 sm:p-10 min-h-[800px] flex justify-center bg-[radial-gradient(#cbced1_1.2px,transparent_1.2px)] [background-size:22px_22px]"
        >
          <div 
            className="transition-transform duration-150 origin-top flex flex-col items-center w-full max-w-4xl py-6"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            {/* Top Roadmap Header Card (Neumorphic Soft Box) */}
            <div className="flex flex-col items-center justify-center px-8 py-5 rounded-3xl bg-[#eef2f7] shadow-[8px_8px_20px_#d1d9e6,-8px_-8px_20px_#ffffff] border border-white/80 mb-10">
              {/* Center Title */}
              <div className="text-center">
                <div className="inline-block px-7 py-2.5 rounded-2xl bg-[#eef2f7] shadow-[6px_6px_14px_#cbd5e1,-6px_-6px_14px_#ffffff] border border-white/90 text-stone-900 font-['Poppins'] font-semibold text-2xl tracking-wider">
                  SEO & GEO 2026
                </div>
                <span className="block text-xs font-['Inter'] text-stone-600 font-medium mt-1.5">
                  সার্চ ইঞ্জিন ও এআই অপ্টিমাইজেশন রোডম্যাপ
                </span>
              </div>
            </div>

            {/* Central Cable Connector */}
            <div className="w-1.5 h-10 bg-[#2b78e4] rounded-full mb-1 shadow-[0_0_8px_rgba(43,120,228,0.4)]" />

            {/* Sections Loop */}
            <div className="w-full space-y-16 flex flex-col items-center relative">
              {displayedSections.map((section, sIdx) => {
                return (
                  <div key={section.id} className="w-full flex flex-col items-center relative">
                    {/* Spine link */}
                    {sIdx > 0 && (
                      <div className="w-1.5 h-12 bg-[#2b78e4] -mt-16 mb-4 rounded-full shadow-[0_0_8px_rgba(43,120,228,0.4)]" />
                    )}

                    {/* Section Header Banner with Neumorphic Relief */}
                    <div className="relative z-10 px-7 py-4 rounded-2xl bg-[#eef2f7] shadow-[7px_7px_16px_#cbd5e1,-7px_-7px_16px_#ffffff] border border-white/80 text-center max-w-xl mb-8">
                      {/* Section heading: Poppins 600 - English first, then Bangla */}
                      <h2 className="font-['Poppins'] font-semibold text-xl sm:text-2xl text-[#1a202c] leading-snug">
                        <span className="block text-[#1a202c]">{section.titleEn}</span>
                        <span className="block text-base sm:text-lg text-stone-600 font-medium mt-0.5">
                          {section.titleBn}
                        </span>
                      </h2>
                      {/* Description: Inter 400 */}
                      <p className="text-xs font-['Inter'] text-stone-500 mt-1.5 max-w-md mx-auto">
                        {section.description}
                      </p>
                    </div>

                    {/* Node Cards Layout */}
                    <div className="w-full max-w-3xl flex flex-col gap-5 relative">
                      {/* Central vertical dotted spine line */}
                      <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 border-l-2 border-dashed border-[#2b78e4] z-0 hidden sm:block" />

                      {section.topics.map((topic, tIdx) => {
                        const isBookmarked = bookmarkedIds.has(topic.id);
                        const isCompleted = completedIds.has(topic.id);
                        const isHighlighted = isTopicHighlighted(topic);

                        const isRight = topic.gridX === 1 || tIdx % 2 === 1;
                        const isLeft = topic.gridX === -1;
                        const isCenter = !isLeft && !isRight;

                        return (
                          <div
                            key={topic.id}
                            className={`relative z-10 flex w-full my-1 ${
                              isCenter
                                ? 'justify-center'
                                : isRight
                                  ? 'justify-center sm:justify-end'
                                  : 'justify-center sm:justify-start'
                            }`}
                          >
                            {/* Blue connector arm */}
                            <div className={`hidden sm:block absolute top-1/2 -translate-y-1/2 w-10 border-t-2 border-dashed border-[#2b78e4] ${
                              isRight ? 'left-1/2 -ml-0' : isLeft ? 'right-1/2 -mr-0' : 'hidden'
                            }`} />

                            {/* Node Card styled with tactile Neumorphism - Zero Jitter 240FPS */}
                            <div
                              onClick={() => onSelectTopic(topic)}
                              className={`group relative w-full sm:w-[350px] p-5 rounded-2xl cursor-pointer transition-[box-shadow,border-color,background-color] duration-150 text-left border border-white/60 ${
                                isHighlighted
                                  ? 'neu-node-active bg-[#fef08a] ring-4 ring-[#2b78e4]'
                                  : isCenter
                                    ? 'neu-node-yellow'
                                    : 'neu-node-peach'
                              }`}
                            >
                              <div className="flex items-start justify-between gap-2">
                                <div>
                                  {/* Heading: English first (Poppins 600), then Bangla below */}
                                  <h3 className="font-['Poppins'] font-semibold text-stone-900 text-base leading-snug group-hover:text-blue-900 transition-colors">
                                    {topic.titleEn}
                                  </h3>
                                  <span className="text-xs text-stone-700 font-medium block mt-0.5">
                                    {topic.titleBn}
                                  </span>
                                </div>

                                <div className="flex items-center gap-1.5 flex-shrink-0">
                                  {topic.badge && (
                                    <span className="text-[10px] font-['Inter'] font-semibold px-2 py-0.5 rounded-full bg-stone-900 text-amber-300 shadow-xs">
                                      {topic.badge}
                                    </span>
                                  )}
                                  {isCompleted && (
                                    <CheckCircle className="w-4 h-4 text-emerald-700" />
                                  )}
                                  {isBookmarked && (
                                    <Bookmark className="w-3.5 h-3.5 text-amber-700" fill="currentColor" />
                                  )}
                                </div>
                              </div>

                              {/* Body: Inter 400 */}
                              <p className="text-xs font-['Inter'] text-stone-700 line-clamp-2 mt-2 leading-relaxed">
                                {topic.summary}
                              </p>

                              {/* Example Badge */}
                              <div className="mt-3 pt-2.5 border-t border-black/10 flex items-center justify-between text-[12px] font-['Inter']">
                                <span className="inline-flex items-center gap-1.5 font-medium text-amber-950 bg-amber-400/20 px-2.5 py-0.5 rounded-lg border border-amber-400/30">
                                  <Lightbulb className="w-3.5 h-3.5 text-amber-700" />
                                  বাস্তব উদাহরণ
                                </span>
                                <span className="neu-button px-2.5 py-1 text-xs font-semibold text-blue-900 group-hover:shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff]">
                                  পড়ুন →
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Mode 2: Structured Tree View (Neumorphic Cards) */}
      {activeTabMode === 'tree' && (
        <div className="p-4 sm:p-8 space-y-6 max-w-4xl mx-auto w-full">
          <div className="flex items-center justify-between pb-3 border-b border-[#d1d9e6]/70">
            <h3 className="font-['Poppins'] font-semibold text-stone-900 text-lg">
              Roadmap Outline Tree (রোডম্যাপ ট্রি আউটলাইন)
            </h3>
            <span className="text-xs font-['Inter'] text-stone-500 font-medium">
              ক্লিক করে অধ্যায় সম্প্রসারণ বা সংকোচন করুন
            </span>
          </div>

          <div className="space-y-4">
            {displayedSections.map((section, sIdx) => {
              const isExpanded = expandedSections.has(section.id);

              return (
                <div 
                  key={section.id} 
                  className="rounded-2xl bg-[#eef2f7] shadow-[6px_6px_14px_#cbd5e1,-6px_-6px_14px_#ffffff] border border-white/70 overflow-hidden"
                >
                  <button
                    onClick={() => toggleSectionExpand(section.id)}
                    className="w-full p-4 flex items-center justify-between bg-[#eef2f7] hover:bg-[#e6ebf2] transition-colors text-left"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="w-8 h-8 rounded-xl bg-amber-400 text-stone-950 font-['Poppins'] font-bold flex items-center justify-center text-xs shadow-xs">
                        {sIdx + 1}
                      </span>
                      <div>
                        <h4 className="font-['Poppins'] font-semibold text-stone-900 text-base">
                          {section.titleEn}
                        </h4>
                        <span className="text-xs font-['Inter'] text-stone-600 font-medium block mt-0.5">
                          {section.titleBn}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-['Inter'] font-semibold px-2.5 py-1 rounded-lg bg-[#eef2f7] shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff] text-stone-700">
                        {section.topics.length} টি বিষয়
                      </span>
                      {isExpanded ? <ChevronDown className="w-5 h-5 text-stone-400" /> : <ChevronRight className="w-5 h-5 text-stone-400" />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="p-4 border-t border-[#d1d9e6]/50 divide-y divide-[#d1d9e6]/40">
                      {section.topics.map(topic => (
                        <div
                          key={topic.id}
                          onClick={() => onSelectTopic(topic)}
                          className="py-3 px-3 flex items-center justify-between hover:bg-amber-100/30 rounded-xl cursor-pointer transition-colors group"
                        >
                          <div className="space-y-0.5 max-w-xl">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h5 className="font-['Poppins'] font-semibold text-sm text-stone-900 group-hover:text-amber-800">
                                {topic.titleEn}
                              </h5>
                              <span className="text-xs text-stone-600 block">
                                — {topic.titleBn}
                              </span>
                              {topic.badge && (
                                <span className="text-[10px] px-2 py-0.5 bg-amber-200/50 text-amber-900 font-bold rounded-sm border border-amber-300">
                                  {topic.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-xs font-['Inter'] text-stone-600 line-clamp-1">
                              {topic.summary}
                            </p>
                          </div>

                          <div className="flex items-center gap-3 flex-shrink-0">
                            <span className="text-xs font-['Inter'] font-semibold text-amber-800 hidden sm:flex items-center gap-1 neu-button px-2.5 py-1 text-[11px]">
                              <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                              বাস্তব উদাহরণ
                            </span>
                            <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-stone-900 group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
