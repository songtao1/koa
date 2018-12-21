var log4js=require('log4js');
var path = require('path');
var logPath = path.resolve(__dirname, "../../logs/allLog");
log4js.configure({
  appenders: {
    out: { type: 'stdout' },//设置是否在控制台打印日志
    info: { 
        type: 'file', 
        filename: logPath, 
        maxLogSize: 104800,
        backups: 100
    },
  },
  categories: {
    default: { appenders: [ 'out', 'info' ], level: 'info' }//去掉'out'。控制台不打印日志
  }
});
const logger = log4js.getLogger("info");

module.exports = logger;
