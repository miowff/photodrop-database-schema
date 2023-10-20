"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
const mysql_core_1 = require("drizzle-orm/mysql-core");
exports.users = (0, mysql_core_1.mysqlTable)("Users", {
    id: (0, mysql_core_1.varchar)("Id", { length: 70 }).notNull().primaryKey(),
    email: (0, mysql_core_1.varchar)("Email", { length: 100 }),
    fullName: (0, mysql_core_1.varchar)("FullName", { length: 256 }),
    profilePhotoKey: (0, mysql_core_1.varchar)("ProfilePhotoKey", { length: 256 }),
    phoneNumber: (0, mysql_core_1.varchar)("PhoneNumber", { length: 100 }).notNull(),
});
//# sourceMappingURL=user.js.map