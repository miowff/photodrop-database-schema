export declare const photos: import("drizzle-orm/mysql-core").MySqlTableWithColumns<{
    name: "Photos";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "Id";
            tableName: "Photos";
            dataType: "string";
            columnType: "MySqlVarChar";
            data: string;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, object>;
        albumId: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "AlbumId";
            tableName: "Photos";
            dataType: "string";
            columnType: "MySqlVarChar";
            data: string;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, object>;
        albumTitle: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "AlbumTitle";
            tableName: "Photos";
            dataType: "string";
            columnType: "MySqlVarChar";
            data: string;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, object>;
        photoName: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "PhotoName";
            tableName: "Photos";
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
