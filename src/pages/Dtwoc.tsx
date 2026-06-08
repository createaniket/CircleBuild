import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const METRICS = [
  { num: "₹180Cr+", label: "D2C Revenue Generated" },
  { num: "3.8×", label: "Average ROAS Improvement" },
  { num: "+64%", label: "Avg. Conversion Lift" },
  { num: "120+", label: "Brands Scaled" },
];

const PROBLEMS = [
  { icon: "📉", title: "High CAC, Low Returns", desc: "Burning budget on Meta & Google with no system to retain or upsell? We fix the full funnel, not just the top." },
  { icon: "🛒", title: "Leaky Checkout", desc: "70% of carts are abandoned. We engineer checkout flows that convert — with smart upsells and zero friction." },
  { icon: "🔁", title: "No Repeat Purchases", desc: "One-time buyers are expensive. We build retention systems — subscriptions, loyalty, and lifecycle email that compounds LTV." },
  { icon: "📊", title: "Flying Blind on Data", desc: "Can't see what's working? We wire up analytics, attribution, and dashboards so every decision is backed by data." },
];

const SERVICES = [
  { num: "01", icon: "🛍️", name: "Shopify Store Engineering", desc: "Custom, blazing-fast Shopify stores built for conversion — from headless architectures to polished Plus themes. Every page optimized to sell.", pills: ["Shopify Plus", "Headless", "Custom Themes", "Speed Optimization"] },
  { num: "02", icon: "🎯", name: "Paid Acquisition & ROAS", desc: "Meta, Google, and influencer campaigns run by performance specialists. We build systems that scale spend profitably.", pills: ["Meta Ads", "Google Shopping", "Influencer D2C", "Attribution"] },
  { num: "03", icon: "📈", name: "CRO & Revenue Optimization", desc: "Data-driven funnel audits, A/B testing frameworks, and UX overhauls that turn existing traffic into significantly more revenue.", pills: ["A/B Testing", "Funnel Audits", "Heatmaps", "Checkout CRO"] },
  { num: "04", icon: "📧", name: "Email & Retention Systems", desc: "Klaviyo flows, SMS, push notifications, and loyalty programs that turn first-time buyers into brand loyalists — automatically.", pills: ["Klaviyo", "SMS Flows", "Loyalty Stack", "Subscriptions"] },
  { num: "05", icon: "🔌", name: "Tech Stack & Integrations", desc: "From Recharge subscriptions to Yotpo reviews to WhatsApp commerce — we integrate the tools that maximize LTV without manual effort.", pills: ["Recharge", "Yotpo", "WhatsApp", "Gorgias"] },
  { num: "06", icon: "📊", name: "Analytics & Data Infrastructure", desc: "Custom dashboards, GA4 setups, server-side tracking, and cohort analysis — so you always know which levers to pull and why.", pills: ["GA4 Setup", "Looker Studio", "Server-Side", "Cohort Reports"] },
];

const STEPS = [
  { idx: "01", title: "Brand Audit", desc: "We dig into your store, ads, analytics, and email stack. Find every revenue leak and benchmark your metrics." },
  { idx: "02", title: "Growth Blueprint", desc: "A 90-day roadmap: prioritized experiments, channel strategy, and tech stack plan. Full visibility before we spend a rupee." },
  { idx: "03", title: "Build & Launch", desc: "Systems, flows, store updates, and campaigns go live in parallel. No slow agency timelines — we ship fast." },
  { idx: "04", title: "Optimize Weekly", desc: "Weekly data reviews, A/B test results, and campaign tweaks. We iterate until the numbers compound." },
  { idx: "05", title: "Scale & Retain", desc: "Once the engine is proven, we scale your best channels and double down on LTV — compounding returns month over month." },
];

const RESULTS = [
  { num: "+64%", desc: "Average increase in store conversion rate after CRO engagement" },
  { num: "3.8×", desc: "Improvement in ROAS for brands running paid media with us" },
  { num: "−42%", desc: "Cart abandonment rate drop after checkout flow rebuild" },
  { num: "+91%", desc: "Growth in repeat purchase rate within 6 months of retention stack" },
];

