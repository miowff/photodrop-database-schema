import { mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const users = mysqlTable("Users", {
  id: varchar("Id", { length: 70 }).notNull().primaryKey(),
  email: varchar("Email", { length: 100 }),
  fullName: varchar("FullName", { length: 256 }),
  profilePhotoKey: varchar("ProfilePhotoKey", { length: 256 }),
  phoneNumber: varchar("PhoneNumber", { length: 100 }).notNull(),
});