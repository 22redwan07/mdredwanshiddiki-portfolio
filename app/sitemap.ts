import type { MetadataRoute } from "next"

const siteUrl = "https://redwan-shiddiki.vercel.app"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const sections = [
    "",
    "#about",
    "#research",
    "#publications",
    "#projects",
    "#skills",
    "#journey",
    "#contact",
  ]
  return sections.map((section) => ({
    url: `${siteUrl}/${section}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: section === "" ? 1 : 0.7,
  }))
}
