import z from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string(),
  NEXT_PUBLIC_ENVIRONMENT: z.string(),
  SITE_URL: z.string(),
  GTM_ID: z.string(),
  GA_ID: z.string(),
});

export const envClient = envSchema.parse({
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  NEXT_PUBLIC_ENVIRONMENT: process.env.NEXT_PUBLIC_ENVIRONMENT,
  SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  GTM_ID: process.env.NEXT_PUBLIC_GTM_ID, // Google Tag Manager ID
  GA_ID: process.env.NEXT_PUBLIC_GA_ID, // Google Analytics ID
});
