import React, { useState } from 'react';
import { SeoTopic, SEO_SECTIONS } from '../data/seoRoadmapData';
import { 
  CheckCircle, Bookmark, BookOpen, Sparkles, Filter, 
  ExternalLink, Search, ChevronRight, Lightbulb 
} from 'lucide-react';

interface CategorizedListViewProps {
  onSelectTopic: (topic: SeoTopic) => void;
  bookmarkedIds: Set<string>;
  completedIds: Set<string>;
  searchQuery: string;
}

export const CategorizedListView: React.FC<CategorizedListViewProps> = ({
  onSelectTopic,
  bookmarkedIds,
  completedIds,
  searchQuery,
}) => {
  const [levelFilter, setLevelFilter] = useState<string>('all');
  const [onlyBookmarks, setOnlyBookmarks] = useState<boolean>(false);

  return (
    <div className="w-full space-y-10 font-['Inter',sans-serif]">
      {/* Neumorphic Filters Bar */}
      <div className="p-5 rounded-3xl bg-[#eef2f7] shadow-[8px_8px_20px_#d1d9e6,-8px_-8px_20px_#ffffff] border border-white/80 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider flex items-center gap-1.5 font-['Poppins']">
            <Filter className="w-3.5 h-3.5" />
            লেভেল অনুযায়ী ফিল্টার:
          </span>
          <button
            type="button"
            onClick={() => setLevelFilter('all')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-colors duration-150 ${
              levelFilter === 'all'
                ? 'neu-pressed text-amber-900 border-amber-400/60'
                : 'neu-button text-stone-700 border-white/70'
            }`}
          >
            সবগুলো
          </button>
          <button
            type="button"
            onClick={() => setLevelFilter('বেসিক')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-colors duration-150 ${
              levelFilter === 'বেসিক'
                ? 'neu-pressed text-emerald-800 border-emerald-400/60'
                : 'neu-button text-stone-700 border-white/70'
            }`}
          >
            বেসিক (Beginner)
          </button>
          <button
            type="button"
            onClick={() => setLevelFilter('ইন্টারমিডিয়েট')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-colors duration-150 ${
              levelFilter === 'ইন্টারমিডিয়েট'
                ? 'neu-pressed text-blue-800 border-blue-400/60'
                : 'neu-button text-stone-700 border-white/70'
            }`}
          >
            ইন্টারমিডিয়েট (Mid-Level)
          </button>
          <button
            type="button"
            onClick={() => setLevelFilter('এডভান্সড')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-colors duration-150 ${
              levelFilter === 'এডভান্সড'
                ? 'neu-pressed text-purple-800 border-purple-400/60'
                : 'neu-button text-stone-700 border-white/70'
            }`}
          >
            এডভান্সড ও এআই (Advanced)
          </button>
        </div>

        <button
          type="button"
          onClick={() => setOnlyBookmarks(!onlyBookmarks)}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold border transition-colors duration-150 ${
            onlyBookmarks 
              ? 'neu-pressed text-amber-900 border-amber-400/60' 
              : 'neu-button text-stone-700 border-white/70'
          }`}
        >
          <Bookmark className="w-4 h-4 text-amber-500" fill={onlyBookmarks ? 'currentColor' : 'none'} />
          <span>সংরক্ষিত বুকমার্ক ({bookmarkedIds.size})</span>
        </button>
      </div>

      {/* Sections and Cards */}
      <div className="space-y-12">
        {SEO_SECTIONS.map((section, sIdx) => {
          const sectionTopics = section.topics.filter(topic => {
            const matchesLevel = levelFilter === 'all' || topic.level === levelFilter;
            const matchesBookmark = !onlyBookmarks || bookmarkedIds.has(topic.id);
            const matchesSearch = !searchQuery.trim() || (
              topic.titleBn.toLowerCase().includes(searchQuery.toLowerCase()) ||
              topic.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
              topic.summary.toLowerCase().includes(searchQuery.toLowerCase())
            );
            return matchesLevel && matchesBookmark && matchesSearch;
          });

          if (sectionTopics.length === 0) return null;

          return (
            <div key={section.id} className="space-y-5">
              <div className="flex items-center justify-between border-b border-[#d1d9e6]/70 pb-3.5">
                <div>
                  <span className="text-xs font-['Poppins'] font-semibold text-amber-700 uppercase tracking-widest">
                    CHAPTER 0{sIdx + 1}
                  </span>
                  {/* Heading: Poppins, weight 600 - English first, then Bangla */}
                  <h2 className="font-['Poppins'] font-semibold text-2xl sm:text-3xl text-[#1a202c]">
                    <span className="block">{section.titleEn}</span>
                    <span className="block text-lg sm:text-xl text-stone-600 font-medium mt-1">
                      {section.titleBn}
                    </span>
                  </h2>
                  {/* Body text: Inter, weight 400 */}
                  <p className="text-xs font-['Inter'] text-stone-500 font-mono mt-1">
                    {section.description}
                  </p>
                </div>
                <span className="text-xs font-['Inter'] font-semibold px-3 py-1.5 rounded-xl bg-[#eef2f7] shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff] text-stone-700">
                  {sectionTopics.length} Topics
                </span>
              </div>

              {/* Grid of Neumorphic Topic Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sectionTopics.map(topic => {
                  const isBookmarked = bookmarkedIds.has(topic.id);
                  const isCompleted = completedIds.has(topic.id);

                  return (
                    <div
                      key={topic.id}
                      onClick={() => onSelectTopic(topic)}
                      className="group p-6 rounded-3xl bg-[#eef2f7] shadow-[8px_8px_18px_#cbd5e1,-8px_-8px_18px_#ffffff] hover:shadow-[4px_4px_12px_#cbd5e1,-4px_-4px_12px_#ffffff] border border-white/80 transition-[box-shadow,border-color,background-color] duration-150 cursor-pointer flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className={`text-[11px] font-['Inter'] font-semibold px-2.5 py-1 rounded-xl bg-[#eef2f7] shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff] ${
                            topic.level === 'বেসিক' ? 'text-emerald-700' :
                            topic.level === 'ইন্টারমিডিয়েট' ? 'text-blue-700' :
                            'text-purple-700'
                          }`}>
                            {topic.level}
                          </span>

                          <div className="flex items-center gap-1.5">
                            {topic.badge && (
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-200 text-amber-900 border border-amber-300 shadow-xs">
                                {topic.badge}
                              </span>
                            )}
                            {isCompleted && (
                              <CheckCircle className="w-4 h-4 text-emerald-600" />
                            )}
                            {isBookmarked && (
                              <Bookmark className="w-3.5 h-3.5 text-amber-600" fill="currentColor" />
                            )}
                          </div>
                        </div>

                        {/* Title: English first, then Bangla */}
                        <h3 className="font-['Poppins'] font-semibold text-lg text-stone-900 group-hover:text-amber-700 transition-colors leading-snug">
                          {topic.titleEn}
                        </h3>
                        <span className="text-xs text-stone-600 font-medium block mb-2.5">
                          {topic.titleBn}
                        </span>

                        {/* Body text: Inter 400 */}
                        <p className="text-[15px] font-['Inter'] font-normal text-stone-600 line-clamp-3 leading-relaxed mb-4">
                          {topic.summary}
                        </p>

                        {/* Example Badge in Card */}
                        <div className="mb-4 px-3 py-2 rounded-xl bg-[#eef2f7] shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] text-xs text-stone-700 flex items-center gap-2 border border-white/60">
                          <span className="text-amber-600 text-base">💡</span>
                          <span className="line-clamp-1 font-medium font-['Inter']">
                            {topic.realWorldExample?.title || 'বাস্তব উদাহরণ সংযুক্ত'}
                          </span>
                        </div>
                      </div>

                      {/* Card Footer: Button 14-16px, Inter 500-600 */}
                      <div className="pt-3.5 border-t border-[#d1d9e6]/60 flex items-center justify-between text-xs font-['Inter'] text-stone-500">
                        <span className="flex items-center gap-1 font-medium">
                          <BookOpen className="w-3.5 h-3.5 text-stone-400" />
                          {topic.readTime}
                        </span>
                        <span className="neu-button px-3 py-1.5 text-xs font-semibold text-stone-800 group-hover:text-amber-800 flex items-center gap-1">
                          উদাহরণসহ পড়ুন
                          <ChevronRight className="w-3.5 h-3.5" />
                        </span>
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
  );
};
