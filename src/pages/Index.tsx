import heroImg from "@/assets/hero-system.jpg";
import academyImg from "@/assets/academy.jpg";
import managedImg from "@/assets/managed.jpg";
import { ArrowUpRight, ArrowRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const Nav = () => (
  <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
    <div className="editorial-container flex h-16 items-center justify-between">
      <a href="#" className="flex items-center gap-2">
        <span className="block h-2.5 w-2.5 rounded-full bg-ink" />
        <span className="display-serif text-lg">CircleBuild<span className="text-accent">.</span></span>
      </a>
      <nav className="hidden items-center gap-9 text-sm md:flex">
        {["Services", "Capabilities", "Model", "Academy", "Work"].map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} className="hover-underline text-ink-soft hover:text-ink">{l}</a>
        ))}
        <Link to="/why-india" className="hover-underline text-ink-soft hover:text-ink">Why India</Link>
      </nav>
      <div className="flex items-center gap-3">
        <a href="#contact" className="hidden text-sm text-ink-soft hover-underline md:inline">Book a call</a>
        <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm text-primary-foreground transition hover:opacity-90">
          Start a project <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <section className="relative overflow-hidden bg-canvas">
    <div className="grain absolute inset-0" />
    <div className="editorial-container relative pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="flex items-center justify-between text-xs">
        <span className="eyebrow">Issue 01 - The Operating System for Modern Business</span>
        <span className="eyebrow hidden md:block">Est. London / Global</span>
      </div>
      <div className="mt-10 rule" />
      <div className="grid gap-10 pt-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <h1 className="display-serif text-balance text-[44px] leading-[1.02] sm:text-[64px] md:text-[84px] lg:text-[104px] reveal">
            Build your next <em className="italic text-accent">business</em> backbone.
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg reveal-slow">
            CircleBuild designs, builds and operates the apps, systems and digital
            infrastructure modern companies actually need - engineered with AI-assisted
            production, expert oversight and a managed monthly layer that keeps
            everything live, sharp and compounding.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm text-primary-foreground transition hover:opacity-90">
              Start a project <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#services" className="group inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3.5 text-sm text-ink transition hover:border-ink hover:bg-ink hover:text-primary-foreground">
              Explore services
            </a>
          </div>
        </div>
        <aside className="lg:col-span-5">
          <div className="flex h-full flex-col justify-end">
            <div className="mono mb-4 flex items-center gap-2 text-[11px] uppercase tracking-widest text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" /> Now operating
            </div>
            <dl className="grid grid-cols-2 gap-y-6 border-t border-border pt-6">
              {[
                ["120+", "Products live"],
                ["14d", "Avg. time to launch"],
                ["99.98%", "Managed uptime"],
                ["38", "Countries served"],
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

      <div className="mt-16 overflow-hidden rounded-sm border border-border bg-card shadow-[0_30px_80px_-40px_hsl(var(--ink)/0.25)]">
        <img src={heroImg} alt="Editorial composition of dashboards, code and system architecture" width={1920} height={1080} className="h-auto w-full" />
      </div>
    </div>
  </section>
);

const Marquee = () => {
  const words = ["Apps", "Websites", "Systems", "Automations", "Dashboards", "Portals", "Internal Tools", "MVPs", "Operations", "Backbones"];
  const row = [...words, ...words];
  return (
    <section className="border-y border-border bg-background py-6">
      <div className="overflow-hidden">
        <div className="marquee flex w-max gap-12 whitespace-nowrap px-6">
          {row.map((w, i) => (
            <span key={i} className="flex items-center gap-12 display-serif text-2xl text-ink-soft">
              {w} <span className="h-1 w-1 rounded-full bg-border" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const items = [
    { n: "01", t: "Apps", d: "Native-quality web and mobile products engineered for scale and craft." },
    { n: "02", t: "Websites", d: "Editorial, marketing and commerce sites that convert and last." },
    { n: "03", t: "Systems", d: "Custom platforms, CRMs and back-offices tailored to how you operate." },
    { n: "04", t: "Automations", d: "Workflows that remove the manual tax from sales, ops and finance." },
    { n: "05", t: "Dashboards", d: "Decision-grade analytics built on the data you actually have." },
    { n: "06", t: "Client Portals", d: "Beautiful spaces for your customers to log in, work and stay." },
    { n: "07", t: "Internal Tools", d: "Replace spreadsheets and SaaS sprawl with one calm interface." },
    { n: "08", t: "MVPs", d: "From thesis to a launchable product in weeks, not quarters." },
  ];
  return (
    <section id="services" className="bg-background py-24 md:py-32">
      <div className="editorial-container">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">§ 03 - What we build</p>
            <h2 className="display-serif mt-4 text-4xl leading-tight md:text-5xl">A studio for the things that run your business.</h2>
          </div>
          <p className="text-base leading-relaxed text-ink-soft lg:col-span-7 lg:col-start-6 md:text-lg">
            Eight disciplines, one operating standard. Every engagement begins with a
            sharply-scoped brief and ends with a system you own, documented, monitored
            and ready to grow.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 border-t border-border sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <article
              key={it.n}
              className={`group relative border-b border-border p-8 transition hover:bg-canvas ${
                i % 4 !== 3 ? "lg:border-r" : ""
              } ${i % 2 !== 1 ? "sm:border-r lg:border-r" : "sm:border-r-0"} ${
                i % 4 === 3 ? "lg:border-r-0" : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <span className="mono text-xs text-muted-foreground">{it.n}</span>
                <Plus className="h-4 w-4 text-ink-soft transition-transform duration-500 group-hover:rotate-90" />
              </div>
              <h3 className="display-serif mt-12 text-2xl">{it.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{it.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const Model = () => {
  const rows = [
    ["Delivery speed", "6–12 month builds", "2–6 week launches"],
    ["Cost structure", "£80k+ retainers", "Transparent, scoped pricing"],
    ["Team", "Fragmented freelancers", "Managed expert pod + AI"],
    ["After launch", "Risk and silence", "Monthly management & growth"],
    ["Talent", "Hired ad-hoc", "Trained operators on call"],
  ];
  return (
    <section id="model" className="border-t border-border bg-canvas py-24 md:py-32">
      <div className="editorial-container">
        <div className="max-w-3xl">
          <p className="eyebrow">§ 04 - Why this model wins</p>
          <h2 className="display-serif mt-4 text-4xl leading-[1.05] md:text-6xl text-balance">
            The traditional agency was built for a slower world.
          </h2>
        </div>
        <div className="mt-16 overflow-hidden rounded-sm border border-border bg-background">
          <div className="grid grid-cols-12 border-b border-border bg-canvas px-6 py-4 text-xs uppercase tracking-widest text-muted-foreground mono">
            <div className="col-span-4">Dimension</div>
            <div className="col-span-4">Old agency</div>
            <div className="col-span-4 text-ink">CircleBuild</div>
          </div>
          {rows.map(([k, a, b], i) => (
            <div key={k} className={`grid grid-cols-12 items-center px-6 py-6 ${i !== rows.length - 1 ? "border-b border-border" : ""}`}>
              <div className="col-span-4 text-sm text-ink-soft">{k}</div>
              <div className="col-span-4 text-sm text-ink-soft line-through decoration-ink/20">{a}</div>
              <div className="col-span-4 display-serif text-lg md:text-xl">{b}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Layer = () => {
  const layers = [
    { n: "01", t: "Marketing", d: "Tells the story.", muted: true },
    { n: "02", t: "Finance", d: "Counts the money.", muted: true },
    { n: "03", t: "Operations", d: "Keeps it running.", muted: true },
    { n: "04", t: "People", d: "Builds the team.", muted: true },
    { n: "05", t: "CircleBuild", d: "Builds and runs the digital backbone everything else now depends on.", muted: false },
  ];
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="editorial-container">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">§ 05 - A new internal layer</p>
            <h2 className="display-serif mt-4 text-4xl leading-[1.05] md:text-6xl text-balance">
              Not a vendor. A <em className="italic text-accent">department</em> you don't have to hire.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-base leading-relaxed text-ink-soft md:text-lg">
              Every modern company runs on a handful of vital functions. Marketing,
              finance, operations, people. We believe there is now a fifth - the
              digital systems layer - and it is too important to leave to
              freelancers, frozen SaaS or one overworked CTO.
            </p>
            <p className="mt-5 text-base leading-relaxed text-ink-soft md:text-lg">
              CircleBuild plugs in as that layer. Embedded, accountable, on the
              inside. The team your org chart was missing.
            </p>
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-sm border border-border">
          {layers.map((l, i) => (
            <div
              key={l.t}
              className={`group grid grid-cols-12 items-center px-6 py-7 transition md:px-10 md:py-9 ${
                i !== layers.length - 1 ? "border-b border-border" : ""
              } ${l.muted ? "bg-background hover:bg-canvas" : "bg-ink text-primary-foreground"}`}
            >
              <div className={`col-span-2 mono text-xs ${l.muted ? "text-muted-foreground" : "text-primary-foreground/60"}`}>
                Layer {l.n}
              </div>
              <div className="col-span-4 md:col-span-3">
                <span className={`display-serif text-2xl md:text-3xl ${l.muted ? "" : "text-accent"}`}>{l.t}</span>
              </div>
              <div className={`col-span-6 md:col-span-6 text-sm md:text-base ${l.muted ? "text-ink-soft" : "text-primary-foreground/85"}`}>
                {l.d}
              </div>
              <div className="hidden md:flex md:col-span-1 justify-end">
                {l.muted ? (
                  <span className="mono text-[11px] text-muted-foreground">Internal</span>
                ) : (
                  <span className="mono text-[11px] uppercase tracking-widest text-accent">Embedded</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-8 border-t border-border pt-10 md:grid-cols-3">
          {[
            ["Inside the business", "We operate as part of your team - standups, Slack, decisions, accountability."],
            ["Always on", "Like finance or ops, the work never stops. Releases, fixes, improvements - every week."],
            ["Org-chart ready", "One contract replaces a head of engineering, an agency and three SaaS tools."],
          ].map(([t, d]) => (
            <div key={t}>
              <h3 className="display-serif text-xl">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Managed = () => {
  const list = ["Updates & releases", "24/7 monitoring", "Bug tracking", "Security patches", "Performance tuning", "Account manager", "Content & QA", "Continuous improvement"];
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="editorial-container grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="sticky top-24">
            <p className="eyebrow">§ 06 - Managed monthly</p>
            <h2 className="display-serif mt-4 text-4xl leading-tight md:text-5xl">Launch is the start, not the finish line.</h2>
            <p className="mt-6 text-base leading-relaxed text-ink-soft md:text-lg">
              Every product we ship is wrapped in a monthly operating layer.
              Real engineers, real account managers, on call - keeping your
              backbone alive, sharp and improving in the background.
            </p>
            <a href="#contact" className="mt-8 inline-flex items-center gap-2 hover-underline text-ink">
              See a sample care plan <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-sm border border-border bg-canvas">
            <img src={managedImg} alt="Managed operations panel" width={1400} height={1000} loading="lazy" className="h-auto w-full" />
          </div>
          <ul className="mt-8 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-border pt-8">
            {list.map((l, i) => (
              <li key={l} className="flex items-baseline gap-3 text-sm">
                <span className="mono text-[11px] text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-ink">{l}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const Academy = () => {
  const tracks = [
    ["Account Managers", "Run the day-to-day rhythm with clients."],
    ["AI-Enabled Operators", "Wield the new toolset with judgement."],
    ["Support Specialists", "First-class care across every channel."],
    ["QA & Testing", "The unglamorous work that builds trust."],
    ["Client Success", "Turn launches into long compounding stories."],
  ];
  return (
    <section id="academy" className="border-y border-border bg-canvas py-24 md:py-32">
      <div className="editorial-container">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">§ 07 - The Academy</p>
            <h2 className="display-serif mt-4 text-4xl leading-tight md:text-5xl">A modern coding school, training the workforce we deploy.</h2>
            <p className="mt-6 text-base leading-relaxed text-ink-soft md:text-lg">
              CircleBuild Academy trains a global pipeline of operators, account
              managers and AI-fluent specialists - the human layer behind every
              product we ship and every system we maintain.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-border pt-6">
              {[["6", "Cohorts / yr"], ["1,200+", "Operators trained"], ["32", "Countries"]].map(([n, l]) => (
                <div key={l}>
                  <div className="display-serif text-2xl">{n}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground mono">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-sm border border-border">
              <img src={academyImg} alt="CircleBuild Academy desk" width={1400} height={1000} loading="lazy" className="h-auto w-full" />
            </div>
            <div className="mt-8 divide-y divide-border border-y border-border">
              {tracks.map(([t, d], i) => (
                <div key={t} className="group flex items-center justify-between py-5 transition hover:pl-2">
                  <div className="flex items-baseline gap-6">
                    <span className="mono text-xs text-muted-foreground">T.{String(i + 1).padStart(2, "0")}</span>
                    <span className="display-serif text-xl">{t}</span>
                  </div>
                  <span className="hidden text-sm text-ink-soft md:inline">{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Audience = () => {
  const tags = ["Founders", "Operators", "Creators", "SMEs", "Agencies", "Studios", "Brands in transition", "Growing teams"];
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="editorial-container text-center">
        <p className="eyebrow">§ 08 - Built for</p>
        <h2 className="display-serif mx-auto mt-6 max-w-5xl text-balance text-5xl leading-[1.02] md:text-7xl">
          For businesses that need a <em className="italic text-accent">smarter</em> backbone.
        </h2>
        <div className="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-2">
          {tags.map((t) => (
            <span key={t} className="rounded-full border border-ink/20 px-5 py-2.5 text-sm text-ink-soft transition hover:border-ink hover:text-ink">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

const How = () => {
  const steps = [
    ["Strategy & scope", "We pressure-test the brief, define outcomes and write a sharp, costed plan."],
    ["AI-assisted build", "Senior engineers paired with AI move from blueprint to working product, fast."],
    ["Expert delivery & QA", "Technical leads, designers and QA harden every release before it ships."],
    ["Monthly management", "We operate, monitor and improve - your backbone keeps compounding."],
  ];
  return (
    <section className="border-t border-border bg-canvas py-24 md:py-32">
      <div className="editorial-container">
        <div className="flex items-end justify-between gap-10">
          <div>
            <p className="eyebrow">§ 09 - How it works</p>
            <h2 className="display-serif mt-4 text-4xl leading-tight md:text-5xl">Four movements, one operating standard.</h2>
          </div>
          <span className="mono hidden text-xs text-muted-foreground md:block">Avg. cycle - 14 days</span>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([t, d], i) => (
            <div key={t} className="group flex h-full flex-col bg-background p-8 transition hover:bg-ink hover:text-primary-foreground">
              <div className="flex items-center justify-between">
                <span className="mono text-xs text-muted-foreground group-hover:text-primary-foreground/70">Step {String(i + 1).padStart(2, "0")}</span>
                <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
              </div>
              <h3 className="display-serif mt-16 text-2xl">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft group-hover:text-primary-foreground/80">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Studios = () => {
  const studios = [
    { city: "New Delhi", region: "India / APAC", coord: "28.6139° N", role: "Engineering core - the world's fastest build floor. AI-native developers shipping at a pace nowhere else can match.", time: "IST", flag: "Home" },
    { city: "London", region: "UK / EMEA", coord: "51.5074° N", role: "Client studio - strategy, design direction, partnership.", time: "GMT", flag: "Studio" },
    { city: "San Francisco", region: "US / Americas", coord: "37.7749° N", role: "Frontier R&D - AI systems, platform, applied research.", time: "PST", flag: "R&D" },
  ];
  const departments = ["Engineering", "Design", "Product", "AI / ML", "Data", "DevOps", "QA", "Operations", "Support"];
  return (
    <section id="studios" className="bg-background py-24 md:py-32">
      <div className="editorial-container">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">§ 02 - Based in India · Worldwide</p>
            <h2 className="display-serif mt-4 text-4xl leading-tight md:text-5xl">
              Built in the country that <em className="italic text-accent">builds the world.</em>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
              Our engineering core is in <span className="text-ink">India</span> - home to the largest concentration of senior software and AI talent on the planet. From there we run client studios in <span className="text-ink">London</span> and frontier R&D in <span className="text-ink">San Francisco</span>, giving you a 24-hour build cycle behind one accountable team.
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Need more than a project? We can stand up <span className="text-ink">full staff structures across every department</span> - engineering, design, product, AI, data, ops and support - embedded in your business and managed by us.
            </p>
          </div>
          <div className="md:col-span-7">
            <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border">
              {studios.map((s, i) => (
                <div
                  key={s.city}
                  className={`grid grid-cols-12 items-start gap-4 p-6 md:p-8 ${i === 0 ? "bg-ink text-primary-foreground" : "bg-background"}`}
                >
                  <div className="col-span-12 flex items-center justify-between md:col-span-3">
                    <div>
                      <div className={`mono text-xs uppercase tracking-widest ${i === 0 ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                        0{i + 1} · {s.flag}
                      </div>
                      <div className="display-serif mt-2 text-2xl">{s.city}</div>
                    </div>
                  </div>
                  <div className="col-span-6 md:col-span-3">
                    <div className={`mono text-xs uppercase tracking-widest ${i === 0 ? "text-primary-foreground/60" : "text-muted-foreground"}`}>Region</div>
                    <div className={`mt-2 text-sm ${i === 0 ? "text-primary-foreground" : "text-ink"}`}>{s.region}</div>
                    <div className={`mono mt-1 text-xs ${i === 0 ? "text-primary-foreground/50" : "text-muted-foreground"}`}>{s.coord}</div>
                  </div>
                  <div className="col-span-6 md:col-span-4">
                    <div className={`mono text-xs uppercase tracking-widest ${i === 0 ? "text-primary-foreground/60" : "text-muted-foreground"}`}>Focus</div>
                    <div className={`mt-2 text-sm ${i === 0 ? "text-primary-foreground/80" : "text-ink-soft"}`}>{s.role}</div>
                  </div>
                  <div className="col-span-12 md:col-span-2 md:text-right">
                    <div className={`mono text-xs uppercase tracking-widest ${i === 0 ? "text-primary-foreground/60" : "text-muted-foreground"}`}>Zone</div>
                    <div className={`mono mt-2 text-sm ${i === 0 ? "text-primary-foreground" : "text-ink"}`}>{s.time}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-border pt-6">
              <div className="flex items-center justify-between">
                <p className="mono text-xs uppercase tracking-widest text-muted-foreground">Departments we staff</p>
                <p className="mono text-xs uppercase tracking-widest text-muted-foreground">Embedded · Managed</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {departments.map((d) => (
                  <span key={d} className="mono rounded-full border border-border px-3 py-1.5 text-xs text-ink-soft">
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Capabilities = () => {
  const stacks = [
    {
      title: "Engineering",
      tag: "Code",
      items: [
        "Plain HTML / CSS / JavaScript",
        "TypeScript · Next.js · Vite · Astro",
        "MERN (Mongo · Express · React · Node)",
        "MEAN (Mongo · Express · Angular · Node)",
        "React Native · Flutter · Expo · Swift · Kotlin",
        "Python · Django · FastAPI · Laravel · .NET",
        "PostgreSQL · MySQL · Supabase · Firebase",
        "AWS · GCP · Azure · Vercel · Cloudflare",
        "Retool · Bubble · Webflow · WordPress · Shopify",
        "n8n · Zapier · Make · workflow automation",
      ],
    },
    {
      title: "Design",
      tag: "Craft",
      items: [
        "Brand identity · logo systems · guidelines",
        "UI / UX · product design · design systems",
        "Creatives · static & motion ad sets",
        "Memes · social-first graphics · carousels",
        "Illustration · iconography · packaging",
        "Video editing · reels · YouTube · podcast cuts",
        "Motion graphics · After Effects · Lottie",
        "3D · Blender · product renders · animation",
        "Photography retouch · color · compositing",
        "Pitch decks · investor & sales collateral",
      ],
    },
    {
      title: "Marketing",
      tag: "Demand",
      items: [
        "Moment marketing · real-time creative",
        "Performance - Meta · Google · TikTok · LinkedIn",
        "Programmatic · DV360 · retargeting funnels",
        "Influencer · UGC · creator partnerships",
        "Email · lifecycle · CRM · Klaviyo · HubSpot",
        "WhatsApp · SMS · push automation",
        "Content marketing · long-form · newsletters",
        "PR · launches · earned media",
        "Brand campaigns · ATL · OOH · scripts",
        "Analytics · GA4 · attribution · dashboards",
      ],
    },
    {
      title: "SEO",
      tag: "Discover",
      items: [
        "Technical SEO · audits · Core Web Vitals",
        "On-page · schema · internal linking",
        "Content SEO · clusters · topical authority",
        "Programmatic SEO at scale",
        "Off-page · digital PR · link acquisition",
        "Local SEO · Google Business · maps",
        "E-commerce SEO · Shopify · feeds",
        "International / hreflang / multi-region",
        "AI SEO · LLM visibility · GEO / AEO",
        "Reporting · Search Console · Ahrefs · Semrush",
      ],
    },
  ];

  return (
    <section id="capabilities" className="bg-canvas py-24 md:py-32">
      <div className="editorial-container">
        <div className="flex items-end justify-between gap-10">
          <div>
            <p className="eyebrow">§ 10 - Capabilities</p>
            <h2 className="display-serif mt-4 max-w-3xl text-4xl leading-[1.05] md:text-6xl">
              Every layer of a modern business, <em className="italic">under one roof.</em>
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm leading-relaxed text-ink-soft md:block">
            From a single landing page in plain HTML to a full-stack product, a 3D
            render, a performance campaign, or an SEO engine - one team, one
            standard, one invoice.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
          {stacks.map((s, i) => (
            <div key={s.title} className="bg-background p-8 md:p-10">
              <div className="flex items-baseline justify-between">
                <h3 className="display-serif text-3xl md:text-4xl">{s.title}</h3>
                <span className="mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")} / {s.tag}
                </span>
              </div>
              <div className="mt-6 h-px w-full bg-border" />
              <ul className="mt-6 grid gap-2.5 text-[15px] leading-relaxed text-ink-soft">
                {s.items.map((it) => (
                  <li key={it} className="flex items-start gap-3">
                    <Plus className="mt-1 h-3.5 w-3.5 shrink-0 text-accent" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-sm text-muted-foreground">
          Don't see it on the list? We almost certainly do it. Ask us - if it lives
          on the internet, ships in a store, or runs on a screen, it's in scope.
        </p>
      </div>
    </section>
  );
};

const Industries = () => {
  const sectors = [
    "Fintech", "SaaS", "E-commerce", "D2C brands", "Logistics",
    "Healthcare", "EdTech", "Media & Publishing", "Real estate",
    "Travel & hospitality", "Manufacturing", "Web3 & crypto",
    "Non-profits", "Government & public sector",
  ];
  return (
    <section id="industries" className="bg-background py-20 md:py-28">
      <div className="editorial-container">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">§ 11 - Industries</p>
            <h2 className="display-serif mt-4 text-3xl leading-tight md:text-4xl">
              Sector-fluent, <em className="italic">not sector-locked.</em>
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-soft">
              We've shipped for early-stage founders and listed enterprises. The
              method is the same; the vocabulary changes.
            </p>
          </div>
          <div className="md:col-span-8">
            <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3">
              {sectors.map((s) => (
                <li key={s} className="bg-background px-5 py-4 text-sm text-ink transition hover:bg-canvas">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const Proof = () => {
  const logos = ["NORTHWIND", "HALO/CO", "MERIDIAN", "OBLIQUE", "PARALLEL", "FIELDWORK", "STATION 9"];
  const quotes = [
    { q: "They replaced three vendors and a frozen roadmap with one team that ships every Friday.", a: "Priya Shah", r: "Operations Director", c: "Series B fintech, London" },
    { q: "It feels less like an agency and more like the engineering org we never had budget to hire.", a: "Marcus Bell", r: "Founder & CEO", c: "Consumer brand, New York" },
    { q: "The managed layer is the unlock. Our internal tools just keep getting better in the background.", a: "Nikhil Rao", r: "COO", c: "Logistics SME, Mumbai" },
    { q: "Creative, code, paid, SEO - all under one roof, all on one Slack. We finally stopped translating between vendors.", a: "Helena Voss", r: "VP Marketing", c: "B2B SaaS, Berlin" },
    { q: "Their 3D and motion team made our product launch feel like an Apple keynote, on a fraction of the budget.", a: "Daniel Okafor", r: "Head of Brand", c: "D2C electronics, Lagos" },
    { q: "Organic traffic up 312% in nine months. They treat SEO like an engineering discipline, not a checklist.", a: "Sara Lindqvist", r: "Growth Lead", c: "EdTech, Stockholm" },
  ];
  const stats = [
    { n: "120+", l: "Active clients" },
    { n: "27", l: "Countries served" },
    { n: "98%", l: "Client retention" },
    { n: "24h", l: "Build cycle" },
  ];
  return (
    <section id="work" className="bg-background py-24 md:py-32">
      <div className="editorial-container">
        <div className="flex items-end justify-between">
          <div>
            <p className="eyebrow">§ 12 - Clients & testimonials</p>
            <h2 className="display-serif mt-4 max-w-3xl text-4xl leading-tight md:text-5xl">
              Trusted by teams who <em className="italic">measure twice.</em>
            </h2>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 items-center gap-x-10 gap-y-8 border-y border-border py-10 md:grid-cols-4 lg:grid-cols-7">
          {logos.map((l) => (
            <div key={l} className="display-serif text-center text-lg tracking-wide text-ink-soft transition hover:text-ink">{l}</div>
          ))}
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
          {quotes.map((q) => (
            <figure key={q.a} className="flex flex-col bg-background p-8">
              <blockquote className="display-serif text-xl leading-snug">“{q.q}”</blockquote>
              <figcaption className="mt-8 border-t border-border pt-4 text-sm">
                <div className="text-ink">{q.a}</div>
                <div className="text-muted-foreground">{q.r} - {q.c}</div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="bg-background p-8">
              <div className="display-serif text-4xl md:text-5xl">{s.n}</div>
              <div className="mt-2 mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section id="contact" className="relative overflow-hidden bg-ink text-primary-foreground">
    <div className="grain absolute inset-0 opacity-40" />
    <div className="editorial-container relative py-28 md:py-40">
      <div className="flex items-center justify-between text-xs">
        <span className="mono uppercase tracking-widest text-primary-foreground/60">§ 11 - The close</span>
        <span className="mono uppercase tracking-widest text-primary-foreground/60">Now booking - Q3</span>
      </div>
      <h2 className="display-serif mt-12 text-balance text-6xl leading-[1] md:text-[120px]">
        Build smarter. <br /><em className="italic text-accent">Stay managed.</em>
      </h2>
      <p className="mt-10 max-w-xl text-base leading-relaxed text-primary-foreground/70 md:text-lg">
        Bring us a brief, a back-of-napkin sketch, or a system that's quietly
        breaking. We'll respond inside one working day with a real plan.
      </p>
      <div className="mt-12 flex flex-wrap gap-3">
        <a href="#" className="group inline-flex items-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm text-ink transition hover:bg-accent hover:text-accent-foreground">
          Start your project <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
        <a href="#" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3.5 text-sm text-primary-foreground transition hover:bg-primary-foreground hover:text-ink">
          Book a discovery call
        </a>
      </div>
    </div>
  </section>
);

// const Footer = () => (
//   <footer className="border-t border-border bg-background">
//     <div className="editorial-container py-14">
//       <div className="grid gap-10 md:grid-cols-12">
//         <div className="md:col-span-5">
//           <div className="flex items-center gap-2">
//             <span className="block h-2.5 w-2.5 rounded-full bg-ink" />
//             <span className="display-serif text-lg">CircleBuild<span className="text-accent">.</span></span>
//           </div>
//           <p className="mt-4 max-w-sm text-sm text-ink-soft">The operating system for modern businesses. Built, managed and trained from London with a global pipeline.</p>
//         </div>
//         {[
//           ["Studio", ["Services", "Work", "Model", "Pricing"]],
//           ["Academy", ["Tracks", "Cohorts", "Apply", "Faculty"]],
//           ["Company", ["Journal", "Careers", "Press", "Contact"]],
//         ].map(([h, items]: any) => (
//           <div key={h} className="md:col-span-2">
//             <div className="eyebrow">{h}</div>
//             <ul className="mt-4 space-y-2 text-sm">
//               {items.map((i: string) => (<li key={i}><a href="#" className="text-ink-soft hover-underline hover:text-ink">{i}</a></li>))}
//             </ul>
//           </div>
//         ))}
//       </div>
//       <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
//         <span>© {new Date().getFullYear()} CircleBuild Studio Ltd. All rights reserved.</span>
//         <span className="mono">v1.0 - Issue 01</span>
//       </div>
//     </div>
//   </footer>
// );

const Footer = () => (
  <footer className="border-t border-border bg-background">
    <div className="editorial-container py-14">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2">
            <span className="block h-2.5 w-2.5 rounded-full bg-ink" />
            <span className="display-serif text-lg">
              CircleBuild<span className="text-accent">.</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-ink-soft">
            The operating system for modern businesses. Built, managed and trained from London with a global pipeline.
          </p>
        </div>

        {[
          ["Studio", ["Services", "Work", "Model", "Pricing"]],
          ["Academy", ["Tracks", "Cohorts", "Apply", "Faculty"]],
          ["Company", ["Journal", "Careers", "Press", "Contact"]],
        ].map(([h, items]: [string, string[]]) => (
          <div key={h} className="md:col-span-2">
            <div className="eyebrow">{h}</div>
            <ul className="mt-4 space-y-2 text-sm">
              {items.map((i) => (
                <li key={i}>
                  <a href="#" className="text-ink-soft hover-underline hover:text-ink">
                    {i}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
        <span>© {new Date().getFullYear()} CircleBuild Studio Ltd. All rights reserved.</span>
        <span className="mono">v1.0 - Issue 01</span>
      </div>
    </div>
  </footer>
);


const Index = () => (
  <main className="min-h-screen bg-background">
    <Nav />
    <Hero />
    <Marquee />
    <Studios />
    <Services />
    <Model />
    <Layer />
    <Managed />
    <Academy />
    <Audience />
    <How />
    <Capabilities />
    <Industries />
    <Proof />
    <FinalCTA />
    <Footer />
  </main>
);

export default Index;
