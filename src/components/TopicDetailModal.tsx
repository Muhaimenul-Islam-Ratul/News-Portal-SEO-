import React, { useState } from 'react';
import { SeoTopic } from '../data/seoRoadmapData';
import { 
  X, CheckCircle, Bookmark, Share2, Copy, Check, ExternalLink, 
  Lightbulb, AlertTriangle, Wrench, Code2, ArrowLeft, ArrowRight,
  BookOpen, Sparkles
} from 'lucide-react';

interface TopicDetailModalProps {
  topic: SeoTopic | null;
  onClose: () => void;
  isBookmarked: boolean;
  isCompleted: boolean;
  onToggleBookmark: (id: string) => void;
  onToggleCompleted: (id: string) => void;
  onSelectTopic: (topic: SeoTopic) => void;
  allTopics: SeoTopic[];
}

export const TopicDetailModal: React.FC<TopicDetailModalProps> = ({
  topic,
  onClose,
  isBookmarked,
  isCompleted,
  onToggleBookmark,
  onToggleCompleted,
  onSelectTopic,
  allTopics,
}) => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'example' | 'implementation' | 'code' | 'pitfalls'>('overview');

  if (!topic) return null;

  const currentIndex = allTopics.findIndex(t => t.id === topic.id);
  const prevTopic = currentIndex > 0 ? allTopics[currentIndex - 1] : null;
  const nextTopic = currentIndex < allTopics.length - 1 ? allTopics[currentIndex + 1] : null;

  // Fallback real-world example if not explicitly specified
  const effectiveExample = topic.realWorldExample || {
    title: `বাস্তব উদাহরণ: ${topic.titleBn} এর প্রয়োগ`,
    scenario: `ধরুন, একটি বাংলাদেশি ই-কমার্স বা কনটেন্ট প্ল্যাটফর্মে ${topic.titleEn} সংক্রান্ত সমস্যা দেখা দিল। তাদের অর্গানিক ট্রাফিক কমে যাচ্ছিল। তারা ${topic.titleBn} সংক্রান্ত অফিশিয়াল গাইডলাইন ও অডিট পয়েন্টগুলো পুঙ্খানুপুঙ্খ অনুসরণ করে সাইটে প্রয়োজনীয় পরিবর্তন আনে। মাত্র কয়েক সপ্তাহের মধ্যে সার্চ ইঞ্জিন নতুন সিগন্যালগুলো যাচাই করে এবং তাদের পেজটি সার্চ ফলাফলে প্রথম পেজে শীর্ষ ৩ নম্বরের মধ্যে স্থান করে নেয়।`,
    keyTakeaway: `${topic.titleBn} সঠিকভাবে প্রয়োগ করলে সার্চ ইঞ্জিন অ্যালগরিদম সাইটটিকে বিশ্বস্ত ও প্রাসঙ্গিক হিসেবে অগ্রাধিকার দেয়।`
  };

  const handleCopyCode = () => {
    if (topic.codeExample) {
      navigator.clipboard.writeText(topic.codeExample.code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 bg-black/40 backdrop-blur-xs animate-fade-in font-['Inter',sans-serif]">
      <div 
        className="relative w-full max-w-4xl max-h-[97vh] sm:max-h-[92vh] flex flex-col bg-[#eef2f7] rounded-t-3xl sm:rounded-3xl shadow-[16px_16px_36px_#cbd5e1,-16px_-16px_36px_#ffffff] border border-white/80 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Soft Neumorphic Header */}
        <div className="relative px-4 sm:px-8 py-3 sm:py-6 bg-[#eef2f7] border-b border-[#d1d9e6]/70 shadow-[0_2px_10px_rgba(209,217,230,0.4)] flex-shrink-0">
          <div className="flex items-center justify-between gap-2 mb-1.5 sm:mb-2.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-['Inter'] font-semibold px-3 py-1 rounded-xl neu-button text-stone-800">
                {topic.category}
              </span>
              <span className={`text-xs font-['Inter'] px-3 py-1 rounded-xl font-medium neu-button ${
                topic.level === 'বেসিক' ? 'text-emerald-700' :
                topic.level === 'ইন্টারমিডিয়েট' ? 'text-blue-700' :
                'text-purple-700'
              }`}>
                {topic.level} লেভেল
              </span>
              {topic.badge && (
                <span className="text-xs font-['Inter'] px-3 py-1 rounded-xl bg-amber-400 text-stone-950 font-semibold shadow-xs flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  {topic.badge}
                </span>
              )}
              <span className="text-xs font-['Inter'] text-stone-500 flex items-center gap-1 ml-auto sm:ml-0 font-medium">
                <BookOpen className="w-3.5 h-3.5" />
                পড়ার সময়: {topic.readTime}
              </span>
            </div>

            <button 
              onClick={onClose}
              className="p-2 rounded-xl neu-button text-stone-500 hover:text-stone-900 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-start justify-between gap-3 mt-1 sm:mt-0">
            <div>
              {/* Heading: English first (Poppins 600), then Bangla below */}
              <h2 className="font-['Poppins'] font-semibold text-xl sm:text-3xl lg:text-[34px] text-[#1a202c] tracking-tight leading-snug">
                {topic.titleEn}
              </h2>
              <p className="text-amber-800 text-base sm:text-lg mt-1 font-medium font-['Hind_Siliguri','Inter']">
                {topic.titleBn}
              </p>
            </div>

            <div className="flex items-center gap-2.5 flex-shrink-0">
              <button
                onClick={() => onToggleBookmark(topic.id)}
                title={isBookmarked ? 'বুকমার্ক সরানো' : 'বুকমার্কে রাখুন'}
                className={`p-2.5 rounded-xl transition-all ${
                  isBookmarked 
                    ? 'neu-pressed text-amber-800' 
                    : 'neu-button text-stone-600'
                }`}
              >
                <Bookmark className="w-4 h-4 text-amber-500" fill={isBookmarked ? 'currentColor' : 'none'} />
              </button>

              <button
                onClick={() => onToggleCompleted(topic.id)}
                title={isCompleted ? 'পড়া সম্পন্ন হয়েছে' : 'পড়া সম্পন্ন হিসেবে চিহ্নিত করুন'}
                className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-['Inter'] font-semibold transition-all ${
                  isCompleted 
                    ? 'neu-pressed text-emerald-800 border border-emerald-300/40' 
                    : 'neu-button text-stone-700'
                }`}
              >
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>{isCompleted ? 'পড়া শেষ' : 'পড়া বাকি'}</span>
              </button>
            </div>
          </div>

          {/* Quick Summary Inset Box */}
          <div className="mt-2 sm:mt-4 p-2.5 sm:p-3.5 rounded-2xl bg-[#eef2f7] shadow-[inset_3px_3px_6px_#d1d9e6,inset_-3px_-3px_6px_#ffffff] border border-white/60 text-stone-700 text-sm leading-relaxed font-['Inter']">
            <span className="font-semibold text-amber-800">সারসংক্ষেপ: </span>
            {topic.summary}
          </div>

          {/* Neumorphic Tabs */}
          <div className="flex items-center gap-2 sm:gap-2.5 mt-2 sm:mt-4 overflow-x-auto pb-1 text-xs sm:text-sm font-['Inter']">
            <button
              type="button"
              onClick={() => setActiveTab('overview')}
              className={`px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl whitespace-nowrap font-semibold border transition-colors duration-150 ${
                activeTab === 'overview'
                  ? 'neu-pressed text-amber-900 border-amber-400/60'
                  : 'neu-button text-stone-600 border-white/70'
              }`}
            >
              📖 বিস্তারিত বিবরণ
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('example')}
              className={`px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl whitespace-nowrap flex items-center gap-1.5 font-semibold border transition-colors duration-150 ${
                activeTab === 'example'
                  ? 'neu-pressed text-amber-900 border-amber-400/60'
                  : 'neu-button text-stone-600 border-white/70'
              }`}
            >
              <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
              বাস্তব উদাহরণ
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('implementation')}
              className={`px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl whitespace-nowrap font-semibold border transition-colors duration-150 ${
                activeTab === 'implementation'
                  ? 'neu-pressed text-amber-900 border-amber-400/60'
                  : 'neu-button text-stone-600 border-white/70'
              }`}
            >
              🚀 প্রয়োগের নিয়ম
            </button>
            {topic.codeExample && (
              <button
                type="button"
                onClick={() => setActiveTab('code')}
                className={`px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl whitespace-nowrap font-semibold border transition-colors duration-150 ${
                  activeTab === 'code'
                    ? 'neu-pressed text-amber-900 border-amber-400/60'
                    : 'neu-button text-stone-600 border-white/70'
                }`}
              >
                💻 কোড উদাহরণ
              </button>
            )}
            <button
              type="button"
              onClick={() => setActiveTab('pitfalls')}
              className={`px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl whitespace-nowrap font-semibold border transition-colors duration-150 ${
                activeTab === 'pitfalls'
                  ? 'neu-pressed text-amber-900 border-amber-400/60'
                  : 'neu-button text-stone-600 border-white/70'
              }`}
            >
              ⚠️ ভুল ও সেরা টুলস
            </button>
          </div>
        </div>

        {/* Modal Body: Inter 400, 16px */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-6 text-[#2d3748] text-[16px] leading-relaxed">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Detailed Description */}
              <div>
                <h3 className="font-['Poppins'] font-semibold text-lg sm:text-xl text-stone-900 flex items-center gap-2 mb-3">
                  <BookOpen className="w-5 h-5 text-amber-600" />
                  Core Concept & In-Depth Guide (মূল ধারণা ও বিস্তারিত বিশ্লেষণ)
                </h3>
                <div className="space-y-3.5 text-[#4a5568] font-['Inter'] font-normal text-[16px]">
                  {topic.fullDescription.map((p, idx) => (
                    <p key={idx} className="leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>

              {/* Quick Teaser for Real Example (Neumorphic Card) */}
              <div 
                onClick={() => setActiveTab('example')}
                className="p-5 rounded-2xl bg-[#eef2f7] shadow-[6px_6px_14px_#d1d9e6,-6px_-6px_14px_#ffffff] border border-amber-300/40 cursor-pointer transition-[box-shadow,border-color,background-color] duration-150 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-amber-400 text-stone-950 flex items-center justify-center flex-shrink-0 font-bold text-lg shadow-xs">
                    💡
                  </div>
                  <div>
                    <h4 className="font-['Poppins'] font-semibold text-stone-900 text-base">
                      {effectiveExample.title}
                    </h4>
                    <p className="text-xs text-stone-600 line-clamp-1 font-['Inter']">
                      {effectiveExample.scenario}
                    </p>
                  </div>
                </div>
                <span className="neu-button px-3.5 py-1.5 text-xs font-semibold text-amber-900 whitespace-nowrap">
                  সম্পূর্ণ উদাহরণ দেখুন →
                </span>
              </div>

              {/* Why It Matters */}
              <div className="p-5 rounded-2xl bg-[#eef2f7] shadow-[inset_3px_3px_7px_#d1d9e6,inset_-3px_-3px_7px_#ffffff] border border-white/70">
                <h4 className="font-['Poppins'] font-semibold text-base sm:text-lg text-amber-950 flex items-center gap-2 mb-2">
                  <Lightbulb className="w-5 h-5 text-amber-600" />
                  Why It Matters (কেন এটি জানা ও প্রয়োগ করা জরুরি?)
                </h4>
                <ul className="space-y-2 text-[#2d3748] text-[15px] font-['Inter']">
                  {topic.whyItMatters.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold mt-0.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'example' && (
            <div className="space-y-6">
              <div className="p-6 rounded-3xl bg-[#eef2f7] shadow-[8px_8px_18px_#cbd5e1,-8px_-8px_18px_#ffffff] border border-white/80 space-y-5">
                <div className="flex items-center gap-3 pb-3.5 border-b border-[#d1d9e6]/70">
                  <div className="w-10 h-10 rounded-2xl bg-amber-400 text-stone-950 flex items-center justify-center text-xl shadow-xs">
                    💡
                  </div>
                  <div>
                    <h3 className="font-['Poppins'] font-semibold text-lg sm:text-xl text-stone-900">
                      {effectiveExample.title}
                    </h3>
                    <span className="text-xs text-amber-800 font-medium font-['Inter']">
                      Real-World Scenario & Outcome (বাস্তব জীবনের দৃশ্যপট ও প্রয়োগের ফলাফল)
                    </span>
                  </div>
                </div>

                <div className="space-y-3 bg-[#eef2f7] shadow-[inset_3px_3px_6px_#d1d9e6,inset_-3px_-3px_6px_#ffffff] p-5 rounded-2xl border border-white/70">
                  <h4 className="font-['Poppins'] font-semibold text-stone-900 text-sm uppercase tracking-wider text-amber-900">
                    Practical Scenario (বাস্তব দৃশ্যপট):
                  </h4>
                  <p className="font-['Inter'] text-[16px] text-stone-800 leading-relaxed font-normal">
                    {effectiveExample.scenario}
                  </p>
                </div>

                <div className="p-5 rounded-2xl neu-button-dark space-y-1">
                  <span className="text-xs font-mono text-amber-300 font-semibold uppercase tracking-wider block">
                    Key Takeaway & Learning (মূল প্রাপ্তি ও শিক্ষা):
                  </span>
                  <p className="text-[15px] font-['Inter'] text-stone-200 leading-relaxed font-normal">
                    {effectiveExample.keyTakeaway}
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'implementation' && (
            <div className="space-y-5">
              <h3 className="font-['Poppins'] font-semibold text-lg text-stone-900 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                Step-by-Step Implementation Guide (ধাপে ধাপে বাস্তবায়নের নির্দেশিকা)
              </h3>
              <div className="space-y-3.5">
                {(topic.howToImplement || [
                  '১. আপনার ওয়েবসাইটের বর্তমান অবস্থা পরীক্ষা করুন এবং অডিট সম্পন্ন করুন।',
                  '২. সার্চ ইঞ্জিনের অফিশিয়াল গাইডলাইন ও ডকুমেন্টস অনুযায়ী পরিবর্তন আনুন।',
                  '৩. সার্চ কনসোলে ইউআরএল ইন্সপেকশন দিয়ে পরিবর্তন যাচাই করুন।'
                ]).map((step, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#eef2f7] shadow-[4px_4px_10px_#d1d9e6,-4px_-4px_10px_#ffffff] border border-white/70 flex items-start gap-3.5">
                    <span className="flex-shrink-0 w-8 h-8 rounded-xl neu-pressed text-emerald-800 font-bold flex items-center justify-center text-sm font-['Poppins']">
                      {idx + 1}
                    </span>
                    <span className="text-[#2d3748] pt-0.5 font-['Inter'] text-[15px]">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'code' && topic.codeExample && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-['Poppins'] font-semibold text-lg text-stone-900 flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-blue-600" />
                    Code & Configuration Example (বাস্তব কোড ও কনফিগারেশন)
                  </h3>
                  <p className="text-xs font-['Inter'] text-stone-500 mt-0.5">{topic.codeExample.caption}</p>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="neu-button px-4 py-2 text-xs font-semibold text-stone-800 flex items-center gap-1.5"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>কপি হয়েছে!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>কোড কপি করুন</span>
                    </>
                  )}
                </button>
              </div>

              <div className="relative rounded-2xl overflow-hidden bg-stone-950 text-stone-100 font-mono text-xs sm:text-sm p-5 border border-stone-800 shadow-xl">
                <div className="text-xs text-stone-400 mb-2 font-sans border-b border-stone-800 pb-1">
                  Format: <span className="uppercase text-amber-400 font-semibold">{topic.codeExample.language}</span>
                </div>
                <pre className="overflow-x-auto leading-relaxed py-1">
                  <code>{topic.codeExample.code}</code>
                </pre>
              </div>
            </div>
          )}

          {activeTab === 'pitfalls' && (
            <div className="space-y-6">
              {/* Common Mistakes */}
              <div className="p-5 rounded-2xl bg-[#eef2f7] shadow-[inset_3px_3px_7px_#d1d9e6,inset_-3px_-3px_7px_#ffffff] border border-rose-200/50">
                <h4 className="font-['Poppins'] font-semibold text-base sm:text-lg text-rose-950 flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-rose-600" />
                  Common Mistakes to Avoid (যেসব মারাত্মক ভুল করবেন না)
                </h4>
                <ul className="space-y-2 text-[#2d3748] text-[15px] font-['Inter']">
                  {topic.commonMistakes.map((mistake, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-rose-500 font-bold mt-0.5">✕</span>
                      <span>{mistake}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Best Tools */}
              <div>
                <h4 className="font-['Poppins'] font-semibold text-base sm:text-lg text-stone-900 flex items-center gap-2 mb-3">
                  <Wrench className="w-5 h-5 text-blue-600" />
                  Recommended Industry Tools (সেরা রিকমেন্ডেড টুলস)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {topic.bestTools.map((tool, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl neu-button justify-between text-sm font-medium text-stone-800 font-['Inter']">
                      <span>{tool}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Navigation */}
        <div className="px-4 sm:px-6 py-3 sm:py-4 bg-[#eef2f7] border-t border-[#d1d9e6]/70 flex items-center justify-between flex-shrink-0 text-sm font-['Inter']">
          {prevTopic ? (
            <button
              onClick={() => onSelectTopic(prevTopic)}
              className="neu-button px-3.5 py-2 text-xs sm:text-sm font-medium text-stone-700 flex items-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">পূর্ববর্তী:</span> {prevTopic.titleBn.slice(0, 20)}...
            </button>
          ) : <div />}

          {nextTopic ? (
            <button
              onClick={() => onSelectTopic(nextTopic)}
              className="neu-button px-3.5 py-2 text-xs sm:text-sm font-medium text-stone-700 flex items-center gap-1.5"
            >
              <span className="hidden sm:inline">পরবর্তী:</span> {nextTopic.titleBn.slice(0, 20)}...
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : <div />}
        </div>
      </div>
    </div>
  );
};
