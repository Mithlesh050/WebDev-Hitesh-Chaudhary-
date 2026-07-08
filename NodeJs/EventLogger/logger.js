const fs=require("fs") ;
const os=require("os") ;

const EventEmmiter = require("events") ;
class Logger extends EventEmmiter{
    log(message){
        this.emit('message' , {message}) ;
    }
}
const logger = new Logger() ;
const logfile = './eventlog.txt' ;

const logTofile = (event) => {
    const logMessage = `${new Date().toISOString()}-${event.message}\n` ;
    fs.appendFileSync(logfile , logMessage) ;
}

logger.on('message' , logTofile) ;

setInterval(()=>{
    const memoryUsage  = os.freemem()/os.totalmem() * 100 ;
    logger.log(`Current memory usage : ${memoryUsage.toFixed(2)}`) ;
} , 3000) ;

logger.log("Application started") ;
logger.log("Application event Occurred") ;