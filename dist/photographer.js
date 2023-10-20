"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.photographers = void 0;
const mysql_core_1 = require("drizzle-orm/mysql-core");
exports.photographers = (0, mysql_core_1.mysqlTable)("Photographers", {
    id: (0, mysql_core_1.varchar)("Id", { length: 70 }).primaryKey().notNull(),
    email: (0, mysql_core_1.varchar)("Email", { length: 100 }),
    fullName: (0, mysql_core_1.varchar)("FullName", { length: 256 }),
    login: (0, mysql_core_1.varchar)("Login", { length: 256 }).notNull(),
    passwordHash: (0, mysql_core_1.varchar)("PasswordHash", { length: 256 }).notNull(),
});
//# sourceMappingURL=photographer.js.map