export declare const photographers: import("drizzle-orm/mysql-core").MySqlTableWithColumns<{
    name: "Photographers";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "Id";
            tableName: "Photographers";
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
            tableName: "Photographers";
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
            tableName: "Photographers";
            dataType: "string";
            columnType: "MySqlVarChar";
            data: string;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, object>;
        login: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "Login";
            tableName: "Photographers";
            dataType: "string";
            columnType: "MySqlVarChar";
            data: string;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, object>;
        passwordHash: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "PasswordHash";
            tableName: "Photographers";
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
