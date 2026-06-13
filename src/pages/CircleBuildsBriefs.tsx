import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_k1m2s1n";
const EMAILJS_TEMPLATE_ID = "template_tz43gg7";
const EMAILJS_PUBLIC_KEY = "9XYMW7vVw4lcWT1_3";

const C = {
  paper: "#f6f4ef",
  paperAlt: "#efece4",
  ink: "#1a1a1a",
  inkSoft: "#5a5754",
  border: "#e3ddcf",
  accent: "#e8742c",
};

const sans: React.CSSProperties = {
  fontFamily: "ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif",
};
const serif: React.CSSProperties = {
  fontFamily: "'Cormorant Garamond', 'EB Garamond', Georgia, 'Times New Roman', serif",
  fontFeatureSettings: "'ss01','liga'",
};
const mono: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace",
};

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[11px] uppercase" style={{ ...mono, letterSpacing: "0.18em", color: C.inkSoft }}>
    {children}
  </p>
);

const Nav = () => (
  <header
    className="sticky top-0 z-50 border-b backdrop-blur-xl"
    style={{ ...sans, borderColor: C.border, background: "rgba(246,244,239,0.85)" }}
  >
    <div
      className="mx-auto flex h-16 max-w-[1120px] items-center justify-between px-6 text-[14px]"
      style={{ color: C.ink }}
    >
      <Link to="/" className="flex items-center gap-2">
        <span className="block h-2 w-2 rounded-full" style={{ background: C.ink }} />
        <span style={serif} className="text-[20px] leading-none">
          CircleBuilds<span style={{ color: C.accent }}>.</span>
        </span>
      </Link>
      <nav className="hidden gap-8 md:flex">
        {["Task", "Folders", "What to Send", "Scoring", "Submit"].map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
            className="opacity-75 hover:opacity-100"
          >
            {l}
          </a>
        ))}
      </nav>
      <a
        href="#submit"
        className="group inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] text-white transition hover:opacity-90"
        style={{ background: C.ink }}
      >
        Submit task
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
    </div>
  </header>
);

const Hero = () => (
  <section style={{ ...sans, background: C.paper }}>
    <div className="mx-auto max-w-[1120px] px-6 pt-14 pb-20 md:pt-20 md:pb-28">
      <div className="flex items-center justify-between">
        <Eyebrow>Issue 01 — Creative Task Brief</Eyebrow>
        <Eyebrow>Est. London / Global</Eyebrow>
      </div>
      <div className="mt-8 h-px w-full" style={{ background: C.border }} />
      <h1
        className="mt-14 max-w-[920px] text-[52px] leading-[1.02] md:text-[88px]"
        style={{ ...serif, color: C.ink, letterSpacing: "-0.01em" }}
      >
        Show us your{" "}
        <em style={{ color: C.accent, fontStyle: "italic" }}>creative</em>{" "}
        skill.
      </h1>
      <p
        className="mt-8 max-w-[640px] text-[18px] leading-[1.55] md:text-[20px]"
        style={{ color: C.inkSoft }}
      >
        You have been selected for the CircleBuilds Graphic Designer role.
        You will work on Freshers and event campaigns. We want to see how you design, edit and animate.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="#task"
          className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[14px] text-white transition hover:opacity-90"
          style={{ background: C.ink }}
        >
          Start task
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
        <a
          href="#folders"
          className="inline-flex items-center gap-2 rounded-full border px-6 py-3.5 text-[14px] transition hover:bg-black hover:text-white"
          style={{ borderColor: C.ink, color: C.ink }}
        >
          View folders
        </a>
      </div>
    </div>
  </section>
);

