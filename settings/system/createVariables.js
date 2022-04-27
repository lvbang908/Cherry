module.exports = function({ api, Cherry, multiple }) {
    var { workPlace: main } = multiple;
    Cherry.getTime = function getTime(option) {
        var moment = require('moment-timezone');
        switch (option) {
            case "seconds":
            case "s":
                return `${moment.tz("Asia/Ho_Chi_minh").format("ss")}`;
            case "minutes":
            case "m":
                return `${moment.tz("Asia/Ho_Chi_minh").format("mm")}`;
            case "hours":
            case "h":
                return `${moment.tz("Asia/Ho_Chi_minh").format("HH")}`;
            case "date":
            case "d":
                return `${moment.tz("Asia/Ho_Chi_minh").format("DD")}`;
            case "month":
            case "M":
                return `${moment.tz("Asia/Ho_Chi_minh").format("MM")}`;
            case "year":
            case "Y":
                return `${moment.tz("Asia/Ho_Chi_minh").format("YYYY")}`;
            case "fullHour":
            case "FH":
                return `${moment.tz("Asia/Ho_Chi_minh").format("HH:mm:ss")}`;
            case "fullYear":
            case "FY":
                return `${moment.tz("Asia/Ho_Chi_minh").format("DD/MM/YYYY")}`;
            case "fullTime":
            case "FT":
                return `${moment.tz("Asia/Ho_Chi_minh").format("HH:mm:ss DD/MM/YYYY")}`;
        }
    }
    var Threads = require(`${main}/settings/database/threads`) ({ api, Cherry, multiple }),
        Users = require(`${main}/settings/database/users`) ({ api, Cherry, multiple }),
        Others = require(`${main}/settings/database/others`) ({ api, Cherry, multiple });
    var supports = require(`${main}/settings/support/`) ({ api, Cherry, multiple, Threads, Users, Others });
    Object.assign(Cherry, supports);
    require(`${main}/custom`) ({ api, Cherry, multiple, Threads, Users, Others });
    return { Threads, Users, Others };
}