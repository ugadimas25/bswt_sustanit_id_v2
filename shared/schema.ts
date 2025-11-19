import { sql } from "drizzle-orm";
import { pgTable, text, varchar, numeric, date } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const plotsAdy = pgTable("plots_ady", {
  country: varchar("country", { length: 100 }),
  province: varchar("province", { length: 255 }),
  district: varchar("district", { length: 255 }),
  subdistrict: varchar("subdistrict", { length: 255 }),
  village: varchar("village", { length: 255 }),
  farmer: varchar("farmer", { length: 255 }),
  plot: varchar("plot", { length: 100 }),
  latlong: varchar("latlong", { length: 50 }),
  polygon: text("polygon"),
  polygonarea: numeric("polygonarea", { precision: 14, scale: 2 }),
  commodity: varchar("commodity", { length: 255 }),
  firstplanting: date("firstplanting"),
});

export type PlotAdy = typeof plotsAdy.$inferSelect;
