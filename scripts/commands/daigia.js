module.exports.info = {
	name: "daigia",
	version: "1.0.1",
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
            allDaiGia.push({"ID": i, "money": userMoney})
        }
        allDaiGia.sort((a, b) => b.money - a.money);
        for (const lastData of allDaiGia) {
            var userInfo = await Users.getData(lastData.ID) || await Users.getInfo(lastData.ID);
            number++;
            msg += `Hạng ${number}. ${userInfo.name ? userInfo.name : userInfo[lastData.ID].name} với ${lastData.money} đô \n`;
        }
        return api.sendMessage(msg, threadID, (error, info) => { Cherry.autoUnsend(info.messageID, 120000) }, messageID);
	} else if (mention[0]) {
		for (var i of Object.keys(members)) {
            var userMoney = (await Others.getData(i)).money;
            allInfo.push({"ID": i.ID, "money": userMoney})
        }
        allDaiGia.sort((a, b) => b.money - a.money);
        for (const lastData of allDaiGia) {
            number++;
			for (var i of mention) {
				if (lastData.ID == i) {
                    var userInfo = await Users.getData(i) || await Users.getInfo(i);
                    msg += `${userInfo.name ? userInfo.name : userInfo[i].name} đứng hạng ${number} với ${lastData.money} đô\n`;
                }
			}
		}
        return api.sendMessage(msg, threadID, messageID);
    } else {
        for (var i of Object.keys(members)) {
            allDaiGia.push({"ID": i.id, "money": i.money});
        }
        allDaiGia.sort((a, b) => b.money - a.money);
        for (const lastData of allDaiGia) {
            number++;
            if (lastData.ID == senderID) return api.sendMessage(`Bạn đứng hạng ${number} với ${lastData.money} đô.`, threadID, messageID);
        }
	}
    Cherry.commandError(this.info.name, threadID, messageID);
}