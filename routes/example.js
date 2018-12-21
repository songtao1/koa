import {MysqlOp,MondbOp} from "../utils/db";
import * as constants from "../config/constants";

async function getBroadcastListAsyc(ctx,next){
    // console.log(ctx.request.body)
    let result = await MysqlOp.query(`SELECT * FROM user`);
    // // console.log(constants.ErrorNone)
    ctx.body = Object.assign({},constants.ErrorNone,{data:result[0]});
}
//mongodb
async function  getmongoDbAsyc(ctx) {
    let result = await MondbOp.get("daily").find();
    ctx.body = result;
}





let wrap = fn => (...args) => fn(...args).catch((e)=>{
    console.log(e)
})
let getBroadcastList = wrap(getBroadcastListAsyc);
let getmongoDb = wrap(getmongoDbAsyc);
export {getBroadcastList,getmongoDb}