const Section = ({
  id,
  kicker,
  title,
  accentWord,
  subtitle,
  children,
  tint,
  highlight,
}: {
  id?: string;
  kicker?: string;
  title: React.ReactNode;
  accentWord?: string;
  subtitle?: string;
  children?: React.ReactNode;
  tint?: boolean;
  highlight?: boolean;
}) => {
  const renderTitle = () => {
    if (!accentWord || typeof title !== "string") return title;
    const parts = title.split(accentWord);
    return (
      <>
        {parts[0]}
        <em style={{ color: C.accent, fontStyle: "italic" }}>{accentWord}</em>
        {parts[1]}
      </>
    );
  };
  return (
    <section
      id={id}
      style={{
        ...sans,
        background: highlight ? C.ink : tint ? C.paperAlt : C.paper,
        color: highlight ? "#f6f4ef" : C.ink,
        borderTop: `1px solid ${highlight ? "transparent" : C.border}`,
      }}
    >
      <div className="mx-auto max-w-[1120px] px-6 py-20 md:py-28">
        <div className="text-center">
          {kicker && (
            <p className="text-[11px] uppercase" style={{ ...mono, letterSpacing: "0.22em", color: C.accent }}>
              {kicker}
            </p>
          )}
          <h2
            className="mx-auto mt-4 max-w-[820px] text-[38px] leading-[1.06] md:text-[64px]"
            style={{ ...serif, letterSpacing: "-0.01em", color: highlight ? "#f6f4ef" : C.ink }}
          >
            {renderTitle()}
          </h2>
          {subtitle && (
            <p
              className="mx-auto mt-5 max-w-[620px] text-[17px] leading-[1.55] md:text-[19px]"
              style={{ color: highlight ? "#cfcac1" : C.inkSoft }}
            >
              {subtitle}
            </p>
          )}
        </div>
        {children && <div className="mt-14 md:mt-16">{children}</div>}
      </div>
    </section>
  );
};

const Card = ({
  eyebrow,
  title,
  children,
  dark,
}: {
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  dark?: boolean;
}) => (
  <div
    className="rounded-[20px] p-8 md:p-10"
    style={{
      background: dark ? "rgba(255,255,255,0.04)" : C.paper,
      border: `1px solid ${dark ? "rgba(255,255,255,0.08)" : C.border}`,
    }}
  >
    {eyebrow && (
      <p
        className="text-[13px] font-bold uppercase"
        style={{ ...mono, letterSpacing: "0.22em", color: dark ? "#f6f4ef" : C.inkSoft }}
      >
        {eyebrow}
      </p>
    )}
    {title && (
      <h3
        className="mt-3 text-[28px] md:text-[32px]"
        style={{ ...serif, letterSpacing: "-0.01em", color: dark ? "#f6f4ef" : C.ink }}
      >
        {title}
      </h3>
    )}
    <div className="mt-4 text-[16px] leading-[1.55]" style={{ color: dark ? "#cfcac1" : C.inkSoft }}>
      {children}
    </div>
  </div>
);

const Task = () => (
  <Section
    id="task"
    kicker="01 — The Task"
    title="Create two campaign designs."
    accentWord="two"
    subtitle="Make one flyer and one video for the event below."
    highlight
  >
    <div className="grid gap-5 md:grid-cols-3">
      <Card dark eyebrow="When" title="Sunday 28th September 2026">
        <p style={{ color: "#cfcac1" }}>11pm – 3am</p>
      </Card>
      <Card dark eyebrow="Where" title="XOYO">
        <p style={{ color: "#cfcac1" }}>London nightclub</p>
      </Card>
      <Card dark eyebrow="Tickets" title="From £5">
        <p style={{ color: "#cfcac1" }}>
          Buy on{" "}
          <a href="https://fatsoma.com" target="_blank" rel="noreferrer" className="underline" style={{ color: C.accent }}>
            Fatsoma.com
          </a>
        </p>
      </Card>
    </div>
    <div
      className="mt-5 grid gap-5 md:grid-cols-2"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 20,
        padding: "32px 40px",
      }}
    >
      <div>
        <p className="text-[11px] uppercase" style={{ ...mono, letterSpacing: "0.18em", color: "#cfcac1" }}>
          Event Website
        </p>
        <a
          href="https://www.londonfreshersweek.com"
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-flex items-center gap-2 text-[16px]"
          style={{ color: C.accent }}
        >
          www.londonfreshersweek.com
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
      <div>
        <p className="text-[11px] uppercase" style={{ ...mono, letterSpacing: "0.18em", color: "#cfcac1" }}>
          Ticket Link
        </p>
        <a
          href="https://fatsoma.com"
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-flex items-center gap-2 text-[16px]"
          style={{ color: C.accent }}
        >
          Fatsoma.com
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </div>
    <div className="mt-5 grid gap-5 md:grid-cols-2">
      <Card dark eyebrow="TASK 1" title="Static Flyer">
        <p className="mb-5" style={{ color: "#cfcac1" }}>
          A high-quality event flyer for Freshers Week.
        </p>
        <p className="text-[11px] uppercase" style={{ ...mono, letterSpacing: "0.18em", color: "#cfcac1" }}>
          Must include on flyer
        </p>
        <ul className="mt-3 space-y-2">
          {[
            "Event name: The Freshers Moving In Party",
            "Date: Sunday 28th September 2026",
            "Venue: XOYO",
            "Time: 11pm–3am",
            "Ticket price: From £5",
            "Fatsoma ticket reference",
            "London Freshers Week website",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full shrink-0" style={{ background: C.accent }} />
              <span style={{ color: "#f6f4ef" }}>{item}</span>
            </li>
          ))}
        </ul>
      </Card>
      <Card dark eyebrow="TASK 2" title="Motion Video">
        <p className="mb-5" style={{ color: "#cfcac1" }}>
          A short vertical promo video for social media — Reels, TikTok, Snapchat and ads.
        </p>
        <p className="text-[11px] uppercase" style={{ ...mono, letterSpacing: "0.18em", color: "#cfcac1" }}>
          Must promote in video
        </p>
        <ul className="mt-3 space-y-2">
          {["The Freshers Moving In Party", "Sunday 28th September 2026", "XOYO", "11pm–3am", "Tickets from £5"].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: C.accent }} />
              <span style={{ color: "#cfcac1" }}>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-[11px] uppercase" style={{ ...mono, letterSpacing: "0.18em", color: "#cfcac1" }}>
          Music
        </p>
        <p className="mt-2" style={{ color: "#cfcac1" }}>
          Pick your own music. Or ask us for a music list.
        </p>
      </Card>
    </div>
  </Section>
);

