"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connect_1 = require("./connect");
;
(async () => {
    let users = await connect_1.Query(`AlTER TABLE user CHANGE age age int(3)`);
    let list = await connect_1.Query(`SELECT * FROM user ORDER BY create_at DESC`);
    console.log(list);
})();
//# sourceMappingURL=index.js.map