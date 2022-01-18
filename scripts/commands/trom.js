module.exports.info = {
	name: "trom",
	version: "1.0.1",
	permissions: 1,
	author: {
		name: "Henry",
		facebook: "https://facebook.com/s2.henry"
	},
	description: {
        long: "Bị bắt hoặc không bị bắt",
        short: "Dám đi trộm không?"
    },
	group: "MiniGame",
	guide: [
		'',
	],
	countdown: 5
};

module.exports.run = async function({ api, event, Others, Threads, Users }) {
    var { threadID, messageID, senderID } = event;
    var threadData = await Threads.getData(threadID);
    var senderData = await Others.getData(senderID);
    if (senderData.timeTrom) {
        if (Date.now() - senderData.timeTrom < 14400000) {
            var time = 14400000 - (Date.now() - senderData.timeTrom),
                hours = Math.floor((time / 60000) / 60),
                minutes = Math.floor((time / 60000) / 24),
                seconds = ((time % 60000) / 1000).toFixed(0);
		    return api.sendMessage(`Bạn vừa đi trộm cách đây không lâu, nếu đi tiếp sẽ bị nghi ngờ và bị bắt.\n\nHãy chờ:${hours < 10 ? (hours > 0 ? " 0" + hours + " giờ" : "") : (hours > 0 ? " " + hours + " giờ" : "")} ${minutes < 10 ? (minutes > 0 ? " 0" + minutes + " phút" : "") : (minutes > 0 ? " " + minutes + " phút" : "")}${seconds < 10 ? (seconds > 0 ? " 0" + seconds + " giây" : "") : (seconds > 0 ? " " + seconds + " giây" : "")} sau rồi đi trộm tiếp nhé`, event.threadID);
        }
    }
    var members = threadData.members, home = [];
    for (var i of Object.keys(members)) {
        if (i != senderID) home.push(i)
    }
    var trom = home[Math.floor(Math.random() * home.length)];
    var tile = Math.floor(Math.random() * 2 + 1);
    var info = await Others.getData(trom);
    var name = ((await Users.getData(trom)).name || trom);
    function randomMoney(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    if (info.money < 100) return api.sendMessage(`Bạn đã vào nhà của ${name}, nhưng ${name} nghèo rớt mồng tơi. Bạn quay về với 2 bàn tay trắng.`, threadID, messageID);
    if (tile == 1) {
        var random = randomMoney(1000, senderData.money);
        senderData.money = senderData.money - random;
        senderData.timeTrom = Date.now();
        info.money = info.money + random;
        await Others.setData(trom, info);
        await Others.setData(senderID, senderData);
        return api.sendMessage(`Bạn vào nhà của ${name} và bị bắt trong lúc đang trộm tiền. Bạn bị phạt ${random} đô.`, threadID, messageID);
    } else {
        var random = randomMoney(1000, info.money);
        info.money = info.money - random;
        senderData.timeTrom = Date.now();
        senderData.money = senderData.money + random;
        await Others.setData(senderID, senderData);
        await Others.setData(trom, info)
        return api.sendMessage(`Bạn đã rình lúc ${name} không có nhà và đột nhập. Bạn trộm được ${random} đô.`, threadID, messageID);
    }
}