const FolderList = ({ items }: { items: { name: string; desc: string }[] }) => (
  <ul className="divide-y" style={{ borderColor: C.border }}>
    {items.map((i, idx) => (
      <li
        key={i.name}
        className="flex items-start justify-between gap-6 py-4"
        style={{ borderTop: idx === 0 ? "none" : `1px solid ${C.border}` }}
      >
        <div>
          <div className="text-[16px]" style={{ color: C.ink }}>{i.name}</div>
          <p className="mt-1 text-[14px] leading-[1.5]" style={{ color: C.inkSoft }}>{i.desc}</p>
        </div>
      </li>
    ))}
  </ul>
);

const Folders = () => (
  <Section id="folders" kicker="02 — Assets" title="Use the folders we gave you." accentWord="folders">
    <div className="grid gap-5 md:grid-cols-2">
      <Card title="Required" eyebrow="You must use these">
        <FolderList
          items={[
            { name: "Logo Pack", desc: "Transparent logos." },
            { name: "Visuals Ident", desc: "Put this at the end of your video." },
            { name: "Single Event", desc: "Main raw footage." },
          ]}
        />
      </Card>
      <Card title="Reference" eyebrow="For inspiration only">
        <FolderList
          items={[
            { name: "Best Flyers", desc: "Good past artwork." },
            { name: "Best Motion Promos", desc: "Videos we like." },
            { name: "Motion Spam Assets", desc: "Ticket warning / urgency clips." },
            { name: "Aftermovie – Igor", desc: "Reference video style." },
            { name: "Footage – Random", desc: "Extra footage you can use." },
            { name: "Footage – Mobile Senses", desc: "Mobile-shot footage." },
            { name: "Images – Sanchit", desc: "Extra images." },
          ]}
        />
      </Card>
    </div>
  </Section>
);

const Spec = ({ label, value }: { label: string; value: React.ReactNode }) => (
  <div className="flex items-start justify-between gap-6 py-3" style={{ borderBottom: `1px solid ${C.border}` }}>
    <span className="text-[14px]" style={{ color: C.inkSoft }}>{label}</span>
    <span className="text-right text-[14px]" style={{ color: C.ink }}>{value}</span>
  </div>
);

const Deliverables = () => (
  <Section id="what-to-send" kicker="03 — What to Send" title="What to send us." accentWord="send" tint>
    <div className="grid gap-5 md:grid-cols-2">
      <Card title="Static Flyer">
        <Spec label="Feed size" value="1080 × 1350" />
        <Spec label="Story size" value="1080 × 1920" />
        <Spec label="File type" value="JPG or PNG" />
        <Spec label="Source file" value="PSD / AI / Canva / Figma" />
      </Card>
      <Card title="Motion Video">
        <Spec label="Format" value="1080 × 1920 vertical" />
        <Spec label="Length" value="10–20 seconds" />
        <Spec label="Ending" value="Add the Visuals Ident" />
        <Spec label="File type" value="MP4 (+ AE source if possible)" />
      </Card>
    </div>
  </Section>
);

