import React, { useState, useMemo, useEffect } from 'react';
import { 
  ShieldCheck, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  DollarSign, 
  AlertCircle, 
  BarChart3, 
  Cpu, 
  PhoneCall, 
  Mail, 
  Menu, 
  X, 
  Award, 
  Zap, 
  Star,
  ChevronRight,
  Sparkles,
  Lock,
  Building2,
  Stethoscope,
  Coins,
  BadgePercent
} from 'lucide-react';

// Modern Healthcare Tech Vector Logo
function CosmicLogo() {
  return (
    <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-400 p-[1.5px] shadow-md shadow-blue-600/20 shrink-0">
      <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4V20M4 12H20" stroke="#2563EB" strokeWidth="2.75" strokeLinecap="round"/>
          <circle cx="12" cy="12" r="5" stroke="#93C5FD" strokeWidth="1.75" strokeDasharray="3 3"/>
          <circle cx="12" cy="4" r="1.5" fill="#2563EB"/>
          <circle cx="20" cy="12" r="1.5" fill="#2563EB"/>
          <circle cx="12" cy="20" r="1.5" fill="#2563EB"/>
          <circle cx="4" cy="12" r="1.5" fill="#2563EB"/>
        </svg>
      </div>
    </div>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [auditModalOpen, setAuditModalOpen] = useState(false);

  // Scroll Reveal Observer Effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Revenue Impact Calculator State (defaults: $1.5M / 8% / 42d = +$4,377)
  const [annualRevenue, setAnnualRevenue] = useState(1500000);
  const [currentDenialRate, setCurrentDenialRate] = useState(8);
  const [currentDaysAR, setCurrentDaysAR] = useState(42);

  const calculation = useMemo(() => {
    const denialImprovement = Math.max(0, currentDenialRate - 1.8);
    const annualDenialRecovery = annualRevenue * (denialImprovement / 100) * 0.525;
    
    const arDaysReduced = Math.max(0, currentDaysAR - 21);
    const acceleratedWorkingCapital = (annualRevenue / 365) * arDaysReduced;
    const annualInterestSavings = acceleratedWorkingCapital * 0.085;

    const totalAnnualRecovery = annualDenialRecovery + annualInterestSavings;
    const monthlyRecovery = Math.round(totalAnnualRecovery / 12);

    return {
      monthly: monthlyRecovery,
      annual: Math.round(totalAnnualRecovery),
      accelerated: Math.round(acceleratedWorkingCapital)
    };
  }, [annualRevenue, currentDenialRate, currentDaysAR]);

  // Billing Partner Assessment Checklist (8 checkpoints)
  const [checklist, setChecklist] = useState([
    { id: 1, label: 'Clean Claim Rate ≥ 98%', desc: 'High first-pass acceptance without clearinghouse edits', checked: false },
    { id: 2, label: 'First Pass Resolution ≥ 95%', desc: 'Claims adjudicated and paid on initial submission', checked: false },
    { id: 3, label: 'Denial Rate < 4%', desc: 'Industry leading benchmark for low rejected claims', checked: false },
    { id: 4, label: 'Days in A/R < 30', desc: 'Average accounts receivable window across all payers', checked: false },
    { id: 5, label: 'Claims Submitted within 24 hrs', desc: 'Daily super-bill scrubbing and same-day transmission', checked: false },
    { id: 6, label: 'Denial Turnaround < 7 days', desc: 'Active root-cause appeal within 7 business days', checked: false },
    { id: 7, label: 'Dedicated Account Manager', desc: 'Single point of contact familiar with your specialty', checked: false },
    { id: 8, label: 'Live Reporting Dashboard', desc: 'Real-time visibility into collections and payer performance', checked: false },
  ]);

  const toggleChecklist = (id) => {
    setChecklist(prev => prev.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
  };

  const checkedCount = checklist.filter(item => item.checked).length;

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    practiceName: '',
    specialty: 'Family / Internal Medicine',
    monthlyCharges: '$100k - $250k'
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const formatRevenueDisplay = (val) => {
    if (val >= 1000000) return `$${(val / 1000000).toFixed(1)}M`;
    return `$${(val / 1000).toFixed(0)}K`;
  };

  return (
    <div className="min-h-screen bg-white text-slate-700 font-sans antialiased overflow-x-hidden selection:bg-blue-100 selection:text-blue-900">
      
      {/* 1. Floating Rounded Glassmorphism Navbar */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-6xl">
        <div className="bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-full shadow-[0_12px_30px_-8px_rgba(0,0,0,0.08)] px-5 sm:px-7 py-2.5 flex items-center justify-between transition-all">
          
          {/* Brand Logo with Professional Vector Artwork */}
          <a href="#" className="inline-flex items-center gap-3 select-none group">
            <CosmicLogo />
            <div className="flex flex-col justify-center">
              <span className="text-base font-bold text-slate-900 leading-none">
                Cosmic RCM
              </span>
              <span className="text-[10px] font-bold tracking-wider text-blue-600 uppercase mt-1 leading-none">
                SOLUTIONS
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-600">
            <a href="#services" className="hover:text-blue-600 transition-colors py-1 leading-none">Services</a>
            <a href="#process" className="hover:text-blue-600 transition-colors py-1 leading-none">Our Process</a>
            <a href="#calculator" className="hover:text-blue-600 transition-colors py-1 leading-none">ROI Calculator</a>
            <a href="#assessment" className="hover:text-blue-600 transition-colors py-1 leading-none">Partner Audit</a>
            <a href="#why-us" className="hover:text-blue-600 transition-colors py-1 leading-none">Why Us</a>
          </nav>

          {/* Right Action Buttons */}
          <div className="inline-flex items-center gap-3">
            <button 
              onClick={() => setAuditModalOpen(true)}
              className="hidden sm:inline-flex items-center justify-center text-xs font-semibold text-slate-600 hover:text-blue-600 px-3 py-2 transition-colors cursor-pointer leading-none"
            >
              Client Login
            </button>

            <button 
              onClick={() => setAuditModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full shadow-md shadow-blue-600/25 hover:shadow-lg hover:shadow-blue-600/35 transition-all inline-flex items-center justify-center gap-2 cursor-pointer leading-none group"
            >
              <span className="leading-none">Free RCM Audit</span>
              <ArrowRight size={14} className="shrink-0 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 inline-flex items-center justify-center text-slate-700 shrink-0 transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="mt-3 bg-white/95 backdrop-blur-2xl border border-slate-200 rounded-3xl p-6 shadow-2xl flex flex-col gap-4 md:hidden animate-in fade-in zoom-in-95 duration-200">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold text-slate-800 hover:text-blue-600 py-1">Services</a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold text-slate-800 hover:text-blue-600 py-1">Our Process</a>
            <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold text-slate-800 hover:text-blue-600 py-1">ROI Calculator</a>
            <a href="#assessment" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold text-slate-800 hover:text-blue-600 py-1">Partner Assessment</a>
            <a href="#why-us" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold text-slate-800 hover:text-blue-600 py-1">Why Us</a>
            <div className="pt-4 border-t border-slate-100">
              <button 
                onClick={() => { setMobileMenuOpen(false); setAuditModalOpen(true); }}
                className="w-full py-3 rounded-full bg-blue-600 text-white font-semibold text-sm inline-flex items-center justify-center gap-2"
              >
                <span>Request Free Audit</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 2. Hero Section with Animated Gradient & Ambient Orbs */}
      <section className="relative pt-36 sm:pt-44 pb-20 md:pb-28 animated-hero-gradient overflow-hidden border-b border-slate-200/70">
        
        {/* Animated Floating Gradient Orbs */}
        <div className="absolute top-10 left-1/4 w-[480px] h-[350px] bg-blue-400/20 rounded-full blur-[110px] animated-orb-1 pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[420px] h-[320px] bg-indigo-300/20 rounded-full blur-[100px] animated-orb-2 pointer-events-none" />
        <div className="absolute bottom-5 left-1/3 w-[500px] h-[260px] bg-sky-300/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          
        

          {/* Headline with Radiant Animated Shimmer Gradient */}
          <h1 className="text-4xl sm:text-6xl md:text-[4.25rem] font-extrabold text-slate-900 tracking-tight leading-[1.12] max-w-4xl mx-auto mb-6">
            Maximize Your Healthcare <br />
            <span className="shimmer-text relative inline-block">
              Revenue.
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-blue-400/35" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 15 Q 50 0, 100 15" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-600 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed mb-9">
            Cosmic RCM Solutions helps US healthcare providers reduce claim denials, accelerate reimbursements, and streamline billing operations — so you can focus on patient care.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-16">
            <button 
              onClick={() => setAuditModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base px-8 py-3.5 rounded-full shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 transition-all inline-flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Get Free RCM Audit</span>
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </button>

            <a 
              href="#calculator"
              className="bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base px-7 py-3.5 rounded-full border border-slate-200/90 shadow-sm hover:shadow transition-all inline-flex items-center justify-center gap-2"
            >
              <BarChart3 size={17} className="text-blue-600 shrink-0" />
              <span>Calculate Revenue Impact</span>
            </a>
          </div>

          {/* Floating Dashboard Card (With Smooth Scroll Reveal) */}
          <div className="reveal-on-scroll max-w-4xl mx-auto bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200/90 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.08)] p-6 sm:p-9 text-left">
            
            {/* Header */}
            <div className="flex flex-wrap justify-between items-center pb-5 mb-7 border-b border-slate-100 gap-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900 leading-tight">Performance Overview</h3>
                <p className="text-xs text-slate-500 mt-0.5">Aggregated live benchmarks across US provider clients</p>
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Live Sync
                </span>
                <span className="text-xs font-semibold text-slate-400">HIPAA & SOC-2 Verified</span>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-7">
              <div className="bg-slate-50/70 border border-slate-200/70 rounded-2xl p-4 sm:p-5">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  CLEAN CLAIM RATE
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 mt-1">
                  98%
                </div>
                <div className="text-xs text-slate-500 mt-1 font-medium">Vs. 82% US National Average</div>
              </div>

              <div className="bg-slate-50/70 border border-slate-200/70 rounded-2xl p-4 sm:p-5">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  FIRST PASS RESOLUTION
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                  95%+
                </div>
                <div className="text-xs text-slate-500 mt-1 font-medium">Zero rework delays</div>
              </div>

              <div className="bg-slate-50/70 border border-slate-200/70 rounded-2xl p-4 sm:p-5">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  AVG DENIAL RATE
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600 mt-1">
                  &lt; 2%
                </div>
                <div className="text-xs text-slate-500 mt-1 font-medium">Industry standard: 7-12%</div>
              </div>

              <div className="bg-orange-50/50 border border-orange-200/60 rounded-2xl p-4 sm:p-5">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  DAYS IN A/R
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-amber-600 mt-1">
                  21 days
                </div>
                <div className="text-xs text-slate-500 mt-1 font-medium">Faster cash realization</div>
              </div>
            </div>

            {/* Core Capabilities */}
            <div className="flex flex-wrap items-center justify-between pt-5 border-t border-slate-100 gap-3">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                CORE CAPABILITIES:
              </span>
              <div className="flex flex-wrap gap-2">
                {['Medical Billing', 'Credentialing', 'AR Follow-Up', 'Denial Mgmt', 'Prior Auth'].map((svc, i) => (
                  <span 
                    key={i} 
                    className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200/80"
                  >
                    {svc}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. EHR Integration Stack */}
      <section className="reveal-on-scroll py-16 bg-slate-50/60 border-b border-slate-200/70">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
            Connect With the EHR & PM Systems You Already Use
          </h2>
          <p className="text-slate-500 text-sm max-w-xl mx-auto mb-10">
            Seamlessly integrate with popular platforms to streamline workflows, sync billing data, and accelerate reimbursements — without switching tools.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 max-w-5xl mx-auto">
            {[
              { name: 'Epic', tag: 'Direct API', color: 'text-red-600' },
              { name: 'AthenaHealth', tag: 'Sync', color: 'text-purple-600' },
              { name: 'Cerner', tag: 'Oracle', color: 'text-blue-600' },
              { name: 'eClinicalWorks', tag: 'Clearinghouse', color: 'text-emerald-600' },
              { name: 'Kareo', tag: 'Tebra', color: 'text-sky-600' },
              { name: 'NextGen', tag: 'Enterprise', color: 'text-indigo-600' },
              { name: 'ModMed', tag: 'Specialty', color: 'text-amber-600' },
              { name: 'AdvancedMD', tag: 'Cloud', color: 'text-teal-600' }
            ].map((ehr, i) => (
              <div 
                key={i} 
                className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-400 transition-all text-center flex flex-col items-center justify-center gap-1.5"
              >
                <div className={`w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center font-bold text-sm ${ehr.color}`}>
                  <Cpu size={20} />
                </div>
                <div className="font-bold text-slate-800 text-xs mt-1">{ehr.name}</div>
                <div className="text-[10px] text-slate-400">{ehr.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Interactive Financial Suite: Calculator & Partner Assessment */}
      <section id="calculator" className="py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="reveal-on-scroll text-center max-w-xl mx-auto mb-16">
            <span className="text-blue-600 text-xs font-bold uppercase tracking-wider block mb-2">
              FINANCIAL AUDIT SUITE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Evaluate Your Practice Revenue
            </h2>
            <p className="text-slate-500 text-sm mt-3">
              Discover exact revenue recovery figures and check if your current billing partner meets industry standards.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            {/* Tool 1: Revenue Impact Calculator (Upgraded Clean Light Design - No dark blue box) */}
            <div className="reveal-on-scroll bg-white rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-xl shadow-slate-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
                    <DollarSign size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Revenue Impact Calculator</h3>
                    <p className="text-xs text-slate-500">Estimate what switching to Cosmic RCM could recover</p>
                  </div>
                </div>

                {/* Slider 1: Annual Practice Revenue */}
                <div className="mt-6">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-semibold text-slate-700">Annual Practice Revenue</span>
                    <span className="font-bold text-blue-600 text-lg">{formatRevenueDisplay(annualRevenue)}</span>
                  </div>
                  <input 
                    type="range" 
                    min="300000" 
                    max="10000000" 
                    step="100000"
                    value={annualRevenue} 
                    onChange={(e) => setAnnualRevenue(Number(e.target.value))}
                    className="my-3"
                  />
                  <div className="flex justify-between text-xs text-slate-400 font-medium">
                    <span>$300K</span>
                    <span>$5.0M</span>
                    <span>$10M+</span>
                  </div>
                </div>

                {/* Slider 2: Current Denial Rate */}
                <div className="mt-5">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-semibold text-slate-700">Current Denial Rate</span>
                    <span className="font-bold text-rose-500 text-lg">{currentDenialRate}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="2" 
                    max="25" 
                    step="1"
                    value={currentDenialRate} 
                    onChange={(e) => setCurrentDenialRate(Number(e.target.value))}
                    className="my-3"
                  />
                  <div className="flex justify-between text-xs text-slate-400 font-medium">
                    <span>2% (Target)</span>
                    <span>12% (US Avg)</span>
                    <span>25%</span>
                  </div>
                </div>

                {/* Slider 3: Current Days in A/R */}
                <div className="mt-5">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-semibold text-slate-700">Current Days in A/R</span>
                    <span className="font-bold text-amber-600 text-lg">{currentDaysAR} days</span>
                  </div>
                  <input 
                    type="range" 
                    min="18" 
                    max="90" 
                    step="1"
                    value={currentDaysAR} 
                    onChange={(e) => setCurrentDaysAR(Number(e.target.value))}
                    className="my-3"
                  />
                  <div className="flex justify-between text-xs text-slate-400 font-medium">
                    <span>21d (Cosmic benchmark)</span>
                    <span>45d</span>
                    <span>90d+</span>
                  </div>
                </div>

                {/* Comparison Box */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <div className="p-3.5 rounded-2xl bg-rose-50/70 border border-rose-200/80 text-center">
                    <div className="text-[10px] font-bold text-slate-500 uppercase">Current State</div>
                    <div className="text-xs font-bold text-rose-700 mt-1">{currentDenialRate}% denial · {currentDaysAR}d A/R</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 text-center">
                    <div className="text-[10px] font-bold text-slate-500 uppercase">With Cosmic RCM</div>
                    <div className="text-xs font-bold text-emerald-700 mt-1">&lt;2% denial · 21d A/R</div>
                  </div>
                </div>
              </div>

              {/* Redesigned Output Box (Clean Light Luminous Aesthetic - No Dark Box!) */}
              <div className="mt-8 p-7 rounded-2xl bg-gradient-to-br from-blue-50/90 via-sky-50/40 to-indigo-50/60 border border-blue-200/90 text-center shadow-sm">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/70 text-blue-800 text-[11px] font-bold uppercase tracking-wider mb-2">
                  <Coins size={13} className="text-blue-600" />
                  Estimated Monthly Recovery
                </div>
                
                <div className="text-4xl sm:text-5xl font-extrabold text-blue-600 tracking-tight my-2">
                  +${calculation.monthly.toLocaleString()}
                </div>
                
                <div className="text-xs font-medium text-slate-600 flex items-center justify-center gap-2">
                  <span>Approx. <strong className="text-slate-900">+${calculation.annual.toLocaleString()} / year</strong> in recovered revenue</span>
                </div>

                <button 
                  onClick={() => setAuditModalOpen(true)}
                  className="w-full mt-5 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm tracking-wide transition-all shadow-md shadow-blue-600/25 inline-flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <span>Claim This Revenue Recovery</span>
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

            </div>

            {/* Tool 2: Billing Partner Assessment */}
            <div id="assessment" className="reveal-on-scroll bg-white rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-xl shadow-slate-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Billing Partner Assessment</h3>
                    <p className="text-xs text-slate-500">Check what your current billing company delivers</p>
                  </div>
                </div>

                {/* 8 Checkpoints */}
                <div className="space-y-2.5 mt-4">
                  {checklist.map((item) => (
                    <label 
                      key={item.id}
                      className={`flex items-center gap-3.5 p-3 rounded-2xl cursor-pointer transition-colors border ${
                        item.checked 
                          ? 'bg-blue-50/60 border-blue-200' 
                          : 'bg-slate-50/50 border-slate-200/60 hover:bg-slate-50'
                      }`}
                    >
                      <input 
                        type="checkbox" 
                        className="custom-checkbox-clean"
                        checked={item.checked}
                        onChange={() => toggleChecklist(item.id)}
                      />
                      <span className={`text-xs sm:text-sm ${item.checked ? 'text-blue-900 font-semibold' : 'text-slate-700'}`}>
                        {item.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Assessment Evaluation Box */}
              <div className="mt-8 p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="text-slate-600 font-semibold">Reliability Benchmark Score</span>
                  <span className={`font-bold ${checkedCount >= 7 ? 'text-emerald-600' : checkedCount >= 4 ? 'text-amber-600' : 'text-rose-600'}`}>
                    {checkedCount} of 8 Standards Met
                  </span>
                </div>

                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden mb-3">
                  <div 
                    className={`h-full transition-all duration-500 ${checkedCount >= 7 ? 'bg-emerald-500' : checkedCount >= 4 ? 'bg-amber-500' : 'bg-rose-500'}`}
                    style={{ width: `${(checkedCount / 8) * 100}%` }}
                  />
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {checkedCount >= 7 
                    ? "Great alignment. Cosmic RCM can still optimize complex denial appeals and payer fee renegotiation." 
                    : checkedCount >= 4 
                    ? "Moderate risk: Sub-95% clean claims and delayed appeals are creating recurring revenue leaks in your practice." 
                    : "High risk: Your practice is forfeiting 10-18% of earned collections due to lagging A/R and unworked denials."}
                </p>

                <button 
                  onClick={() => setAuditModalOpen(true)}
                  className="w-full mt-4 py-3 rounded-full bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-semibold text-xs transition-colors inline-flex items-center justify-center cursor-pointer"
                >
                  Request Full Practice Diagnostic
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 5. Core Services Section */}
      <section id="services" className="reveal-on-scroll py-24 bg-slate-50/70 border-t border-slate-200/80">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-blue-600 text-xs font-bold uppercase tracking-wider block mb-2">
              SPECIALIZED CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Complete Revenue Cycle Management
            </h2>
            <p className="text-slate-500 text-sm mt-3">
              Certified AAPC medical coders, senior billing analysts, and denial appeals specialists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: FileText,
                title: "Medical Billing & Charge Capture",
                desc: "Complete super-bill charge posting and rigorous claim scrubbing within 24 hours. Validated against payer-specific edits.",
                tag: "24hr Turnaround"
              },
              {
                icon: AlertCircle,
                title: "Denial Management & Appeals",
                desc: "Active investigation of CARC/RARC codes. Senior appeals team prepares medical necessity narratives to overturn rejections within 7 days.",
                tag: "<2% Denial Rate"
              },
              {
                icon: Clock,
                title: "Aging A/R Recovery (0-120+ Days)",
                desc: "Aggressive payer follow-ups, resolving coordination of benefits snags to compress average days in A/R down to 21 days.",
                tag: "21-Day Target"
              },
              {
                icon: ShieldCheck,
                title: "Provider Credentialing & Contracting",
                desc: "Expedited enrollment with Medicare, Medicaid, and commercial payers. CAQH profile management without practice disruption.",
                tag: "Zero Lapses"
              },
              {
                icon: Zap,
                title: "Prior Authorization & Eligibility",
                desc: "Same-day clinical documentation submission with 96% approval rate prior to high-cost specialty procedure delivery.",
                tag: "96% Approval"
              },
              {
                icon: TrendingUp,
                title: "Certified Medical Coding & Audit",
                desc: "Evaluation & Management (E/M) leveling audits, CPT/ICD-10-CM precision, and MIPS compliance to maximize legitimate collections.",
                tag: "AAPC Certified"
              }
            ].map((srv, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-400 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold shrink-0">
                      <srv.icon size={22} />
                    </div>
                    <span className="text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
                      {srv.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">{srv.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">{srv.desc}</p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600">
                  <span>Learn more</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. 5-Stage Process Workflow */}
      <section id="process" className="reveal-on-scroll py-24 bg-white border-t border-slate-200/80">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-blue-600 text-xs font-bold uppercase tracking-wider block mb-2">
              PROVEN ONBOARDING
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              The 5-Stage Cosmic Workflow
            </h2>
            <p className="text-slate-500 text-sm mt-3">
              Frictionless onboarding directly within your existing PM/EHR setup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { num: '01', title: 'Practice Audit', desc: 'Complimentary 90-day review uncovering coding gaps and unworked write-offs.' },
              { num: '02', title: 'Integration', desc: 'Secure direct clearinghouse credentials sync. No new software required.' },
              { num: '03', title: 'Daily Clean Scrub', desc: 'Charges verified and transmitted within 24 hours with custom payer rules.' },
              { num: '04', title: 'A/R Resolution', desc: 'Denials appealed immediately, aging accounts tracked until collected.' },
              { num: '05', title: 'Live Analytics', desc: 'Executive dashboard with transparent visibility into collections and payer trends.' },
            ].map((st, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80">
                <div className="text-2xl font-extrabold text-blue-600 mb-3">{st.num}</div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">{st.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Comparison Table: Why Cosmic RCM */}
      <section id="why-us" className="reveal-on-scroll py-24 bg-slate-50/70 border-t border-slate-200/80">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-blue-600 text-xs font-bold uppercase tracking-wider block mb-2">
              WHY CHOOSE US
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Performance Accountability
            </h2>
            <p className="text-slate-500 text-sm mt-3">
              Contingency-only partnership. We only get paid when your practice gets paid.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden max-w-5xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/80">
                    <th className="p-4 sm:p-5 font-bold text-slate-900">Evaluation Metric</th>
                    <th className="p-4 sm:p-5 font-semibold text-slate-600">In-House Staff</th>
                    <th className="p-4 sm:p-5 font-semibold text-slate-600">Generic Vendors</th>
                    <th className="p-4 sm:p-5 font-bold text-blue-700 bg-blue-50/80">Cosmic RCM Solutions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { m: "Clean Claim Rate", ih: "84% - 88%", gv: "90% - 92%", c: "98%+ Guaranteed" },
                    { m: "Days in A/R", ih: "48 - 65 Days", gv: "38 - 50 Days", c: "21 Days Benchmark" },
                    { m: "Denial Appeals", ih: "Often written off", gv: "Batch resubmissions", c: "Dedicated Level 1-3 Appeals" },
                    { m: "Fee Structure", ih: "Salaries + Benefits", gv: "Fixed monthly fee", c: "100% Contingency (No Risk)" },
                    { m: "Staff Turnover Risk", ih: "High (Cash crunches)", gv: "Medium", c: "Zero Practice Disruption" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/60">
                      <td className="p-4 sm:p-5 font-semibold text-slate-900">{row.m}</td>
                      <td className="p-4 sm:p-5 text-slate-600">{row.ih}</td>
                      <td className="p-4 sm:p-5 text-slate-600">{row.gv}</td>
                      <td className="p-4 sm:p-5 font-bold text-blue-700 bg-blue-50/30">
                        <CheckCircle2 size={15} className="inline mr-1.5 text-blue-600" />
                        {row.c}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* 8. Call To Action Section (Executive Card) */}
      <section className="reveal-on-scroll py-20 bg-slate-50/50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0c162c] via-[#0f2244] to-[#070e1c] p-8 sm:p-14 text-center text-white shadow-2xl border border-blue-900/40">
            
            {/* Inner Atmospheric Glow */}
            <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-500/15 text-blue-300 border border-blue-400/30 text-xs font-semibold uppercase tracking-wider mb-4">
                RISK-FREE 90-DAY ASSESSMENT
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-white">
                Accelerate Your Practice Collections Today
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                Receive our comprehensive 90-day claims audit. We identify exact leakage points, undercoded procedures, and recoverable revenue at zero cost.
              </p>

              <div className="flex flex-wrap justify-center items-center gap-4">
                <button 
                  onClick={() => setAuditModalOpen(true)}
                  className="px-8 py-3.5 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm shadow-xl hover:shadow-2xl transition-all inline-flex items-center justify-center gap-2 cursor-pointer leading-none"
                >
                  <span>Claim Your Free Audit Today</span>
                  <ArrowRight size={15} />
                </button>

              
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. Clean Modern SaaS Footer */}
      <footer className="border-t border-slate-200 bg-white py-12 text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="inline-flex items-center gap-3">
            <CosmicLogo />
            <span className="font-extrabold text-slate-900 text-sm">Cosmic RCM SOLUTIONS</span>
          </div>

          <div className="flex items-center gap-6 font-medium text-slate-600">
            <span>HIPAA Compliant</span>
            <span>AAPC Coders</span>
            <span>Plano, TX, USA</span>
          </div>

          <div>
            © {new Date().getFullYear()} Cosmic RCM Solutions LLC. All rights reserved.
          </div>
        </div>
      </footer>

      {/* 10. Free Audit Request Modal */}
      {auditModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-slate-200 w-full max-w-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="bg-slate-50 px-6 py-5 flex justify-between items-center border-b border-slate-200">
              <div>
                <h3 className="text-lg font-bold text-slate-900 leading-tight">Free Practice Revenue Audit</h3>
                <p className="text-xs text-slate-500 mt-1">100% Confidential • Zero Upfront Cost</p>
              </div>

              {/* Centered Close Button */}
              <button 
                onClick={() => { setAuditModalOpen(false); setFormSubmitted(false); }}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors inline-flex items-center justify-center shrink-0 cursor-pointer"
                aria-label="Close modal"
              >
                <X size={16} strokeWidth={2.5} className="shrink-0" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 inline-flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                    <CheckCircle2 size={30} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">Audit Request Received</h4>
                  <p className="text-xs text-slate-500 mt-2 max-w-xs mx-auto leading-relaxed">
                    Thank you, {formData.name || 'Doctor'}! A Senior Billing Director from Cosmic RCM has received your practice profile and will reach out within 2 business hours.
                  </p>
                  <button 
                    onClick={() => { setAuditModalOpen(false); setFormSubmitted(false); }}
                    className="mt-6 px-6 py-2.5 rounded-full bg-blue-600 text-white font-semibold text-xs cursor-pointer inline-flex items-center justify-center"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Dr. Sarah Johnson" 
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs outline-none focus:border-blue-600 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Work Email *</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="sarah@clinic.com" 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs outline-none focus:border-blue-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="(555) 000-0000" 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs outline-none focus:border-blue-600 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Practice Name *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Metro Heart Clinic" 
                        value={formData.practiceName}
                        onChange={(e) => setFormData({ ...formData, practiceName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs outline-none focus:border-blue-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Specialty</label>
                      <select 
                        value={formData.specialty}
                        onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs outline-none focus:border-blue-600 transition-colors bg-white"
                      >
                        <option>Family / Internal Medicine</option>
                        <option>Cardiology / Vascular</option>
                        <option>Orthopedics / Spine</option>
                        <option>Behavioral Health</option>
                        <option>Pediatrics</option>
                        <option>Surgery / ASC</option>
                        <option>Other Specialty</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Monthly Billing Volume</label>
                      <select 
                        value={formData.monthlyCharges}
                        onChange={(e) => setFormData({ ...formData, monthlyCharges: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs outline-none focus:border-blue-600 transition-colors bg-white"
                      >
                        <option>&lt; $50,000 / mo</option>
                        <option>$50k - $150k / mo</option>
                        <option>$150k - $300k / mo</option>
                        <option>$300k - $750k / mo</option>
                        <option>$750k+ / mo</option>
                      </select>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full mt-2 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-blue-600/20 inline-flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Submit for Confidential Audit</span>
                    <ArrowRight size={14} />
                  </button>
                </form>
              )}

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
