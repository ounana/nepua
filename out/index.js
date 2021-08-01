"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connect_1 = require("./connect");
;
(async () => {
    let users = await connect_1.Query(`UPDATE user SET create_at ='2021-08-01 09:53:32' WHERE id =6`);
    let list = await connect_1.Query(`SELECT * FROM user ORDER BY create_at DESC`);
    console.log(list);
})();
//# sourceMappingURL=index.js.map