const Scoring = () => {
  const rows = [
    ["Design quality", "Looks premium and ready for a real campaign.", "20"],
    ["Nightlife feel", "Fun, exciting, perfect for Freshers Week.", "20"],
    ["Use of assets", "Logos, footage and Visuals Ident used well.", "15"],
    ["Motion skill", "Good transitions, type, pacing and effects.", "20"],
    ["Will it sell?", "Would someone buy a ticket after seeing this?", "15"],
    ["Attention to detail", "Spelling, alignment, sizing, clean export.", "10"],
  ];
  return (
    <Section id="scoring" kicker="04 — Scoring" title="How we score your work." accentWord="score" subtitle="We score every design the same way.">
      <div className="overflow-hidden rounded-[20px]" style={{ background: C.paper, border: `1px solid ${C.border}` }}>
        <div
          className="grid grid-cols-[1fr_auto] gap-6 px-6 py-4 text-[11px] uppercase md:grid-cols-[1fr_2fr_auto] md:px-10"
          style={{ ...mono, letterSpacing: "0.18em", color: C.inkSoft, background: C.paperAlt }}
        >
          <span>Criteria</span>
          <span className="hidden md:block">What we look for</span>
          <span className="text-right">Marks</span>
        </div>
        {rows.map(([k, v, w]) => (
          <div
            key={k}
            className="grid grid-cols-[1fr_auto] gap-6 px-6 py-5 text-[15px] md:grid-cols-[1fr_2fr_auto] md:px-10"
            style={{ borderTop: `1px solid ${C.border}` }}
          >
            <span style={{ color: C.ink }}>{k}</span>
            <span className="hidden md:block" style={{ color: C.inkSoft }}>{v}</span>
            <span className="text-right" style={{ ...mono, color: C.ink }}>{w}</span>
          </div>
        ))}
        <div
          className="grid grid-cols-[1fr_auto] gap-6 px-6 py-4 text-[15px] md:grid-cols-[1fr_2fr_auto] md:px-10"
          style={{ borderTop: `1px solid ${C.border}`, background: C.paperAlt }}
        >
          <span style={{ color: C.ink }}>Total</span>
          <span className="hidden md:block" />
          <span className="text-right" style={{ ...mono, color: C.accent }}>100</span>
        </div>
      </div>
    </Section>
  );
};

