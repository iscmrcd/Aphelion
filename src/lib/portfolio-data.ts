export type PortfolioProject = {
  id: string;
  name: string;
  /** Short descriptor shown under the name */
  type: string;
  typeEn: string;
  /** 3:4 cover image URL. Falls back to a styled placeholder when empty. */
  cover?: string;
  /** Additional project photos shown in the lightbox (3:4 works best). */
  photos: string[];
  /** Live site URL, if public. */
  url?: string;
};

// Replace covers/photos with the real screenshots when available.
export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "proyecto-1",
    name: "Proyecto 01",
    type: "Sitio web",
    typeEn: "Website",
    photos: [],
  },
  {
    id: "proyecto-2",
    name: "Proyecto 02",
    type: "Sitio web",
    typeEn: "Website",
    photos: [],
  },
];
