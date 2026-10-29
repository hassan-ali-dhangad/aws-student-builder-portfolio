const deploymentUrl = "https://main.dcuvgztlc3l04.amplifyapp.com";
const repositoryUrl =
  "https://github.com/hassan-ali-dhangad/aws-student-builder-portfolio";

const journeySteps = [
  {
    number: "01",
    title: "Build",
    description:
      "Created a web application with React and Vite, using modern frontend development practices.",
    detail: "React · Vite",
  },
  {
    number: "02",
    title: "Connect",
    description:
      "Connected my GitHub repository to AWS Amplify to establish a source-controlled deployment workflow.",
    detail: "GitHub · AWS Amplify",
  },
  {
    number: "03",
    title: "Deploy",
    description:
      "Published the application through AWS Amplify Hosting and made it accessible through a live URL.",
    detail: "Cloud hosting · Live website",
  },
];

function ExternalLinkIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <path
        d="M14 4h6v6m-1-5-9 9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function AWSJourney() {
  return (
    <section
      id="aws-journey"
      aria-labelledby="aws-journey-title"
      className="scroll-mt-24 border-t border-slate-200 bg-slate-50/70 px-5 py-20 transition-colors dark:border-slate-800 dark:bg-slate-950 sm:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-12 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1.5 text-xs font-semibold tracking-wide text-orange-800 dark:border-orange-900 dark:bg-orange-950/50 dark:text-orange-300">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-orange-500"
            />
            MY CLOUD LEARNING JOURNEY
          </div>

          <h2
            id="aws-journey-title"
            className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl"
          >
            From code to the cloud.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
            I am building my cloud skills through hands-on practice. My first
            AWS Amplify deployment helped me connect frontend development with
            cloud hosting and a GitHub-based workflow.
          </p>
        </div>

        {/* Main deployment card */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="p-6 sm:p-9 lg:p-10">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                  AWS PROJECT / 01
                </span>

                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Deployed project
                </span>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-2xl dark:bg-orange-950/50">
                  <span aria-hidden="true">☁</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white sm:text-2xl">
                    My first AWS Amplify deployment
                  </h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Frontend hosting · GitHub integration
                  </p>
                </div>
              </div>

              <p className="mt-6 max-w-xl leading-7 text-slate-600 dark:text-slate-300">
                I deployed a React application using AWS Amplify Hosting and
                connected it to my GitHub repository. This practical project is
                an early step in my journey from web development into cloud
                engineering.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["React", "Vite", "GitHub", "AWS Amplify"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={deploymentUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
                >
                  Go live
                  <ExternalLinkIcon />
                </a>

                <a
                  href={repositoryUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
                >
                  View source code
                  <ExternalLinkIcon />
                </a>
              </div>
            </div>

            {/* Deployment workflow */}
            <div className="border-t border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950/60 sm:p-9 lg:border-l lg:border-t-0 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                Deployment workflow
              </p>

              <div className="mt-7 space-y-3">
                {[
                  {
                    name: "Source code",
                    label: "GitHub repository",
                    symbol: "01",
                  },
                  {
                    name: "Build & deploy",
                    label: "AWS Amplify Hosting",
                    symbol: "02",
                  },
                  {
                    name: "Live application",
                    label: "Public deployment URL",
                    symbol: "03",
                  },
                ].map((step, index) => (
                  <div key={step.symbol}>
                    <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                        {step.symbol}
                      </span>
                      <div className="min-w-0">
                        <p className="font-semibold text-slate-900 dark:text-white">
                          {step.name}
                        </p>
                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                          {step.label}
                        </p>
                      </div>
                    </div>

                    {index < 2 && (
                      <div className="ml-9 h-3 border-l-2 border-dashed border-slate-300 dark:border-slate-700" />
                    )}
                  </div>
                ))}
              </div>

              <p className="mt-5 text-xs leading-5 text-slate-500 dark:text-slate-400">
                Workflow overview. Automatic builds depend on the repository
                connection and Amplify branch settings.
              </p>
            </div>
          </div>
        </div>

        {/* Learning outcomes */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-slate-950 dark:text-white">
            What I am learning
          </h3>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {journeySteps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
              >
                <p className="text-sm font-bold text-blue-600 dark:text-blue-400">
                  STEP {step.number}
                </p>

                <h4 className="mt-3 text-lg font-bold text-slate-950 dark:text-white">
                  {step.title}
                </h4>

                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {step.description}
                </p>

                <p className="mt-5 border-t border-slate-100 pt-4 text-xs font-medium text-slate-500 dark:border-slate-800 dark:text-slate-400">
                  {step.detail}
                </p>
              </article>
            ))}
          </div>
        </div>

        <p className="mt-8 text-sm leading-6 text-slate-500 dark:text-slate-400">
          This is the beginning of my cloud journey. I am continuing to
          practice, document what I learn, and build projects that solve
          meaningful problems.
        </p>
      </div>
    </section>
  );
}