const TESTIMONIALS = [
  { initials: "SK", bg: "bg-[#C8FF00] text-[#0B0B0B]", quote: "We went from ₹18L/month to ₹1.2Cr in 7 months. CircleBuilds didn't just build our Shopify store — they rebuilt our entire growth engine. The best decision we made post-launch.", name: "Simran Kaur", role: "Founder, Lumière Skincare" },
  { initials: "MR", bg: "bg-[#7DF9FF] text-[#0B0B0B]", quote: "Our Meta ROAS was at 1.4x. After 60 days with CircleBuilds, it's at 4.8x. They restructured the full funnel — ads, landing pages, post-purchase — and the difference is night and day.", name: "Mihir Rathod", role: "Co-founder, Terrain Outdoor" },
  { initials: "PL", bg: "bg-[#FFB347] text-[#0B0B0B]", quote: "The Klaviyo flows alone generate ₹8–10L every month on autopilot. That's pure profit we were leaving on the table. CircleBuilds found it, built it, and it just runs.", name: "Priya Lal", role: "Head of Growth, BonVivant Foods" },
  { initials: "JT", bg: "bg-[#FF6B9D] text-[#0B0B0B]", quote: "They challenged our entire product page strategy, rewrote the copy, redesigned the layout — AOV jumped 34% in the first month. Not just builders, genuine growth partners.", name: "Jatin Tiwari", role: "CEO, Oaken Supply Co." },
];

