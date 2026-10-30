import { useEffect, useMemo, useState } from "react";
import confetti from "canvas-confetti";
import AWSJourney from "./components/AWSJourney";
import BuilderJourney from "./components/BuilderJourney";
import MiniChallenge from "./components/MiniChallenge";
import { Cat, Rat } from "lucide-react";

const projects = [
  {
    number: "01",
    name: "ResumeCraft AI",
    type: "PRODUCT CONCEPT",
    description:
      "A resume and portfolio builder concept focused on helping people present their skills clearly.",
    stack: ["React", "Node.js", "AI"],
    status: "In progress",
  },
  {
    number: "02",
    name: "ShopSphere",
    type: "FULL-STACK E-COMMERCE",
    description:
      "An e-commerce learning project with product and category management, orders, and role-based admin views.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    status: "In progress",
  },
  {
    number: "03",
    name: "MERN Auth System",
    type: "AUTHENTICATION",
    description:
      "A reusable authentication flow with email verification, login, password reset, and protected routes.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    status: "Built for learning",
  },
];

const skills = [
  {
    label: "Frontend",
    items: "React · JavaScript · HTML · CSS · Tailwind CSS",
  },
  { label: "Backend", items: "Node.js · Express · REST APIs · Authentication" },
  { label: "Data", items: "MongoDB · SQL Server · PostgreSQL (learning)" },
  { label: "Tools & Cloud", items: "Git · GitHub · Vite · AWS Amplify" },
];

const principles = [
  { number: "01", label: "Build" },
  { number: "02", label: "Learn" },
  { number: "03", label: "Share" },
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#aws-journey", label: "AWS Journey" },
  { href: "#builder-journey", label: "My Journey" },
  { href: "#projects", label: "Projects" },
  { href: "#mini-challenge", label: "Mini Challenge" },
  { href: "#contact", label: "Contact" },
];

const commands = {
  help: [
    "Available commands:",
    "about        — About me",
    "skills       — My technical skills",
    "projects     — My projects",
    "aws          — My AWS experience",
    "journey      — My builder journey",
    "achievements — Learning milestones",
    "mission      — My purpose",
    "contact      — How to reach me",
    "matrix       — Enter the Matrix mode",
    "sudo hire    — [SECRET] Hire Hassan! (Triggers confetti)",
    "aws-status   — Check cloud deployment status",
    "chase        — [FUN] Watch the cat chase the rat around the terminal!",
    "quote        — Daily developer motivation",
    "clear        — Clear the terminal",
  ].join("\n"),

  about:
    "I am a full-stack developer building practical web products and growing my cloud engineering skills.",

  skills:
    "React, JavaScript, Node.js, Express, MongoDB, SQL, Git/GitHub, and AWS Amplify.",

  projects:
    "ResumeCraft AI · ShopSphere · MERN Auth System. Scroll to the Projects section for details.",

  aws: "I have deployed a React application with AWS Amplify Hosting and connected it to GitHub. Explore the AWS Journey section for the deployment and learning details.",

  journey:
    "My journey: IT education → full-stack development → practical projects → cloud learning with AWS. Scroll to My Builder Journey.",

  achievements:
    "Milestones include my IT degree, MongoDB Associate Developer certification for Node.js, and hands-on AWS Amplify deployment.",

  mission:
    "Build accessible technology and encourage more Somali students to explore software development and cloud computing.",

  contact:
    "You can connect with me through GitHub or email. Scroll to the Contact section.",

  matrix:
    "01001000 01000001 01010011 01010011 01010001 01001110\n10110101 11001010 01101001 10101010 01100101 10101011\n[SYSTEM]: Matrix override activated... 🟢",

  "sudo hire":
    "🎉 [ACCESS GRANTED]: Congratulations! You have successfully hired Hassan Ali. Expect clean code, fast deployments, and dedication!",

  "aws-status":
    "⚡ AWS Amplify Hosting: ONLINE \n🌍 Region: us-east-1 (Global Edge) \n🚀 Status: 99.9% Uptime \n🔒 SSL Certificate: Active & Secure",

  chase:
    "🐱 ─── 🏃 🐭 \n[ANIMATION]: Cat is chasing the rat across the terminal boundaries! Quick, type code before they crash!",

  quote: "“Simplicity is the soul of efficiency.” – Austin Freeman",
};

function getInitialDark() {
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") return true;
    if (saved === "light") return false;
  } catch {}
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
}

