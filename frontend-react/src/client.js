// Updated import statement
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Updated client initialization
export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID, // Ensure these values are correct
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token: import.meta.env.VITE_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
