const milestones = [
  {
    number: "01",
    period: "Current focus",
    title: "IT Education",
    description:
      "Currently pursuing a Bachelor’s degree in Computer Science and Information Technology at Hormuud University.",
    tags: ["Computer Science", "Software Engineering", "Algorithms"],
  },
  {
    number: "02",
    period: "Certification milestone",
    title: "MongoDB Associate Developer for Node.js",
    description:
      "Earned the MongoDB Associate Developer certification for Node.js, strengthening my understanding of application development with MongoDB.",
    tags: ["MongoDB", "Node.js"],
  },
  {
    number: "03",
    period: "Hands-on practice",
    title: "Building full-stack applications",
    description:
      "Worked on projects involving authentication, APIs, database integration, and admin workflows while growing my MERN stack skills.",
    tags: ["React", "Express", "MongoDB"],
  },
  {
    number: "04",
    period: "Current focus",
    title: "Exploring AWS cloud",
    description:
      "Deployed a React application using AWS Amplify Hosting and connected the project to GitHub. I am continuing to build practical cloud experience.",
    tags: ["AWS Amplify", "GitHub"],
  },
];

export default function BuilderJourney() {
  return (
    <section
      id="builder-journey"
      className="border-t border-slate-200 bg-white px-5 py-20 dark:border-slate-800 dark:bg-slate-950 sm:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-blue-600 dark:text-blue-400">
            MY BUILDER JOURNEY
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
            Progress over perfection.
          </h2>
          <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
            Every milestone represents something I have studied, built, or
            achieved. I am documenting the journey as I grow from software
            development into cloud engineering.
          </p>
        </div>

        <div className="relative ml-2 space-y-8 border-l border-slate-200 pl-7 dark:border-slate-800 sm:ml-4 sm:pl-10">
          {milestones.map((item) => (
            <article key={item.number} className="relative">
              <span className="absolute -left-[2.25rem] top-1 flex h-8 w-8 items-center justify-center rounded-full border border-blue-200 bg-blue-50 font-mono text-xs font-bold text-blue-700 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-300 sm:-left-[3.05rem]">
                {item.number}
              </span>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-300 hover:shadow-lg hover:shadow-blue-950/5 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-blue-900 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  {item.period}
                </p>

                <h3 className="mt-2 text-lg font-bold text-slate-950 dark:text-white sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
