import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import ProjectShots from "@/components/ProjectShots";
import { contacts, cvPaths, getDict, isLocale, skillGroups } from "@/lib/i18n";
import { projectLogos, projectShots } from "@/lib/projects";

function ExternalLinkIcon() {
  return (
    <svg
      className="size-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 3h6v6M10 14 21 3M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
    </svg>
  );
}

function SectionHeading({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="scroll-mt-24 text-base font-semibold tracking-widest text-sky-700 uppercase dark:text-sky-400"
    >
      {children}
    </h2>
  );
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Farhat Baymuradov",
  url: "https://dev.faraby.xyz",
  jobTitle: "Full Stack Developer",
  email: `mailto:${contacts.email}`,
  image: "https://dev.faraby.xyz/farhat.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ashgabat",
    addressCountry: "TM",
  },
  sameAs: [
    contacts.telegram,
    "https://github.com/al-fara-bi",
    "https://www.instagram.com/al_fara_by",
  ],
  knowsAbout: ["Go", "Gin", "Flutter", "React", "TypeScript", "PostgreSQL", "Docker"],
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDict(locale);

  return (
    <div id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Header locale={locale} dict={dict} />

      <main className="mx-auto max-w-4xl px-6">
        {/* Hero */}
        <section className="flex flex-col items-start gap-10 py-20 sm:flex-row sm:items-center sm:py-24">
          <Image
            src="/farhat.png"
            alt="Farhat Baymuradov"
            width={288}
            height={288}
            priority
            className="size-56 rounded-3xl object-cover shadow-lg sm:size-72"
          />
          <div>
            <h1 className="text-5xl font-bold tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-50">
              Farhat Baymuradov
            </h1>
            <p className="mt-3 text-xl font-medium text-sky-700 sm:text-2xl dark:text-sky-400">
              {dict.hero.role} · Go · Flutter · React
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              {dict.hero.tagline}
            </p>
            <p className="mt-4 flex items-center gap-2 text-base text-zinc-500 dark:text-zinc-500">
              <svg
                className="size-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {dict.hero.location}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={cvPaths[locale]}
                download
                className="rounded-full bg-sky-700 px-7 py-3 text-base font-medium text-white transition-colors hover:bg-sky-800 dark:bg-sky-500 dark:text-zinc-950 dark:hover:bg-sky-400"
              >
                {dict.hero.downloadCv}
              </a>
              <a
                href={`mailto:${contacts.email}`}
                className="rounded-full border border-zinc-300 px-7 py-3 text-base font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:text-zinc-100"
              >
                {dict.hero.email}
              </a>
              <a
                href={contacts.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-zinc-300 px-7 py-3 text-base font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:text-zinc-100"
              >
                {dict.hero.telegram}
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="border-t border-zinc-200 py-16 dark:border-zinc-800">
          <SectionHeading id="about">{dict.about.heading}</SectionHeading>
          <p className="mt-6 text-lg leading-8 text-zinc-700 dark:text-zinc-300">
            {dict.about.text}
          </p>
          <div className="mt-10 grid grid-cols-3 gap-5">
            {dict.about.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-zinc-200 p-6 text-center dark:border-zinc-800"
              >
                <div className="text-3xl font-bold text-zinc-900 sm:text-4xl dark:text-zinc-50">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-zinc-500 sm:text-base dark:text-zinc-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="border-t border-zinc-200 py-16 dark:border-zinc-800">
          <SectionHeading id="skills">{dict.skills.heading}</SectionHeading>
          <div className="mt-8 space-y-6">
            {skillGroups.map((group) => (
              <div key={group.key} className="sm:flex sm:items-baseline sm:gap-6">
                <div className="text-base font-semibold text-zinc-900 sm:w-60 sm:shrink-0 dark:text-zinc-100">
                  {dict.skills.labels[group.key]}
                </div>
                <div className="mt-2.5 flex flex-wrap gap-2.5 sm:mt-0">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-zinc-100 px-3.5 py-1.5 text-sm font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="border-t border-zinc-200 py-16 dark:border-zinc-800">
          <SectionHeading id="experience">{dict.experience.heading}</SectionHeading>
          <div className="mt-10 space-y-12 border-l border-zinc-200 pl-8 dark:border-zinc-800">
            {dict.experience.items.map((job) => (
              <article key={`${job.role}-${job.period}`} className="relative">
                <span className="absolute top-2 -left-[2.4rem] size-3 rounded-full bg-sky-600 ring-4 ring-white dark:bg-sky-400 dark:ring-zinc-950" />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                    {job.role}
                  </h3>
                  <span className="text-base text-zinc-500 dark:text-zinc-500">{job.period}</span>
                </div>
                <p className="mt-1 text-base text-sky-700 dark:text-sky-400">{job.company}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-zinc-600 marker:text-zinc-400 dark:text-zinc-400 dark:marker:text-zinc-600">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="border-t border-zinc-200 py-16 dark:border-zinc-800">
          <SectionHeading id="projects">{dict.projects.heading}</SectionHeading>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {dict.projects.items.map((project) => (
              <article
                key={project.id}
                className="flex flex-col rounded-2xl border border-zinc-200 p-6 transition-shadow hover:shadow-md dark:border-zinc-800 dark:hover:shadow-zinc-900"
              >
                {projectShots[project.id] && (
                  <ProjectShots
                    shots={projectShots[project.id]}
                    hrefs={Object.fromEntries(
                      (project.links ?? []).map((link) => [link.id, link.href]),
                    )}
                  />
                )}
                <h3 className="flex items-center gap-3 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                  {projectLogos[project.id] && (
                    <Image
                      src={projectLogos[project.id]}
                      alt=""
                      width={32}
                      height={32}
                      className="size-8 rounded-lg"
                    />
                  )}
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-2.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.links && (
                    <div className="ml-auto flex flex-wrap items-center gap-x-4 gap-y-2 pl-3">
                      {project.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-700 hover:underline dark:text-sky-400"
                        >
                          {link.label}
                          <ExternalLinkIcon />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="border-t border-zinc-200 py-16 dark:border-zinc-800">
          <SectionHeading>{dict.education.heading}</SectionHeading>
          <div className="mt-6 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                {dict.education.degree}
              </h3>
              <p className="mt-1 text-base text-zinc-600 dark:text-zinc-400">
                {dict.education.school}
              </p>
            </div>
            <span className="text-base text-zinc-500 dark:text-zinc-500">
              {dict.education.period}
            </span>
          </div>
        </section>

        {/* Contact */}
        <section className="border-t border-zinc-200 py-16 dark:border-zinc-800">
          <SectionHeading id="contact">{dict.contact.heading}</SectionHeading>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">
            {dict.contact.text}
          </p>
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4 text-lg">
            <a
              href={`mailto:${contacts.email}`}
              className="font-medium text-sky-700 hover:underline dark:text-sky-400"
            >
              {contacts.email}
            </a>
            <a
              href={contacts.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-sky-700 hover:underline dark:text-sky-400"
            >
              {contacts.telegramHandle}
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-2 px-6 py-8 text-sm text-zinc-500 dark:text-zinc-500">
          <span>© {new Date().getFullYear()} Farhat Baymuradov</span>
          <span>{dict.footer.builtWith}</span>
        </div>
      </footer>
    </div>
  );
}
