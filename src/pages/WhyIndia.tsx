import { ArrowRight, ArrowUpRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const Nav = () => (
  <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
    <div className="editorial-container flex h-16 items-center justify-between">
      <Link to="/" className="flex items-center gap-2">
        <span className="block h-2.5 w-2.5 rounded-full bg-ink" />
        <span className="display-serif text-lg">
          CircleBuild<span className="text-accent">.</span>
        </span>
      </Link>
      <nav className="hidden items-center gap-9 text-sm md:flex">
        <Link to="/#services" className="hover-underline text-ink-soft hover:text-ink">Services</Link>
        <Link to="/#model" className="hover-underline text-ink-soft hover:text-ink">Model</Link>
        <Link to="/#academy" className="hover-underline text-ink-soft hover:text-ink">Academy</Link>
        <Link to="/why-india" className="hover-underline text-ink">Why India</Link>
        <Link to="/#work" className="hover-underline text-ink-soft hover:text-ink">Work</Link>
      </nav>
      <div className="flex items-center gap-3">
        <Link to="/#contact" className="hidden text-sm text-ink-soft hover-underline md:inline">Book a call</Link>
        <Link
          to="/#contact"
          className="group inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm text-primary-foreground transition hover:opacity-90"
        >
          Start a project <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <section className="relative overflow-hidden bg-canvas">
    <div className="grain absolute inset-0" />
    <div className="editorial-container relative pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="flex items-center justify-between text-xs">
        <span className="eyebrow">Issue 02 — A Global Operating Model</span>
        <span className="eyebrow hidden md:block">London · New Delhi · San Francisco</span>
      </div>
      <div className="mt-10 rule" />
      <div className="grid gap-10 pt-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-8">
          <p className="eyebrow">§ 00 — Why India</p>
          <h1 className="display-serif mt-6 text-balance text-[44px] leading-[1.02] sm:text-[60px] md:text-[80px] lg:text-[96px]">
            Not back office. <em className="italic text-accent">The engine room.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
            London leads the relationship. <span className="text-ink">New Delhi powers the execution.</span> San Francisco shapes the frontier. The result is a client experience that feels local — and a production engine that runs almost continuously.
          </p>
        </div>
        <aside className="lg:col-span-4">
          <div className="flex h-full flex-col justify-end">
            <div className="mono mb-4 flex items-center gap-2 text-[11px] uppercase tracking-widest text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" /> Follow the sun
            </div>
            <dl className="grid grid-cols-2 gap-y-6 border-t border-border pt-6">
              {[
                ["2", "Build shifts"],
                ["18h", "Daily build window"],
                ["5.5h", "UK ↔ NCR overlap"],
                ["1", "Accountable team"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="display-serif text-3xl">{n}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{l}</div>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </div>
    </div>
  </section>
);

const Thesis = () => (
  <section className="border-y border-border bg-background py-24 md:py-32">
    <div className="editorial-container">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="eyebrow">§ 01 — The thesis</p>
        </div>
        <div className="lg:col-span-8">
          <p className="display-serif text-balance text-3xl leading-tight md:text-5xl">
            India isn't a cost line. It's a <em className="italic text-accent">production backbone</em> — the deepest pool of senior software, AI and product builders on the planet, organised into shifts that keep your roadmap moving while the West sleeps.
          </p>
          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
            {[
              { n: "UK", t: "Trust layer", d: "Sales, briefs, design direction, accountability." },
              { n: "IN", t: "Execution layer", d: "Continuous build, QA, automations, support." },
              { n: "US", t: "Frontier layer", d: "AI systems, R&D, strategic positioning." },
            ].map((s) => (
              <div key={s.n} className="bg-background p-8">
                <div className="mono text-xs uppercase tracking-widest text-muted-foreground">{s.n}</div>
                <div className="display-serif mt-3 text-2xl">{s.t}</div>
                <p className="mt-3 text-sm text-ink-soft">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Reasons = () => {
  const reasons = [
    {
      n: "01",
      t: "A factory-sized bench of builders",
      d: "Full-stack, React/Next, mobile, backend, QA, DevOps, AI engineers, automation specialists. Faster hiring, easier scaling, depth in every role — so your roadmap never bottlenecks on one person.",
      meta: "Talent depth",
    },
    {
      n: "02",
      t: "Aggressive pricing without aggressive margins",
      d: "We can offer fixed monthly retainers that bundle design, development, AI workflows, maintenance and support — UK-led, profitable, and priced to win against any traditional agency.",
      meta: "Commercial edge",
    },
    {
      n: "03",
      t: "A time-zone overlap that just works",
      d: "London ↔ New Delhi gives a strong 5–6 hour overlap. Brief in the morning, build by the afternoon, review the next day. The day never really ends.",
      meta: "Follow-the-sun",
    },
    {
      n: "04",
      t: "Two shifts. One continuous pipeline.",
      d: "Day shift overlaps with London hours. Night shift extends UK coverage into the evening. Tickets close faster, deployments ship sooner, and your office never feels like the limit.",
      meta: "24-hour cadence",
    },
    {
      n: "05",
      t: "Built for SOPs and AI-assisted delivery",
      d: "Templates, checklists, reusable code, prompt libraries, QA gates, delivery stages. India is unmatched at running structured pipelines — exactly the model AI-native delivery requires.",
      meta: "Process advantage",
    },
    {
      n: "06",
      t: "Full department staffing, on demand",
      d: "Engineering, design, product, AI/ML, data, DevOps, QA, ops, support, account management. We can stand up entire teams inside your business — embedded and managed.",
      meta: "Team-as-a-service",
    },
  ];
  return (
    <section className="bg-canvas py-24 md:py-32">
      <div className="editorial-container">
        <div className="flex items-end justify-between">
          <div>
            <p className="eyebrow">§ 02 — Why this works</p>
            <h2 className="display-serif mt-4 text-4xl leading-tight md:text-5xl">Six reasons it compounds.</h2>
          </div>
          <span className="mono hidden text-xs uppercase tracking-widest text-muted-foreground md:block">Six / Six</span>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
          {reasons.map((r) => (
            <article key={r.n} className="group flex flex-col bg-background p-8 transition hover:bg-card md:p-10">
              <div className="flex items-start justify-between">
                <span className="mono text-xs uppercase tracking-widest text-muted-foreground">{r.n} · {r.meta}</span>
                <Plus className="h-4 w-4 text-ink-soft transition-transform group-hover:rotate-90" />
              </div>
              <h3 className="display-serif mt-6 text-2xl leading-tight md:text-3xl">{r.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">{r.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const Shifts = () => (
  <section className="bg-background py-24 md:py-32">
    <div className="editorial-container">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow">§ 03 — The day</p>
          <h2 className="display-serif mt-4 text-4xl leading-tight md:text-5xl">
            We don't stop when <em className="italic text-accent">your office closes.</em>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
            Two structured shifts in New Delhi extend the working day, then take it overnight. By the time London logs in, work has moved.
          </p>
        </div>
        <div className="lg:col-span-7">
          <ol className="grid gap-px overflow-hidden rounded-sm border border-border bg-border">
            {[
              { time: "09:00 GMT", city: "London", action: "Client call. Brief signed off. Strategy locked.", tag: "UK day" },
              { time: "14:30 IST", city: "New Delhi · Shift A", action: "Build pod picks up the brief. Specs, scaffolding, first commits.", tag: "Overlap" },
              { time: "17:00 GMT", city: "London", action: "QA review of morning output. Approvals sent before close.", tag: "UK close" },
              { time: "19:00 IST", city: "New Delhi · Shift B", action: "Night shift continues. Tickets, fixes, deployments, automations.", tag: "Extended" },
              { time: "08:30 GMT", city: "London", action: "Overnight progress lands in your inbox. The day starts ahead.", tag: "Next day" },
            ].map((s) => (
              <li key={s.time} className="grid grid-cols-12 items-center gap-4 bg-background p-6">
                <div className="col-span-3 mono text-xs uppercase tracking-widest text-ink">{s.time}</div>
                <div className="col-span-4">
                  <div className="display-serif text-lg">{s.city}</div>
                  <div className="mono text-[10px] uppercase tracking-widest text-muted-foreground">{s.tag}</div>
                </div>
                <div className="col-span-5 text-sm text-ink-soft">{s.action}</div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  </section>
);

const NewDelhi = () => (
  <section className="bg-canvas py-24 md:py-32">
    <div className="editorial-container">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow">§ 04 — Why New Delhi specifically</p>
          <h2 className="display-serif mt-4 text-4xl leading-tight md:text-5xl">
            The capital region. The deepest white-collar bench in the country.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
            New Delhi and the wider NCR — Noida, Gurugram, Ghaziabad, Faridabad — give us reach across developers, QA, project managers, account leads and night-shift teams aligned to UK hours. Strong English-business culture. Strong agency culture. Strong operators.
          </p>
        </div>
        <div className="lg:col-span-7">
          <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
            {[
              ["Developers", "Full-stack, mobile, backend, AI."],
              ["QA & testing", "Structured cells, automated coverage."],
              ["Project managers", "UK-aligned, calm under load."],
              ["Account & support", "Client-facing pods, trained in our SOPs."],
              ["Night-shift teams", "Built around UK trading hours."],
              ["Academy faculty", "Trains the VAs and account leads we deploy."],
            ].map(([t, d]) => (
              <div key={t} className="bg-background p-6">
                <div className="display-serif text-xl">{t}</div>
                <p className="mt-2 text-sm text-ink-soft">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const NotPitch = () => (
  <section className="bg-ink py-24 text-primary-foreground md:py-32">
    <div className="editorial-container">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="mono text-xs uppercase tracking-widest text-primary-foreground/60">§ 05 — A note on framing</p>
          <h2 className="display-serif mt-4 text-4xl leading-tight md:text-5xl">
            We don't sell developers. <em className="italic text-accent">We sell output.</em>
          </h2>
        </div>
        <div className="lg:col-span-7">
          <div className="grid gap-px overflow-hidden rounded-sm border border-primary-foreground/10 bg-primary-foreground/10 md:grid-cols-2">
            <div className="bg-ink p-8">
              <div className="mono text-xs uppercase tracking-widest text-primary-foreground/50">We don't say</div>
              <p className="display-serif mt-4 text-xl leading-snug text-primary-foreground/60 line-through decoration-accent/70">
                "We have developers in India."
              </p>
              <p className="mt-4 text-sm text-primary-foreground/50">It sounds outsourced. It hides the system.</p>
            </div>
            <div className="bg-ink p-8">
              <div className="mono text-xs uppercase tracking-widest text-primary-foreground/50">We say</div>
              <p className="display-serif mt-4 text-xl leading-snug">
                "London leads strategy and client direction. New Delhi is our engineering core, running continuous build cycles across two shifts. We deliver faster because our production engine never sleeps."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const What = () => {
  const items = [
    "Managed website retainers",
    "App development retainers",
    "AI workflow implementation",
    "Automation support desks",
    "Bug-fix & maintenance teams",
    "Design-to-build pipelines",
    "Client success managers",
    "24-hour turnaround systems",
    "Academy for account managers",
    "Internal QA & testing cells",
  ];
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="editorial-container">
        <div className="flex items-end justify-between">
          <div>
            <p className="eyebrow">§ 06 — What this unlocks</p>
            <h2 className="display-serif mt-4 text-4xl leading-tight md:text-5xl">A managed service catalogue, made possible.</h2>
          </div>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-5">
          {items.map((i, idx) => (
            <div key={i} className="bg-background p-6">
              <div className="mono text-xs uppercase tracking-widest text-muted-foreground">0{idx + 1 < 10 ? idx + 1 : idx + 1}</div>
              <div className="display-serif mt-3 text-lg leading-snug">{i}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => (
  <section className="relative overflow-hidden bg-canvas">
    <div className="grain absolute inset-0 opacity-40" />
    <div className="editorial-container relative py-24 md:py-32">
      <div className="flex items-center justify-between text-xs">
        <span className="eyebrow">§ 07 — The close</span>
        <span className="eyebrow hidden md:block">UK-led · Globally executed</span>
      </div>
      <h2 className="display-serif mt-12 text-balance text-5xl leading-[1.02] md:text-7xl">
        UK communication. <br />
        <em className="italic text-accent">Global execution.</em>
      </h2>
      <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
        Enterprise speed. Startup pricing. Managed continuity. If you want to see how the model would map onto your business, we can show you a worked plan in one call.
      </p>
      <div className="mt-12 flex flex-wrap gap-3">
        <Link to="/#contact" className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm text-primary-foreground transition hover:opacity-90">
          Book a discovery call <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
        <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3.5 text-sm text-ink transition hover:border-ink hover:bg-ink hover:text-primary-foreground">
          Back to the studio
        </Link>
      </div>
    </div>
  </section>
);

const WhyIndia = () => (
  <main className="min-h-screen bg-background">
    <Nav />
    <Hero />
    <Thesis />
    <Reasons />
    <Shifts />
    <NewDelhi />
    <NotPitch />
    <What />
    <CTA />
  </main>
);

export default WhyIndia;
