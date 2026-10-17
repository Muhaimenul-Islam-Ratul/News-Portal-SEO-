import React, { useState } from 'react';
import { 
  WandSparkles, X, Send, Sparkles, MessageSquare, 
  HelpCircle, CheckCircle2, ArrowRight, Lightbulb 
} from 'lucide-react';
import { searchTopics, SeoTopic } from '../data/seoRoadmapData';

interface AiTutorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTopic: (topic: SeoTopic) => void;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'tutor';
  text: string;
  suggestedTopicId?: string;
}

const PRESET_QUESTIONS = [
  'জিইও (GEO) কী এবং কীভাবে আমার সাইট প্রস্তুত করব?',
  'ক্যানোনিকাল ট্যাগ বনাম ৩০১ রিডিরেক্ট এর পার্থক্য কী?',
  'কোর ওয়েব ভাইটালস (LCP, INP) কীভাবে ঠিক করব?',
  'গুগলের স্প্যাম পলিসি এবং পেনাল্টি থেকে বাঁচার উপায় কী?',
  'একটি নতুন বাংলা ওয়েবসাইটের কীওয়ার্ড রিসার্চ কীভাবে করব?'
];

export const AiTutorModal: React.FC<AiTutorModalProps> = ({
  isOpen,
  onClose,
  onOpenTopic,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'tutor',
      text: 'আসসালামু আলাইকুম! আমি আপনার ব্যক্তিগত বাংলা এসইও টিউটর (AI SEO Tutor)।\nসার্চ ইঞ্জিন অপ্টিমাইজেশন, টেকনিক্যাল এসইও, কন্টেন্ট কৌশল বা আধুনিক জিইও (GEO) সম্পর্কিত যেকোনো প্রশ্ন আমাকে বাংলায় জিজ্ঞেস করতে পারেন।'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  if (!isOpen) return null;

  const handleSend = (queryText?: string) => {
    const textToSend = queryText || inputText;
    if (!textToSend.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: textToSend
    };

    setMessages(prev => [...prev, userMsg]);
    if (!queryText) setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const q = textToSend.toLowerCase();
      let responseText = '';
      let suggestedTopicId: string | undefined = undefined;

      if (q.includes('geo') || q.includes('জিইও') || q.includes('generative')) {
        responseText = 'জিইও (Generative Engine Optimization) হলো ChatGPT, Perplexity ও Google AI Overviews-এর মতো এআই ইঞ্জিনে আপনার সাইটের সাইটেশন বা নাম তোলার কৌশল।\n\nপ্রধান ৩টি পদক্ষেপ:\n১. কন্টেন্টের শুরুতে স্পষ্ট TL;DR বা সরাসরি উত্তর দিন।\n২. নিজস্ব প্রাথমিক ডেটা, স্ট্যাটিস্টিকস ও কোটেশন ব্যবহার করুন (এটি এআই সাইটেশন ৩০-৪০% বাড়ায়)।\n৩. টেবিল ও বুলেট পয়েন্ট দিয়ে কন্টেন্ট বিন্যাস করুন যাতে এআই মডেল সহজে পার্স করতে পারে।';
        suggestedTopicId = 'what-is-geo';
      } else if (q.includes('canonical') || q.includes('ক্যানোনিকাল') || q.includes('redirect') || q.includes('রিডিরেক্ট')) {
        responseText = 'ক্যানোনিকাল ট্যাগ (<link rel="canonical">) ব্যবহার করা হয় যখন একই বা কাছাকাছি কন্টেন্ট একাধিক ভিন্ন ইউআরএলে সচল থাকে, এবং আপনি গুগলকে বলতে চান কোন ইউআরএলটি মাস্টার পেজ।\n\nঅন্যদিকে ৩০১ রিডিরেক্ট (301 Permanent Redirect) ব্যবহার করা হয় যখন কোনো পেজ স্থায়ীভাবে নতুন ঠিকানায় চলে গেছে এবং পুরানো পেজটি আর চালু রাখা হবে না। ৩০১ রিডিরেক্ট ব্যাকলিংক ভ্যালু নতুন পেজে পাস করে।';
        suggestedTopicId = 'canonical-concept';
      } else if (q.includes('vitals') || q.includes('ভাইটালস') || q.includes('inp') || q.includes('lcp') || q.includes('speed')) {
        responseText = 'কোর ওয়েব ভাইটালস (Core Web Vitals) গুগলের পেজ এক্সপেরিয়েন্সের প্রধান ৩টি মেট্রিক:\n১. LCP (Largest Contentful Paint): সবচেয়ে বড় কন্টেন্ট ২.৫ সেকেন্ডের মধ্যে লোড হতে হবে। সমাধান: ইমেজ WebP করা ও সিডিএন ব্যবহার।\n২. INP (Interaction to Next Paint): বাটনে ক্লিক করলে ২০০ মিলি-সেকেন্ডের মধ্যে রেসপন্স করতে হবে। সমাধান: ভারী জাভাস্ক্রিপ্ট কমানো।\n৩. CLS: লেআউট শিফট ০.১ এর নিচে রাখতে প্রতিটি ছবির width/height এইচটিএমএলে উল্লেখ করুন।';
        suggestedTopicId = 'core-web-vitals';
      } else if (q.includes('spam') || q.includes('স্প্যাম') || q.includes('পেনাল্টি') || q.includes('penalty')) {
        responseText = 'গুগলের স্প্যাম পলিসি অত্যন্ত কঠোর। বিশেষ করে ৫টি ক্ষেত্রে সাবধান:\n১. Scaled Content Abuse: মানুষের হাত ছাড়া এআই দিয়ে শত শত বাল্ক কন্টেন্ট পোস্ট করা।\n২. Link Schemes: ব্যাকলিংক কেনাবেচা বা পিবিএন নেটওয়ার্ক।\n৩. Site Reputation Abuse: নামকরা সাইটে থার্ড-পার্টির অপকন্টেন্ট (প্যারাসাইট এসইও)।\n৪. ডোরওয়ে পেজ ও ক্লোকিং।\nহোয়াইট হ্যাট এসইও মেনে চলুন এবং গুগল সার্চ কনসোলে ম্যানুয়াল অ্যাকশন চেক করুন।';
        suggestedTopicId = 'spam-policies';
      } else if (q.includes('keyword') || q.includes('কীওয়ার্ড') || q.includes('রিসার্চ')) {
        responseText = 'নতুন ওয়েবসাইটের জন্য কীওয়ার্ড রিসার্চের সেরা ফ্রেমওয়ার্ক:\n১. লং-টেইল কীওয়ার্ড (৩-৫ শব্দের) খুঁজুন যেখানে Keyword Difficulty (KD) ২০-এর নিচে।\n২. ব্যবহারকারীর Search Intent বুঝুন (তারা কি তথ্য চায়, নাকি কিনতে চায়)।\n৩. গুগলের People Also Ask (PAA) ও ফোরামের প্রশ্নগুলো খুঁজে সাবহেডিং বানান।';
        suggestedTopicId = 'keyword-research';
      } else {
        const results = searchTopics(textToSend);
        if (results.length > 0) {
          const top = results[0];
          responseText = `আপনার প্রশ্নের সাথে সম্পর্কিত টপিক: "${top.titleBn} (${top.titleEn})"।\n\nসারসংক্ষেপ: ${top.summary}\n\nকেন গুরুত্বপূর্ণ: ${top.whyItMatters[0] || ''}`;
          suggestedTopicId = top.id;
        } else {
          responseText = 'আপনার প্রশ্নটির জন্য ধন্যবাদ! এসইও-এর যেকোনো সুনির্দিষ্ট টার্ম (যেমন: ব্যাকলিংক, রোবটস, সাইটম্যাপ, ই-ই-এ-টি, স্কিমা মার্কআপ বা অ্যানালিটিক্স) সম্পর্কে জানতে চান? আমাদের রোডম্যাপে এই প্রতিটি বিষয়ের পূর্ণাঙ্গ বাংলা গাইড যুক্ত আছে।';
        }
      }

      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'tutor',
          text: responseText,
          suggestedTopicId
        }
      ]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/40 backdrop-blur-xs animate-fade-in font-['Inter',sans-serif]">
      <div 
        className="relative w-full max-w-2xl h-[620px] max-h-[92vh] flex flex-col bg-[#eef2f7] rounded-3xl shadow-[16px_16px_36px_#cbd5e1,-16px_-16px_36px_#ffffff] border border-white/80 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tutor Header (Neumorphic) */}
        <div className="px-6 py-5 bg-[#eef2f7] border-b border-[#d1d9e6]/70 shadow-[0_2px_8px_rgba(209,217,230,0.3)] flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-amber-400 text-stone-950 flex items-center justify-center shadow-xs">
              <WandSparkles className="w-5 h-5 text-stone-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-['Poppins'] font-semibold text-lg text-stone-900">
                  AI SEO Tutor (বাংলা এআই টিউটর)
                </h3>
                <span className="text-[10px] font-['Inter'] px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold border border-emerald-200">
                  Online
                </span>
              </div>
              <p className="text-xs font-['Inter'] text-stone-500">
                এসইও, জিইও ও টেকনিক্যাল বিষয়ে বাংলায় তাৎক্ষণিক সহায়তা
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl neu-button text-stone-500 hover:text-stone-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Messages Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4 bg-[#eef2f7] text-[15px] font-['Inter']">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] p-4 rounded-2xl whitespace-pre-wrap leading-relaxed ${
                  msg.sender === 'user'
                    ? 'neu-button-dark text-white rounded-br-none font-normal'
                    : 'bg-[#eef2f7] shadow-[5px_5px_12px_#d1d9e6,-5px_-5px_12px_#ffffff] text-stone-800 border border-white/80 rounded-bl-none font-normal'
                }`}
              >
                {msg.text}
              </div>

              {msg.suggestedTopicId && (
                <button
                  onClick={() => {
                    const match = searchTopics(msg.suggestedTopicId!)[0];
                    if (match) {
                      onOpenTopic(match);
                      onClose();
                    }
                  }}
                  className="mt-2.5 flex items-center gap-1.5 text-xs font-['Inter'] font-semibold text-blue-900 neu-button px-3.5 py-2"
                >
                  <span>সম্পূর্ণ বাংলা গাইড দেখুন</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 p-3.5 bg-[#eef2f7] shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] rounded-2xl w-max text-stone-600 text-xs font-['Inter']">
              <Sparkles className="w-4 h-4 text-amber-600 animate-spin" />
              <span>টিউটর উত্তর তৈরি করছে...</span>
            </div>
          )}
        </div>

        {/* Preset Questions Suggestions */}
        <div className="px-5 py-2.5 bg-[#eef2f7] border-t border-[#d1d9e6]/70 overflow-x-auto flex items-center gap-2 text-xs font-['Inter']">
          <span className="text-stone-500 font-semibold flex-shrink-0 flex items-center gap-1">
            <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
            পরামর্শ:
          </span>
          {PRESET_QUESTIONS.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              className="px-3 py-1.5 rounded-xl neu-button text-stone-700 whitespace-nowrap text-xs"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-[#eef2f7] border-t border-[#d1d9e6]/70 flex items-center gap-2.5">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="আপনার এসইও প্রশ্নটি এখানে লিখুন..."
            className="flex-1 px-4 py-3 rounded-2xl neu-input text-[15px] font-['Inter'] text-stone-800"
          />
          <button
            onClick={() => handleSend()}
            disabled={!inputText.trim()}
            className="neu-button-dark p-3 rounded-2xl disabled:opacity-40"
            title="পাঠান"
          >
            <Send className="w-4 h-4 text-amber-300" />
          </button>
        </div>
      </div>
    </div>
  );
};
