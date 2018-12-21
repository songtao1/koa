const router = require('koa-router')();
const jwt = require("jsonwebtoken");
import * as ex from "./example";
import * as constants from "../config/constants";
import logger from "../utils/log_util";
import * as timer from "./timer";
//统一加jwt校验
async function testAuth(ctx,next){
    let auth = ctx.header.authorization;
    if (auth) {
        let bearer = auth.split(' ');
        if (bearer.length === 2 && bearer[0] === 'Bearer') {
            try {
                let decoded = jwt.verify(bearer[1], constants.JWTSecret);
                logger.info(decoded.username + '--' + ctx.url);
                ctx.request.body.jwt_username = decoded.username;
                //中间件
                await next();
            } catch(err) {
                console.log(err)
                ctx.body=constants.ErrorAuthentication;
                // next(err);
            }
        } else {
            ctx.body=constants.ErrorAuthentication;
        }
    } else {
        ctx.body=constants.ErrorAuthentication;
    }
}


router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.post('/json',testAuth, ex.getBroadcastList)

router.post('/mongodb',testAuth, ex.getmongoDb);
module.exports = router
