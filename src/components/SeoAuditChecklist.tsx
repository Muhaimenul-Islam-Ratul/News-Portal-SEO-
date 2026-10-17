import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, Circle, Sparkles, AlertCircle, Award, 
  RotateCcw, CheckSquare, Download, Filter 
} from 'lucide-react';

interface ChecklistItem {
  id: string;
  category: 'টেকনিক্যাল' | 'অন-পেজ' | 'এআই ও জিইও' | 'ব্যাকলিংক ও অথরিটি' | 'অ্যানালিটিক্স';
  title: string;
  desc: string;
  severity: 'গুরুত্বপূর্ণ' | 'মাঝারি' | 'এডভান্সড';
}

const CHECKLIST_ITEMS: ChecklistItem[] = [
  // টেকনিক্যাল
  { id: 't1', category: 'টেকনিক্যাল', severity: 'গুরুত্বপূর্ণ', title: 'HTTPS এনক্রিপশন সক্রিয়', desc: 'সাইটের প্রতিটি পৃষ্ঠা যেন সুরক্ষিত SSL (https://) প্রোটোকলে রিডিরেক্ট হয়।' },
  { id: 't2', category: 'টেকনিক্যাল', severity: 'গুরুত্বপূর্ণ', title: 'XML Sitemap গুগল সার্চ কনসোলে সাবমিট', desc: 'sitemap.xml সঠিকভাবে তৈরি এবং সার্চ কনসোলে ত্রুটিমুক্তভাবে জমা দেওয়া।' },
  { id: 't3', category: 'টেকনিক্যাল', severity: 'গুরুত্বপূর্ণ', title: 'Robots.txt ফাইল সঠিক কনফিগারেশন', desc: 'গুরুত্বপূর্ণ পেজ বা সিএসএস/জেএস ফাইল যেন ভুলবশত ব্লক না থাকে।' },
  { id: 't4', category: 'টেকনিক্যাল', severity: 'গুরুত্বপূর্ণ', title: 'মোবাইল রেসপন্সিভনেস ও ভিউপোর্ট', desc: 'মোবাইল স্ক্রিনে ফন্ট, বাটন ও কনটেন্ট যেন নিখুঁতভাবে প্রদর্শিত হয়।' },
  { id: 't5', category: 'টেকনিক্যাল', severity: 'মাঝারি', title: 'Core Web Vitals গ্রীন স্কোর (LCP < 2.5s)', desc: 'পেজস্পিড ইনসাইটসে মোবাইল ও ডেস্কটপ উভয়েই LCP এবং INP স্কোর ভালো থাকা।' },
  { id: 't6', category: 'টেকনিক্যাল', severity: 'মাঝারি', title: 'ক্যানোনিকাল ট্যাগ (Canonical Tag) বাস্তবায়ন', desc: 'প্রতিটি পেজে সেলফ-রেফারেন্সিং ক্যানোনিকাল ট্যাগ থাকা ডুপ্লিকেট রোধে।' },
  { id: 't7', category: 'টেকনিক্যাল', severity: 'মাঝারি', title: 'রিডিরেক্ট চেইন ও ৪০৪ ব্রোকেন লিঙ্ক মুক্ত', desc: 'কোনো পেজ একাধিক রিডিরেক্ট ছাড়া সরাসরি ২০০ স্ট্যাটাস কোড দেয় কি না।' },
  { id: 't8', category: 'টেকনিক্যাল', severity: 'এডভান্সড', title: 'স্ট্রাকচার্ড ডেটা (Schema.org) ত্রুটিমুক্ত', desc: 'গুগল রিচ রেজাল্ট টেস্টে কোনো ইরর বা ওয়ার্নিং ছাড়া স্কিমা থাকা।' },
  { id: 't9', category: 'টেকনিক্যাল', severity: 'এডভান্সড', title: 'জাভাস্ক্রিপ্ট এসইও ও সার্ভার সাইড রেন্ডারিং', desc: 'React/Next.js সাইটের মূল কনটেন্ট যেন সার্ভার থেকেই এইচটিএমএলে আসে।' },

  // অন-পেজ
  { id: 'o1', category: 'অন-পেজ', severity: 'গুরুত্বপূর্ণ', title: 'প্রতি পেজে একক H1 এবং প্রাসঙ্গিক টাইটেল', desc: 'টাইটেল ৬০ অক্ষরের মধ্যে মূল কীওয়ার্ড সামনে রেখে ক্লিক-আকর্ষক করা।' },
  { id: 'o2', category: 'অন-পেজ', severity: 'গুরুত্বপূর্ণ', title: 'অনন্য মেটা ডেসক্রিপশন (১৫০-১৬০ অক্ষর)', desc: 'সার্চে পড়ার মতো আকর্ষণীয় সারসংক্ষেপ এবং কল-টু-অ্যাকশন।' },
  { id: 'o3', category: 'অন-পেজ', severity: 'গুরুত্বপূর্ণ', title: 'সার্চ ইনটেন্ট (Search Intent) সম্পূর্ণ সন্তুষ্ট', desc: 'ইউজার যে উদ্দেশ্যে সার্চ করেছে তার স্পষ্ট উত্তর আর্টিকেলে থাকা।' },
  { id: 'o4', category: 'অন-পেজ', severity: 'মাঝারি', title: 'ইন্টারনাল লিংকিং (সাইলো আর্কিটেকচার)', desc: 'সম্পর্কিত ক্যাটাগরি ও আর্টিকেলের মধ্যে প্রাসঙ্গিক অ্যাঙ্কর টেক্সটে লিংক।' },
  { id: 'o5', category: 'অন-পেজ', severity: 'মাঝারি', title: 'ইমেজ অপ্টিমাইজেশন (WebP + Alt Text)', desc: 'সব ছবিতে অর্থপূর্ণ অল্টারনেটিভ টেক্সট ও হালকা ফরম্যাট ব্যবহার।' },
  { id: 'o6', category: 'অন-পেজ', severity: 'মাঝারি', title: 'ক্লিন এবং ছোট ইউআরএল স্লাগ (Clean URL)', desc: 'ইউআরএলে তারিখ বা আইডি না রেখে শুধু কীওয়ার্ড ব্যবহার করা।' },
  { id: 'o7', category: 'অন-পেজ', severity: 'এডভান্সড', title: 'E-E-A-T লেখক পরিচিতি ও বিশ্বস্ততা', desc: 'লেখকের ছবি, পেশাদার যোগ্যতা, সোশ্যাল লিংক ও তথ্যসূত্র থাকা।' },
  { id: 'o8', category: 'অন-পেজ', severity: 'এডভান্সড', title: 'ইনফরমেশন গেইন (Information Gain)', desc: 'ইন্টারনেটে আগে না থাকা নতুন তথ্য, নিজস্ব সমীক্ষা বা ডেটা থাকা।' },

  // এআই ও জিইও
  { id: 'g1', category: 'এআই ও জিইও', severity: 'গুরুত্বপূর্ণ', title: 'TL;DR ও এক নজরে সরাসরি উত্তর বক্স', desc: 'আর্টিকেলের শুরুতে ৩-৪ লাইনে স্পষ্ট সিদ্ধান্ত প্রদান করা।' },
  { id: 'g2', category: 'এআই ও জিইও', severity: 'গুরুত্বপূর্ণ', title: 'এআই ক্রলারদের (GPTBot, Perplexity) অনুমতি', desc: 'robots.txt দিয়ে যেন আধুনিক এআই ইঞ্জিন ব্লক না থাকে।' },
  { id: 'g3', category: 'এআই ও জিইও', severity: 'মাঝারি', title: 'ডেটা টেবিল ও স্ট্রাকচার্ড বুলেট পয়েন্ট', desc: 'পরিসংখ্যান ও তুলনামূলক তথ্য এইচটিএমএল টেবিলে সাজানো।' },
  { id: 'g4', category: 'এআই ও জিইও', severity: 'মাঝারি', title: 'সুস্পষ্ট এনটিটি ও উইকিডাটা লিংকিং', desc: 'ব্র্যান্ডের সাথে সম্পর্কিত নির্ভরযোগ্য এনটিটি একই বানানে ব্যবহার।' },
  { id: 'g5', category: 'এআই ও জিইও', severity: 'এডভান্সড', title: 'চাংকিং ফ্রেন্ডলি প্যারাগ্রাফ বিন্যাস', desc: 'প্রতিটি হেডিংয়ের নিচে ৩০০ শব্দের স্বাবলম্বী তথ্য থাকা।' },

  // ব্যাকলিংক ও অথরিটি
  { id: 'b1', category: 'ব্যাকলিংক ও অথরিটি', severity: 'গুরুত্বপূর্ণ', title: 'ন্যাচারাল ব্যাকলিংক প্রোফাইল', desc: 'কোনো পেইড স্প্যাম লিংক ছাড়া ইন্ডাস্ট্রি রিলেভেন্ট সাইট থেকে লিংক পাওয়া।' },
  { id: 'b2', category: 'ব্যাকলিংক ও অথরিটি', severity: 'মাঝারি', title: 'ব্র্যান্ড এনটিটি সামঞ্জস্যতা (Name, Address, Phone)', desc: 'সোশ্যাল মিডিয়া ও ডিরেক্টরিতে ব্র্যান্ডের তথ্যে ১০০% মিল থাকা।' },
  { id: 'b3', category: 'ব্যাকলিংক ও অথরিটি', severity: 'মাঝারি', title: 'ডিজিটাল পিআর ও আনলিঙ্কড মেনশন আউটরিচ', desc: 'নিউজ সাইট বা ব্লগে ব্র্যান্ডের নাম থাকলে ব্যাকলিংকে রূপান্তর করা।' },
  { id: 'b4', category: 'ব্যাকলিংক ও অথরিটি', severity: 'এডভান্সড', title: 'স্প্যাম ব্যাকলিংক অডিট ও ডিস্যাভো ফাইল', desc: 'টক্সিক ও ক্ষতিকর লিংক নিয়মিত মনিটরিং ও গুগল থেকে ডিস্যাভো করা।' },

  // অ্যানালিটিক্স
  { id: 'a1', category: 'অ্যানালিটিক্স', severity: 'গুরুত্বপূর্ণ', title: 'গুগল সার্চ কনসোল সক্রিয় ভেরিফিকেশন', desc: 'ডোমেন লেভেলে ভেরিফাই করা এবং পারফরম্যান্স ডেটা নিয়মিত দেখা।' },
  { id: 'a2', category: 'অ্যানালিটিক্স', severity: 'গুরুত্বপূর্ণ', title: 'গুগল অ্যানালিটিক্স ৪ (GA4) কনভার্সন ট্র্যাকিং', desc: 'মূল লক্ষ্য বা লিড ইভেন্টগুলো সঠিকভাবে ট্র্যাক করা হচ্ছে কি না।' },
  { id: 'a3', category: 'অ্যানালিটিক্স', severity: 'মাঝারি', title: 'মাইক্রোসফট ক্ল্যারিটি হিটম্যাপ সেটআপ', desc: 'ইউজাররা আর্টিকেলে কোথায় ক্লিক করছে ও কতটুকু স্ক্রল করছে দেখা।' },
  { id: 'a4', category: 'অ্যানালিটিক্স', severity: 'এডভান্সড', title: 'নন-ব্র্যান্ডেড সার্চ কুয়েরি গ্রোথ ট্র্যাকিং', desc: 'ব্র্যান্ডের বাইরে নতুন অর্গানিক সার্চারদের বৃদ্ধির হার নির্ণয়।' }
];

