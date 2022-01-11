module.exports.info = {
	name: "money",
    version: "1.0.1",
    permissions: 1,
    author: {
        name: "Henry",
        facebook: "https://facebook.com/s2.henry"
    },
	description: {
        long: "Kiểm tra số tiền của bản thân hoặc người được tag",
        short: "Kiểm tra tiền"
    },
	group: "Dành Cho Thành Viên",
	guide: [
		'[Để trống/tag 1 hoặc nhiều người]',
	],
	countdown: 5
};

module.exports.run = async function({ api, event, args, Others, Cherry }) {
	const { threadID, messageID, senderID, mentions } = event;

	if (!args[0]) {
		const userInfo = await Others.getData(senderID);
		return api.sendMessage(`Số tiền bạn hiện đang có: ${userInfo.money} đô`, threadID, messageID);
	} else if (Object.keys(event.mentions).length == 1) {
		var mention = Object.keys(mentions)[0];
		const userInfo = await Others.getData(mention);
		return api.sendMessage({
			body: `Số tiền của ${mentions[mention].replace("@", "")} hiện đang có là: ${userInfo.money} coin.`,
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID);
	} else if (Object.keys(event.mentions).length > 1) {
		const mention = Object.keys(mentions);
		var msg = "";
		for (const value of mention) {
			var userInfo = await Others.getData(value);
			msg += (` - ${mentions[value].replace("@", "")}: ${userInfo.money} coin\n`);
		};
		return api.sendMessage(`Số tiền của thành viên: \n${msg}`, threadID, messageID);
	} else return Cherry.error(this.config.name, threadID, messageID, api);
}
