import { defineCollection } from "astro:content";
import { deckCollectionSchema } from "@astro-slides/core";
import { glob } from "astro/loaders";

export const collections = {
  decks: defineCollection({
    loader: glob({ pattern: "slides.{md,mdx}", base: "." }),
    schema: deckCollectionSchema,
  }),
};
