import { useState } from "react";

const questions = [
  {
    question: "What is AWS Amplify Hosting mainly used for?",
    options: [
      "Editing images",
      "Hosting and deploying web applications",
      "Writing SQL queries",
      "Managing a laptop's operating system",
    ],
    answer: 1,
    explanation:
      "Amplify Hosting helps developers deploy web apps and deliver them to users through the web.",
  },
  {
    question: "What is GitHub used for in a typical deployment workflow?",
    options: [
      "Storing and managing source code",
      "Replacing the web browser",
      "Automatically designing every page",
      "Acting as a physical server",
    ],
    answer: 0,
    explanation:
      "GitHub hosts repositories and tracks code changes. It can be connected to Amplify for a deployment workflow.",
  },
  {
    question:
      "In a GitHub-connected Amplify project, what can happen after a push to a configured branch?",
    options: [
      "The repository is deleted",
      "The app must always be rebuilt by hand",
      "Amplify can start a build and deployment",
      "The database is automatically replaced",
    ],
    answer: 2,
    explanation:
      "When automatic builds are enabled for the connected branch, Amplify can build and deploy new commits.",
  },
  {
    question: "Which is a good cloud security practice?",
    options: [
      "Publish access keys in a public repository",
      "Share passwords in your portfolio",
      "Use the same secret in every project",
      "Keep credentials private and follow least privilege",
    ],
    answer: 3,
    explanation:
      "Keep credentials secret and grant only the permissions required for the task.",
  },
  {
    question: "What does the AWS pay-as-you-go pricing model mean?",
    options: [
      "You pay a fixed yearly fee no matter what you use",
      "You pay only for the resources and services you actually use",
      "You must buy servers before using AWS",
      "You pay only when your website has errors",
    ],
    answer: 1,
    explanation:
      "Pay-as-you-go is a core cloud benefit: no large upfront cost, and you are billed for what you consume.",
  },
  {
    question:
      "Which AWS service is designed for scalable object storage, such as images, backups, and static files?",
    options: ["Amazon EC2", "Amazon VPC", "Amazon S3", "AWS IAM"],
    answer: 2,
    explanation:
      "Amazon S3 (Simple Storage Service) stores objects in buckets and is highly durable and scalable.",
  },
  {
    question:
      "Under the AWS Shared Responsibility Model, who is responsible for the security 'of' the cloud (physical data centers, hardware)?",
    options: [
      "AWS",
      "The customer",
      "The customer's internet provider",
      "Nobody, it is shared equally",
    ],
    answer: 0,
    explanation:
      "AWS secures the infrastructure; customers are responsible for security 'in' the cloud, such as data, access, and configuration.",
  },
  {
    question:
      "Which AWS service lets you manage users, roles, and permissions for accessing AWS resources?",
    options: ["Amazon CloudWatch", "Amazon Route 53", "AWS Lambda", "AWS IAM"],
    answer: 3,
    explanation:
      "AWS Identity and Access Management (IAM) controls who can access which resources and what they can do.",
  },
  {
    question: "What is an AWS Availability Zone?",
    options: [
      "A billing category for free-tier accounts",
      "One or more discrete data centers within an AWS Region",
      "A type of EC2 instance",
      "A security group rule",
    ],
    answer: 1,
    explanation:
      "Regions contain multiple Availability Zones. Spreading resources across them improves fault tolerance and availability.",
  },
  {
    question:
      "Which AWS service runs your code without you provisioning or managing servers?",
    options: ["Amazon RDS", "AWS Budgets", "AWS Lambda", "Amazon EBS"],
    answer: 2,
    explanation:
      "AWS Lambda is a serverless compute service: you upload code and AWS runs it on demand, charging per use.",
  },
];

