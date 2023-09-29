import type { Config } from "drizzle-kit";

export default {
  schema: "./schema.ts",
  driver: "mysql2",
  dbCredentials: {
    connectionString: Bun.env.DB_URL!,
  },
} satisfies Config;