export const SeoAuditChecklist: React.FC = () => {
  const [checkedIds, setCheckedIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('seo_audit_checked');
      if (saved) return new Set(JSON.parse(saved));
    } catch {}
    return new Set(['t1', 't2', 't3', 'o1', 'a1', 'g2']);
  });

  const [activeCategory, setActiveCategory] = useState<string>('all');

  useEffect(() => {
    try {
      localStorage.setItem('seo_audit_checked', JSON.stringify(Array.from(checkedIds)));
    } catch {}
  }, [checkedIds]);

  const toggleItem = (id: string) => {
    const next = new Set(checkedIds);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setCheckedIds(next);
  };

  const handleSelectAll = () => {
    setCheckedIds(new Set(CHECKLIST_ITEMS.map(i => i.id)));
  };

  const handleReset = () => {
    setCheckedIds(new Set());
  };

  const total = CHECKLIST_ITEMS.length;
  const completed = checkedIds.size;
  const percentage = Math.round((completed / total) * 100);

  const filteredItems = activeCategory === 'all'
    ? CHECKLIST_ITEMS
    : CHECKLIST_ITEMS.filter(i => i.category === activeCategory);

  return (
    <div className="w-full max-w-5xl mx-auto space-y-10 animate-fade-in font-['Inter',sans-serif]">
      {/* Intro Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="text-xs font-['Inter'] font-semibold px-3 py-1 rounded-full neu-button text-emerald-800 uppercase tracking-widest inline-block mb-1">
          SEO Health Checker
        </span>
        {/* User requirement: Headings: Poppins 600, 36-48px - English first, then Bangla */}
        <h2 className="font-['Poppins'] font-semibold text-2xl sm:text-3xl lg:text-[38px] text-[#1a202c]">
          50-Point SEO & GEO Audit Checklist
          <span className="block text-lg sm:text-2xl text-stone-600 font-medium mt-1">
            ৫০-পয়েন্ট এসইও ও জিইও অডিট চেকলিস্ট
          </span>
        </h2>
        {/* User requirement: Body text: Inter 400, 16px */}
        <p className="text-[#4a5568] text-[16px] font-normal font-['Inter']">
          Audit your website's Technical, On-Page, AI Search (GEO), and Backlink readiness to see your live SEO score.
        </p>
      </div>

      {/* Progress & Score Card (Neumorphic Soft Box) */}
      <div className="p-7 sm:p-8 rounded-3xl bg-[#eef2f7] shadow-[10px_10px_24px_#cbd5e1,-10px_-10px_24px_#ffffff] border border-white/80 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <div className="relative w-22 h-22 rounded-full bg-[#eef2f7] shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center border border-white/60">
            <span className="text-2xl font-bold font-mono text-amber-700 font-['Poppins']">
              {percentage}%
            </span>
          </div>
          <div>
            <span className="text-xs font-semibold text-stone-500 block uppercase tracking-wider font-['Inter']">
              Website SEO Readiness Score (আপনার সাইটের এসইও প্রস্তুতি স্কোর)
            </span>
            <h3 className="font-['Poppins'] font-semibold text-xl sm:text-2xl text-stone-900 mt-0.5">
              {percentage >= 90 ? '🌟 অসাধারণ! সাইট পুরোপুরি প্রস্তুত' :
               percentage >= 70 ? '👍 খুব ভালো! আর অল্প কিছু ফিক্স বাকি' :
               percentage >= 40 ? '⚠️ মাঝামাঝি! জরুরি বিষয়গুলোতে নজর দিন' :
               '🚨 দুর্বল! প্রাথমিক চেকলিস্ট দ্রুত পূরণ করুন'}
            </h3>
            <p className="text-xs font-['Inter'] text-stone-500 mt-1">
              মোট {total}টি পয়েন্টের মধ্যে {completed}টি সম্পন্ন হয়েছে
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={handleSelectAll}
            className="neu-button px-4 py-2.5 text-xs font-semibold text-stone-700 flex items-center gap-1.5"
          >
            <CheckSquare className="w-3.5 h-3.5 text-emerald-600" />
            সবগুলো টিক দিন
          </button>
          <button
            onClick={handleReset}
            className="neu-button px-4 py-2.5 text-xs font-semibold text-rose-700 flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            রিসেট
          </button>
        </div>
      </div>

      {/* Categories Tabs */}
      <div className="flex items-center gap-2.5 overflow-x-auto pb-1 text-xs sm:text-sm font-['Inter']">
        {['all', 'টেকনিক্যাল', 'অন-পেজ', 'এআই ও জিইও', 'ব্যাকলিংক ও অথরিটি', 'অ্যানালিটিক্স'].map(cat => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2.5 rounded-2xl whitespace-nowrap font-semibold border transition-colors duration-150 ${
              activeCategory === cat
                ? 'neu-pressed text-amber-900 border-amber-400/60'
                : 'neu-button text-stone-700 border-white/70'
            }`}
          >
            {cat === 'all' ? 'সবগুলো ক্যাটাগরি' : cat}
          </button>
        ))}
      </div>

      {/* Checklist Grid (Neumorphic Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredItems.map(item => {
          const isDone = checkedIds.has(item.id);

          return (
            <div
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`p-5 rounded-2xl border transition-[box-shadow,border-color,background-color] duration-150 cursor-pointer flex items-start gap-3.5 ${
                isDone 
                  ? 'neu-pressed bg-[#eef2f7] border-emerald-300/50' 
                  : 'neu-flat bg-[#eef2f7] border-white/70 hover:shadow-[3px_3px_8px_#cbd5e1,-3px_-3px_8px_#ffffff]'
              }`}
            >
              <div className="mt-0.5 flex-shrink-0">
                {isDone ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                ) : (
                  <Circle className="w-5 h-5 text-stone-400" />
                )}
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className={`text-[10px] font-['Inter'] font-semibold px-2 py-0.5 rounded-md ${
                    item.severity === 'গুরুত্বপূর্ণ' ? 'bg-rose-100 text-rose-800' :
                    item.severity === 'মাঝারি' ? 'bg-amber-100 text-amber-900' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {item.severity}
                  </span>
                  <span className="text-[11px] font-medium text-stone-500 font-['Inter']">
                    {item.category}
                  </span>
                </div>

                <h4 className={`text-base font-['Poppins'] font-semibold leading-snug ${
                  isDone ? 'text-stone-500 line-through' : 'text-stone-900'
                }`}>
                  {item.title}
                </h4>
                <p className="text-xs font-['Inter'] text-stone-600 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