export default function MiniChallenge() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = questions[current];

  function chooseAnswer(index) {
    if (selected !== null) return;

    setSelected(index);

    if (index === question.answer) {
      setScore((previous) => previous + 1);
    }
  }

  function nextQuestion() {
    if (current === questions.length - 1) {
      setFinished(true);
      return;
    }

    setCurrent((previous) => previous + 1);
    setSelected(null);
  }

  function restartQuiz() {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }

  return (
    <section
      id="mini-challenge"
      className="scroll-mt-24 border-t border-slate-200 bg-slate-50/70 px-5 py-20 transition-colors dark:border-slate-800 dark:bg-slate-950 sm:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-blue-600 dark:text-blue-400">
            TEST YOUR KNOWLEDGE
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
            Mini AWS Challenge.
          </h2>
          <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
            Four quick questions about cloud hosting, GitHub workflows, and
            security. Learn something new with every answer.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950 sm:p-8">
          {!finished ? (
            <>
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                  Question {current + 1} of {questions.length}
                </span>
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  Score: {score}
                </span>
              </div>

              <div
                className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800"
                role="progressbar"
                aria-label="Quiz progress"
                aria-valuemin={0}
                aria-valuemax={questions.length}
                aria-valuenow={current + 1}
              >
                <div
                  className="h-full rounded-full bg-blue-600 transition-all"
                  style={{
                    width: `${((current + 1) / questions.length) * 100}%`,
                  }}
                />
              </div>

              <h3 className="mt-7 text-xl font-bold leading-8 text-slate-950 dark:text-white">
                {question.question}
              </h3>

              <div className="mt-6 space-y-3">
                {question.options.map((option, index) => {
                  const isCorrect = index === question.answer;
                  const isSelected = index === selected;

                  let optionStyle =
                    "border-slate-200 hover:border-blue-400 hover:bg-blue-50 dark:border-slate-800 dark:hover:border-blue-800 dark:hover:bg-slate-900";

                  if (selected !== null && isCorrect) {
                    optionStyle =
                      "border-emerald-500 bg-emerald-50 text-emerald-900 dark:border-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-200";
                  } else if (isSelected && !isCorrect) {
                    optionStyle =
                      "border-rose-400 bg-rose-50 text-rose-900 dark:border-rose-800 dark:bg-rose-950/40 dark:text-rose-200";
                  }

                  return (
                    <button
                      key={option}
                      type="button"
                      disabled={selected !== null}
                      onClick={() => chooseAnswer(index)}
                      className={`flex w-full items-start gap-3 rounded-xl border p-4 text-left text-sm leading-6 transition disabled:cursor-default ${optionStyle}`}
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xs font-bold dark:bg-slate-800">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="pt-0.5">{option}</span>
                    </button>
                  );
                })}
              </div>

              {selected !== null && (
                <div
                  className="mt-5 rounded-xl bg-slate-50 p-4 dark:bg-slate-900"
                  aria-live="polite"
                >
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {selected === question.answer
                      ? "Correct! Well done."
                      : "Not quite — keep learning!"}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {question.explanation}
                  </p>
                </div>
              )}

              <button
                type="button"
                disabled={selected === null}
                onClick={nextQuestion}
                className="mt-6 w-full rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {current === questions.length - 1
                  ? "See my results"
                  : "Next question"}
              </button>
            </>
          ) : (
            <div className="py-6 text-center">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-blue-50 text-3xl dark:bg-blue-950">
                {score >= 3 ? "🏆" : "🚀"}
              </div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                Challenge completed
              </p>

              <h3 className="mt-3 text-3xl font-bold text-slate-950 dark:text-white">
                {score} / {questions.length}
              </h3>

              <p className="mx-auto mt-3 max-w-md leading-7 text-slate-600 dark:text-slate-300">
                {score === questions.length
                  ? "Excellent work! You answered every question correctly."
                  : score >= 3
                    ? "Great job! Review what you learned and keep building."
                    : "Every question is a learning opportunity. Try again and improve your score."}
              </p>

              <button
                type="button"
                onClick={restartQuiz}
                className="mt-7 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Try again
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
