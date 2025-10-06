import { integer, timestamp } from "drizzle-orm/pg-core";
import { varchar } from "drizzle-orm/pg-core";
import { pgTable, uuid } from "drizzle-orm/pg-core";

export const employeeTable = pgTable("employees", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  position: varchar("position").notNull(),
  created_at: timestamp().defaultNow().notNull(),
  updated_at: timestamp(),
});
