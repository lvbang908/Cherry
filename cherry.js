//All variable require
const moment = require("moment-timezone");
const fullTime = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss DD/MM/YYYY");
var { writeFileSync, readFileSync } = require("fs-extra");
var log = require("./scripts/supports/log");
const login = require("fca-cherry");


var Cherry = new Object({
    configs: [],
    log: log
});

var multiple = new Object({
    allCommands: new Map(),
    allEvents: new Map(),
    commandsHide: [],
    handleEvents: new Map(),
    handleMessageReply: new Array(),
    handleReactionMessage: new Array(),
    commandsCountDown: new Map(),
    onLoadCommands: new Array,
    allThreadsInfo: new Map(),
    allUsersInfo: new Map(),
    workPlace: process.cwd(),
    timeStart: {
        timeStamp: Date.now(),
        fullTime: fullTime
    }
});

log("CHERRY BOT", "Đang khởi động bot...", "cyan");

//Get config file

try {
    var config = require("./settings/config.json");
    for (var [name, values] of Object.entries(config)) {
        if (name == "optionsLogin") {
            var optionsLogin = values;
            continue;
        }
        Cherry.configs[name] = values;
    }
    writeFileSync(multiple.workPlace + "/settings/config.json.temp", JSON.stringify(config, null, 4), 'utf8');
} catch (error) {
    return log("CONFIGS", error, "error")
}

//Load all commands, events and more

require("./settings/handle/loader/") ({ Cherry, multiple, config });

//Start Login
log("LOGIN", "Đang tiến hành đăng nhập...", "magenta");

try {
    login({appState: JSON.parse(readFileSync('appstate.json', 'utf8'))}, optionsLogin, (error, api) => {
        log("LOGIN", "Đăng nhập thành công, có thể sử dụng Bot ngay bây giờ.", "magenta")
        try {
            api.listenMqtt((error, event) => {
                try {
                    var handleAll = require("./settings/handle/") ({ Cherry, multiple, api, event });
                    return handleAll(event);
                } catch (error) {
                    return log.event(error.message);
                }
            })
        } catch (error) {
            return log("LOGIN", "Đã có lỗi xảy ra khi đăng nhập, hãy kiểm tra lại tài khoản của bạn và thử lại.\n\n", "error");
        }
    });
} catch (error) {
    log("LOGIN", "Không tìm thấy file 'appstate.json' hoặc file 'appstate.json' trống", "error")
}
