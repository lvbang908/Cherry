var log = require("./settings/support/log");
log("CHERRY BOT", "Đang khởi tạo các biến...");

var Cherry = {
    configs: [],
    log: log,
    superban: new Map(),
    host: []
};

var multiple = {
    commands: new Map(),
    events: new Map(),
    commandsHide: [],
    handleEvents: [],
    handleMessageReply: [],
    handleReactionMessage: [],
    commandsCountDown: new Map(),
    allThreadsInfo: new Map(),
    allUsersInfo: new Map(),
    allThreadsBanned: new Map(),
    allUsersBanned: new Map(),
    workPlace: process.cwd(),
    timeStart: {
        timeStamp: Date.now(),
        fullTime: ''
    }
}

log("CHERRY BOT", "Đang kiểm tra thông tin và các cài đặt cần thiết...");
require("./settings/handle/loadAll") ({ Cherry, multiple });
require('./settings/system/login') ({ Cherry, multiple });