const Direction = () => (
  <Section
    id="direction"
    kicker="05 — Creative Direction"
    title="Freshers Week. Big energy."
    accentWord="energy"
    subtitle="Packed rooms. Young crowd. Hype. Urgency. Premium nightlife. Your design should make someone click, save, share or buy a ticket."
    tint
  >
    <div className="grid gap-5 md:grid-cols-2">
      <Card title="Rules">
        <ul className="space-y-3">
          {[
            "Use the Logo Pack, Single Event footage and Visuals Ident.",
            "Only original work — no copied templates.",
            "Stay on brand: bold, modern, campaign-ready.",
            "Export clean — correct sizes, no blur or compression.",
            "No AI-only work — your own skill must show.",
          ].map((r) => (
            <li key={r} className="flex gap-3">
              <span style={{ color: C.accent }}>—</span>
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </Card>
      <Card title="Energy check">
        <ul className="space-y-3">
          {[
            "Does it feel like Freshers Week?",
            "Would you stop scrolling for this?",
            "Does the motion feel fast and punchy?",
            "Is the text bold and easy to read?",
            "Would someone screenshot and share it?",
          ].map((r) => (
            <li key={r} className="flex gap-3">
              <span style={{ color: C.accent }}>—</span>
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  </Section>
);

const Submission = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [driveLink, setDriveLink] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [validationError, setValidationError] = useState("");

  const handleSubmit = async () => {
    if (!name.trim() || !email.trim() || !driveLink.trim()) {
      setValidationError("Please fill in all fields before submitting.");
      return;
    }
    setValidationError("");
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          candidate_name: name,
          candidate_email: email,
          drive_link: driveLink,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
    } catch (_err) {
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: C.paperAlt,
    border: `1px solid ${C.border}`,
    borderRadius: 12,
    padding: "14px 18px",
    fontSize: 15,
    color: C.ink,
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: "0.18em",
    color: C.inkSoft,
    marginBottom: 8,
    fontFamily: "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace",
  };

  return (
    <Section
      id="submit"
      kicker="06 — Submission"
      title="How to send it."
      accentWord="send"
      subtitle="Upload everything to Google Drive or WeTransfer, then submit your details below."
    >
      <div
        className="mx-auto max-w-[680px] rounded-[20px] p-8 md:p-10"
        style={{ background: C.paper, border: `1px solid ${C.border}` }}
      >
        <Eyebrow>Your folder should include</Eyebrow>
        <ul className="mt-5 space-y-3 text-[16px]" style={{ color: C.ink }}>
          {["Final flyer", "Story version", "Final video", "Source files", "Any fonts used"].map((i) => (
            <li key={i} className="flex items-center gap-3">
              <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: C.accent }} />
              {i}
            </li>
          ))}
        </ul>

        <div className="my-8 h-px w-full" style={{ background: C.border }} />

        {status === "success" ? (
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <CheckCircle className="h-12 w-12" style={{ color: C.accent }} />
            <p className="text-[22px]" style={{ ...serif, color: C.ink }}>
              Submission received.
            </p>
            <p className="text-[15px]" style={{ color: C.inkSoft }}>
              We will be in touch. Good luck.
            </p>
          </div>
        ) : (
          <>
            <Eyebrow>Submit your work</Eyebrow>
            <div className="mt-6 space-y-5">
              <div>
                <label style={labelStyle}>Full name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Email address</label>
                <input
                  type="email"
                  placeholder="you@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Google Drive / WeTransfer link</label>
                <input
                  type="url"
                  placeholder="https://drive.google.com/..."
                  value={driveLink}
                  onChange={(e) => setDriveLink(e.target.value)}
                  style={inputStyle}
                />
              </div>
            </div>

            {validationError && (
              <p className="mt-4 text-[13px]" style={{ ...mono, color: C.accent, letterSpacing: "0.05em" }}>
                {validationError}
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-[13px]" style={{ ...mono, color: C.accent, letterSpacing: "0.05em" }}>
                Something went wrong. Please try again.
              </p>
            )}

            <div className="mt-8">
              <button
                onClick={handleSubmit}
                disabled={status === "sending"}
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full px-8 py-5 text-[16px] text-white transition hover:opacity-90 md:text-[18px]"
                style={{
                  background: C.ink,
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                  border: "none",
                  opacity: status === "sending" ? 0.6 : 1,
                }}
              >
                {status === "sending" ? "Sending…" : "Submit task"}
                {status !== "sending" && (
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                )}
              </button>
            </div>
          </>
        )}
      </div>
    </Section>
  );
};

const FinalNote = () => (
  <section style={{ ...sans, background: C.paper }}>
    <div className="mx-auto max-w-[920px] px-6 py-20 text-center md:py-28">
      <Eyebrow>Final Note</Eyebrow>
      <p
        className="mx-auto mt-5 max-w-[760px] text-[34px] leading-[1.12] md:text-[52px]"
        style={{ ...serif, letterSpacing: "-0.01em", color: C.ink }}
      >
        We are not looking for basic designs. We want{" "}
        <em style={{ color: C.accent, fontStyle: "italic" }}>standout</em>{" "}
        creative work.
      </p>
      <p
        className="mx-auto mt-6 max-w-[560px] text-[17px] leading-[1.55] md:text-[19px]"
        style={{ color: C.inkSoft }}
      >
        Show us your style, speed and ability to make designs that work in real
        national Freshers and event campaigns.
      </p>
    </div>
  </section>
);

const Foot = () => (
  <footer style={{ ...sans, background: C.ink, color: "#cfcac1", borderTop: `1px solid ${C.border}` }}>
    <div className="mx-auto flex max-w-[1120px] flex-col items-start justify-between gap-3 px-6 py-10 md:flex-row md:items-center">
      <div style={serif} className="text-[20px] text-white">
        CircleBuilds<span style={{ color: C.accent }}>.</span>
      </div>
      <div className="text-[11px] uppercase" style={{ ...mono, letterSpacing: "0.2em" }}>
        Creative Task · Confidential to selected candidates
      </div>
    </div>
  </footer>
);

const CircleBuildsBrief = () => (
  <main className="min-h-screen" style={{ ...sans, background: C.paper, color: C.ink }}>
    <Nav />
    <Hero />
    <Task />
    <Folders />
    <Deliverables />
    <Scoring />
    <Direction />
    <Submission />
    <FinalNote />
    <Foot />
  </main>
);

export default CircleBuildsBrief;