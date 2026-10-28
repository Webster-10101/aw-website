import type { MetadataRoute } from "next";

const SITE_URL = "https://alistairwebster.com";
const PATHS = ["/", "/coaching", "/about", "/ffg", "/projects", "/contact", "/stories/tom", "/terms", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.map((path) => ({ url: `${SITE_URL}${path}` }));
}
