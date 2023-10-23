import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const phoneNumberCode = mysqlTable("PhoneNumberCode", {
  phoneNumber: varchar("PhoneNumber", { length: 100 }).notNull(),
  code: int("Price").notNull().default(5),
  resendTries: int("ResendTries").notNull().default(1),
  sentTime: int("SentTime").notNull(),
});