function Terminal() {
  const [value, setValue] = useState("");
  const [history, setHistory] = useState([
    {
      command: "",
      output:
        "Welcome to HASSAN_OS. Type “help” and press Enter or Run to explore.",
    },
  ]);

  const runCommand = (event) => {
    event.preventDefault();

    const command = value.trim().toLowerCase();
    if (!command) return;

    if (command === "clear") {
      setHistory([]);
      setValue("");
      return;
    }

    if (command === "sudo hire" || command === "celebrate") {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
      });
    }

    setHistory((items) => [
      ...items,
      {
        command,
        output:
          commands[command] ||
          `Command not found: ${command}. Type "help" to see available commands.`,
      },
    ]);

    setValue("");
  };

  return (
    <div className="relative mt-10">
      <style>{`
        @keyframes runAround {
          0% { top: -38px; left: -4%; }   
          25% { top: -38px; left: 98%; } 
          50% { top: 99%; left: 98%; }  
          75% { top: 99%; left: -4%; }  
          100% { top: -38px; left: -4%; } 
        }
        .chase-animation {
          animation: runAround 8s linear infinite;
        }
      `}</style>

      <div
        className="absolute chase-animation z-30 pointer-events-none select-none text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all"
        style={{ animationDelay: "3s" }}
      >
        <Rat className="w-8 h-8 stroke-[2.5]" />
      </div>

      <div
        className="absolute chase-animation z-30 pointer-events-none select-none text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)] transition-all"
        style={{ animationDelay: "0s" }}
      >
        <Cat className="w-8 h-8 stroke-[2.5]" />
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 shadow-2xl shadow-blue-950/20 relative">
        <div className="flex items-center gap-2 border-b border-slate-800 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-rose-400" />
          <span className="h-3 w-3 rounded-full bg-amber-300" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <span className="ml-2 font-mono text-xs text-slate-400">
            hassan@portfolio: ~ (cat & rat zone)
          </span>
        </div>
        <div className="min-h-44 space-y-3 p-5 font-mono text-sm">
          {history.map((item, index) => (
            <div key={`${item.command}-${index}`}>
              {item.command && (
                <p className="text-emerald-300">
                  <span className="text-blue-300">$</span> {item.command}
                </p>
              )}
              <p className="mt-1 whitespace-pre-wrap leading-6 text-slate-300">
                {item.output}
              </p>
            </div>
          ))}
          <form onSubmit={runCommand} className="flex items-center gap-2">
            <label htmlFor="terminal-command" className="text-emerald-300">
              $
            </label>
            <input
              id="terminal-command"
              value={value}
              onChange={(event) => setValue(event.target.value)}
              className="min-w-0 flex-1 bg-transparent text-white outline-none placeholder:text-slate-600"
              placeholder="type a command (e.g. chase)..."
              autoComplete="off"
            />
            <button
              className="rounded-lg bg-blue-500 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-blue-400 cursor-pointer"
              type="submit"
            >
              Run
            </button>
          </form>
        </div>
        <p className="border-t border-slate-800 px-5 py-3 text-xs text-slate-500 flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>
            Hint: try{" "}
            {["help", "chase", "sudo hire", "aws-status"].map((cmd, i, arr) => (
              <span key={cmd}>
                <button
                  className="text-blue-300 hover:text-emerald-400 underline decoration-dotted cursor-pointer font-bold transition"
                  onClick={() => setValue(cmd)}
                  type="button"
                >
                  {cmd}
                </button>
                {i < arr.length - 2
                  ? ", "
                  : i === arr.length - 2
                    ? ", or "
                    : "."}
              </span>
            ))}
          </span>
        </p>
      </div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-blue-600 dark:text-blue-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
          {description}
        </p>
      )}
    </div>
  );
}

