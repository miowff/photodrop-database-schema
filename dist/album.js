"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.albums = void 0;
const mysql_core_1 = require("drizzle-orm/mysql-core");
exports.albums = (0, mysql_core_1.mysqlTable)("Albums", {
    id: (0, mysql_core_1.varchar)("Id", { length: 100 }).primaryKey().notNull(),
    title: (0, mysql_core_1.varchar)("Title", { length: 256 }).notNull(),
    location: (0, mysql_core_1.varchar)("Location", { length: 100 }).notNull(),
    dataPicker: (0, mysql_core_1.varchar)("Datapicker", { length: 100 }).notNull(),
    createdDate: (0, mysql_core_1.date)("CreatedDate").notNull(),
    photographerId: (0, mysql_core_1.varchar)("PhotographerId", { length: 100 }).notNull(),
    price: (0, mysql_core_1.int)("Price").notNull().default(5),
});
//# sourceMappingURL=album.js.map