export declare const users: import("drizzle-orm/mysql-core").MySqlTableWithColumns<{
    name: "Users";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "Id";
            tableName: "Users";
            dataType: "string";
            columnType: "MySqlVarChar";
            data: string;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, object>;
        email: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "Email";
            tableName: "Users";
            dataType: "string";
            columnType: "MySqlVarChar";
            data: string;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, object>;
        fullName: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "FullName";
            tableName: "Users";
            dataType: "string";
            columnType: "MySqlVarChar";
            data: string;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, object>;
        profilePhotoKey: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "ProfilePhotoKey";
            tableName: "Users";
            dataType: "string";
            columnType: "MySqlVarChar";
            data: string;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, object>;
        phoneNumber: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "PhoneNumber";
            tableName: "Users";
            dataType: "string";
            columnType: "MySqlVarChar";
            data: string;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, object>;
    };
    dialect: "mysql";
}>;
