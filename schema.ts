import { serial, text, pgTable, pgSchema } from "drizzle-orm/pg-core";

export const mySchema = pgSchema("my_schema");

export const mySchemaUsers = mySchema.table("users", {
  id: serial("id").primaryKey(),
  name: text("name"),
});
