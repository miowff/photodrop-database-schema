export declare const userPhotos: import("drizzle-orm/mysql-core").MySqlTableWithColumns<{
    name: "UserPhotos";
    schema: undefined;
    columns: {
        UserId: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "UserId";
            tableName: "UserPhotos";
            dataType: "string";
            columnType: "MySqlVarChar";
            data: string;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, object>;
        photoId: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "PhotoId";
            tableName: "UserPhotos";
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
            tableName: "UserPhotos";
            dataType: "string";
            columnType: "MySqlVarChar";
            data: string;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, object>;
        isActivated: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "IsActivated";
            tableName: "UserPhotos";
            dataType: "boolean";
            columnType: "MySqlBoolean";
            data: boolean;
            driverParam: number | boolean;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
    };
    dialect: "mysql";
}>;
