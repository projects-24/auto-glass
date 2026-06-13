import { locations, toSlug } from '@/functions/Functions'

const BASE_URL = "https://www.autoglassgurus.ca"

export default function sitemap() {
  const lastModified = new Date()

  const staticRoutes = ["", "/about", "/contact", "/gallery"].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }))

  const locationRoutes = locations.map((loc) => ({
    url: `${BASE_URL}/locations/${toSlug(loc)}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.7,
  }))

  return [...staticRoutes, ...locationRoutes]
}