export default function App() {
  const [dark, setDark] = useState(getInitialDark);
  const year = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", dark);
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {}
  }, [dark]);

  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
          <a
            href="#home"
            className="flex items-center gap-3 font-bold tracking-tight"
          >
            <img src="logo1.png" alt="logo" className="h-8 w-8" />
            <span>
              Hassan Ali<span className="ml-2 text-blue-600"></span>
            </span>
          </a>
          <div className="hidden items-center gap-6 text-sm text-slate-600 md:flex dark:text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="transition hover:text-blue-600 dark:hover:text-blue-400"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setDark((current) => !current)}
            className="rounded-full border border-slate-200 px-3 py-2 text-xs font-semibold transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:hover:text-blue-400 cursor-pointer"
            aria-label="Toggle dark mode"
            aria-pressed={dark}
          >
            {dark ? "☀ Light" : "☾ Dark"}
          </button>
        </nav>
      </header>

      <main>
        <section id="home" className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-white to-white dark:from-blue-950/60 dark:via-slate-950 dark:to-slate-950" />
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-32">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-1.5 text-xs font-semibold text-blue-700 dark:border-blue-900 dark:bg-slate-900 dark:text-blue-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                SOFTWARE DEVELOPER · CLOUD LEARNER
              </div>
              <h1 className="max-w-3xl text-5xl font-bold tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl dark:text-white">
                I build useful things for the{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  real world.
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
                Full-stack developer exploring modern web engineering and AWS
                cloud services. I care about clear interfaces, useful products,
                and technology that opens doors for more people.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-500"
                >
                  Explore my work <span aria-hidden="true">↗</span>
                </a>
                <a
                  href="#contact"
                  className="rounded-xl border border-slate-300 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-400 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-blue-500"
                >
                  Get in touch
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                <span>✳ React & Node.js</span>
                <span>✳ Building in public</span>
                <span>✳ AWS Amplify</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-200/70 to-cyan-100/40 blur-2xl dark:from-blue-900/40 dark:to-cyan-900/20" />
              <div className="relative">
                <div className="mb-3 flex items-center justify-between px-1 text-xs text-slate-500 dark:text-slate-400">
                  <span>INTERACTIVE DEVELOPER TERMINAL</span>
                </div>
                <Terminal />
                <p className="mt-3 text-center text-xs text-slate-500 dark:text-slate-400">
                  A little interactive window into how I think and build.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="border-y border-slate-200 bg-slate-50 py-20 dark:border-slate-800 dark:bg-slate-900/50"
        >
          <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <SectionHeading
              eyebrow="01 / About me"
              title="Curiosity, turned into code."
            />
            <div className="space-y-5 text-base leading-8 text-slate-600 dark:text-slate-300">
              <p>
                I am a full-stack developer who enjoys turning ideas into
                working applications—from the first wireframe and data model to
                APIs, interfaces, testing, and deployment.
              </p>
              <p>
                Right now, I am strengthening my cloud skills with AWS and
                building projects that help me learn by doing. My long-term goal
                is to contribute to products with real value and inspire more
                students in my community to explore technology.
              </p>
              <div className="grid gap-4 pt-3 sm:grid-cols-3">
                {principles.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950"
                  >
                    <p className="text-xs font-bold text-blue-600 dark:text-blue-400">
                      {item.number}
                    </p>
                    <p className="mt-2 font-semibold text-slate-900 dark:text-white">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="02 / Tech superpowers"
              title="Tools I use to make ideas real."
              description="A growing toolkit across frontend, backend, data, and cloud. I keep learning by applying each skill to practical projects."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {skills.map((skill, index) => (
                <article
                  key={skill.label}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-950/5 dark:border-slate-800 dark:bg-slate-900/40 dark:hover:border-blue-800"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 font-mono text-sm font-bold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                      0{index + 1}
                    </span>
                    <span className="text-slate-300 transition group-hover:text-blue-500 dark:text-slate-600">
                      ↗
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {skill.label}
                  </h3>
                  <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">
                    {skill.items}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <AWSJourney />
        <BuilderJourney />

        <section
          id="projects"
          className="bg-slate-50 py-20 dark:bg-slate-900/50"
        >
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <SectionHeading
              eyebrow="03 / Selected projects"
              title="Learning by shipping."
              description="A few projects that reflect what I am building and the engineering skills I am developing."
            />
            <div className="grid gap-5 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.number}
                  className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-950"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm text-blue-600 dark:text-blue-400">
                      {project.number}
                    </span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold tracking-wider text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      {project.status.toUpperCase()}
                    </span>
                  </div>
                  <p className="mt-8 text-[10px] font-bold tracking-[0.2em] text-slate-500 dark:text-slate-400">
                    {project.type}
                  </p>
                  <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                    {project.name}
                  </h3>
                  <p className="mt-3 flex-1 leading-7 text-slate-600 dark:text-slate-300">
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-slate-200 px-2.5 py-1 text-xs text-slate-600 dark:border-slate-800 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <MiniChallenge />

        <section id="contact" className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="overflow-hidden rounded-3xl bg-slate-950 px-7 py-10 text-white ring-1 ring-slate-800 sm:px-12 sm:py-14">
              <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300">
                    04 / What’s next?
                  </p>
                  <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
                    Let’s build something that matters.
                  </h2>
                  <p className="mt-4 max-w-xl leading-7 text-slate-300">
                    Open to learning, collaboration, and conversations about
                    software engineering and cloud technology.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://github.com/hassan-ali-dhangad"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-blue-100"
                  >
                    GitHub ↗
                  </a>

                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=hassan.ali.dhangad@gmail.com&su=Hello%20Hassan"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-slate-600 px-5 py-3 text-sm font-semibold text-white transition hover:border-blue-300"
                  >
                    Email me ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 px-5 py-7 dark:border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between dark:text-slate-400">
          <span>© {year} Hassan Ali</span>
          <a
            href="#home"
            className="transition hover:text-blue-600 dark:hover:text-blue-400"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}
