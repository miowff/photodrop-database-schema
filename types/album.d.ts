export declare const albums: import("drizzle-orm/mysql-core").MySqlTableWithColumns<{
    name: "Albums";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "Id";
            tableName: "Albums";
            dataType: "string";
            columnType: "MySqlVarChar";
            data: string;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, object>;
        title: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "Title";
            tableName: "Albums";
            dataType: "string";
            columnType: "MySqlVarChar";
            data: string;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, object>;
        location: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "Location";
            tableName: "Albums";
            dataType: "string";
            columnType: "MySqlVarChar";
            data: string;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, object>;
        dataPicker: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "Datapicker";
            tableName: "Albums";
            dataType: "string";
            columnType: "MySqlVarChar";
            data: string;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, object>;
        createdDate: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "CreatedDate";
            tableName: "Albums";
            dataType: "date";
            columnType: "MySqlDate";
            data: Date;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
        photographerId: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "PhotographerId";
            tableName: "Albums";
            dataType: "string";
            columnType: "MySqlVarChar";
            data: string;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, object>;
        price: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "Price";
            tableName: "Albums";
            dataType: "number";
            columnType: "MySqlInt";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
    };
    dialect: "mysql";
}>;
