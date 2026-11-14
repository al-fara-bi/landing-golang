/**
 * Screenshots shown on the project cards. Kept out of `i18n.ts` because the
 * images are the same in every locale — only the link labels are translated.
 * `linkId` ties a shot to one of the project's links in the dictionary, so the
 * mockup points at the same place as the label underneath it.
 */
export interface ProjectShot {
  /** Matches `ProjectLink.id` of the project this shot belongs to. */
  linkId?: string;
  frame: "browser" | "phone" | "mock";
  src?: string;
  width?: number;
  height?: number;
  /** The source image already contains a device, so skip our own phone frame. */
  bare?: boolean;
  /** Which stylised UI to draw for `frame: "mock"` (projects with no public URL). */
  mock?: "dashboard" | "table";
  alt: string;
}

export const projectShots: Record<string, ProjectShot[]> = {
  yedu: [
    {
      linkId: "site",
      frame: "browser",
      src: "/projects/yedu-web.jpg",
      width: 1280,
      height: 800,
      alt: "Yedu website landing page",
    },
    {
      linkId: "site",
      frame: "phone",
      src: "/projects/yedu-app.png",
      width: 460,
      height: 1000,
      alt: "Yedu app — EVA assistant chat",
    },
  ],
  kerwen: [
    {
      linkId: "site",
      frame: "browser",
      src: "/projects/kerwen-web.jpg",
      width: 1280,
      height: 722,
      alt: "Kerwen online store home page",
    },
    {
      linkId: "play",
      frame: "phone",
      src: "/projects/kerwen-app.png",
      width: 450,
      height: 1000,
      alt: "Kerwen app — home screen",
    },
  ],
  wakant: [
    {
      linkId: "play",
      frame: "phone",
      bare: true,
      src: "/projects/wakant-app.png",
      width: 562,
      height: 1000,
      alt: "Wakant app — job categories",
    },
    {
      linkId: "play",
      frame: "phone",
      bare: true,
      src: "/projects/wakant-app-2.png",
      width: 562,
      height: 1000,
      alt: "Wakant app — vacancy details",
    },
  ],
  rowshen: [
    {
      linkId: "site",
      frame: "browser",
      src: "/projects/rowshen-web.jpg",
      width: 1280,
      height: 800,
      alt: "Röwşen website home page",
    },
    {
      linkId: "play",
      frame: "phone",
      src: "/projects/rowshen-app.png",
      width: 402,
      height: 874,
      alt: "Röwşen app — product catalog",
    },
  ],
  yovshan: [
    {
      linkId: "play",
      frame: "phone",
      bare: true,
      src: "/projects/yovshan-app.png",
      width: 461,
      height: 1000,
      alt: "Ýowşan dermanhana app — home screen",
    },
    {
      linkId: "play",
      frame: "phone",
      bare: true,
      src: "/projects/yovshan-app-2.png",
      width: 461,
      height: 1000,
      alt: "Ýowşan dermanhana app — medicine details",
    },
  ],
  tminfo: [
    {
      linkId: "play",
      frame: "phone",
      src: "/projects/tminfo-app.png",
      width: 450,
      height: 1000,
      alt: "TMINFO app — store details",
    },
    {
      linkId: "play",
      frame: "phone",
      src: "/projects/tminfo-app-2.png",
      width: 450,
      height: 1000,
      alt: "TMINFO app — city catalog",
    },
  ],
  fullstack: [{ frame: "mock", mock: "dashboard", alt: "" }],
  admin: [{ frame: "mock", mock: "table", alt: "" }],
};

/** App icons shown next to the project title, keyed by project id. */
export const projectLogos: Record<string, string> = {
  kerwen: "/projects/kerwen-logo.png",
};
