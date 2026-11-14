import { locales, type Locale, type Dict } from "@/lib/i18n";

export default function Header({ locale, dict }: { locale: Locale; dict: Dict }) {
  const nav = [
    { href: "#about", label: dict.nav.about },
    { href: "#skills", label: dict.nav.skills },
    { href: "#experience", label: dict.nav.experience },
    { href: "#projects", label: dict.nav.projects },
    { href: "#contact", label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-10 border-b border-zinc-200/70 bg-white/80 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/80">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
        >
          FB<span className="text-sky-600 dark:text-sky-400">.</span>
        </a>
        <nav className="hidden gap-7 text-base text-zinc-600 md:flex dark:text-zinc-400">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex gap-1.5 text-sm font-medium">
          {locales.map((l) => (
            <a
              key={l}
              href={`/${l}`}
              className={
                l === locale
                  ? "rounded-full bg-zinc-900 px-3 py-1.5 text-white dark:bg-zinc-100 dark:text-zinc-900"
                  : "rounded-full px-3 py-1.5 text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              }
            >
              {l.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
