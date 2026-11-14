import Image from "next/image";
import type { ProjectShot } from "@/lib/projects";

// The cards are narrowest just after the grid goes two-up, so the devices step
// down in size rather than overflowing.
const SHOT_HEIGHT = "h-36 md:h-44 lg:h-52";

function BrowserFrame({ wide, children }: { wide: boolean; children: React.ReactNode }) {
  return (
    <div
      className={`overflow-hidden rounded-md border border-zinc-300 bg-white shadow-lg shadow-zinc-900/10 dark:border-zinc-700 dark:bg-zinc-900 dark:shadow-black/50 ${
        wide ? "w-52 md:w-64 lg:w-[19rem]" : "w-32 md:w-40 lg:w-56"
      }`}
    >
      <div className="flex h-3.5 items-center gap-1 border-b border-zinc-200 bg-zinc-100 px-1.5 dark:border-zinc-800 dark:bg-zinc-800">
        <span className="size-1 rounded-full bg-zinc-400 dark:bg-zinc-600" />
        <span className="size-1 rounded-full bg-zinc-400 dark:bg-zinc-600" />
        <span className="size-1 rounded-full bg-zinc-400 dark:bg-zinc-600" />
      </div>
      {children}
    </div>
  );
}

/** Stylised UI for projects that have no public URL to screenshot. */
function MockUi({ variant }: { variant: "dashboard" | "table" }) {
  const bar = "rounded-full bg-zinc-200 dark:bg-zinc-700";
  return (
    <div className="flex aspect-16/10 gap-2 bg-zinc-50 p-2.5 dark:bg-zinc-900">
      <div className="flex w-1/5 flex-col gap-1.5">
        <div className={`h-1.5 w-full ${bar}`} />
        <div className={`h-1.5 w-4/5 ${bar}`} />
        <div className={`h-1.5 w-4/5 ${bar}`} />
        <div className={`h-1.5 w-3/5 ${bar}`} />
      </div>
      {variant === "dashboard" ? (
        <div className="flex flex-1 flex-col gap-2">
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-7 rounded-sm bg-zinc-100 ring-1 ring-zinc-200 dark:bg-zinc-800 dark:ring-zinc-700"
              />
            ))}
          </div>
          <div className="flex flex-1 items-end gap-1.5 rounded-sm bg-zinc-100 p-2 ring-1 ring-zinc-200 dark:bg-zinc-800 dark:ring-zinc-700">
            {[40, 65, 30, 80, 55, 70, 45].map((h, i) => (
              <div
                key={i}
                style={{ height: `${h}%` }}
                className="flex-1 rounded-xs bg-sky-600/70 dark:bg-sky-400/70"
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-1 flex-col gap-1.5">
          <div className="h-4 rounded-sm bg-sky-600/20 ring-1 ring-sky-600/30 dark:bg-sky-400/15 dark:ring-sky-400/25" />
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="flex h-4 items-center gap-2 rounded-sm bg-zinc-100 px-1.5 ring-1 ring-zinc-200 dark:bg-zinc-800 dark:ring-zinc-700"
            >
              <div className={`h-1.5 w-1/4 ${bar}`} />
              <div className={`h-1.5 w-1/3 ${bar}`} />
              <div className={`ml-auto h-1.5 w-1/6 ${bar}`} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Shot({ shot, wide }: { shot: ProjectShot; wide: boolean }) {
  if (shot.frame === "mock") {
    return (
      <BrowserFrame wide={wide}>
        <MockUi variant={shot.mock ?? "dashboard"} />
      </BrowserFrame>
    );
  }

  if (shot.frame === "browser") {
    return (
      <BrowserFrame wide={wide}>
        <Image
          src={shot.src!}
          alt={shot.alt}
          width={shot.width!}
          height={shot.height!}
          sizes="(min-width: 1024px) 304px, (min-width: 768px) 256px, 208px"
          className="w-full"
        />
      </BrowserFrame>
    );
  }

  const image = (
    <Image
      src={shot.src!}
      alt={shot.alt}
      width={shot.width!}
      height={shot.height!}
      sizes="112px"
      className="h-full w-auto"
    />
  );

  // Store graphics already come with a device drawn around the screen.
  return shot.bare ? (
    <div className={`${SHOT_HEIGHT} overflow-hidden rounded-lg`}>{image}</div>
  ) : (
    <div
      className={`${SHOT_HEIGHT} overflow-hidden rounded-[1.15rem] border-[3px] border-zinc-800 bg-zinc-950 shadow-lg shadow-zinc-900/20 dark:border-zinc-700 dark:shadow-black/50`}
    >
      {image}
    </div>
  );
}

export default function ProjectShots({
  shots,
  hrefs,
}: {
  shots: ProjectShot[];
  /** Link id → url, so a mockup opens the same place as its label below. */
  hrefs: Record<string, string>;
}) {
  const wide = shots.length === 1;

  return (
    <div className={`mb-6 flex ${SHOT_HEIGHT} items-end justify-center gap-3`}>
      {shots.map((shot, index) => {
        const href = shot.linkId ? hrefs[shot.linkId] : undefined;
        const content = <Shot shot={shot} wide={wide} />;

        return href ? (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg transition-transform duration-200 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-4 focus-visible:ring-offset-white focus-visible:outline-none dark:focus-visible:ring-offset-zinc-950"
          >
            {content}
          </a>
        ) : (
          <div key={index}>{content}</div>
        );
      })}
    </div>
  );
}
