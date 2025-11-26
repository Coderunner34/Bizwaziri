// ServicesAndPricing.tsx
import React, { FC, useEffect, useMemo, useState } from "react";
import {
  Check,
  Star,
  Calendar,
  Zap,
  Crown,
  Rocket,
  Target,
  Users,
  TrendingUp,
  Shield,
  Clock,
  MessageCircle,
  Gift,
  Award,
  Sparkles,
  ThumbsUp,
  BadgeCheck,
  Timer,
  BadgePercent,
} from "lucide-react";

interface ServicesAndPricingProps {
  onBookingClick: () => void;
  onDownloadAgreement?: () => void;
}

export const ServicesAndPricing: FC<ServicesAndPricingProps> = ({
  onBookingClick,
  onDownloadAgreement,
}) => {
  // ====== CONFIG ======
  // Set the date/time your promotion ends (UTC/local as required)
  const PROMO_END_ISO = "2025-11-30T23:59:59"; // <- adjust if needed
  const PROMO_DISCOUNT = 30; // percent

  // ====== LIVE COUNTDOWN ======
  const getDistance = (endIso: string) => {
    const now = new Date().getTime();
    const end = new Date(endIso).getTime();
    return Math.max(0, end - now);
  };

  const [distance, setDistance] = useState<number>(getDistance(PROMO_END_ISO));
  const expired = distance <= 0;

  useEffect(() => {
    const id = setInterval(() => {
      setDistance(getDistance(PROMO_END_ISO));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const timeLeft = useMemo(() => {
    const d = distance;
    return {
      days: Math.floor(d / (1000 * 60 * 60 * 24)),
      hours: Math.floor((d / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((d / (1000 * 60)) % 60),
      seconds: Math.floor((d / 1000) % 60),
    };
  }, [distance]);

  // ====== DATA (kept from original, cleaned labels) ======
  const packages = [
    {
      name: "Digital Foundation",
      subtitle: "Starter Package",
      originalPrice: "Ksh 35,000",
      price: "Ksh 25,000",
      savings: "Ksh 10,000",
      type: "one-time",
      popular: false,
      urgency: false,
      description: "Perfect for new businesses starting their digital journey",
      bestFor: "Startups, small shops, freelancers",
      timeline: "3–5 days",
      features: [
        "Professional 5-Page Website (Mobile Optimized)",
        "Google Business Profile Setup & Verification",
        "Basic SEO Foundation (5 Keywords)",
        "Social Media Setup (Facebook + Instagram)",
        "WhatsApp Business Integration",
        "Contact Form & Basic Analytics",
        "1-Hour Training Session",
        "15 Days Post-Launch Support",
        "SSL Security Certificate",
        "Basic Brand Style Guide",
        "FREE: Domain Name (1 Year)",
        "FREE: Business Email Setup",
      ],
      cta: "Start Digital Journey",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Growth Accelerator",
      subtitle: "Most Popular",
      originalPrice: "Ksh 85,000",
      price: "Ksh 65,000",
      savings: "Ksh 20,000",
      type: "one-time",
      popular: true,
      urgency: true,
      description: "Complete digital presence designed to attract and convert customers",
      bestFor: "Established SMEs, retailers, service businesses",
      timeline: "7–10 days",
      features: [
        "Everything in Digital Foundation PLUS:",
        "Advanced 8-Page Website with Booking System",
        "E-commerce Functionality (Up to 50 Products)",
        "Complete SEO Strategy (15 Keywords)",
        "Social Media Content (10 Premium Posts)",
        "Email Marketing System Setup",
        "Google Ads Campaign Setup (Ksh 5,000 Ad Credit)",
        "Competitor Analysis Report",
        "2 Hours Team Training",
        "30 Days Priority Support",
        "Monthly Performance Dashboard",
        "Basic Logo Design Included",
        "FREE: Social Media Management (1 Month)",
        "FREE: Google My Business Optimization",
        "LIMITED: 3 Months Support Included",
      ],
      cta: "Accelerate Growth",
      color: "from-green-500 to-emerald-600",
    },
    {
      name: "Market Leader",
      subtitle: "Premium Package",
      originalPrice: "Ksh 150,000",
      price: "Ksh 120,000",
      savings: "Ksh 30,000",
      type: "one-time",
      popular: false,
      urgency: true,
      description: "Comprehensive digital transformation for serious market players",
      bestFor: "Growing companies, chains, professional services",
      timeline: "10–14 days",
      features: [
        "Everything in Growth Accelerator PLUS:",
        "Custom Website with Advanced Functionality",
        "Full E-commerce with Inventory Management",
        "Comprehensive SEO (30 Keywords + Local SEO)",
        "Social Media Management (20 Premium Posts)",
        "Content Marketing Strategy",
        "Google & Facebook Ads Management",
        "CRM System Integration",
        "Advanced Analytics & Reporting",
        "4 Hours Team Training",
        "60 Days Premium Support",
        "Professional Logo & Brand Identity",
        "Professional Business Photography (1 Session)",
        "Video Commercial (1 Minute)",
        "FREE: 6 Months Website Hosting",
        "FREE: Monthly Strategy Sessions (3 Months)",
        "BONUS: Competitor Analysis Report",
      ],
      cta: "Dominate Market",
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "Enterprise Suite",
      subtitle: "Custom Transformation",
      price: "Custom Quote",
      originalPrice: "Starting at Ksh 300,000",
      type: "custom",
      popular: false,
      urgency: false,
      description: "Complete business digitalization for large organizations",
      bestFor: "Corporates, schools, hospitals, large chains",
      timeline: "15–30 days",
      features: [
        "Everything in Market Leader PLUS:",
        "Multi-page Custom Website with Admin Panel",
        "Advanced E-commerce with Multiple Payment Options",
        "Enterprise SEO Strategy",
        "Dedicated Social Media Manager",
        "Content Creation Team",
        "Multi-platform Advertising Management",
        "Custom CRM Development",
        "Data Analytics & Business Intelligence",
        "Staff Training Program",
        "6 Months Premium Support",
        "Complete Brand Identity System",
        "Professional Video Production",
        "Mobile App Development",
        "Ongoing Strategy Sessions",
        "FREE: Digital Marketing Strategy (Value: Ksh 50,000)",
        "FREE: Competitor Intelligence Report",
        "EXCLUSIVE: Dedicated Account Manager",
      ],
      cta: "Get Custom Quote",
      color: "from-orange-500 to-red-600",
    },
  ];

  const monthlyServices = [
    {
      name: "Essential Care",
      price: "Ksh 8,000",
      period: "/month",
      popular: false,
      description: "Keep your digital presence active and optimized",
      features: [
        "Website Maintenance & Updates",
        "Basic SEO Optimization",
        "Social Media (8 Posts/Month)",
        "Monthly Performance Report",
        "2 Hours Support/Weekly",
        "Email/WhatsApp Support",
        "FREE: Monthly Security Scan",
      ],
    },
    {
      name: "Growth Accelerator",
      price: "Ksh 15,000",
      period: "/month",
      popular: true,
      description: "Active growth and customer acquisition",
      features: [
        "Everything in Essential PLUS:",
        "Advanced SEO Strategy",
        "Social Media (16 Posts/Month)",
        "Content Creation (3 Articles/Month)",
        "Google Ads Management",
        "Weekly Performance Updates",
        "4 Hours Support/Weekly",
        "Phone & WhatsApp Support",
        "FREE: Competitor Analysis (Monthly)",
      ],
    },
    {
      name: "Market Leader",
      price: "Ksh 25,000",
      period: "/month",
      popular: false,
      description: "Complete digital marketing management",
      features: [
        "Everything in Growth PLUS:",
        "Comprehensive SEO & Content Strategy",
        "Social Media (24 Posts/Month)",
        "Content Creation (4 Articles/Month)",
        "Multi-platform Ad Management",
        "Competitor Analysis",
        "Monthly Strategy Sessions",
        "Unlimited Support",
        "Dedicated Account Manager",
        "FREE: Monthly Market Research Report",
      ],
    },
  ];

  const addOnServices = [
    {
      category: "Branding & Design",
      services: [
        { name: "Professional Logo Design", originalPrice: "Ksh 5,000", price: "Ksh 2,000", popular: true },
        { name: "Complete Brand Identity", originalPrice: "Ksh 25,000", price: "Ksh 20,000", popular: false },
        { name: "Marketing Material Design", originalPrice: "Ksh 8,000", price: "Ksh 5,000", popular: false },
        { name: "Product Packaging Design", originalPrice: "Ksh 15,000", price: "Ksh 10,000", popular: false },
      ],
    },
    {
      category: "Content Creation",
      services: [
        { name: "Professional Business Photography", originalPrice: "Ksh 15,000", price: "Ksh 12,000", popular: true },
        { name: "Product Photography (10 products)", originalPrice: "Ksh 10,000", price: "Ksh 8,000", popular: false },
        { name: "Video Commercial (1 min)", originalPrice: "Ksh 30,000", price: "Ksh 25,000", popular: false },
        { name: "Social Media Video", originalPrice: "Ksh 3,000", price: "Ksh 2,000", popular: true },
      ],
    },
    {
      category: "Digital Marketing",
      services: [
        { name: "Google Ads Setup & Management", originalPrice: "Ksh 8,000", price: "Ksh 5,000 + ad spend", popular: true },
        { name: "Social Media Ads Management", originalPrice: "Ksh 12,000", price: "Ksh 8,000 + ad spend", popular: false },
        { name: "Email Marketing Campaign", originalPrice: "Ksh 8,000", price: "Ksh 6,000", popular: false },
        { name: "Influencer Marketing Setup", originalPrice: "Ksh 15,000", price: "Ksh 10,000", popular: true },
      ],
    },
    {
      category: "Business Systems",
      services: [
        { name: "POS System Integration", originalPrice: "Ksh 20,000", price: "Ksh 15,000", popular: true },
        { name: "Booking System Development", originalPrice: "Ksh 15,000", price: "Ksh 12,000", popular: false },
        { name: "Inventory Management System", originalPrice: "Ksh 25,000", price: "Ksh 18,000", popular: false },
        { name: "Custom CRM Development", originalPrice: "Ksh 60,000", price: "Ksh 45,000", popular: true },
      ],
    },
  ];

  const bundleOffers = [
    {
      name: "Starter Bundle",
      description: "Perfect for new businesses",
      packages: ["Digital Foundation", "Essential Care (3 months)"],
      originalTotal: "Ksh 59,000",
      bundlePrice: "Ksh 45,000",
      savings: "Ksh 14,000",
      popular: false,
    },
    {
      name: "Growth Bundle",
      description: "Best value — Most Popular",
      packages: ["Growth Accelerator", "Growth Accelerator (6 months)"],
      originalTotal: "Ksh 155,000",
      bundlePrice: "Ksh 120,000",
      savings: "Ksh 35,000",
      popular: true,
    },
    {
      name: "Enterprise Bundle",
      description: "Complete business solution",
      packages: ["Market Leader", "Market Leader (12 months)", "3 Add-on Services"],
      originalTotal: "Ksh 420,000",
      bundlePrice: "Ksh 300,000",
      savings: "Ksh 120,000",
      popular: false,
    },
  ];

  // ====== HELPER: choose icon for feature text (replaces emoji usage) ======
  const featureIcon = (text: string) => {
    if (/FREE/i.test(text)) return <Gift className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />;
    if (/LIMITED|BONUS|EXCLUSIVE|BONUS/i.test(text)) return <Zap className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />;
    if (/Everything in/i.test(text) || /^Everything/i.test(text)) return <BadgeCheck className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />;
    return <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />;
  };

  // ====== RENDER ======
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* ====== Black November Banner (Enhanced) ====== */}
{!expired && (
  <div className="mb-16 text-center">
    <div className="relative overflow-hidden bg-gradient-to-r from-black via-orange-800 to-black rounded-3xl p-6 md:p-10 shadow-[0_0_35px_rgba(255,140,0,0.35)] border border-orange-500">

      {/* Glow Orbs */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl"></div>

      <div className="relative flex flex-col md:flex-row items-center justify-between gap-10">

        {/* ---- LEFT SIDE: TITLE ---- */}
        <div className="text-left flex-1">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight flex items-center gap-4">
            <div className="bg-yellow-400/20 p-3 rounded-2xl shadow-inner border border-yellow-400/30">
              <Gift className="w-8 h-8 text-yellow-400" />
            </div>
            Black YESNovember!🎉 <div className="bg-yellow-400/20 p-3 rounded-2xl shadow-inner border border-yellow-400/30">
              <Gift className="w-8 h-8 text-yellow-400" />
            </div>
          </h2>

          <p className="text-orange-300 text-base md:text-lg mt-3 leading-relaxed">
            Say <span className="font-bold text-yellow-300">YES</span> to {PROMO_DISCOUNT}% OFF all packages • Limited-time flash deal
          </p>
        </div>

        {/* ---- CENTER: DISCOUNT BADGE ---- */}
        <div className="text-center flex flex-col items-center">
          {/* <div className="bg-orange-500/20 p-4 rounded-2xl border border-orange-500/40 shadow-xl">
            <BadgePercent className="w-12 h-12 text-orange-400" />
          </div> */}

          <div className="text-6xl md:text-7xl font-extrabold mt-3 text-transparent bg-clip-text bg-gradient-to-br from-orange-300 to-orange-500 drop-shadow-sm">
            {PROMO_DISCOUNT}%
          </div>

          <div className="text-white text-sm tracking-wider mt-1">OFF EVERYTHING</div>
        </div>

        {/* ---- RIGHT: PREMIUM COUNTDOWN ---- */}
        <div className="text-center">

          {/* Clock ring effect */}
          <div className="relative w-28 h-28 mb-3">
            <svg className="absolute inset-0" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="8"
                fill="none"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="#f97316"
                strokeWidth="8"
                fill="none"
                strokeDasharray="283"
                strokeDashoffset={
                  283 -
                  (283 *
                    ((timeLeft.days * 86400 +
                      timeLeft.hours * 3600 +
                      timeLeft.minutes * 60 +
                      timeLeft.seconds) /
                      ((new Date(PROMO_END_ISO).getTime() - new Date().getTime()) /
                        1000)))
                }
                strokeLinecap="round"
                className="transition-all duration-1000"
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <Timer className="w-7 h-7 text-orange-400 mb-1" />
              <div className="text-white font-bold text-sm">ENDS IN</div>
            </div>
          </div>

          <div className="bg-orange-600 text-white px-4 py-2 rounded-xl font-medium text-lg shadow-lg tracking-wide">
            {String(timeLeft.days).padStart(2, "0")}d :
            {String(timeLeft.hours).padStart(2, "0")}h :
            {String(timeLeft.minutes).padStart(2, "0")}m :
            {String(timeLeft.seconds).padStart(2, "0")}s
          </div>

          <p className="text-orange-300 text-xs mt-2">
            Expires {new Date(PROMO_END_ISO).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  </div>
)}


        {/* ====== Header / Trust ====== */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <BadgeCheck className="w-4 h-4" />
            Trusted by 200+ Kenyan Businesses
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Digital Solutions That <span className="text-[#F57C00]">Drive Revenue</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join hundreds of successful Kenyan businesses that increased revenue with our proven strategies.
          </p>
        </div>

        {/* ====== Bundle Offers (Kamukunji style) ====== */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 flex items-center justify-center gap-2">
              <Target className="w-7 h-7 text-gray-900" />
              Smart Bundles — Buy More, Save More
            </h3>
            <p className="text-gray-600">Like wholesale deals — the more you invest, the more you save.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {bundleOffers.map((bundle, index) => (
              <div
                key={index}
                className={`relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 ${
                  bundle.popular ? "ring-2 ring-green-500 shadow-2xl" : "shadow-xl"
                }`}
              >
                {bundle.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      <span className="text-sm font-semibold">Best Value</span>
                    </div>
                  </div>
                )}

                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                  <h4 className="text-xl font-bold mb-1">{bundle.name}</h4>
                  <p className="text-white/80 text-sm">{bundle.description}</p>
                </div>

                <div className="bg-white p-6">
                  <div className="text-center mb-4">
                    <div className="flex items-baseline justify-center gap-2 mb-2">
                      <span className="text-2xl md:text-3xl font-bold text-gray-900">{bundle.bundlePrice}</span>
                      <span className="text-sm text-gray-500 line-through">{bundle.originalTotal}</span>
                    </div>
                    <div className="text-green-600 font-semibold">Save {bundle.savings}!</div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {bundle.packages.map((pkg, pkgIndex) => (
                      <div key={pkgIndex} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{pkg}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={onBookingClick}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                      bundle.popular ? "bg-green-500 hover:bg-green-600 text-white" : "bg-gray-900 hover:bg-gray-800 text-white"
                    }`}
                  >
                    Get This Bundle
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ====== One-Time Setup Packages ====== */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">One-Time Setup Packages</h3>
            <p className="text-gray-600">Limited-time Black November discounts — prices go up soon.</p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 ${
                  pkg.popular ? "ring-2 ring-green-500 shadow-2xl" : "shadow-xl"
                }`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      <span className="text-sm font-semibold">Most Popular</span>
                    </div>
                  </div>
                )}

                {/* Urgency Badge */}
                {pkg.urgency && (
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-gradient-to-r from-red-500 to-red-700 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 animate-pulse shadow">
                      <Clock className="w-3 h-3" />
                      Limited Time
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className={`bg-gradient-to-r ${pkg.color} p-6 text-white`}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold">{pkg.name}</h4>
                      <p className="text-white/80 text-sm">{pkg.subtitle}</p>
                    </div>
                    {pkg.popular && <Crown className="w-6 h-6" />}
                  </div>

                  <div className="mt-4">
                    {pkg.type === "custom" ? (
                      <>
                        <div className="text-2xl md:text-3xl font-bold">{pkg.price}</div>
                        <div className="text-white/70 text-sm">{pkg.originalPrice}</div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl md:text-3xl font-bold">{pkg.price}</span>
                          <span className="text-sm line-through text-white/70">{pkg.originalPrice}</span>
                        </div>
                        <div className="text-green-300 text-sm font-semibold mt-1">Save {pkg.savings}!</div>
                      </>
                    )}
                    <div className="text-white/70 text-sm mt-1">{pkg.type === "custom" ? "Tailored Quote" : "One-Time Investment"}</div>
                  </div>
                </div>

                {/* Body */}
                <div className="bg-white p-6">
                  <div className="mb-4">
                    <p className="text-gray-600 text-sm mb-2">{pkg.description}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>Timeline: {pkg.timeline}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                      <Users className="w-4 h-4" />
                      <span>Best for: {pkg.bestFor}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex gap-3 items-start">
                        {featureIcon(feature)}
                        <span className={`text-sm ${/FREE/i.test(feature) ? "text-green-700 font-semibold" : /LIMITED|BONUS|EXCLUSIVE/i.test(feature) ? "text-orange-600 font-semibold" : "text-gray-700"}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={onBookingClick}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                      pkg.popular ? "bg-green-500 hover:bg-green-600 text-white" : pkg.urgency ? "bg-orange-500 hover:bg-orange-600 text-white" : "bg-gray-900 hover:bg-gray-800 text-white"
                    }`}
                  >
                    {pkg.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ====== Monthly Services (Ongoing) ====== */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 flex items-center justify-center gap-2">
              <TrendingUp className="w-7 h-7 text-[#F57C00]" />
              Ongoing Growth Services
            </h3>

            <p className="text-gray-600">Monthly packages to maintain and accelerate your growth</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {monthlyServices.map((m, i) => (
              <div key={i} className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-200 ${m.popular ? "ring-2 ring-amber-300" : ""}`}>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{m.name}</h4>
                    <p className="text-sm text-gray-500">{m.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-extrabold text-gray-900">{m.price}</div>
                    <div className="text-sm text-gray-500">{m.period}</div>
                  </div>
                </div>

                <div className="space-y-2 mt-4">
                  {m.features.map((f, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-green-500 mt-1" />
                      <div className="text-sm text-gray-700">{f}</div>
                    </div>
                  ))}
                </div>

                <button onClick={onBookingClick} className="mt-6 w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-semibold">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ====== Add-On Services ====== */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 flex items-center justify-center gap-2">
              <Sparkles className="w-7 h-7 text-purple-600" />
              Specialized Add-On Services
            </h3>
            <p className="text-gray-600">Enhance your package with specialized services — Black November discounts applied</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {addOnServices.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <h4 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">{category.category}</h4>
                <div className="space-y-4">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <div className="flex-1">
                        <span className="text-gray-700 text-sm block">{service.name}</span>
                        {service.originalPrice && <span className="text-gray-400 text-xs line-through">{service.originalPrice}</span>}
                      </div>
                      <div className="text-right">
                        <span className="text-green-600 font-semibold text-sm block">{service.price}</span>
                        {service.popular && <span className="text-orange-500 text-xs">Popular</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ====== Ultimate CTA Section ====== */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#1A120B] via-[#2C1810] to-[#3C1F0E] rounded-2xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-4 right-4 animate-pulse">
              <Sparkles className="w-8 h-8 text-yellow-400" />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-amber-400 flex items-center justify-center gap-3">
              <Rocket className="w-7 h-7 text-amber-400" />
              Don't Miss This Opportunity
            </h3>

            <p className="text-lg mb-6 opacity-90 text-gray-200">
              <strong>Black November Offer:</strong> Get {PROMO_DISCOUNT}% off + free bonuses
            </p>

            {!expired ? (
              <div className="bg-yellow-500 text-black px-6 py-3 rounded-lg inline-block mb-6 font-semibold">
                <span className="inline-flex items-center gap-2">
                  <Timer className="w-5 h-5" />
                  Offer ends in {String(timeLeft.days).padStart(2, "0")}d : {String(timeLeft.hours).padStart(2, "0")}h :{" "}
                  {String(timeLeft.minutes).padStart(2, "0")}m
                </span>
              </div>
            ) : (
              <div className="bg-gray-800 text-white px-6 py-3 rounded-lg inline-block mb-6 font-semibold">
                Promotion Ended
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={onBookingClick}
                className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-amber-500 hover:scale-105 transition-transform shadow-xl inline-flex items-center gap-3"
              >
                <Zap className="w-5 h-5" />
                Get Black November Discount
                <Sparkles className="w-4 h-4" />
              </button>

              <div className="text-center">
                <div className="text-white/70 text-sm mb-2">Limited spots available</div>
                <div className="flex items-center justify-center gap-2 text-amber-300">
                  <Shield className="w-4 h-4" />
                  <span className="text-sm">7-Day Money Back Guarantee</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-white/60">
              <span className="flex items-center gap-1">
                <ThumbsUp className="w-4 h-4" />
                Trusted by 200+ Businesses
              </span>
              <span className="flex items-center gap-1">
                <Award className="w-4 h-4" />
                94% Client Retention
              </span>
              <span className="flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                3.8x Average ROI
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesAndPricing;
