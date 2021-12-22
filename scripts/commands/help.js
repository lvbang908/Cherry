module.exports.info = {
	name: "help",
    version: "1.0.0",
    permissions: 1,
    author: {
        name: "Henry",
        facebook: "https://facebook.com/s2.henry"
    },
	description: {
        long: "Chi tiết về tất cả các lệnh của Bot hiện tại có thể sử dụng",
        short: "Xem chi tiết về lệnh"
    },
	group: "Tools",
	guide: [
		'',
	],
	countdown: 5,
    require: {
        "fs-extra": ""
    }
};

module.exports.handleEvents = function ({ api, event, Threads, multiple, Cherry }) {
    var { threadID, messageID, body } = event;
    if (!body) return;
    async function helpNoPrefix() {
        var { allCommands, commandsHide } = multiple;
        const splitBody = body.slice(body.indexOf("help")).trim().split(/\s+/);
        if (splitBody.length == 1 || !allCommands.has(splitBody[1].toLowerCase())) return;
        const threadInfo = await Threads.getData(threadID);
        const command = allCommands.get(splitBody[1].toLowerCase());
        for (var name of commandsHide) if (command.info.name == name) return;
        const prefix = threadInfo.prefix ? threadInfo.Prefix : Cherry.configs.prefix;
        var msg = `🔎 Tên Lệnh: ${command.info.name}\n\n© Tác Giả: ${command.info.author.name}\n🔗 Facebook: ${command.info.author.facebook}\n\n` +
        `📜 Chi Tiết: ${command.info.description.long ? command.info.description.long : (command.info.description.short ? command.info.description.short : "null")}\n` +
        `📄 Cách Dùng: ${prefix}${command.info.name} ${(command.info.guide ? command.info.guide : "")}\n📗 Nhóm Lệnh: ${command.info.group}\n` +
        `⏳ Thời Gian Chờ: ${command.info.countdown} giây/người\n` +
        `✊ Quyền Hạn: ${((command.info.permissions == 1) ? "Người dùng trở lên." : (command.info.permissions == 2) ? "Quản trị viên trở lên" : "Quản lí Bot" )}`
        return api.sendMessage(msg, threadID, (error, info) => Cherry.autoUnsend(info.messageID, 180000), messageID)
    }
    async function viewPrefix() {
        var { prefix } = await Threads.getData(threadID);
        var msg = `Bạn có thể dùng prefix này: ${prefix ? prefix : Cherry.configs.prefix}`
        return api.sendMessage(msg, threadID);
    }

    if (body.indexOf("help") == 0 || body.indexOf("Help") == 0) helpNoPrefix();
    else if (body.indexOf("prefix") == 0 || body.indexOf("Prefix") == 0) viewPrefix();
    else return;
}

module.exports.run = async function({ api, event, args, multiple, Threads, Cherry }) {
	const { allCommands, commandsHide } = multiple;
	const { threadID, messageID } = event;
	var command = allCommands.get((args[0] || "").toLowerCase());
	const threadInfo = await Threads.getData(threadID);
    const prefix = threadInfo.prefix ? threadInfo.prefix : Cherry.configs.prefix;
    var string = ">====================<\n"
	if (!command || !args[0]) {
        var pageNumber = parseInt(args[0]) || 1, msg = string, thisPage = 20, infoCommands = [], number;
        for (var [key, value] of allCommands) {
            for (var name of commandsHide) {
                if (key == name) continue;
                else {
                    var i = `${key}   👉   ${value.info.description.short ? value.info.description.short : "Không có mô tả"}`;
                    infoCommands.push(i)
                }
            }
        }
        var slicePage = thisPage * pageNumber - thisPage, number = slicePage;
        var getPage = infoCommands.slice(slicePage, slicePage + thisPage);
        
        for (var i of getPage) {
            msg += `${number++}. ${i}\n`
        }
        msg += `${string}📜 Trang: ${pageNumber}/${(multiple.allCommands.size/20).toFixed()}\n🍀 Có ${multiple.allCommands.size - commandsHide.length} lệnh có thể sử dụng.\n${string}⌨️Gửi ${prefix}help [số trang] để xem danh sách lệnh tại trang đó.\n⌨️Gửi ${prefix}help [tên lệnh] để xem chi tiết cách sử dụng lệnh.`
        return api.sendMessage(msg, threadID, (error, info) => Cherry.autoUnsend(info.messageID, 120000));
    }
	var msg = `🔎 Tên Lệnh: ${command.info.name}\n\n© Tác Giả: ${command.info.author.name}\n🔗 Facebook: ${command.info.author.facebook}\n\n` +
        `📜 Chi Tiết: ${command.info.description.long ? command.info.description.long : (command.info.description.short ? command.info.description.short : "null")}\n` +
        `📄 Cách Dùng: ${prefix}${command.info.name} ${(command.info.guide ? command.info.guide : "")}\n📗 Nhóm Lệnh: ${command.info.group}\n` +
        `⏳ Thời Gian Chờ: ${command.info.countdown} giây/người\n` +
        `✊ Quyền Hạn: ${((command.info.permissions == 1) ? "Người dùng trở lên." : (command.info.permissions == 2) ? "Quản trị viên trở lên" : "Quản lí Bot" )}`
    return api.sendMessage(msg, threadID, (error, info) => Cherry.autoUnsend(info.messageID, 180000), messageID)
}