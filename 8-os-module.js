const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user)

// system uptime in seconds
console.log(" the system uptime in seconds is " + os.uptime() + " seconds")


const currentOs = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMemory:os.freemem(),
}
console.log(currentOs)