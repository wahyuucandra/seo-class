import z from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string(),
  NEXT_PUBLIC_ENVIRONMENT: z.string(),
  SITE_URL: z.string(),
});

export const envClient = envSchema.parse({
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  NEXT_PUBLIC_ENVIRONMENT: process.env.NEXT_PUBLIC_ENVIRONMENT,
  SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
});
