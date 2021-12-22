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

module.exports.run = async function ({ args, api, event, Others, Users, Cherry }) {
    var { threadID, senderID, messageID } = event;
    var mention = Object.keys(event.mentions);
    var othersData = await Others.getAll(["money"]);
    var msg = "", number = 0, allDaiGia = [];
	if (args[0] == "all") {
        for (var i of othersData) {
            var userData = await Users.getData(i.id);
            allDaiGia.push({"ID": i.id, "money": i.money, "name": (userData == "" || userData == undefined || !userData ? i.id : userData.name)});
        }
        allDaiGia.sort((a, b) => b.money - a.money);
        for (const lastData of allDaiGia) {
            number++;
            msg += `Hạng ${number}. ${lastData.name} với ${lastData.money} đô\n`;
        }
        return api.sendMessage(msg, threadID, (error, info) => { Cherry.autoUnsend(info.messageID, 120000) }, messageID);
	} else if (mention[0]) {
        for (var i of othersData) {
            var userData = await Users.getData(i.id);
            allDaiGia.push({"ID": i.id, "money": i.money, "name": (userData == "" || userData == undefined || !userData ? i.id : userData.name)});
        }
        allDaiGia.sort((a, b) => b.money - a.money);
        for (const lastData of allDaiGia) {
            number++;
			for (var i of mention) {
				if (lastData.ID == i) {
                    msg += `${userData.name} đứng hạng ${number} với ${lastData.totalMsg} đô\n`;
                }
			}
		}
        return api.sendMessage(msg, threadID, messageID);
    } else {
        for (var i of othersData) {
            allDaiGia.push({"ID": i.id, "money": i.money});
        }
        allDaiGia.sort((a, b) => b.money - a.money);
        for (const lastData of allDaiGia) {
            number++;
            if (lastData.ID == senderID) return api.sendMessage(`Bạn đứng hạng ${number} với ${lastData.money} đô.`, threadID, messageID);
        }
	}
}