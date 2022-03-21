module.exports.info = {
	name: "daigia",
	version: "1.0.2",
	permissions: 1,
	author: {
		name: "Henry",
		facebook: "https://facebook.com/s2.henry"
	},
	description: {
        long: "Xem số tiền của bản thân, người được tag hoặc tất cả (Miễn là họ có ID trong Data)",
        short: "Xem ai giàu nhất nào?"
    },
	group: "Dành Cho Thành Viên",
	guide: [
		'[Để trống/all/tag]',
	],
	countdown: 20
};

module.exports.run = async function ({ args, api, event, Others, Users, Cherry, Threads }) {
    var { threadID, senderID, messageID } = event;
    var mention = Object.keys(event.mentions);
    var members = (await Threads.getData(threadID)).members;
    var msg = "", number = 0, allDaiGia = [];
	if (args[0] == "all") {
		for (var i of Object.keys(members)) {
            var userMoney = (await Others.getData(i)).money;
            var name = (await Users.getData(i.ID)).name;
            allDaiGia.push({"ID": i, "money": userMoney, "name": name})
        }
        allDaiGia.sort((a, b) => b.money - a.money);
        for (const lastData of allDaiGia) {
            number++;
            msg += `Hạng ${number}. ${userInfo.name} với ${lastData.money} coin.\n`;
        }
        return api.sendMessage(msg, threadID, (error, info) => { Cherry.autoUnsend(info.messageID, 120000) }, messageID);
	} else if (mention[0]) {
		for (var i of Object.keys(members)) {
            var userMoney = (await Others.getData(i)).money;
            var name = (await Users.getData(i)).name;
            allInfo.push({"ID": i.ID, "money": userMoney, "name": name})
        }
        allDaiGia.sort((a, b) => b.money - a.money);
        for (const lastData of allDaiGia) {
            number++;
			for (var i of mention) {
				if (lastData.ID == i) {
                    var userInfo = await Users.getData(i);
                    msg += `${userInfo.name} đứng hạng ${number} với ${lastData.money} coin.\n`;
                }
			}
		}
        return api.sendMessage(msg, threadID, messageID);
    } else {
        for (var i of Object.keys(members)) allDaiGia.push({"ID": i.id, "money": i.money});
        allDaiGia.sort((a, b) => b.money - a.money);
        for (const lastData of allDaiGia) {
            number++;
            if (lastData.ID == senderID) return api.sendMessage(`Bạn đứng hạng ${number} với ${lastData.money} coin.`, threadID, messageID);
        }
	}
    Cherry.commandError(this.info.name, threadID, messageID);
}