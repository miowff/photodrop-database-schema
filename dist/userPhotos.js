"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userPhotos = void 0;
const photo_1 = require("./photo");
const album_1 = require("./album");
const user_1 = require("./user");
const mysql_core_1 = require("drizzle-orm/mysql-core");
exports.userPhotos = (0, mysql_core_1.mysqlTable)("UserPhotos", {
    UserId: (0, mysql_core_1.varchar)("UserId", { length: 70 })
        .references(() => user_1.users.id)
        .notNull(),
    photoId: (0, mysql_core_1.varchar)("PhotoId", { length: 80 })
        .references(() => photo_1.photos.id)
        .notNull(),
    albumId: (0, mysql_core_1.varchar)("AlbumId", { length: 70 })
        .references(() => album_1.albums.id)
        .notNull(),
    isActivated: (0, mysql_core_1.boolean)("IsActivated").notNull().default(false),
});
//# sourceMappingURL=userPhotos.js.map