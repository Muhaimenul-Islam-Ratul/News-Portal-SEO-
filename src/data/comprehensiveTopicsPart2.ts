import { SeoTopic } from './seoRoadmapData';

export const COMPREHENSIVE_TOPICS_PART2: Record<string, SeoTopic> = {
  // --- TECHNICAL FOUNDATION ---
  'folders-url-structure': {
    id: 'folders-url-structure',
    titleEn: 'Folders & URL Structure',
    titleBn: 'ফোল্ডার এবং ইউআরএল গঠন',
    category: 'টেকনিক্যাল এসইও ভিত্তি',
    categoryId: 'technical-foundation',
    level: 'বেসিক',
    readTime: '৩ মিনিট',
    summary: 'ওয়েবসাইটের লজিক্যাল ডিরেক্টরি হায়ারার্কি এবং ছোট, বর্ণনামূলক ও রিডেবল ইউআরএল গঠন।',
    fullDescription: [
      'ফোল্ডার স্ট্রাকচার হলো ওয়েবসাইটের পেজগুলো কীভাবে ক্যাটাগরি ফোল্ডারে সাজানো থাকে (যেমন: example.com/category/subcategory/page)।',
      'ক্লিন ইউআরএল সার্চ ইঞ্জিন ক্রলার ও মানব পাঠক উভয়কেই পেজের বিষয়বস্তু এক নজরে বুঝতে সাহায্য করে।'
    ],
    whyItMatters: ['অগোছালো ও সংখ্যাযুক্ত ইউআরএল (যেমন: /p?id=3849) সার্চ ইঞ্জিনের ইনডেক্সিংয়ে নেতিবাচক প্রভাব ফেলে।'],
    howToImplement: ['ইউআরএল ছোট রাখুন, স্পেসের বদলে হাইফেন (-) ব্যবহার করুন এবং তারিখ বা স্টপ ওয়ার্ড পরিহার করুন।'],
    realWorldExample: {
      title: 'বাস্তব উদাহরণ: ক্লিন ইউআরএলে ক্লিক বৃদ্ধি',
      scenario: 'একটি সাইট /article?post_id=98734 বদলে /seo/on-page-guide করায় গুগলে তাদের ক্লিক থ্রু রেট (CTR) ১৮% বৃদ্ধি পেয়েছে।',
      keyTakeaway: 'সহজে পড়ার উপযোগী ইউআরএল ব্যবহারকারী ও সার্চ ইঞ্জিনের আস্থা বাড়ায়।'
    },
    commonMistakes: ['ইউআরএলে ক্যাপিটাল লেটার, আন্ডারস্কোর (_) বা অদ্ভুত চিহ্ন ব্যবহার করা।'],
    bestTools: ['Screaming Frog URL Report']
  },

  'internal-linking': {
    id: 'internal-linking',
    titleEn: 'Internal Linking',
    titleBn: 'অভ্যন্তরীণ লিংকিং কৌশল (Internal Linking)',
    category: 'টেকনিক্যাল এসইও ভিত্তি',
    categoryId: 'technical-foundation',
    level: 'ইন্টারমিডিয়েট',
    readTime: '৪ মিনিট',
    summary: 'একই ওয়েবসাইটের এক পেজ থেকে অন্য সম্পর্কিত পেজে কার্যকর হাইপারলিংক তৈরি করে পেজর‍্যাংক ও অথরিটি বিতরণ।',
    fullDescription: [
      'ইন্টারনাল লিংকিং গুগলের ক্রলারকে নতুন পেজ খুঁজে পেতে এবং কোন পেজটি সবচেয়ে গুরুত্বপূর্ণ তা বুঝতে সাহায্য করে।',
      'প্রাসঙ্গিক অ্যাঙ্কর টেক্সট ব্যবহার করে লিংক দিলে সেই পেজের কিওয়ার্ড র‍্যাংকিং ক্ষমতা বৃদ্ধি পায়।'
    ],
    whyItMatters: ['সাইটের লিংক জুস বা পেজর‍্যাংক সমস্ত পেজে সুষমভাবে প্রবাহিত হয় এবং কোনো পেজ এতিম (Orphan) থাকে না।'],
    howToImplement: ['প্রতিটি নতুন আর্টিকেল লেখার সময় পুরোনো প্রাসঙ্গিক ৩-৫টি আর্টিকেলে লিংক দিন।'],
    realWorldExample: {
      title: 'বাস্তব উদাহরণ: ইন্টারনাল লিংক দিয়ে র‍্যাংক বুস্ট',
      scenario: 'একটি ব্লগ তাদের সবচেয়ে শক্তিশালী হোমপেজ ও গাইড থেকে নতুন সার্ভিস পেজে ইন্টারনাল লিংক দেওয়ার ২ সপ্তাহের মধ্যে পেজটি পেজ ৪ থেকে পেজ ১-এ উঠে আসে।',
      keyTakeaway: 'অভ্যন্তরীণ লিংক হলো ফ্রি পেজর‍্যাংক বিতরণের সবচেয়ে শক্তিশালী হাতিয়ার।'
    },
    commonMistakes: ['সবসময় "এখানে ক্লিক করুন" অ্যাঙ্কর টেক্সট দিয়ে লিংক করা।'],
    bestTools: ['Ahrefs Internal Link Opportunities', 'Yoast SEO']
  },

  'site-hierarchy-depth': {
    id: 'site-hierarchy-depth',
    titleEn: 'Site Hierarchy & Depth',
    titleBn: 'সাইট হায়ারার্কি ও ক্লিক ডেপথ (3-Click Rule)',
    category: 'টেকনিক্যাল এসইও ভিত্তি',
    categoryId: 'technical-foundation',
    level: 'ইন্টারমিডিয়েট',
    readTime: '৪ মিনিট',
    summary: 'হোমপেজ থেকে যেকোনো গুরুত্বপূর্ণ পৃষ্ঠায় পৌঁছাতে সর্বোচ্চ ৩টি ক্লিকের নিয়ম এবং ফ্ল্যাট আর্কিটেকচার।',
    fullDescription: [
      'ক্লিক ডেপথ (Click Depth) হলো হোমপেজ থেকে কোনো নির্দিষ্ট পেজে যেতে ব্যবহারকারী বা ক্রলারকে কতবার ক্লিক করতে হয়।',
      '৩ ক্লিকের বেশি দূরে থাকা পেজগুলো গুগলবট খুব কম ক্রল করে এবং কম গুরুত্বপূর্ণ মনে করে।'
    ],
    whyItMatters: ['গভীর পেজগুলো দ্রুত ক্রল ও ইনডেক্স হয় না, যার ফলে ট্রাফিক হারায়।'],
    howToImplement: ['ক্যাটাগরি পেজ, সাইডবার ও ফুটার থেকে গুরুত্বপূর্ণ উপ-পেজগুলোকে ৩ ক্লিকের মধ্যে লিংক করুন।'],
    realWorldExample: {
      title: 'বাস্তব উদাহরণ: ক্লিক ডেপথ কমিয়ে ইনডেক্সিং সমাধান',
      scenario: 'একটি ই-কমার্স সাইটে ১০০০টি পণ্য হোমপেজ থেকে ৬ ক্লিক দূরে ছিল। তারা ক্যাটাগরি মেনু রিডিজাইন করে ২ ক্লিকের আওতায় আনতেই ইনডেক্সিং ৯৫% এ উন্নীত হয়।',
      keyTakeaway: 'যত কম ক্লিকে পেজে পৌঁছানো যাবে, গুগলের চোখে তার মূল্য তত বেশি।'
    },
    commonMistakes: ['খুব বেশি সাবফোল্ডারের গভীরে পেজ লুকিয়ে রাখা।'],
    bestTools: ['Screaming Frog Crawl Depth Report']
  },

  'machine-readable-content': {
    id: 'machine-readable-content',
    titleEn: 'Machine-Readable Content',
    titleBn: 'মেশিন-রিডেবল কন্টেন্ট (Machine-Readable Content)',
    category: 'টেকনিক্যাল এসইও ভিত্তি',
    categoryId: 'technical-foundation',
    level: 'এডভান্সড',
    readTime: '৪ মিনিট',
    summary: 'সার্চ ইঞ্জিন বট ও এআই এজেন্টদের জন্য টেক্সট, টেবিল ও স্ট্রাকচার্ড ডেটা আকারে সহজে পার্স করার উপযোগী কন্টেন্ট বিন্যাস।',
    fullDescription: [
      'ইমেজ বা ফ্ল্যাশের ভেতরে টেক্সট না রেখে সরাসরি এইচটিএমএল টেক্সট, ডেটা টেবিল এবং মেটাডাটা আকারে তথ্য রাখা যাতে অ্যালগরিদম ও এআই সরাসরি প্রসেস করতে পারে।'
    ],
    whyItMatters: ['এআই অ্যান্সার ইঞ্জিন ও গুগল বট মেশিন-রিডেবল ডেটা থেকে দ্রুত উত্তর এক্সট্রাক্ট করে।'],
    howToImplement: ['টেবিল, লিস্ট, হেডিং ও স্কিমা দিয়ে কন্টেন্ট সাজান।'],
    realWorldExample: {
      title: 'বাস্তব উদাহরণ: ইমেজ টু এইচটিএমএল টেবিল কনভার্সন',
      scenario: 'একটি ব্যাংক তাদের ঋণের সুদের হারের ছবি সরিয়ে সরাসরি এইচটিএমএল টেবিল দেওয়ায় গুগলের এআই ওভারভিউ সরাসরি তাদের সাইটের তথ্য সোর্স হিসেবে ব্যবহার করেছে।',
      keyTakeaway: 'মেশিন যা পড়তে পারে, সার্চ ইঞ্জিনে তারই জয় হয়।'
    },
    commonMistakes: ['টেক্সট ও মূল্য তালিকার ছবি বানিয়ে ওয়েবসাইটে বসিয়ে রাখা।'],
    bestTools: ['Google Rich Results Test']
  },

  'sitemaps': {
    id: 'sitemaps',
    titleEn: 'Sitemaps',
    titleBn: 'এক্সএমএল সাইটম্যাপ (XML Sitemaps)',
    category: 'টেকনিক্যাল এসইও ভিত্তি',
    categoryId: 'technical-foundation',
    level: 'বেসিক',
    readTime: '৩ মিনিট',
    summary: 'ওয়েবসাইটের প্রতিটি বৈধ ও গুরুত্বপূর্ণ পেজের তালিকাযুক্ত মানচিত্র যা সার্চ ইঞ্জিন ক্রলারকে এক নজরে পথ দেখায়।',
    fullDescription: [
      'XML সাইটম্যাপ হলো একটি এক্সএমএল ফাইল যা গুগলের কাছে আপনার সাইটের প্রতিটি পেজ, ইমেজ এবং তাদের সর্বশেষ আপডেটের তারিখ তুলে ধরে।'
    ],
    whyItMatters: ['নতুন বা আপডেট হওয়া কন্টেন্ট দ্রুত গুগলবট খুঁজে পায়।'],
    howToImplement: ['সাইটম্যাপ তৈরি করে robots.txt এ লিংক দিন এবং Google Search Console-এ সাবমিট করুন।'],
    realWorldExample: {
      title: 'বাস্তব উদাহরণ: সাইটম্যাপ সাবমিশনে দ্রুত ইনডেক্স',
      scenario: 'একটি নিউজ পোর্টাল নিউজ সাইটম্যাপ চালু করায় নতুন খবর প্রকাশের মাত্র ৫ মিনিটের মধ্যে গুগলের সার্চে চলে আসে।',
      keyTakeaway: 'সাইটম্যাপ হলো গুগলবটের জন্য সাইটের সার্বক্ষণিক রোডম্যাপ।'
    },
    commonMistakes: ['সাইটম্যাপে ৪০৪ ব্রোকেন পেজ বা নোইনডেক্স পেজ অন্তর্ভুক্ত রাখা।'],
    bestTools: ['XML-Sitemaps.com', 'Rank Math']
  },

  'robots-txt': {
    id: 'robots-txt',
    titleEn: 'Robots.txt',
    titleBn: 'রোবটস টেক্সট ফাইল (Robots.txt Configuration)',
    category: 'টেকনিক্যাল এসইও ভিত্তি',
    categoryId: 'technical-foundation',
    level: 'বেসিক',
    readTime: '৩ মিনিট',
    summary: 'ওয়েবসাইটের রুট ডিরেক্টরিতে থাকা ফাইল যা সার্চ ইঞ্জিন বট ও এআই ক্রলারদের কোন পেজে ঢুকবে আর কোথায় ঢুকবে না তা বলে দেয়।',
    fullDescription: [
      'Robots.txt ফাইলের মাধ্যমে আপনি অ্যাডমিন প্যানেল, ব্যক্তিগত ডেটা বা সার্ভার রিসোর্স নষ্টকারী অংশগুলোতে ক্রলারদের প্রবেশ নিষেধ (Disallow) করতে পারেন।'
    ],
    whyItMatters: ['ক্রল বাজেট সাশ্রয় করে এবং গোপনীয় ফোল্ডার ক্রল হওয়া ঠেকায়।'],
    howToImplement: ['রুট ডোমেনে robots.txt ফাইল তৈরি করুন এবং সঠিক User-agent নিয়ম দিন।'],
    realWorldExample: {
      title: 'বাস্তব উদাহরণ: ভুল robots.txt-এর বিপর্যয়',
      scenario: 'ভুল করে Disallow: /wp-content/ দিয়ে দেওয়ায় গুগল সিএসএস পড়তে না পেরে সাইটকে মোবাইল আনফ্রেন্ডলি ধরে র‍্যাংক নামিয়ে দিয়েছিল। ফিক্স করার পর তা ঠিক হয়।',
      keyTakeaway: 'রোবটস ফাইলে একটি ছোট্ট ভুল পুরো সাইটকে অন্ধকার করে দিতে পারে।'
    },
    commonMistakes: ['ভুলবশত সিএসএস বা জাভাস্ক্রিপ্ট ফাইল ব্লক করে রাখা।'],
    bestTools: ['Google Search Console Robots.txt Tester']
  },

  'redirect-chains-loops': {
    id: 'redirect-chains-loops',
    titleEn: 'Redirect Chains & Loops',
    titleBn: 'রিডিরেক্ট চেইন এবং লুপ (Redirect Chains & Loops)',
    category: 'টেকনিক্যাল এসইও ভিত্তি',
    categoryId: 'technical-foundation',
    level: 'ইন্টারমিডিয়েট',
    readTime: '৩ মিনিট',
    summary: 'একাধিক রিডিরেক্টের দীর্ঘ ধারাবাহিকতা (A -> B -> C) বা বৃত্তাকার ফাঁদ (A -> B -> A) যা ক্রল বাজেট ও সাইট স্পিড ধ্বংস করে।',
    fullDescription: [
      'Redirect Chain হলো যখন পেজ A রিডিরেক্ট হয় B-তে, B আবার যায় C-তে। এতে প্রতিটি ধাপে পেজ লোড ধীর হয় এবং গুগল ক্রলিং বন্ধ করে দিতে পারে।'
    ],
    whyItMatters: ['পেজর‍্যাংক নষ্ট হয় এবং ব্যবহারকারী পেজ লোডে দেরি দেখে বাউন্স করে চলে যায়।'],
    howToImplement: ['সর্বদা সরাসরি ফাইনাল ইউআরএলে রিডিরেক্ট করুন (A -> C)।'],
    realWorldExample: {
      title: 'বাস্তব উদাহরণ: চেইন ভেঙে স্পিড দ্বিগুণ',
      scenario: 'একটি সাইট HTTP থেকে HTTPS, তারপর নন-WWW থেকে WWW রিডিরেক্ট চেইন ফিক্স করে সরাসরি ১ ক্লিকে রিডিরেক্ট করায় লোডিং স্পিড ১.২ সেকেন্ড কমেছে।',
      keyTakeaway: 'প্রতিটি রিডিরেক্ট অতিরিক্ত লেটেন্সি তৈরি করে; ১ ধাপেই সমাপ্তি টানুন।'
    },
    commonMistakes: ['সাইট মাইগ্রেশনের পুরোনো রিডিরেক্টের ওপর আবার নতুন রিডিরেক্ট চাপানো।'],
    bestTools: ['Redirect Path Chrome Extension', 'Screaming Frog']
  },

  'crawl-budget': {
    id: 'crawl-budget',
    titleEn: 'Crawl Budget',
    titleBn: 'ক্রল বাজেট অপ্টিমাইজেশন (Crawl Budget)',
    category: 'টেকনিক্যাল এসইও ভিত্তি',
    categoryId: 'technical-foundation',
    level: 'এডভান্সড',
    readTime: '৪ মিনিট',
    summary: 'গুগলবট একটি নির্দিষ্ট সময়ে আপনার ওয়েবসাইটের কতগুলো পৃষ্ঠা স্ক্যান করবে তার বরাদ্দকৃত সীমা।',
    fullDescription: [
      'Crawl Budget নির্ধারিত হয় দুটি বিষয়ে: সার্ভারের স্পিড ও ধারণক্ষমতা (Crawl Rate Limit) এবং সাইটের জনপ্রিয়তা ও কন্টেন্ট আপডেটের হার (Crawl Demand)।',
      'বাজে সাইট স্ট্রাকচারে ফালতু ফিল্টার পেজ ক্রল বাজেট অপচয় করে গুরুত্বপূর্ণ পেজের ইনডেক্সিং আটকে দেয়।'
    ],
    whyItMatters: ['বড় সাইটের নতুন কন্টেন্ট দ্রুত ইনডেক্স হতে ক্রল বাজেট বাঁচানো অপরিহার্য।'],
    howToImplement: ['অপ্রয়োজনীয় ফ্যাসেটেড ইউআরএল robots.txt দিয়ে ব্লক করুন এবং সাইটের লোডিং স্পিড বাড়ান।'],
    realWorldExample: {
      title: 'বাস্তব উদাহরণ: ক্রল বাজেট বাঁচিয়ে লাখো পেজ ইনডেক্স',
      scenario: 'একটি ই-কমার্স সাইট তাদের কালার ও সাইজ ফিল্টারে ক্রলিং বন্ধ করায় গুগলবট তাদের ৫০,০০০ আসল প্রোডাক্ট পেজ দ্বিগুণ দ্রুত ক্রল করে নিয়েছে।',
      keyTakeaway: 'ফালতু পেজ ক্রল হতে না দিলে গুরুত্বপূর্ণ পেজ দ্রুত ইনডেক্স হয়।'
    },
    commonMistakes: ['সার্ভার ধীরগতি থাকা সত্ত্বেও ক্রল বাজেটের কথা না ভাবা।'],
    bestTools: ['Google Search Console Crawl Stats']
  },

  'index-coverage-bloat': {
    id: 'index-coverage-bloat',
    titleEn: 'Index Coverage & Bloat',
    titleBn: 'ইনডেক্স ব্লোট সমস্যা ও সমাধান (Index Coverage & Bloat)',
    category: 'টেকনিক্যাল এসইও ভিত্তি',
    categoryId: 'technical-foundation',
    level: 'এডভান্সড',
    readTime: '৪ মিনিট',
    summary: 'সাইটে থাকা আসল ভালো কন্টেন্টের চেয়ে হাজার হাজার অপ্রয়োজনীয় ও ডুপ্লিকেট পেজ গুগলে ইনডেক্স হয়ে থাকা।',
    fullDescription: [
      'Index Bloat ঘটে যখন অভ্যন্তরীণ সার্চ পেজ, ট্যাগ পেজ বা ফিল্টারিং ইউআরএল ভুলবশত গুগলে ইনডেক্স হয়ে যায়। এতে পুরো ডোমেনের গড় কোয়ালিটি স্কোর কমে যায়।'
    ],
    whyItMatters: ['গুগল সাইটটিকে লো-কোয়ালিটি থিন কন্টেন্টের আড্ডাখানা মনে করে মূল পেজগুলোর র‍্যাংক কমিয়ে দেয়।'],
    howToImplement: ['অপ্রয়োজনীয় ট্যাগ ও অভ্যন্তরীণ সার্চ রেজাল্ট পেজে noindex মেটা ট্যাগ বসান।'],
    realWorldExample: {
      title: 'বাস্তব উদাহরণ: ইনডেক্স ব্লোট কমিয়ে ট্রাফিক পুনরুদ্ধার',
      scenario: 'একটি ব্লগ তাদের অপ্রয়োজনীয় ৫,০০০ খালি ট্যাগ পেজ noindex করে দেওয়ায় তাদের মূল ১০০টি আর্টিকেলের গড় র‍্যাংক ১৫ ধাপ উপরে উঠে এসেছে।',
      keyTakeaway: 'গুগলে যত কম ও সেরা পেজ ইনডেক্স থাকবে, সাইটের কোয়ালিটি স্কোর তত বেশি হবে।'
    },
    commonMistakes: ['অটোমেটেড সার্চ পেজ গুগলে ইনডেক্স হতে দেওয়া।'],
    bestTools: ['GSC Pages Report']
  },

  'log-file-analysis': {
    id: 'log-file-analysis',
    titleEn: 'Log File Analysis',
    titleBn: 'সার্ভার লগ ফাইল বিশ্লেষণ (Log File Analysis)',
    category: 'টেকনিক্যাল এসইও ভিত্তি',
    categoryId: 'technical-foundation',
    level: 'এডভান্সড',
    readTime: '৫ মিনিট',
    summary: 'সার্ভারের অ্যাক্সেস লগ পড়ে গুগলবট ও অন্যান্য ক্রলারদের প্রতিটি আগমন, ক্রল ফ্রিকোয়েন্সি ও ইরর সরাসরি দেখা।',
    fullDescription: [
      'লগ ফাইল হলো একমাত্র ১০০% খাঁটি সত্য ডেটা যা প্রমাণ করে গুগলবট আসলেই আপনার সাইটে কখন এসেছে, কোন ইউআরএল হিট করেছে এবং কী স্ট্যাটাস কোড পেয়েছে।'
    ],
    whyItMatters: ['গুগলবটের আচরণ বাস্তবে দেখে টেকনিক্যাল এসইও-এর অদৃশ্য সমস্যাগুলো ধরা যায়।'],
    howToImplement: ['সার্ভারের access.log ফাইল ডাউনলোড করে Screaming Frog Log Analyzer দিয়ে পার্স করুন।'],
    realWorldExample: {
      title: 'বাস্তব উদাহরণ: লগ ফাইলে লুকানো ৫০০ ইরর ধরা',
      scenario: 'টুলসে কোনো সমস্যা না দেখালেও লগ ফাইলে দেখা গেল গুগলবট আসার সময় ডাটাবেস ক্র্যাশ করে ৫০৩ ইরর পাচ্ছিল। সার্ভার ক্যাশিং আপগ্রেড করে ট্রাফিক রক্ষা করা হয়েছে।',
      keyTakeaway: 'সার্চ কনসোল কিছু ডেটা স্যাম্পল করে, কিন্তু লগ ফাইল সম্পূর্ণ বাস্তব চিত্র দেখায়।'
    },
    commonMistakes: ['লগ ফাইল অনেক বড় দেখে বিশ্লেষণ না করে ফেলে রাখা।'],
    bestTools: ['Screaming Frog Log File Analyser', 'Semrush Log File Tool']
  },

  'managing-ai-crawlers': {
    id: 'managing-ai-crawlers',
    titleEn: 'Managing AI Crawlers',
    titleBn: 'এআই ক্রলার নিয়ন্ত্রণ (Managing AI Crawlers)',
    category: 'টেকনিক্যাল এসইও ভিত্তি',
    categoryId: 'technical-foundation',
    level: 'এডভান্সড',
    badge: 'Modern 2026',
    readTime: '৪ মিনিট',
    summary: 'GPTBot, ClaudeBot, PerplexityBot ইত্যাদিকে ইচ্ছামতো অনুমতি বা ব্লক করার কৌশল।',
    fullDescription: [
      '২০২৩-২০২৬ সালে এআই ইঞ্জিনগুলো নিজেদের বট তৈরি করেছে। যেমন GPTBot (OpenAI), ClaudeBot (Anthropic), PerplexityBot।',
      'এদেরকে robots.txt দিয়ে সম্পূর্ণ ব্লক করলে এআই সার্চে আপনার সাইট সাইটেশন নাও পেতে পারে।'
    ],
    whyItMatters: ['এআই সার্চ ট্রাফিকের জন্য অনুমতি দেওয়া এবং গোপনীয় ডেটা স্ক্র্যাপিং ঠেকানো দুটির ভারসাম্য রাখা।'],
    howToImplement: ['robots.txt ফাইলে সুনির্দিষ্ট এআই বটের জন্য রুলস সেট করুন।'],
    realWorldExample: {
      title: 'বাস্তব উদাহরণ: পারপ্লেক্সিটিকে অনুমতি দিয়ে ট্রাফিক',
      scenario: 'একটি বাংলা পোর্টাল PerplexityBot এবং GPTBot কে Allow করে দেওয়ায় এআই সার্চ ইঞ্জিনে প্রতিদিন ৫,০০০ নতুন সাইটেশন ট্রাফিক পাচ্ছে।',
      keyTakeaway: 'এআই ক্রলার ব্লক করলে এআই সার্চের বিশাল সুযোগ হাতছাড়া হয়।'
    },
    commonMistakes: ['ভয়ে সব এআই ক্রলার ব্লক করে রাখা কিন্তু এআই ট্রাফিক আশা করা।'],
    bestTools: ['Dark Visitors (AI Bot Tracker)', 'Robots.txt Validator']
  },

  'controls-pay-per-crawl': {
    id: 'controls-pay-per-crawl',
    titleEn: 'Controls & Pay-Per-Crawl',
    titleBn: 'ক্রলার নিয়ন্ত্রণ ও পে-পার-ক্রল (Pay-Per-Crawl)',
    category: 'টেকনিক্যাল এসইও ভিত্তি',
    categoryId: 'technical-foundation',
    level: 'এডভান্সড',
    badge: 'Modern 2026',
    readTime: '৪ মিনিট',
    summary: 'এআই কোম্পানিগুলোর অতিরিক্ত ডেটা স্ক্র্যাপিং থেকে সার্ভার ব্যান্ডউইথ রক্ষা এবং নতুন পে-পার-ক্রল লাইসেন্সিং নিয়ন্ত্রণ।',
    fullDescription: [
      'এআই কোম্পানিগুলো এলএলএম ট্রেনিংয়ের জন্য ট্রিলিয়ন পেজ স্ক্র্যাপ করে সার্ভার ডাউন করে দেয়। এর সমাধানে Cloudflare AI Gateway বা রেট-লিমিটিং দিয়ে অতিরিক্ত ক্রলিং নিয়ন্ত্রণ ও লাইসেন্সিং করা হয়।'
    ],
    whyItMatters: ['সার্ভারের বিল কয়েকগুণ বেড়ে যাওয়া ঠেকায় এবং কনটেন্ট পাইরেসি রোধ করে।'],
    howToImplement: ['Cloudflare WAF এ বট ম্যানেজমেন্ট ও রেট লিমিটিং রুলস চালু করুন।'],
    realWorldExample: {
      title: 'বাস্তব উদাহরণ: ক্লাউডফ্লেয়ারে ব্যান্ডউইথ বাঁচানো',
      scenario: 'একটি পাবলিশারের সার্ভার এআই স্ক্র্যাপারের চাপে ক্র্যাশ করছিল। ক্লাউডফ্লেয়ার দিয়ে অস্বাভাবিক বট রিকোয়েস্ট ব্লক করায় সার্ভার সিপিইউ লোড ৮০% থেকে ১০%-এ নেমে এসেছে।',
      keyTakeaway: 'সার্চের জন্য প্রয়োজনীয় বটকে রেখে আগ্রাসী স্ক্র্যাপারদের নিয়ন্ত্রণ করা বুদ্ধিমানের কাজ।'
    },
    commonMistakes: ['আসল গুগলবটকেও ভুল করে ব্লক করে ফেলা।'],
    bestTools: ['Cloudflare Bot Management']
  },

  // --- SEARCH & AI CRAWLERS ---
  'googlebot': {
    id: 'googlebot',
    titleEn: 'Googlebot',
    titleBn: 'গুগলবট (Googlebot - Smartphone & Desktop)',
    category: 'টেকনিক্যাল এসইও ভিত্তি',
    categoryId: 'technical-foundation',
    level: 'বেসিক',
    readTime: '৩ মিনিট',
    summary: 'গুগলের প্রধান ক্রলার ওয়েব রোবট যা মোবাইল ও ডেস্কটপ উভয় সংস্করণে ইন্টারনেটের পেজ ক্রল করে।',
    fullDescription: [
      'Googlebot হলো গুগলের অফিশিয়াল ওয়েব ক্রলার। গুগল এখন Mobile-First Indexing অনুসরণ করে, তাই Googlebot Smartphone দিয়ে পেজের মোবাইল ভার্সন স্ক্যান করে।'
    ],
    whyItMatters: ['গুগলে র‍্যাংক করার জন্য গুগলবটকে পেজে অবাধে ঢুকতে দিতে হবে।'],
    howToImplement: ['রোবটস ফাইলে User-agent: Googlebot Allow: / রাখুন।'],
    realWorldExample: {
      title: 'বাস্তব উদাহরণ: মোবাইল ফ্রেন্ডলিনেস যাচাই',
      scenario: 'একটি সাইটের ডেস্কটপ সুন্দর হলেও মোবাইলে গুগলবট টেক্সট খুব ছোট পাচ্ছিল। ফন্ট ১৬ পিক্সেল করায় গুগলবট মোবাইল রেজাল্টে ভালো র‍্যাংক দিয়েছে।',
      keyTakeaway: 'গুগলবট আপনার সাইটকে মোবাইলের চোখ দিয়েই প্রধানত মূল্যায়ন করে।'
    },
    commonMistakes: ['মোবাইল ও ডেস্কটপ সাইটে আলাদা আলাদা কন্টেন্ট দেখানো।'],
    bestTools: ['GSC Crawl Stats']
  },

  'bingbot': {
    id: 'bingbot',
    titleEn: 'Bingbot',
    titleBn: 'বিংবট (Bingbot - Microsoft & ChatGPT)',
    category: 'টেকনিক্যাল এসইও ভিত্তি',
    categoryId: 'technical-foundation',
    level: 'ইন্টারমিডিয়েট',
    readTime: '৩ মিনিট',
    summary: 'মাইক্রোসফট বিং এবং চ্যাটজিপিটি সার্চের প্রধান ওয়েব ক্রলার ইঞ্জিন।',
    fullDescription: [
      'Bingbot শুধুমাত্র মাইক্রোসফট বিং-এর জন্য নয়, বরং ChatGPT Search-এর ব্যাকগ্রাউন্ডেও ওয়েব সার্চ গ্রাউন্ডিং হিসেবে ব্যবহৃত হয়।'
    ],
    whyItMatters: ['বিংবটকে গুরুত্ব না দিলে চ্যাটজিপিটি সার্চের রেফারেন্স ট্রাফিক পাওয়া যায় না।'],
    howToImplement: ['Bing Webmaster Tools-এ সাইট সাবমিট করুন এবং IndexNow প্রোটোকল ব্যবহার করুন।'],
    realWorldExample: {
      title: 'বাস্তব উদাহরণ: IndexNow দিয়ে সাথে সাথে ইনডেক্স',
      scenario: 'IndexNow এপিআই যুক্ত করার পর নতুন পোস্ট প্রকাশের কয়েক সেকেন্ডের মধ্যেই বিংবট এসে পেজ ইনডেক্স করে নেয়।',
      keyTakeaway: 'বিংয়ে র‍্যাংক থাকলে মাইক্রোসফট কোপাইলট ও চ্যাটজিপিটিতে ট্রাফিক বাড়ে।'
    },
    commonMistakes: ['শুধু গুগলকে গুরুত্ব দিয়ে বিং ওয়েবমাস্টার টুলস সেটআপ না করা।'],
    bestTools: ['Bing Webmaster Tools', 'IndexNow API']
  },

  'gptbot': {
    id: 'gptbot',
    titleEn: 'GPTBot',
    titleBn: 'জিপিটিবট (GPTBot - OpenAI Crawler)',
    category: 'টেকনিক্যাল এসইও ভিত্তি',
    categoryId: 'technical-foundation',
    level: 'এডভান্সড',
    badge: 'AI Crawler',
    readTime: '৩ মিনিট',
    summary: 'ওপেনএআই (OpenAI)-এর অফিশিয়াল ওয়েব ক্রলার যা চ্যাটজিপিটির মডেল ট্রেনিং ও সার্চের জন্য তথ্য সংগ্রহ করে।',
    fullDescription: [
      'GPTBot হলো ওপেনএআই-এর ক্রলার। User-agent: GPTBot দিয়ে আপনি এটিকে সম্পূর্ণ অনুমতি বা নির্দিষ্ট ডিরেক্টরি ব্লক করতে পারেন।'
    ],
    whyItMatters: ['চ্যাটজিপিটি ভবিষ্যতে আপনার ব্র্যান্ড ও কন্টেন্ট চিনবে কি না তা GPTBot নির্ধারণ করে।'],
    howToImplement: ['robots.txt ফাইলে User-agent: GPTBot Allow: / রাখুন।'],
    realWorldExample: {
      title: 'বাস্তব উদাহরণ: চ্যাটজিপিটির জ্ঞানে স্থান পাওয়া',
      scenario: 'একটি বাংলা শিক্ষামূলক ব্লগ GPTBot কে অনুমতি দেওয়ায় চ্যাটজিপিটি তাদের কোর্স ও নোটের রেফারেন্স দিয়ে ব্যবহারকারীদের প্রশ্নের উত্তর দিচ্ছে।',
      keyTakeaway: 'এআই যুগের সবচেয়ে প্রভাবশালী বটকে নিজের কন্টেন্ট পড়তে দেওয়া লাভজনক।'
    },
    commonMistakes: ['কোনো কারণ ছাড়াই ভয়ে GPTBot ব্লক করে এআই ভিজিবিলিটি হারানো।'],
    bestTools: ['OpenAI GPTBot Documentation']
  },

  'claudebot': {
    id: 'claudebot',
    titleEn: 'ClaudeBot',
    titleBn: 'ক্লডবট (ClaudeBot - Anthropic Crawler)',
    category: 'টেকনিক্যাল এসইও ভিত্তি',
    categoryId: 'technical-foundation',
    level: 'এডভান্সড',
    badge: 'AI Crawler',
    readTime: '৩ মিনিট',
    summary: 'অ্যানথ্রপিক (Anthropic)-এর ক্লড এআই মডেলের ওয়েব ক্রলার।',
    fullDescription: [
      'ClaudeBot হলো বিশ্বের অন্যতম সেরা রিযনিং মডেল ক্লড (Claude)-এর অফিশিয়াল ওয়েব ক্রলার।'
    ],
    whyItMatters: ['ক্লড এআই ব্যবহারকারীরা যাতে আপনার সাইটের তথ্য ও কোড সম্পর্কে জানতে পারে।'],
    howToImplement: ['User-agent: ClaudeBot Allow: / দিন।'],
    realWorldExample: {
      title: 'বাস্তব উদাহরণ: ক্লডের বিশ্লেষণে ব্র্যান্ডের স্থান',
      scenario: 'একটি সফটওয়্যার সাইটের ডকুমেন্টেশন ClaudeBot ক্রল করায় ডেভেলপাররা ক্লডের কাছে কোড চাইলে এই সাইটের লাইব্রেরি রিকমেন্ড করে।',
      keyTakeaway: 'ডেভেলপার ও টেক নিশ সাইটের জন্য ক্লডবট অত্যন্ত কার্যকর।'
    },
    commonMistakes: ['রোবটস ফাইলে বটটির নাম ভুল বানান করা।'],
    bestTools: ['Anthropic Web Crawler Specs']
  },

  'google-extended': {
    id: 'google-extended',
    titleEn: 'Google-Extended',
    titleBn: 'গুগল এক্সটেন্ডেড (Google-Extended Control)',
    category: 'টেকনিক্যাল এসইও ভিত্তি',
    categoryId: 'technical-foundation',
    level: 'এডভান্সড',
    badge: 'AI Control',
    readTime: '৩ মিনিট',
    summary: 'গুগল সার্চে পেজ রেখেও জেমিনাই (Gemini) এবং ভার্টেক্স এআই-এর ট্রেনিং ডেটায় কন্টেন্ট যাওয়া রোধ করার বিশেষ টোকেন।',
    fullDescription: [
      'Google-Extended হলো গুগলের দেওয়া বিশেষ কন্ট্রোল টোকেন। এটি Disallow করলে আপনার সাইট সাধারণ গুগল সার্চে র‍্যাংক পাবে ঠিকই, কিন্তু জেমিনাই বা গুগল এআই মডেল ট্রেনিংয়ে ব্যবহৃত হবে না।'
    ],
    whyItMatters: ['সার্চ ট্রাফিক না হারিয়ে শুধুমাত্র এআই ট্রেনিং থেকে কনটেন্ট কপিরাইট সুরক্ষিত রাখতে সাহায্য করে।'],
    howToImplement: ['User-agent: Google-Extended Disallow: / (যদি এআই ট্রেনিং বন্ধ করতে চান)।'],
    realWorldExample: {
      title: 'বাস্তব উদাহরণ: প্রকাশকদের কপিরাইট রক্ষা',
      scenario: 'একটি বড় নিউজ পাবলিশার সাধারণ সার্চ ট্রাফিক বজায় রেখেও তাদের প্রিমিয়াম সাংবাদিকতার কন্টেন্ট এআই ট্রেনিং থেকে বাঁচাতে Google-Extended ব্যবহার করেছে।',
      keyTakeaway: 'সার্চ ইনডেক্সিং এবং এআই ট্রেনিং ডেটার মধ্যে পার্থক্য করার নিয়ন্ত্রণ।'
    },
    commonMistakes: ['Googlebot ব্লক না করে ভাবা যে এটিই সাধারণ সার্চ ক্রলার।'],
    bestTools: ['Google Search Central Documentation']
  },

  'perplexitybot': {
    id: 'perplexitybot',
    titleEn: 'PerplexityBot',
    titleBn: 'পারপ্লেক্সিটিবট (PerplexityBot)',
    category: 'টেকনিক্যাল এসইও ভিত্তি',
    categoryId: 'technical-foundation',
    level: 'এডভান্সড',
    badge: 'AI Crawler',
    readTime: '৩ মিনিট',
    summary: 'পারপ্লেক্সিটি এআই সার্চ ইঞ্জিনের অফিশিয়াল ক্রলার যা রিয়েল-টাইমে ওয়েব পেজ পড়ে সরাসরি সাইটেশন তৈরি করে।',
    fullDescription: [
      'PerplexityBot হলো বিশ্বের দ্রুত বর্ধনশীল এআই অ্যান্সার ইঞ্জিন পারপ্লেক্সিটির ক্রলার। এটি পেজের কন্টেন্ট দ্রুত রিট্রিভ করে উত্তরের সাথে সোর্স কার্ড বানায়।'
    ],
    whyItMatters: ['পারপ্লেক্সিটি থেকে বিপুল পরিমাণ উচ্চ-মানের ক্লিক ও রেফারেল ট্রাফিক সরাসরি পাওয়া যায়।'],
    howToImplement: ['User-agent: PerplexityBot Allow: / নিশ্চিত করুন।'],
    realWorldExample: {
      title: 'বাস্তব উদাহরণ: পারপ্লেক্সিটি থেকে দৈনিক হাজার ভিজিটর',
      scenario: 'একটি ফিনটেক ব্লগ PerplexityBot কে অপ্টিমাইজ করায় ব্যাংকিং প্রশ্নের এআই উত্তরে তাদের লিংক এক নম্বরে থাকছে এবং প্রচুর গ্রাহক পাচ্ছে।',
      keyTakeaway: 'পারপ্লেক্সিটিবট হলো বর্তমান এআই সার্চে সরাসরি ট্রাফিক পাওয়ার সেরা মাধ্যম।'
    },
    commonMistakes: ['ফায়ারওয়াল দিয়ে পারপ্লেক্সিটির আইপি অ্যাড্রেস ব্লক করে রাখা।'],
    bestTools: ['Perplexity Search Testing']
  },

  'screaming-frog': {
    id: 'screaming-frog',
    titleEn: 'Screaming Frog',
    titleBn: 'স্ক্রিমিং ফ্রগ এসইও স্পাইডার (Screaming Frog SEO Spider)',
    category: 'টেকনিক্যাল এসইও ভিত্তি',
    categoryId: 'technical-foundation',
    level: 'ইন্টারমিডিয়েট',
    readTime: '৪ মিনিট',
    summary: 'ইন্ডাস্ট্রি স্ট্যান্ডার্ড ডেস্কটপ ক্রলার যা পুরো ওয়েবসাইট ক্রল করে ভাঙা লিংক, রিডিরেক্ট, ডুপ্লিকেট কন্টেন্ট ও মেটা ডেটা অডিট করে।',
    fullDescription: [
      'Screaming Frog হলো বিশ্বের সবচেয়ে জনপ্রিয় টেকনিক্যাল এসইও অডিট সফটওয়্যার। এটি গুগলবটের মতোই আপনার সাইটের প্রতিটি লিংক ঘুরে সমস্যাগুলো এক্সেল শিটে তুলে দেয়।'
    ],
    whyItMatters: ['সাইটের যেকোনো অদৃশ্য টেকনিক্যাল ত্রুটি কয়েক মিনিটের মধ্যে স্ক্রিনে ধরা পড়ে।'],
    howToImplement: ['ফ্রি ভার্সনে ৫০০ ইউআরএল পর্যন্ত ক্রল করে ব্রোকেন লিংক ও মিসিং টাইটেল চেক করুন।'],
    realWorldExample: {
      title: 'বাস্তব উদাহরণ: এক ক্লিকে ৪০০ ভাঙা লিংক উদ্ধার',
      scenario: 'একটি সাইটে রিডিজাইনের পর ৪০০টি লিংক ভেঙে গিয়েছিল যা জানা ছিল না। স্ক্রিমিং ফ্রগ ক্রল করে এক ঘণ্টার মধ্যে সব ফিক্স করে ট্রাফিক রক্ষা করা হয়েছে।',
      keyTakeaway: 'টেকনিক্যাল এসইও অডিটের জন্য স্ক্রিমিং ফ্রগ অপরিহার্য সঙ্গী।'
    },
    commonMistakes: ['জাভাস্ক্রিপ্ট রেন্ডারিং মোড অন না করে জাভাস্ক্রিপ্ট সাইট ক্রল করা।'],
    bestTools: ['Screaming Frog SEO Spider (Windows/Mac)']
  },

  'sitebulb': {
    id: 'sitebulb',
    titleEn: 'Sitebulb',
    titleBn: 'সাইটবাল্ব (Sitebulb Technical SEO Auditor)',
    category: 'টেকনিক্যাল এসইও ভিত্তি',
    categoryId: 'technical-foundation',
    level: 'ইন্টারমিডিয়েট',
    readTime: '৩ মিনিট',
    summary: 'ভিজ্যুয়াল টেকনিক্যাল অডিট টুল যা চার্ট ও প্রায়োরিটি স্কোরসহ সাইটের এসইও সমস্যা সমাধানের পথ বাতলে দেয়।',
    fullDescription: [
      'Sitebulb হলো এমন একটি আধুনিক ক্রলার যা শুধু ডেটা দেয় না, বরং সমস্যাগুলোর কারণ এবং কীভাবে সমাধান করবেন তার স্পষ্ট ভিজ্যুয়াল ব্যাখ্যা দেয়।'
    ],
    whyItMatters: ['জটিল টেকনিক্যাল বিষয়গুলোকে সহজবোধ্য গ্রাফ ও অ্যাকশন লিস্টে রূপান্তর করে।'],
    howToImplement: ['মাসিক অডিট চালিয়ে সাইটের হেলথ স্কোর ৯০+ রাখুন।'],
    realWorldExample: {
      title: 'বাস্তব উদাহরণ: ক্লায়েন্ট রিপোর্টিংয়ে সাইটবাল্ব',
      scenario: 'একটি এজেন্সি সাইটবাল্বের ভিজ্যুয়াল ডায়াগ্রাম ক্লায়েন্টকে দেখিয়ে সহজে বাজেট অনুমোদন করিয়ে সাইট ফিক্স করেছে।',
      keyTakeaway: 'সমস্যাগুলো ভিজ্যুয়ালি দেখতে পারলে সমাধান সহজ হয়।'
    },
    commonMistakes: ['অডিট রিপোর্ট দেখেও দীর্ঘ সময় কোনো কাজ না করা।'],
    bestTools: ['Sitebulb Website Crawler']
  }
};