const BRANDS = ["Lumière", "Rootkit", "Veldt", "Harlow Co.", "Oaken", "Terrain", "BonVivant"];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const D2C = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F0F0F0] font-sans antialiased overflow-x-hidden">

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 h-16 bg-[#0B0B0B]/90 backdrop-blur-lg border-b border-white/[0.08]">
        <a href="https://circlebuilds.com" className="font-bold text-[1.15rem] tracking-tight text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
          Circle<span className="text-[#C8FF00]">Builds</span>
        </a>
        <ul className="flex items-center gap-8 list-none">
          <li><button onClick={() => scrollTo("services")} className="text-[#888] text-sm hover:text-white transition-colors bg-transparent border-none cursor-pointer">Services</button></li>
          <li><button onClick={() => scrollTo("process")} className="text-[#888] text-sm hover:text-white transition-colors bg-transparent border-none cursor-pointer">Process</button></li>
          <li><button onClick={() => scrollTo("results")} className="text-[#888] text-sm hover:text-white transition-colors bg-transparent border-none cursor-pointer">Results</button></li>
          <li>
            <button
              onClick={() => scrollTo("contact")}
              className="bg-[#C8FF00] text-[#0B0B0B] text-xs font-semibold px-4 py-2 rounded-full hover:opacity-85 transition-opacity border-none cursor-pointer"
            >
              Talk to Us
            </button>
          </li>
        </ul>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-center px-10 pt-32 pb-20 overflow-hidden">
        {/* grid lines */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* glows */}
        <div className="absolute top-[-180px] right-[-150px] w-[700px] h-[700px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(200,255,0,0.07) 0%, transparent 65%)" }} />
        <div className="absolute bottom-0 left-[10%] w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(200,255,0,0.04) 0%, transparent 65%)" }} />

        <div className="relative z-10 flex flex-col items-start gap-6 animate-[fadeUp_0.6s_ease_both]">
          {/* eyebrow */}
          <div className="flex items-center gap-2 border border-[#C8FF00]/30 bg-[#C8FF00]/[0.08] text-[#C8FF00] text-[0.72rem] font-semibold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF00] inline-block" />
            D2C Growth Engine
          </div>

          {/* title */}
          <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-white max-w-4xl" style={{ fontFamily: "'Syne', sans-serif" }}>
            We Scale <span className="text-[#C8FF00]">D2C Brands</span><br />
            <span className="text-[#555]">From Checkout</span><br />
            to Compounding Revenue
          </h1>

          {/* subtitle */}
          <p className="text-[1.05rem] text-[#888] max-w-xl leading-[1.75] font-light">
            CircleBuilds builds the full growth stack for D2C brands — Shopify stores, paid acquisition, retention systems, and data infrastructure — so every rupee you spend comes back multiplied.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-4 flex-wrap">
            <button
              onClick={() => scrollTo("contact")}
              className="bg-[#C8FF00] text-[#0B0B0B] font-semibold text-sm px-7 py-3 rounded-full border-none cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(200,255,0,0.25)] transition-all"
            >
              Get a Free Growth Audit →
            </button>
            <button
              onClick={() => scrollTo("services")}
              className="border border-white/20 text-[#F0F0F0] bg-transparent text-sm font-medium px-7 py-3 rounded-full cursor-pointer hover:border-white/40 transition-colors"
            >
              See What We Build
            </button>
          </div>

          {/* metrics */}
          <div className="flex mt-8 border border-white/[0.08] rounded-2xl bg-[#111] overflow-hidden w-fit">
            {METRICS.map((m, i) => (
              <div key={m.label} className={`px-8 py-5 ${i < METRICS.length - 1 ? "border-r border-white/[0.08]" : ""}`}>
                <div className="text-[1.8rem] font-extrabold text-[#C8FF00] leading-none mb-1 tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>{m.num}</div>
                <div className="text-[0.75rem] text-[#888]">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRANDS ── */}
      <div className="flex items-center gap-12 px-10 py-[1.75rem] border-t border-b border-white/[0.08] overflow-hidden">
        <span className="text-[0.7rem] tracking-[0.1em] uppercase text-[#555] font-medium whitespace-nowrap shrink-0">Brands we've scaled</span>
        <div className="flex gap-12 items-center flex-wrap">
          {BRANDS.map((b) => (
            <span key={b} className="font-bold text-[0.85rem] text-[#555] tracking-[0.05em] uppercase transition-colors hover:text-[#888] cursor-default" style={{ fontFamily: "'Syne', sans-serif" }}>{b}</span>
          ))}
        </div>
      </div>

      {/* ── PROBLEMS ── */}
      <div className="bg-[#111] border-b border-white/[0.08] px-10 py-12">
        <div className="grid grid-cols-4 border border-white/[0.08] rounded-2xl overflow-hidden">
          {PROBLEMS.map((p, i) => (
            <div key={p.title} className={`p-7 bg-[#111] hover:bg-[#161616] transition-colors ${i < PROBLEMS.length - 1 ? "border-r border-white/[0.08]" : ""}`}>
              <div className="w-11 h-11 rounded-[10px] bg-[#161616] border border-white/[0.08] flex items-center justify-center text-[1.4rem] mb-4">{p.icon}</div>
              <div className="font-semibold text-sm text-white mb-1.5">{p.title}</div>
              <p className="text-[0.8rem] text-[#888] leading-[1.65]">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section id="services" className="px-10 py-24 bg-[#0B0B0B]">
        <div className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase text-[#C8FF00] mb-3">What We Build</div>
        <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-extrabold leading-[1.12] tracking-[-0.035em] text-white max-w-lg mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>
          The Full D2C Growth Stack
        </h2>
        <p className="text-[0.95rem] text-[#888] max-w-lg leading-[1.75] font-light mb-14">
          Not an agency. A systems partner. We build and operate every layer of your D2C revenue engine.
        </p>

        <div className="grid grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08] rounded-2xl overflow-hidden">
          {SERVICES.map((s) => (
            <div key={s.num} className="relative bg-[#111] p-9 hover:bg-[#161616] transition-colors group overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#C8FF00] transition-colors" />
              <div className="text-[0.7rem] font-bold text-[#555] tracking-[0.08em] mb-6">{s.num}</div>
              <div className="w-[42px] h-[42px] rounded-lg bg-[#C8FF00]/[0.08] border border-[#C8FF00]/15 flex items-center justify-center text-[1.1rem] mb-5">{s.icon}</div>
              <div className="font-bold text-[1.05rem] text-white mb-2.5 leading-[1.3] tracking-[-0.02em]" style={{ fontFamily: "'Syne', sans-serif" }}>{s.name}</div>
              <p className="text-[0.82rem] text-[#888] leading-[1.7] mb-5">{s.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {s.pills.map((p) => (
                  <span key={p} className="text-[0.68rem] font-medium text-[#555] border border-white/[0.08] px-2.5 py-0.5 rounded-full tracking-wide">{p}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" className="px-10 py-24 bg-[#111]">
        <div className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase text-[#C8FF00] mb-3">How It Works</div>
        <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-extrabold leading-[1.12] tracking-[-0.035em] text-white max-w-lg mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>
          Plugged In Within 2 Weeks
        </h2>
        <p className="text-[0.95rem] text-[#888] max-w-lg leading-[1.75] font-light mb-14">
          A proven onboarding process that gets us from zero to operating your growth engine — fast.
        </p>

        <div className="grid grid-cols-5 border border-white/[0.08] rounded-2xl overflow-hidden">
          {STEPS.map((s, i) => (
            <div key={s.idx} className={`relative p-6 bg-[#0B0B0B] hover:bg-[#161616] transition-colors ${i < STEPS.length - 1 ? "border-r border-white/[0.08]" : ""}`}>
              {i < STEPS.length - 1 && (
                <span className="absolute right-[-11px] top-1/2 -translate-y-1/2 w-[22px] h-[22px] bg-[#111] border border-white/[0.08] rounded-full flex items-center justify-center text-[0.6rem] text-[#C8FF00] z-10">→</span>
              )}
              <div className="text-[2rem] font-extrabold text-[#C8FF00]/[0.12] leading-none mb-3 tracking-[-0.04em]" style={{ fontFamily: "'Syne', sans-serif" }}>{s.idx}</div>
              <div className="font-semibold text-sm text-white mb-1.5">{s.title}</div>
              <p className="text-[0.78rem] text-[#888] leading-[1.6]">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── RESULTS ── */}
      <section id="results" className="px-10 py-24 bg-[#0B0B0B]">
        <div className="grid grid-cols-2 gap-16 items-start">
          <div>
            <div className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase text-[#C8FF00] mb-3">Proof</div>
            <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-extrabold leading-[1.12] tracking-[-0.035em] text-white max-w-lg mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>
              Numbers That Speak for Themselves
            </h2>
            <p className="text-[0.95rem] text-[#888] max-w-lg leading-[1.75] font-light mb-8">
              Measured across 120+ D2C brands in fashion, beauty, food, and lifestyle — within 90 days of engagement.
            </p>
            <button
              onClick={() => scrollTo("contact")}
              className="bg-[#C8FF00] text-[#0B0B0B] font-semibold text-sm px-7 py-3 rounded-full border-none cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(200,255,0,0.25)] transition-all"
            >
              See Full Case Studies →
            </button>
          </div>

          <div className="grid grid-cols-2 gap-px bg-white/[0.08] border border-white/[0.08] rounded-2xl overflow-hidden">
            {RESULTS.map((r) => (
              <div key={r.num} className="bg-[#111] p-7 hover:bg-[#161616] transition-colors">
                <div className="text-[2.6rem] font-extrabold text-[#C8FF00] leading-none mb-1.5 tracking-[-0.04em]" style={{ fontFamily: "'Syne', sans-serif" }}>{r.num}</div>
                <p className="text-[0.78rem] text-[#888] leading-[1.6]">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="px-10 py-24 bg-[#111]">
        <div className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase text-[#C8FF00] mb-3">Client Stories</div>
        <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-extrabold leading-[1.12] tracking-[-0.035em] text-white max-w-lg mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>
          What D2C Founders Say
        </h2>
        <p className="text-[0.95rem] text-[#888] max-w-lg leading-[1.75] font-light mb-14">
          Real feedback from brands we've grown — from bootstrapped startups to ₹100Cr+ labels.
        </p>

        <div className="grid grid-cols-2 gap-4">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="border border-white/[0.08] rounded-2xl p-8 bg-[#0B0B0B] hover:border-white/[0.18] transition-colors">
              <div className="text-[#C8FF00] text-[0.7rem] tracking-[2px] mb-4">★★★★★</div>
              <p className="text-[0.875rem] text-white/80 leading-[1.75] font-light italic mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${t.bg}`}>{t.initials}</div>
                <div>
                  <div className="font-semibold text-sm text-white">{t.name}</div>
                  <div className="text-[0.75rem] text-[#888]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" className="relative px-10 py-32 text-center overflow-hidden bg-[#0B0B0B]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(200,255,0,0.06) 0%, transparent 65%)" }} />
        <div className="relative z-10 flex flex-col items-center gap-6">
          <div className="border border-[#C8FF00]/30 bg-[#C8FF00]/[0.08] text-[#C8FF00] text-[0.7rem] font-semibold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full">
            Free Growth Audit — Zero Commitment
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,4.2rem)] font-extrabold leading-[1.08] tracking-[-0.04em] text-white max-w-2xl" style={{ fontFamily: "'Syne', sans-serif" }}>
            Ready to Turn Your D2C Brand<br />
            Into a <span className="text-[#C8FF00]">Revenue Machine?</span>
          </h2>
          <p className="text-[0.95rem] text-[#888] max-w-md leading-[1.75] font-light">
            Tell us about your brand. We'll audit your store, your ads, and your retention — and show you exactly where the revenue is being left behind.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <a
              href="mailto:hello@circlebuilds.com"
              className="bg-[#C8FF00] text-[#0B0B0B] font-semibold text-sm px-7 py-3 rounded-full hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(200,255,0,0.25)] transition-all no-underline"
            >
              Book Free Audit
            </a>
            <a
              href="https://circlebuilds.com"
              className="border border-white/20 text-white text-sm font-medium px-7 py-3 rounded-full hover:border-white/40 transition-colors no-underline"
            >
              Back to CircleBuilds
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/[0.08] px-10 py-7 flex justify-between items-center flex-wrap gap-4 bg-[#0B0B0B]">
        <a href="https://circlebuilds.com" className="font-bold text-base text-white no-underline" style={{ fontFamily: "'Syne', sans-serif" }}>
          Circle<span className="text-[#C8FF00]">Builds</span>
        </a>
        <ul className="flex gap-7 list-none">
          {[
            { label: "D2C Services", id: "services" },
            { label: "Results", id: "results" },
          ].map((l) => (
            <li key={l.label}>
              <button onClick={() => scrollTo(l.id)} className="text-[#555] text-sm bg-transparent border-none cursor-pointer hover:text-[#888] transition-colors font-sans">
                {l.label}
              </button>
            </li>
          ))}
          <li><a href="mailto:hello@circlebuilds.com" className="text-[#555] text-sm hover:text-[#888] transition-colors no-underline">Contact</a></li>
        </ul>
        <span className="text-[0.75rem] text-[#555]">© 2026 CircleBuilds. All rights reserved.</span>
      </footer>

    </div>
  );
};

export default D2C;