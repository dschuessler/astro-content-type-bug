import { defineCollection, z } from "astro:content";

const animals = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    title: z.string(),
  }),
});

export const collections = { animals };
