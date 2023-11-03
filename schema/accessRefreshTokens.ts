import { mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { users } from "./user";

export const userRefreshToken = mysqlTable("UserRefreshToken", {
  userId: varchar("UserId", { length: 80 })
    .references(() => users.id)
    .notNull(),
  refreshToken: varchar("RefreshToken", { length: 256 }).notNull(),
});
