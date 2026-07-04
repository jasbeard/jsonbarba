import { allWritings } from "contentlayer/generated";

export function tagToSlug(tag: string) {
  return tag.toLowerCase().replace(/\s+/g, "-");
}

export function getAllTags() {
  const tags = new Set<string>();
  for (const writing of allWritings) {
    for (const tag of writing.tags ?? []) {
      tags.add(tag);
    }
  }
  return Array.from(tags);
}

export function tagFromSlug(slug: string) {
  return getAllTags().find((tag) => tagToSlug(tag) === slug);
}
