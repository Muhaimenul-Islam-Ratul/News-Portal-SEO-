import React, { useState } from 'react';
import { 
  Search, Smartphone, Monitor, Copy, Check, Sparkles, 
  AlertCircle, CheckCircle2, Star, ChevronDown, RefreshCw 
} from 'lucide-react';

export const SerpSimulator: React.FC = () => {
  const [title, setTitle] = useState('বাংলা এসইও শেখার পূর্ণাঙ্গ রোডম্যাপ ২০২৬ | টেক একাডেমি');
  const [url, setUrl] = useState('https://example.com/bangla-seo-roadmap-2026');
  const [description, setDescription] = useState('গুগল সার্চ ও আধুনিক এআই ইঞ্জিনে (GEO) শীর্ষস্থান অর্জনের সম্পূর্ণ গাইডলাইন। টেকনিক্যাল, অন-পেজ ও ব্যাকলিংক তৈরির পরীক্ষিত কৌশল জানুন বাংলায়।');
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [includeDate, setIncludeDate] = useState(true);
  const [includeRating, setIncludeRating] = useState(true);
  const [copiedCode, setCopiedCode] = useState(false);

  const titleLimit = 60;
  const descLimit = 160;

  const titleLength = title.length;
  const descLength = description.length;

  const isTitleOver = titleLength > titleLimit;
  const isDescOver = descLength > descLimit;

  // Domain & slug parsing
  let displayDomain = 'example.com';
  let displaySlug = 'bangla-seo-roadmap-2026';
  try {
    const parsed = new URL(url.startsWith('http') ? url : `https://${url}`);
    displayDomain = parsed.hostname;
    displaySlug = parsed.pathname.replace(/^\/|\/$/g, '').replace(/\//g, ' > ');
  } catch {
    displayDomain = url;
  }

  // Generated Meta HTML
  const generatedHtml = `<!-- গুগল সার্চ অপ্টিমাইজড মেটা ট্যাগ -->
<title>${title}</title>
<meta name="description" content="${description}" />
<link rel="canonical" href="${url}" />
<meta name="robots" content="index, follow" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${description}" />
<meta property="og:url" content="${url}" />
<meta property="og:type" content="article" />`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedHtml);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleResetSample = () => {
    setTitle('বাংলা এসইও শেখার পূর্ণাঙ্গ রোডম্যাপ ২০২৬ | টেক একাডেমি');
    setUrl('https://example.com/bangla-seo-roadmap-2026');
    setDescription('গুগল সার্চ ও আধুনিক এআই ইঞ্জিনে (GEO) শীর্ষস্থান অর্জনের সম্পূর্ণ গাইডলাইন। টেকনিক্যাল, অন-পেজ ও ব্যাকলিংক তৈরির পরীক্ষিত কৌশল জানুন বাংলায়।');
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-10 animate-fade-in font-['Inter',sans-serif]">
      {/* Intro Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="text-xs font-['Inter'] font-semibold px-3 py-1 rounded-full neu-button text-amber-800 uppercase tracking-widest inline-block mb-1">
          SEO Toolkit
        </span>
        {/* User requirement: Headings: Poppins 600, 36-48px - English first, then Bangla */}
        <h2 className="font-['Poppins'] font-semibold text-2xl sm:text-3xl lg:text-[38px] text-[#1a202c]">
          Google SERP Simulator
          <span className="block text-lg sm:text-2xl text-stone-600 font-medium mt-1">
            গুগল সার্প সিমুলেটর ও লাইভ প্রিভিউ
          </span>
        </h2>
        {/* User requirement: Body text: Inter 400, 16px */}
        <p className="text-[#4a5568] text-[16px] font-normal font-['Inter']">
          Preview and test how your meta title and description appear in Google's desktop and mobile search in real-time.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Inputs Form (Neumorphic Soft Card) */}
        <div className="lg:col-span-5 p-7 bg-[#eef2f7] rounded-3xl shadow-[8px_8px_20px_#d1d9e6,-8px_-8px_20px_#ffffff] border border-white/80 space-y-6">
          <div className="flex items-center justify-between pb-3.5 border-b border-[#d1d9e6]/70">
            <h3 className="font-['Poppins'] font-semibold text-stone-900 text-base flex items-center gap-2">
              <Search className="w-4 h-4 text-amber-600" />
              Page Meta Configuration (পেজ মেটা তথ্য)
            </h3>
            <button
              onClick={handleResetSample}
              className="text-xs font-['Inter'] text-stone-600 hover:text-stone-950 neu-button px-2.5 py-1 flex items-center gap-1"
            >
              <RefreshCw className="w-3 h-3" />
              নমুনা লোড
            </button>
          </div>

          {/* Title Input */}
          <div>
            <div className="flex items-center justify-between mb-1.5 text-xs font-['Inter']">
              <label className="font-semibold text-stone-700">
                পেজ মেটা টাইটেল (Title Tag)
              </label>
              <span className={`font-mono font-bold ${
                isTitleOver ? 'text-rose-600' : 'text-stone-500'
              }`}>
                {titleLength} / {titleLimit} অক্ষর
              </span>
            </div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="আকর্ষণীয় টাইটেল লিখুন..."
              className={`w-full px-4 py-2.5 rounded-2xl neu-input text-[15px] font-['Inter'] ${
                isTitleOver ? 'border-rose-400' : ''
              }`}
            />
            {isTitleOver && (
              <p className="text-xs font-['Inter'] text-rose-600 mt-1.5 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                টাইটেল ৬০ অক্ষরের বেশি হলে গুগলে কাটা পড়ে যাবে!
              </p>
            )}
          </div>

          {/* URL Input */}
          <div>
            <label className="block text-xs font-['Inter'] font-semibold text-stone-700 mb-1.5">
              ওয়েবসাইট পেজ ইউআরএল (URL)
            </label>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com/your-slug"
              className="w-full px-4 py-2.5 rounded-2xl neu-input text-[15px] font-['Inter'] text-stone-800"
            />
          </div>

          {/* Description Input */}
          <div>
            <div className="flex items-center justify-between mb-1.5 text-xs font-['Inter']">
              <label className="font-semibold text-stone-700">
                মেটা ডেসক্রিপশন (Meta Description)
              </label>
              <span className={`font-mono font-bold ${
                isDescOver ? 'text-rose-600' : 'text-stone-500'
              }`}>
                {descLength} / {descLimit} অক্ষর
              </span>
            </div>
            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="পেজের বিষয়বস্তুর আকর্ষণীয় সারসংক্ষেপ লিখুন..."
              className={`w-full px-4 py-2.5 rounded-2xl neu-input text-[15px] font-['Inter'] resize-none ${
                isDescOver ? 'border-rose-400' : ''
              }`}
            />
            {isDescOver && (
              <p className="text-xs font-['Inter'] text-rose-600 mt-1.5 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                মেটা ডেসক্রিপশন ১৬০ অক্ষরের বেশি হলে সার্চে কেটে যাবে।
              </p>
            )}
          </div>

          {/* Extras toggles */}
          <div className="pt-3 border-t border-[#d1d9e6]/70 space-y-2.5">
            <span className="text-xs font-['Inter'] font-semibold text-stone-600 block">অতিরিক্ত প্রিভিউ অপশন:</span>
            <div className="flex items-center gap-5 text-xs font-['Inter'] text-stone-700">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeDate}
                  onChange={(e) => setIncludeDate(e.target.checked)}
                  className="rounded-md text-amber-600 focus:ring-0"
                />
                <span>তারিখ প্রদর্শন</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeRating}
                  onChange={(e) => setIncludeRating(e.target.checked)}
                  className="rounded-md text-amber-600 focus:ring-0"
                />
                <span>স্টার রেটিং (Rich Snippet)</span>
              </label>
            </div>
          </div>
        </div>

        {/* Right Preview Card (Neumorphic Live Screen) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-7 bg-[#eef2f7] rounded-3xl shadow-[8px_8px_20px_#d1d9e6,-8px_-8px_20px_#ffffff] border border-white/80 space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-sm font-['Poppins'] font-semibold text-stone-900">
                Google SERP Live Preview (লাইভ প্রিভিউ):
              </span>
              <div className="flex items-center gap-1.5 bg-[#eef2f7] p-1 rounded-xl shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff] border border-white/60">
                <button
                  type="button"
                  onClick={() => setDevice('desktop')}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-['Inter'] font-semibold border transition-colors duration-150 ${
                    device === 'desktop' ? 'neu-button text-stone-950 border-white/80' : 'text-stone-600 border-transparent hover:text-stone-900'
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                  ডেস্কটপ
                </button>
                <button
                  type="button"
                  onClick={() => setDevice('mobile')}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-['Inter'] font-semibold border transition-colors duration-150 ${
                    device === 'mobile' ? 'neu-button text-stone-950 border-white/80' : 'text-stone-600 border-transparent hover:text-stone-900'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  মোবাইল
                </button>
              </div>
            </div>

            {/* Simulated Google Search Result */}
            <div className={`p-5 rounded-2xl bg-white shadow-[inset_2px_2px_6px_rgba(0,0,0,0.06)] border border-stone-200 transition-all font-sans ${
              device === 'mobile' ? 'max-w-sm mx-auto bg-stone-50' : 'bg-white'
            }`}>
              {/* Site URL & Favicon */}
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center text-xs text-stone-600 font-bold overflow-hidden shadow-xs">
                  🔍
                </div>
                <div className="flex flex-col text-xs leading-tight">
                  <span className="text-stone-800 font-medium">{displayDomain}</span>
                  <span className="text-stone-500 text-[11px] truncate max-w-[280px]">
                    https://{displayDomain} {displaySlug && `› ${displaySlug}`}
                  </span>
                </div>
              </div>

              {/* Title Tag */}
              <h3 className={`font-medium hover:underline cursor-pointer leading-snug mb-1 text-[#1a0dab] font-sans ${
                device === 'mobile' ? 'text-base font-normal' : 'text-xl'
              }`}>
                {title.length > titleLimit ? `${title.slice(0, titleLimit)}...` : title || 'আপনার পেজের টাইটেল এখানে আসবে'}
              </h3>

              {/* Star Rating Rich Snippet */}
              {includeRating && (
                <div className="flex items-center gap-1 text-xs text-stone-600 mb-1.5">
                  <div className="flex text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <span className="font-semibold text-stone-700">৪.৯</span>
                  <span>(১২৫টি রিভিউ)</span>
                </div>
              )}

              {/* Meta Description */}
              <p className="text-stone-600 text-[14px] leading-relaxed font-sans">
                {includeDate && (
                  <span className="text-stone-400 font-medium mr-1.5">
                    ১৫ অক্টোবর, ২০২৬ —
                  </span>
                )}
                {description.length > descLimit 
                  ? `${description.slice(0, descLimit)}...` 
                  : description || 'আপনার পেজের মেটা ডেসক্রিপশন এখানে দেখা যাবে...'}
              </p>
            </div>
          </div>

          {/* Export Ready HTML in Neumorphic Container */}
          <div className="p-6 bg-[#eef2f7] rounded-3xl shadow-[8px_8px_20px_#d1d9e6,-8px_-8px_20px_#ffffff] border border-white/80 space-y-3.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold text-stone-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ওয়েবসাইটে পেস্ট করার জন্য প্রস্তুত মেটা কোড:
              </span>
              <button
                onClick={handleCopy}
                className="neu-button px-3.5 py-1.5 text-xs font-semibold text-stone-800 flex items-center gap-1.5"
              >
                {copiedCode ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>কপি সম্পন্ন!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>কোড কপি করুন</span>
                  </>
                )}
              </button>
            </div>

            <pre className="p-4 bg-stone-950 rounded-2xl overflow-x-auto text-xs font-mono text-emerald-300 leading-relaxed shadow-inner">
              <code>{generatedHtml}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
