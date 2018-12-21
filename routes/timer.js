//定时文件
import  schedule from 'node-schedule';
 
let rule = new schedule.RecurrenceRule();  
rule.minute = [1,6,11,16,21,26,31,36,41,46,51,56];
// rule.second = [1,6,11,16,21,26,31,36,41,46,51,56];
let count = 0;
let j = schedule.scheduleJob(rule, async function(){  
    console.log(++count);
});



