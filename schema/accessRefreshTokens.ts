import { mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { users } from "./user";

export const accessRefreshTokens = mysqlTable("AccessRefreshTokens", {
  userId: varchar("UserId", { length: 80 })
    .references(() => users.id)
    .notNull(),
  accessToken: varchar("AccessToken", { length: 256 }).notNull(),
  refreshToken: varchar("RefreshToken", { length: 256 }).notNull(),
});
