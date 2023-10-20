"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.photos = void 0;
const mysql_core_1 = require("drizzle-orm/mysql-core");
const album_1 = require("./album");
exports.photos = (0, mysql_core_1.mysqlTable)("Photos", {
    id: (0, mysql_core_1.varchar)("Id", { length: 80 }).primaryKey().notNull(),
    albumId: (0, mysql_core_1.varchar)("AlbumId", { length: 70 })
        .references(() => album_1.albums.id)
        .notNull(),
    albumTitle: (0, mysql_core_1.varchar)("AlbumTitle", { length: 256 }).notNull(),
    photoName: (0, mysql_core_1.varchar)("PhotoName", {
        length: 256,
    }).notNull(),
});
//# sourceMappingURL=photo.js.map