import {MySqlUrlOp,MongoOpUrl} from "../config/constants";
//https://github.com/sidorares/node-mysql2#using-connection-pools
import mysql from "mysql2/promise";
import monk from "monk";
let MysqlOp = mysql.createPool(MySqlUrlOp);
let MondbOp = monk(MongoOpUrl);
export {MysqlOp,MondbOp}




