"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = require("mysql");
const POOL = mysql_1.createPool({
    connectionLimit: 10,
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'my_db',
});
function Query(sql) {
    return new Promise((resolve, reject) => {
        POOL.getConnection((err, connection) => {
            if (err)
                return reject(err);
            connection.query(sql, (err, results) => {
                connection.release();
                err ? reject(err) : resolve(results);
            });
        });
    });
}
exports.Query = Query;
//# sourceMappingURL=connect.js.map