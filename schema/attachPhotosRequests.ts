import { albums } from "./album";
import { mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const attachPhotosRequests = mysqlTable("AttachPhotosRequests", {
  photoKey: varchar("PhotoKey", { length: 80 }).notNull(),
  albumId: varchar("AlbumId", { length: 70 })
    .references(() => albums.id)
    .notNull(),
  phoneNumbers: varchar("PhoneNUmbers", { length: 256 }).notNull(),
});
