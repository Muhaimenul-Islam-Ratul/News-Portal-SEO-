import React, { useState } from 'react';
import { 
  Code2, Copy, Check, ExternalLink, Plus, Trash2, 
  HelpCircle, Sparkles, Building2, FileText, CheckCircle2 
} from 'lucide-react';

export const SchemaGenerator: React.FC = () => {
  const [schemaType, setSchemaType] = useState<'faq' | 'article' | 'local'>('faq');
  const [copied, setCopied] = useState(false);

  // FAQ Schema state
  const [faqs, setFaqs] = useState([
    {
      q: 'এসইও (SEO) কী এবং কেন দরকার?',
      a: 'এসইও হলো কোনো বিজ্ঞাপন ছাড়া সার্চ ইঞ্জিন থেকে ওয়েবসাইটে বিনামূল্যে অর্গানিক ভিজিটর পাওয়ার বৈজ্ঞানিক পদ্ধতি।'
    },
    {
      q: 'জিইও (GEO) ও এইও (AEO) কী?',
      a: 'জিইও হলো চ্যাটজিপিটি বা জেমিনাই এর মতো এআই ইঞ্জিনে সাইটেশন পাওয়ার কৌশল, আর এইও হলো সরাসরি একক উত্তরের জন্য অপ্টিমাইজেশন।'
    }
  ]);

  // Article Schema state
  const [article, setArticle] = useState({
    headline: 'বাংলায় এসইও শেখার সেরা পূর্ণাঙ্গ রোডম্যাপ ২০২৬',
    description: 'সার্চ ইঞ্জিন অপ্টিমাইজেশন এবং আধুনিক এআই সার্চ ইঞ্জিন (GEO)-এর বিস্তারিত বাংলা নির্দেশিকা।',
    author: 'রাতুল আহমেদ',
    authorUrl: 'https://example.com/author/ratul',
    publisher: 'টেক একাডেমি বাংলা',
    publisherLogo: 'https://example.com/logo.png',
    datePublished: '2026-10-15',
    url: 'https://example.com/bangla-seo-guide'
  });

  // Local Business Schema state
  const [localBiz, setLocalBiz] = useState({
    name: 'ঢাকা ডিজিটাল এসইও এজেন্সি',
    street: 'রোড ১১, বনানী',
    city: 'ঢাকা',
    postalCode: '1213',
    country: 'BD',
    phone: '+8801712345678',
    url: 'https://example.com',
    priceRange: '$$'
  });

  // Generate JSON-LD based on schemaType
  let generatedJson = '';
  if (schemaType === 'faq') {
    generatedJson = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(item => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a
        }
      }))
    }, null, 2);
  } else if (schemaType === 'article') {
    generatedJson = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": article.headline,
      "description": article.description,
      "author": {
        "@type": "Person",
        "name": article.author,
        "url": article.authorUrl
      },
      "publisher": {
        "@type": "Organization",
        "name": article.publisher,
        "logo": {
          "@type": "ImageObject",
          "url": article.publisherLogo
        }
      },
      "datePublished": article.datePublished,
      "dateModified": new Date().toISOString().split('T')[0],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": article.url
      }
    }, null, 2);
  } else {
    generatedJson = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": localBiz.name,
      "telephone": localBiz.phone,
      "url": localBiz.url,
      "priceRange": localBiz.priceRange,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": localBiz.street,
        "addressLocality": localBiz.city,
        "postalCode": localBiz.postalCode,
        "addressCountry": localBiz.country
      }
    }, null, 2);
  }

  const finalScriptTag = `<script type="application/ld+json">\n${generatedJson}\n</script>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(finalScriptTag);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const addFaqItem = () => {
    setFaqs([...faqs, { q: 'নতুন প্রশ্ন এখানে লিখুন...', a: 'সরাসরি উত্তর এখানে প্রদান করুন।' }]);
  };

  const removeFaqItem = (index: number) => {
    if (faqs.length <= 1) return;
    setFaqs(faqs.filter((_, idx) => idx !== index));
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-10 animate-fade-in font-['Inter',sans-serif]">
      {/* Intro Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="text-xs font-['Inter'] font-semibold px-3 py-1 rounded-full neu-button text-amber-800 uppercase tracking-widest inline-block mb-1">
          Schema Generator
        </span>
        {/* User requirement: Headings: Poppins 600, 36-48px - English first, then Bangla */}
        <h2 className="font-['Poppins'] font-semibold text-2xl sm:text-3xl lg:text-[38px] text-[#1a202c]">
          Schema Markup Generator
          <span className="block text-lg sm:text-2xl text-stone-600 font-medium mt-1">
            বাংলা স্কিমা মার্কআপ জেনারেটর (JSON-LD)
          </span>
        </h2>
        {/* User requirement: Body text: Inter 400, 16px */}
        <p className="text-[#4a5568] text-[16px] font-normal font-['Inter']">
          Easily generate and copy Google-compliant Rich Snippet structured data (JSON-LD) for your website.
        </p>
      </div>

      {/* Schema Type Soft Buttons */}
      <div className="flex items-center justify-center gap-3.5 flex-wrap">
        <button
          type="button"
          onClick={() => setSchemaType('faq')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-['Inter'] font-semibold border transition-colors duration-150 ${
            schemaType === 'faq'
              ? 'neu-pressed text-amber-900 border-amber-400/60'
              : 'neu-button text-stone-700 border-white/70'
          }`}
        >
          <HelpCircle className="w-4 h-4 text-amber-600" />
          FAQ Page (প্রশ্নোত্তর)
        </button>
        <button
          type="button"
          onClick={() => setSchemaType('article')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-['Inter'] font-semibold border transition-colors duration-150 ${
            schemaType === 'article'
              ? 'neu-pressed text-amber-900 border-amber-400/60'
              : 'neu-button text-stone-700 border-white/70'
          }`}
        >
          <FileText className="w-4 h-4 text-amber-600" />
          Article / ব্লগ পোস্ট
        </button>
        <button
          type="button"
          onClick={() => setSchemaType('local')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-['Inter'] font-semibold border transition-colors duration-150 ${
            schemaType === 'local'
              ? 'neu-pressed text-amber-900 border-amber-400/60'
              : 'neu-button text-stone-700 border-white/70'
          }`}
        >
          <Building2 className="w-4 h-4 text-amber-600" />
          Local Business (প্রতিষ্ঠান)
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Input Form Fields (Neumorphic Card) */}
        <div className="lg:col-span-5 p-7 bg-[#eef2f7] rounded-3xl shadow-[8px_8px_20px_#d1d9e6,-8px_-8px_20px_#ffffff] border border-white/80 space-y-6">
          {schemaType === 'faq' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-['Poppins'] font-semibold text-stone-900 text-base">
                  Questions & Answers (প্রশ্ন ও উত্তরসমূহ):
                </h3>
                <button
                  onClick={addFaqItem}
                  className="neu-button px-3 py-1.5 text-xs font-semibold text-amber-900 flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5 text-amber-600" />
                  নতুন প্রশ্ন যোগ
                </button>
              </div>

              {faqs.map((faq, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#eef2f7] shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] border border-white/60 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-stone-600 font-['Poppins']">
                      প্রশ্ন #{idx + 1}
                    </span>
                    {faqs.length > 1 && (
                      <button
                        onClick={() => removeFaqItem(idx)}
                        className="text-stone-400 hover:text-rose-600"
                        title="মুছে ফেলুন"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                  <input
                    type="text"
                    value={faq.q}
                    onChange={(e) => {
                      const updated = [...faqs];
                      updated[idx].q = e.target.value;
                      setFaqs(updated);
                    }}
                    placeholder="প্রশ্ন লিখুন..."
                    className="w-full px-3.5 py-2 text-xs bg-[#eef2f7] rounded-xl neu-input font-medium"
                  />
                  <textarea
                    rows={2}
                    value={faq.a}
                    onChange={(e) => {
                      const updated = [...faqs];
                      updated[idx].a = e.target.value;
                      setFaqs(updated);
                    }}
                    placeholder="সরাসরি উত্তর লিখুন..."
                    className="w-full px-3.5 py-2 text-xs bg-[#eef2f7] rounded-xl neu-input resize-none"
                  />
                </div>
              ))}
            </div>
          )}

          {schemaType === 'article' && (
            <div className="space-y-4 text-xs font-['Inter']">
              <div>
                <label className="font-semibold text-stone-700 block mb-1">
                  শিরোনাম (Headline):
                </label>
                <input
                  type="text"
                  value={article.headline}
                  onChange={(e) => setArticle({ ...article, headline: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl neu-input text-xs"
                />
              </div>
              <div>
                <label className="font-semibold text-stone-700 block mb-1">
                  সারসংক্ষেপ (Description):
                </label>
                <textarea
                  rows={2}
                  value={article.description}
                  onChange={(e) => setArticle({ ...article, description: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl neu-input text-xs resize-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-stone-700 block mb-1">
                    লেখকের নাম (Author):
                  </label>
                  <input
                    type="text"
                    value={article.author}
                    onChange={(e) => setArticle({ ...article, author: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl neu-input text-xs"
                  />
                </div>
                <div>
                  <label className="font-semibold text-stone-700 block mb-1">
                    প্রকাশক (Publisher):
                  </label>
                  <input
                    type="text"
                    value={article.publisher}
                    onChange={(e) => setArticle({ ...article, publisher: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl neu-input text-xs"
                  />
                </div>
              </div>
              <div>
                <label className="font-semibold text-stone-700 block mb-1">
                  পেজের লিংক (Canonical URL):
                </label>
                <input
                  type="text"
                  value={article.url}
                  onChange={(e) => setArticle({ ...article, url: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl neu-input text-xs"
                />
              </div>
            </div>
          )}

          {schemaType === 'local' && (
            <div className="space-y-4 text-xs font-['Inter']">
              <div>
                <label className="font-semibold text-stone-700 block mb-1">
                  ব্যবসার নাম (Business Name):
                </label>
                <input
                  type="text"
                  value={localBiz.name}
                  onChange={(e) => setLocalBiz({ ...localBiz, name: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl neu-input text-xs"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-stone-700 block mb-1">
                    রাস্তা / এলাকা (Street):
                  </label>
                  <input
                    type="text"
                    value={localBiz.street}
                    onChange={(e) => setLocalBiz({ ...localBiz, street: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl neu-input text-xs"
                  />
                </div>
                <div>
                  <label className="font-semibold text-stone-700 block mb-1">
                    শহর (City):
                  </label>
                  <input
                    type="text"
                    value={localBiz.city}
                    onChange={(e) => setLocalBiz({ ...localBiz, city: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl neu-input text-xs"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-stone-700 block mb-1">
                    ফোন নম্বর (Phone):
                  </label>
                  <input
                    type="text"
                    value={localBiz.phone}
                    onChange={(e) => setLocalBiz({ ...localBiz, phone: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl neu-input text-xs"
                  />
                </div>
                <div>
                  <label className="font-semibold text-stone-700 block mb-1">
                    ওয়েবসাইট (Website URL):
                  </label>
                  <input
                    type="text"
                    value={localBiz.url}
                    onChange={(e) => setLocalBiz({ ...localBiz, url: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl neu-input text-xs"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Code Output (Neumorphic Screen) */}
        <div className="lg:col-span-7 p-7 bg-[#eef2f7] rounded-3xl shadow-[8px_8px_20px_#d1d9e6,-8px_-8px_20px_#ffffff] border border-white/80 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-stone-800 flex items-center gap-1.5 font-bold">
              <Code2 className="w-4 h-4 text-blue-600" />
              প্রস্তুত JSON-LD কোড (ওয়েবসাইটের &lt;head&gt; সেকশনে বসান)
            </span>
            <button
              onClick={handleCopy}
              className="neu-button px-3.5 py-1.5 text-xs font-semibold text-stone-800 flex items-center gap-1.5"
            >
              {copied ? (
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

          <pre className="p-4 bg-stone-950 rounded-2xl overflow-x-auto text-xs font-mono text-emerald-300 leading-relaxed max-h-[380px] shadow-inner">
            <code>{finalScriptTag}</code>
          </pre>

          <div className="pt-2 border-t border-[#d1d9e6]/70 flex items-center justify-between text-xs text-stone-500 font-['Inter']">
            <span>বৈধতা পরীক্ষা করতে চান?</span>
            <a
              href="https://search.google.com/test/rich-results"
              target="_blank"
              rel="noreferrer"
              className="text-amber-700 font-semibold hover:underline flex items-center gap-1"
            >
              Google Rich Results Test-এ যাচাই করুন
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
